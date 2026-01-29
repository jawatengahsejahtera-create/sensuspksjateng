import { useState, useMemo } from "react";
import { Search, Users, MapPin, Building2 } from "lucide-react";
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
  getAllDPD,
  searchAleg,
  getAlegByDPD,
  getTopDPD,
  getTotalAleg,
  getStatistikDPD,
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

  const allDPD = useMemo(() => getAllDPD(), []);
  const topDPD = useMemo(() => getTopDPD(10), []);
  const totalAleg = useMemo(() => getTotalAleg(), []);
  const totalDPD = useMemo(() => allDPD.length, [allDPD]);
  const statistikDPD = useMemo(() => getStatistikDPD(), []);

  const filteredData = useMemo(() => {
    let data = alegData;

    // Filter by DPD
    if (selectedDPD && selectedDPD !== "all") {
      data = data.filter((item) => item.dpd === selectedDPD);
    }

    // Filter by search query
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total ALEG</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAleg}</div>
            <p className="text-xs text-muted-foreground">
              Anggota Legislatif DPRD
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total DPD</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDPD}</div>
            <p className="text-xs text-muted-foreground">
              Dewan Pimpinan Daerah
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rata-rata ALEG</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(totalAleg / totalDPD).toFixed(1)}
            </div>
            <p className="text-xs text-muted-foreground">Per DPD</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart - Top DPD dengan ALEG Terbanyak */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Top 10 DPD dengan ALEG Terbanyak
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

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Cari Anggota Legislatif</CardTitle>
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

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Daftar Anggota Legislatif</span>
            <Badge variant="secondary">{filteredData.length} data</Badge>
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
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
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
    </div>
  );
};

export default AnggotaLegislatif;
