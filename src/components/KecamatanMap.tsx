import { useEffect, useRef, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { kecamatanData, kabupatenCoordinates, type KecamatanCoord } from "@/data/kecamatanCoordinates";
import { getAllDPC, type DPC } from "@/data/dpcDpraData";

interface KecamatanMapProps {
  selectedDPD: string;
  selectedDPC: string;
}

// Jawa Tengah center
const JATENG_CENTER: [number, number] = [-7.15, 110.14];
const JATENG_ZOOM = 8;
const KABUPATEN_ZOOM = 10;
const KECAMATAN_ZOOM = 13;

export default function KecamatanMap({ selectedDPD, selectedDPC }: KecamatanMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  // Get DPC data to check pengurus status
  const dpcList = useMemo(() => getAllDPC(), []);

  // Check if kecamatan has pengurus based on DPC data
  const checkHasPengurus = (kode: string): boolean => {
    const dpc = dpcList.find(d => d.kode === kode);
    if (!dpc) return false;
    // Check if any DPRA has pengurus
    return dpc.dpraList.some(dpra => 
      dpra.ketua.nama !== "" || 
      dpra.sekretaris.nama !== "" || 
      dpra.bendahara.nama !== ""
    );
  };

  // Filter kecamatan based on selection - ALWAYS use all 573 data points
  const filteredKecamatan = useMemo(() => {
    // Pastikan data ada
    if (!kecamatanData || kecamatanData.length === 0) {
      console.warn("kecamatanData is empty or undefined");
      return [];
    }
    
    let data = [...kecamatanData]; // Clone array untuk safety
    
    if (selectedDPD !== "all") {
      data = data.filter(k => k.kabupaten === selectedDPD);
    }
    
    if (selectedDPC !== "all") {
      data = data.filter(k => k.kode === selectedDPC);
    }

    // Update pengurus status
    return data.map(k => ({
      ...k,
      adaPengurus: checkHasPengurus(k.kode)
    }));
  }, [selectedDPD, selectedDPC, dpcList]);

  // Calculate map center and zoom based on selection
  const mapViewSettings = useMemo(() => {
    if (selectedDPC !== "all") {
      const kec = kecamatanData.find(k => k.kode === selectedDPC);
      if (kec) {
        return { center: [kec.lat, kec.lng] as [number, number], zoom: KECAMATAN_ZOOM };
      }
    }
    
    if (selectedDPD !== "all") {
      const kabCoord = kabupatenCoordinates[selectedDPD];
      if (kabCoord) {
        return { center: [kabCoord.lat, kabCoord.lng] as [number, number], zoom: KABUPATEN_ZOOM };
      }
    }
    
    return { center: JATENG_CENTER, zoom: JATENG_ZOOM };
  }, [selectedDPD, selectedDPC]);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView(JATENG_CENTER, JATENG_ZOOM);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRef.current);

    markersLayerRef.current = L.layerGroup().addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update markers when filter changes
  useEffect(() => {
    if (!mapRef.current || !markersLayerRef.current) return;

    // Clear existing markers
    markersLayerRef.current.clearLayers();

    // Add markers for filtered kecamatan
    filteredKecamatan.forEach(kec => {
      const color = kec.adaPengurus ? "#22c55e" : "#ef4444"; // green for ada pengurus, red for kosong
      
      const circleMarker = L.circleMarker([kec.lat, kec.lng], {
        radius: selectedDPC !== "all" ? 12 : selectedDPD !== "all" ? 8 : 6,
        fillColor: color,
        color: "#ffffff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
      });

      const popupContent = `
        <div style="min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; font-weight: 600; font-size: 14px;">${kec.nama}</h3>
          <p style="margin: 0 0 4px 0; font-size: 12px; color: #666;">${kec.kabupaten}</p>
          <p style="margin: 0; font-size: 12px;">
            Status: <span style="font-weight: 600; color: ${kec.adaPengurus ? '#22c55e' : '#ef4444'};">
              ${kec.adaPengurus ? 'Ada Pengurus' : 'Belum Ada Pengurus'}
            </span>
          </p>
        </div>
      `;

      circleMarker.bindPopup(popupContent);
      circleMarker.addTo(markersLayerRef.current!);
    });

    // Animate to new view
    mapRef.current.flyTo(mapViewSettings.center, mapViewSettings.zoom, {
      duration: 1.5
    });

  }, [filteredKecamatan, mapViewSettings, selectedDPD, selectedDPC]);

  // Statistics for legend
  const stats = useMemo(() => {
    const adaPengurus = filteredKecamatan.filter(k => k.adaPengurus).length;
    const tidakAda = filteredKecamatan.length - adaPengurus;
    return { adaPengurus, tidakAda, total: filteredKecamatan.length };
  }, [filteredKecamatan]);

  return (
    <div className="relative">
      <div 
        ref={mapContainerRef} 
        className="w-full h-[500px] rounded-lg overflow-hidden"
        style={{ zIndex: 1 }}
      />
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg z-[1000]">
        <h4 className="font-semibold text-sm mb-3">Keterangan ({stats.total} Kecamatan)</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow"></div>
            <span className="text-xs">Ada Pengurus ({stats.adaPengurus})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow"></div>
            <span className="text-xs">Belum Ada Pengurus ({stats.tidakAda})</span>
          </div>
        </div>
      </div>

      {/* Current View Info */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-[1000]">
        <p className="text-sm font-medium">
          {selectedDPC !== "all" 
            ? filteredKecamatan[0]?.nama || "Kecamatan" 
            : selectedDPD !== "all" 
              ? selectedDPD 
              : "Jawa Tengah"}
        </p>
      </div>
    </div>
  );
}
