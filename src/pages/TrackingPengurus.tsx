import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  MapPin,
  Phone,
  User,
  Building2,
  Users,
  ChevronRight,
  ExternalLink,
  Filter,
} from "lucide-react";
import {
  dpdList,
  getAllDPC,
  getAllDPRA,
  getDPCByDPD,
  getStatusColor,
  formatWhatsAppLink,
  generateMapsLink,
  getStatistics,
  type DPC,
  type DPRA,
  type Pengurus,
} from "@/data/dpcDpraData";

export default function TrackingPengurus() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDPD, setSelectedDPD] = useState<string>("all");
  const [selectedDPC, setSelectedDPC] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedDPRA, setSelectedDPRA] = useState<DPRA | null>(null);
  const [selectedDPCDetail, setSelectedDPCDetail] = useState<DPC | null>(null);
  const [activeTab, setActiveTab] = useState("dpc");

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

    if (statusFilter !== "all") {
      list = list.filter((dpra) => dpra.statusPendataan === statusFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      list = list.filter(
        (dpra) =>
          dpra.nama.toLowerCase().includes(query) ||
          dpra.ketua.nama.toLowerCase().includes(query) ||
          dpra.sekretaris.nama.toLowerCase().includes(query) ||
          dpra.bendahara.nama.toLowerCase().includes(query)
      );
    }

    return list;
  }, [selectedDPD, selectedDPC, statusFilter, searchQuery]);

  // Filter DPC list by search
  const searchedDPCList = useMemo(() => {
    if (!searchQuery) return filteredDPCList;
    const query = searchQuery.toLowerCase();
    return filteredDPCList.filter(
      (dpc) =>
        dpc.nama.toLowerCase().includes(query) ||
        dpc.dpd.toLowerCase().includes(query)
    );
  }, [filteredDPCList, searchQuery]);

  const renderPengurusInfo = (pengurus: Pengurus, role: string) => {
    if (!pengurus.nama) {
      return (
        <div className="text-muted-foreground text-sm italic">
          Data {role} belum tersedia
        </div>
      );
    }

    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-primary" />
          <span className="font-medium">{pengurus.nama}</span>
        </div>
        {pengurus.noHp && (
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a
              href={formatWhatsAppLink(pengurus.noHp)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              {pengurus.noHp}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        )}
        {pengurus.alamat && (
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <span className="text-sm text-muted-foreground">{pengurus.alamat}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Tracking Pengurus DPC & DPRA
        </h1>
        <p className="text-muted-foreground">
          Data pengurus PKS tingkat Kecamatan (DPC) dan Kelurahan/Desa (DPRA)
          Jawa Tengah
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">{stats.totalDPD}</div>
            <p className="text-xs text-muted-foreground">Kab/Kota</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-blue-600">{stats.totalDPC}</div>
            <p className="text-xs text-muted-foreground">DPC (Kecamatan)</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-purple-600">{stats.totalDPRA}</div>
            <p className="text-xs text-muted-foreground">DPRA (Kel/Desa)</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-green-600">{stats.terisiPenuh}</div>
            <p className="text-xs text-muted-foreground">Terisi Penuh</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-yellow-600">{stats.sebagianTerisi}</div>
            <p className="text-xs text-muted-foreground">Sebagian Terisi</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-red-600">{stats.kosong}</div>
            <p className="text-xs text-muted-foreground">Kosong</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-emerald-600">{stats.persentaseTerisi}%</div>
            <p className="text-xs text-muted-foreground">Terisi</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari nama kecamatan, kelurahan, atau pengurus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDPD} onValueChange={(val) => {
              setSelectedDPD(val);
              setSelectedDPC("all");
            }}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Pilih Kabupaten/Kota" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kab/Kota</SelectItem>
                {dpdList.map((dpd) => (
                  <SelectItem key={dpd.kode} value={dpd.nama}>
                    {dpd.nama}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDPC} onValueChange={setSelectedDPC}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Pilih Kecamatan" />
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
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="Terisi Penuh">Terisi Penuh</SelectItem>
                <SelectItem value="Sebagian Terisi">Sebagian Terisi</SelectItem>
                <SelectItem value="Kosong">Kosong</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for DPC and DPRA */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="dpc" className="gap-2">
            <Building2 className="h-4 w-4" />
            DPC (Kecamatan)
          </TabsTrigger>
          <TabsTrigger value="dpra" className="gap-2">
            <Users className="h-4 w-4" />
            DPRA (Kel/Desa)
          </TabsTrigger>
        </TabsList>

        {/* DPC Tab */}
        <TabsContent value="dpc">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Daftar DPC (Tingkat Kecamatan)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60px]">No</TableHead>
                      <TableHead>Kode</TableHead>
                      <TableHead>Nama Kecamatan</TableHead>
                      <TableHead>Kabupaten/Kota</TableHead>
                      <TableHead>Jumlah DPRA</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {searchedDPCList.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          Tidak ada data yang ditemukan
                        </TableCell>
                      </TableRow>
                    ) : (
                      searchedDPCList.map((dpc, index) => (
                        <TableRow key={dpc.kode} className="cursor-pointer hover:bg-muted/50">
                          <TableCell>{index + 1}</TableCell>
                          <TableCell className="font-mono text-xs">{dpc.kode}</TableCell>
                          <TableCell className="font-medium">{dpc.nama}</TableCell>
                          <TableCell>{dpc.dpd}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{dpc.dpraList.length} DPRA</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setSelectedDPCDetail(dpc)}
                              >
                                Detail
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                asChild
                              >
                                <a
                                  href={generateMapsLink(dpc.koordinat, dpc.nama + ", " + dpc.dpd)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <MapPin className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DPRA Tab */}
        <TabsContent value="dpra">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Daftar DPRA (Tingkat Kelurahan/Desa)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60px]">No</TableHead>
                      <TableHead>Kode</TableHead>
                      <TableHead>Nama Kel/Desa</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ketua</TableHead>
                      <TableHead>No. HP Ketua</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDPRAList.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                          Tidak ada data yang ditemukan
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredDPRAList.slice(0, 100).map((dpra, index) => (
                        <TableRow key={dpra.kode} className="cursor-pointer hover:bg-muted/50">
                          <TableCell>{index + 1}</TableCell>
                          <TableCell className="font-mono text-xs">{dpra.kode}</TableCell>
                          <TableCell className="font-medium">{dpra.nama}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(dpra.statusPendataan)} variant="outline">
                              {dpra.statusPendataan}
                            </Badge>
                          </TableCell>
                          <TableCell>{dpra.ketua.nama || "-"}</TableCell>
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
                              "-"
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedDPRA(dpra)}
                            >
                              Detail
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
              {filteredDPRAList.length > 100 && (
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Menampilkan 100 dari {filteredDPRAList.length} data. Gunakan filter untuk mempersempit pencarian.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* DPRA Detail Dialog */}
      <Dialog open={!!selectedDPRA} onOpenChange={() => setSelectedDPRA(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Detail DPRA {selectedDPRA?.nama}
            </DialogTitle>
          </DialogHeader>
          {selectedDPRA && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Kode</p>
                  <p className="font-mono">{selectedDPRA.kode}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge className={getStatusColor(selectedDPRA.statusPendataan)} variant="outline">
                    {selectedDPRA.statusPendataan}
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  asChild
                >
                  <a
                    href={generateMapsLink("", selectedDPRA.nama + ", Jawa Tengah")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <MapPin className="h-4 w-4" />
                    Lihat di Maps
                  </a>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-primary">Ketua</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {renderPengurusInfo(selectedDPRA.ketua, "Ketua")}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-blue-600">Sekretaris</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {renderPengurusInfo(selectedDPRA.sekretaris, "Sekretaris")}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-green-600">Bendahara</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {renderPengurusInfo(selectedDPRA.bendahara, "Bendahara")}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* DPC Detail Dialog */}
      <Dialog open={!!selectedDPCDetail} onOpenChange={() => setSelectedDPCDetail(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Detail DPC {selectedDPCDetail?.nama}
            </DialogTitle>
          </DialogHeader>
          {selectedDPCDetail && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Kode</p>
                  <p className="font-mono">{selectedDPCDetail.kode}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Kabupaten/Kota</p>
                  <p>{selectedDPCDetail.dpd}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Jumlah DPRA</p>
                  <Badge variant="secondary">{selectedDPCDetail.dpraList.length} Kel/Desa</Badge>
                </div>
                <Button
                  variant="outline"
                  asChild
                >
                  <a
                    href={generateMapsLink(selectedDPCDetail.koordinat, selectedDPCDetail.nama + ", " + selectedDPCDetail.dpd)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <MapPin className="h-4 w-4" />
                    Lihat di Maps
                  </a>
                </Button>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Daftar DPRA di Kecamatan {selectedDPCDetail.nama}</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Nama Kel/Desa</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ketua</TableHead>
                        <TableHead>No. HP</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedDPCDetail.dpraList.map((dpra, index) => (
                        <TableRow key={dpra.kode}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell className="font-medium">{dpra.nama}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(dpra.statusPendataan)} variant="outline">
                              {dpra.statusPendataan}
                            </Badge>
                          </TableCell>
                          <TableCell>{dpra.ketua.nama || "-"}</TableCell>
                          <TableCell>
                            {dpra.ketua.noHp ? (
                              <a
                                href={formatWhatsAppLink(dpra.ketua.noHp)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {dpra.ketua.noHp}
                              </a>
                            ) : (
                              "-"
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
