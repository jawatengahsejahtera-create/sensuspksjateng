import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink, Building2, MapPin, Users, CheckCircle } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  dpdList,
  getAllDPC,
  getAllDPRA,
  getDPCByDPD,
  formatWhatsAppLink,
  getStatistics,
  type DPRA,
  type DPC,
} from "@/data/dpcDpraData";

export default function TrackingPengurus() {
  const [selectedDPD, setSelectedDPD] = useState<string>("all");
  const [selectedDPC, setSelectedDPC] = useState<string>("all");
  const [selectedDPRA, setSelectedDPRA] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const stats = getStatistics();

  // Get DPC list based on selected DPD
  const filteredDPCList = useMemo(() => {
    if (selectedDPD === "all") return getAllDPC();
    return getDPCByDPD(selectedDPD);
  }, [selectedDPD]);

  // Get DPRA list based on filters
  const filteredDPRAList = useMemo(() => {
    let list = getAllDPRA();

    if (selectedDPD !== "all") {
      const dpd = dpdList.find((d) => d.nama === selectedDPD);
      if (dpd) {
        const dpcKodes = dpd.dpcList.map((dpc) => dpc.kode);
        list = list.filter((dpra) =>
          dpcKodes.some((kode) => dpra.kode.startsWith(kode))
        );
      }
    }

    if (selectedDPC !== "all") {
      list = list.filter((dpra) => dpra.kode.startsWith(selectedDPC));
    }

    if (selectedDPRA !== "all") {
      list = list.filter((dpra) => dpra.kode === selectedDPRA);
    }

    return list;
  }, [selectedDPD, selectedDPC, selectedDPRA]);

  // Get unique DPRA list for dropdown based on current filters
  const dpraDropdownList = useMemo(() => {
    let list = getAllDPRA();
    
    if (selectedDPD !== "all") {
      const dpd = dpdList.find((d) => d.nama === selectedDPD);
      if (dpd) {
        const dpcKodes = dpd.dpcList.map((dpc) => dpc.kode);
        list = list.filter((dpra) =>
          dpcKodes.some((kode) => dpra.kode.startsWith(kode))
        );
      }
    }

    if (selectedDPC !== "all") {
      list = list.filter((dpra) => dpra.kode.startsWith(selectedDPC));
    }

    return list;
  }, [selectedDPD, selectedDPC]);

  // Pie chart data for Kecamatan
  const kecamatanPieData = useMemo(() => {
    return [
      { name: "ADA PENGURUS", value: stats.kecamatanDenganPengurus, color: "#f97316" },
      { name: "KOSONG", value: stats.kecamatanKosong, color: "#94a3b8" },
    ];
  }, [stats]);

  // Pie chart data for Desa
  const desaPieData = useMemo(() => {
    return [
      { name: "ADA PENGURUS", value: stats.desaDenganPengurus, color: "#f97316" },
      { name: "KOSONG", value: stats.desaKosong, color: "#94a3b8" },
    ];
  }, [stats]);

  // Bar chart data for comparison
  const barChartData = useMemo(() => {
    return [
      {
        name: "Kecamatan",
        "Ada Pengurus": stats.kecamatanDenganPengurus,
        "Kosong": stats.kecamatanKosong,
      },
      {
        name: "Desa/Kelurahan",
        "Ada Pengurus": stats.desaDenganPengurus,
        "Kosong": stats.desaKosong,
      },
    ];
  }, [stats]);

  // Get parent DPC and DPD info for each DPRA
  const getDPRAParentInfo = (dpra: DPRA) => {
    for (const dpd of dpdList) {
      for (const dpc of dpd.dpcList) {
        if (dpra.kode.startsWith(dpc.kode)) {
          return { dpd: dpd.nama, dpc: dpc.nama };
        }
      }
    }
    return { dpd: "-", dpc: "-" };
  };

  // Pagination
  const totalPages = Math.ceil(filteredDPRAList.length / itemsPerPage);
  const paginatedData = filteredDPRAList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Google Maps embed URL for Jawa Tengah with markers
  const mapEmbedUrl = useMemo(() => {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2027587.0076538483!2d108.92039547500002!3d-7.150975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b3d02c80c5b%3A0x9a20b547dcfbde00!2sJawa%20Tengah!5e0!3m2!1sid!2sid!4v1705000000000!5m2!1sid!2sid`;
  }, []);

  return (
    <div className="space-y-6">
      {/* Summary Stats Cards - Row pertama */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none">
          <CardContent className="py-4 px-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium opacity-80">TOTAL KECAMATAN</p>
                <p className="text-2xl font-bold">{stats.totalKecamatan.toLocaleString('id-ID')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-none">
          <CardContent className="py-4 px-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium opacity-80">KECAMATAN DENGAN PENGURUS</p>
                <p className="text-2xl font-bold">{stats.kecamatanDenganPengurus.toLocaleString('id-ID')}</p>
                <p className="text-xs opacity-80">({stats.persentaseKecamatanTerisi}%)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none">
          <CardContent className="py-4 px-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium opacity-80">TOTAL DESA/KELURAHAN</p>
                <p className="text-2xl font-bold">{stats.totalDesa.toLocaleString('id-ID')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-none">
          <CardContent className="py-4 px-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium opacity-80">DESA DENGAN PENGURUS</p>
                <p className="text-2xl font-bold">{stats.desaDenganPengurus.toLocaleString('id-ID')}</p>
                <p className="text-xs opacity-80">({stats.persentaseDesaTerisi}%)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section - Grafik Kecamatan dan Desa */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grafik Kecamatan */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 text-center">
              GRAFIK PENGURUS KECAMATAN (DPC)
            </h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={kecamatanPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
                    labelLine={false}
                  >
                    {kecamatanPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number, name: string) => [value.toLocaleString('id-ID'), name]}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    formatter={(value) => <span className="text-sm">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-orange-500">{stats.kecamatanDenganPengurus}</span> dari <span className="font-semibold">{stats.totalKecamatan}</span> kecamatan memiliki pengurus
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Grafik Desa */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 text-center">
              GRAFIK PENGURUS DESA/KELURAHAN (DPRA)
            </h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={desaPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
                    labelLine={false}
                  >
                    {desaPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number, name: string) => [value.toLocaleString('id-ID'), name]}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    formatter={(value) => <span className="text-sm">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-orange-500">{stats.desaDenganPengurus.toLocaleString('id-ID')}</span> dari <span className="font-semibold">{stats.totalDesa.toLocaleString('id-ID')}</span> desa memiliki pengurus
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bar Chart Comparison */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4 text-center">
            PERBANDINGAN STATUS PENGURUS DPC & DPRA JAWA TENGAH
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData} layout="vertical" margin={{ left: 80 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(value) => value.toLocaleString('id-ID')} />
                <YAxis type="category" dataKey="name" />
                <Tooltip formatter={(value: number) => value.toLocaleString('id-ID')} />
                <Legend />
                <Bar dataKey="Ada Pengurus" fill="#f97316" radius={[0, 4, 4, 0]} />
                <Bar dataKey="Kosong" fill="#94a3b8" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Filter Section */}
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-0">
          <h2 className="text-lg font-semibold mb-4 text-foreground">FILTER PENCARIAN DATA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select 
              value={selectedDPD} 
              onValueChange={(val) => {
                setSelectedDPD(val);
                setSelectedDPC("all");
                setSelectedDPRA("all");
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-full bg-background">
                <SelectValue placeholder="Kabupaten/Kota" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kabupaten/Kota</SelectItem>
                {dpdList.map((dpd) => (
                  <SelectItem key={dpd.kode} value={dpd.nama}>
                    {dpd.nama}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              value={selectedDPC} 
              onValueChange={(val) => {
                setSelectedDPC(val);
                setSelectedDPRA("all");
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-full bg-background">
                <SelectValue placeholder="Kecamatan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kecamatan</SelectItem>
                {filteredDPCList.map((dpc) => (
                  <SelectItem key={dpc.kode} value={dpc.kode}>
                    {dpc.nama}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              value={selectedDPRA} 
              onValueChange={(val) => {
                setSelectedDPRA(val);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-full bg-background">
                <SelectValue placeholder="Desa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Desa</SelectItem>
                {dpraDropdownList.map((dpra) => (
                  <SelectItem key={dpra.kode} value={dpra.kode}>
                    {dpra.nama}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table Section */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">
            TABEL DATA PENGURUS RANTING
          </h3>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader className="bg-orange-500">
                <TableRow>
                  <TableHead className="text-white font-semibold w-[50px]">#</TableHead>
                  <TableHead className="text-white font-semibold">Kabupaten/Kota</TableHead>
                  <TableHead className="text-white font-semibold">Kecamatan</TableHead>
                  <TableHead className="text-white font-semibold">Desa</TableHead>
                  <TableHead className="text-white font-semibold">Nama Ketua</TableHead>
                  <TableHead className="text-white font-semibold">No WA Ketua</TableHead>
                  <TableHead className="text-white font-semibold">Status Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      Tidak ada data yang ditemukan
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedData.map((dpra, index) => {
                    const parentInfo = getDPRAParentInfo(dpra);
                    return (
                      <TableRow key={dpra.kode} className="hover:bg-muted/50">
                        <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}.</TableCell>
                        <TableCell>{parentInfo.dpd}</TableCell>
                        <TableCell>{parentInfo.dpc}</TableCell>
                        <TableCell>{dpra.nama}</TableCell>
                        <TableCell>{dpra.ketua.nama || <span className="text-muted-foreground">-</span>}</TableCell>
                        <TableCell>
                          {dpra.ketua.noHp ? (
                            <a
                              href={formatWhatsAppLink(dpra.ketua.noHp)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center gap-1"
                            >
                              {dpra.ketua.noHp}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            dpra.statusPendataan === "Terisi Penuh" 
                              ? "bg-orange-500 text-white" 
                              : dpra.statusPendataan === "Sebagian Terisi"
                              ? "bg-orange-500 text-white"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {dpra.statusPendataan === "Terisi Penuh" || dpra.statusPendataan === "Sebagian Terisi"
                              ? "ADA PENGURUS"
                              : "KOSONG"}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-end gap-2 mt-4">
              <span className="text-sm text-muted-foreground">
                {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredDPRAList.length)} / {filteredDPRAList.length}
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-2 py-1 text-sm border rounded disabled:opacity-50 hover:bg-muted"
                >
                  «
                </button>
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1 text-sm border rounded disabled:opacity-50 hover:bg-muted"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 text-sm border rounded disabled:opacity-50 hover:bg-muted"
                >
                  ›
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 text-sm border rounded disabled:opacity-50 hover:bg-muted"
                >
                  »
                </button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Map Section */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">
            PETA LOKASI PENGURUS
          </h3>
          <div className="w-full h-[400px] rounded-md overflow-hidden border">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Pengurus PKS Jawa Tengah"
            />
          </div>
          <div className="flex items-center gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-orange-500"></span>
              <span>ADA PENGURUS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-slate-400"></span>
              <span>KOSONG</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
