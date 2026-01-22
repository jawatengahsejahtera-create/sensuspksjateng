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
import { ExternalLink } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
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

  // Pie chart data
  const pieData = useMemo(() => {
    const kosong = filteredDPRAList.filter(d => d.statusPendataan === "Kosong").length;
    const adaPengurus = filteredDPRAList.filter(d => d.statusPendataan !== "Kosong").length;
    
    return [
      { name: "KOSONG", value: kosong, color: "#3b82f6" },
      { name: "ADA PENGURUS", value: adaPengurus, color: "#f97316" },
    ];
  }, [filteredDPRAList]);

  // Calculate percentages for pie chart
  const total = pieData[0].value + pieData[1].value;
  const kosongPercentage = total > 0 ? ((pieData[0].value / total) * 100).toFixed(1) : "0";
  const adaPengurusPercentage = total > 0 ? ((pieData[1].value / total) * 100).toFixed(1) : "0";

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
    // Create a basic map centered on Jawa Tengah
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2027587.0076538483!2d108.92039547500002!3d-7.150975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b3d02c80c5b%3A0x9a20b547dcfbde00!2sJawa%20Tengah!5e0!3m2!1sid!2sid!4v1705000000000!5m2!1sid!2sid`;
  }, []);

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-0">
          <h2 className="text-lg font-semibold mb-4 text-foreground">FILTER PENCARIAN</h2>
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

      {/* Stats Section with Pie Chart and Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">
              PRESENTASE JUMLAH RANTING
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={100}
                    paddingAngle={0}
                    dataKey="value"
                    label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
                    labelLine={false}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number, name: string) => [value, name]}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    formatter={(value) => <span className="text-sm">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="flex flex-col gap-4 justify-center">
          <Card className="bg-orange-500 text-white">
            <CardContent className="py-6">
              <p className="text-sm font-medium opacity-90">JUMLAH KECAMATAN</p>
              <p className="text-4xl font-bold">{stats.totalDPC}</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-500 text-white">
            <CardContent className="py-6">
              <p className="text-sm font-medium opacity-90">JUMLAH DESA</p>
              <p className="text-4xl font-bold">{stats.totalDPRA.toLocaleString('id-ID')}</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-500 text-white">
            <CardContent className="py-6">
              <p className="text-sm font-medium opacity-90">JUMLAH RANTING</p>
              <p className="text-4xl font-bold">{stats.terisiPenuh + stats.sebagianTerisi}</p>
            </CardContent>
          </Card>
        </div>
      </div>

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
                        <TableCell>{dpra.ketua.nama || <span className="text-muted-foreground">null</span>}</TableCell>
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
                            <span className="text-muted-foreground">null</span>
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
              <span className="w-4 h-4 rounded-full bg-blue-500"></span>
              <span>KOSONG</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-orange-500"></span>
              <span>ADA PENGURUS</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
