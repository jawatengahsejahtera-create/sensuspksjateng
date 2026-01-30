import { useState, useMemo } from "react";
import { Search, Users, MapPin, Building2, UserCheck, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  alegData,
  alegPerempuanData,
  alegProvinsiData,
  alegDPRRIData,
  getAllDPD,
  getTopDPD,
  getTotalAleg,
  getTotalAlegPerempuan,
  getTotalAlegProvinsi,
  getTotalAlegDPRRI,
} from "@/data/alegData";

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

const AnggotaLegislatif = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDPD, setSelectedDPD] = useState<string>("all");
  const [activeTab, setActiveTab] = useState("dprd");

  const allDPD = useMemo(() => getAllDPD(), []);
  const topDPD = useMemo(() => getTopDPD(10), []);
  const totalAleg = useMemo(() => getTotalAleg(), []);
  const totalPerempuan = useMemo(() => getTotalAlegPerempuan(), []);
  const totalProvinsi = useMemo(() => getTotalAlegProvinsi(), []);
  const totalDPRRI = useMemo(() => getTotalAlegDPRRI(), []);
  const totalDPD = useMemo(() => allDPD.length, [allDPD]);

  const filteredDPRD = useMemo(() => {
    let data = alegData;

    if (selectedDPD && selectedDPD !== "all") {
      data = data.filter((item) => item.dpd === selectedDPD);
    }

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      data = data.filter(
        (item) =>
          item.dpd.toLowerCase().includes(lowerQuery) ||
          item.nama.toLowerCase().includes(lowerQuery) ||
          item.daerah.toLowerCase().includes(lowerQuery) ||
          item.dapil.toLowerCase().includes(lowerQuery)
      );
    }

    return data;
  }, [searchQuery, selectedDPD]);

  const filteredPerempuan = useMemo(() => {
    if (!searchQuery.trim()) return alegPerempuanData;
    const lowerQuery = searchQuery.toLowerCase();
    return alegPerempuanData.filter(
      (item) =>
        item.dpd.toLowerCase().includes(lowerQuery) ||
        item.nama.toLowerCase().includes(lowerQuery) ||
        item.daerah.toLowerCase().includes(lowerQuery) ||
        item.dapil.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const filteredProvinsi = useMemo(() => {
    if (!searchQuery.trim()) return alegProvinsiData;
    const lowerQuery = searchQuery.toLowerCase();
    return alegProvinsiData.filter(
      (item) =>
        item.nama.toLowerCase().includes(lowerQuery) ||
        item.daerah.toLowerCase().includes(lowerQuery) ||
        item.dapil.toLowerCase().includes(lowerQuery) ||
        item.wilayah.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const filteredDPRRI = useMemo(() => {
    if (!searchQuery.trim()) return alegDPRRIData;
    const lowerQuery = searchQuery.toLowerCase();
    return alegDPRRIData.filter(
      (item) =>
        item.nama.toLowerCase().includes(lowerQuery) ||
        item.dapil.toLowerCase().includes(lowerQuery) ||
        item.wilayah.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const chartData = useMemo(() => {
    return topDPD.map((item) => ({
      name: item.dpd.length > 12 ? item.dpd.substring(0, 12) + "..." : item.dpd,
      fullName: item.dpd,
      value: item.jumlahAleg,
    }));
  }, [topDPD]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Anggota Legislatif PKS
        </h1>
        <p className="text-muted-foreground">
          Rekap Anggota Legislatif Periode 2024-2029 Se-Provinsi Jawa Tengah
        </p>
      </div>

      {/* Search and Filter - Moved to top */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Cari Anggota Legislatif
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari nama, DPD, daerah, atau dapil..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDPD} onValueChange={setSelectedDPD}>
              <SelectTrigger className="w-full md:w-[250px]">
                <SelectValue placeholder="Pilih DPD" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                <SelectItem value="all">Semua DPD</SelectItem>
                {allDPD.map((dpd) => (
                  <SelectItem key={dpd} value={dpd}>
                    {dpd}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DPRD Kab/Kota</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAleg}</div>
            <p className="text-xs text-muted-foreground">Anggota</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ALEG Perempuan</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPerempuan}</div>
            <p className="text-xs text-muted-foreground">Anggota</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DPRD Provinsi</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProvinsi}</div>
            <p className="text-xs text-muted-foreground">Anggota</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DPR RI</CardTitle>
            <Landmark className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDPRRI}</div>
            <p className="text-xs text-muted-foreground">Anggota</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart - Top DPD dengan ALEG Terbanyak */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Top 10 DPD dengan ALEG DPRD Terbanyak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis type="number" className="text-xs" />
                <YAxis
                  type="category"
                  dataKey="name"
                  className="text-xs"
                  width={90}
                  tick={{ fontSize: 11 }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="font-medium">
                            {payload[0].payload.fullName}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {payload[0].value} Anggota Legislatif
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {chartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different ALEG categories */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dprd">DPRD Kab/Kota</TabsTrigger>
          <TabsTrigger value="perempuan">ALEG Perempuan</TabsTrigger>
          <TabsTrigger value="provinsi">DPRD Provinsi</TabsTrigger>
          <TabsTrigger value="dprri">DPR RI</TabsTrigger>
        </TabsList>

        {/* DPRD Kab/Kota Tab */}
        <TabsContent value="dprd">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Daftar ALEG DPRD Kabupaten/Kota</span>
                <Badge variant="secondary">{filteredDPRD.length} data</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60px]">No</TableHead>
                      <TableHead>DPD</TableHead>
                      <TableHead>Nama</TableHead>
                      <TableHead>Daerah</TableHead>
                      <TableHead>Dapil</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDPRD.length > 0 ? (
                      filteredDPRD.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{item.dpd}</Badge>
                          </TableCell>
                          <TableCell className="font-medium">{item.nama}</TableCell>
                          <TableCell>{item.daerah}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{item.dapil}</Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8">
                          <div className="text-muted-foreground">
                            Tidak ada data yang ditemukan
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ALEG Perempuan Tab */}
        <TabsContent value="perempuan">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Daftar ALEG Perempuan</span>
                <Badge variant="secondary">{filteredPerempuan.length} data</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60px]">No</TableHead>
                      <TableHead>DPD</TableHead>
                      <TableHead>Nama</TableHead>
                      <TableHead>Daerah</TableHead>
                      <TableHead>Dapil</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPerempuan.length > 0 ? (
                      filteredPerempuan.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{item.dpd}</Badge>
                          </TableCell>
                          <TableCell className="font-medium">{item.nama}</TableCell>
                          <TableCell>{item.daerah}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{item.dapil}</Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8">
                          <div className="text-muted-foreground">
                            Tidak ada data yang ditemukan
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DPRD Provinsi Tab */}
        <TabsContent value="provinsi">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Daftar ALEG DPRD Provinsi Jawa Tengah</span>
                <Badge variant="secondary">{filteredProvinsi.length} data</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60px]">No</TableHead>
                      <TableHead>Dapil</TableHead>
                      <TableHead>Nama</TableHead>
                      <TableHead>Daerah</TableHead>
                      <TableHead className="max-w-[250px]">Wilayah Pemilihan</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProvinsi.length > 0 ? (
                      filteredProvinsi.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{item.dapil}</Badge>
                          </TableCell>
                          <TableCell className="font-medium">{item.nama}</TableCell>
                          <TableCell>{item.daerah}</TableCell>
                          <TableCell className="max-w-[250px] text-sm text-muted-foreground">
                            {item.wilayah}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8">
                          <div className="text-muted-foreground">
                            Tidak ada data yang ditemukan
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DPR RI Tab */}
        <TabsContent value="dprri">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Daftar ALEG DPR RI Dapil Jawa Tengah</span>
                <Badge variant="secondary">{filteredDPRRI.length} data</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60px]">No</TableHead>
                      <TableHead>Dapil</TableHead>
                      <TableHead>Nama</TableHead>
                      <TableHead>Wilayah Pemilihan</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDPRRI.length > 0 ? (
                      filteredDPRRI.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{item.dapil}</Badge>
                          </TableCell>
                          <TableCell className="font-medium">{item.nama}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {item.wilayah}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8">
                          <div className="text-muted-foreground">
                            Tidak ada data yang ditemukan
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnggotaLegislatif;
