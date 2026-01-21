import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Calendar, Briefcase, Target, DollarSign, Filter } from "lucide-react";
import { rkratData, TEMA_UTAMA, BULAN_LIST, getBidangList, getProgramUnggulanList, formatCurrency, RKRATItem } from "@/data/rkratData";

const COLORS = ['#f97316', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5', '#ea580c', '#c2410c', '#9a3412', '#7c2d12', '#431407', '#fbbf24', '#fcd34d', '#fde68a'];

const RKRAT = () => {
  const [selectedTema, setSelectedTema] = useState<string>("all");
  const [selectedBulan, setSelectedBulan] = useState<string>("all");
  const [selectedProgram, setSelectedProgram] = useState<string>("all");
  const [selectedBidang, setSelectedBidang] = useState<string>("all");

  const bidangList = useMemo(() => getBidangList(), []);
  const programList = useMemo(() => getProgramUnggulanList(), []);

  // Filter data based on selections
  const filteredData = useMemo(() => {
    return rkratData.filter(item => {
      const temaMatch = selectedTema === "all" || item.temaUtama === selectedTema;
      const programMatch = selectedProgram === "all" || item.programUnggulan === selectedProgram;
      const bidangMatch = selectedBidang === "all" || item.bidang === selectedBidang;
      
      let bulanMatch = true;
      if (selectedBulan !== "all") {
        bulanMatch = item.jadwal[selectedBulan as keyof typeof item.jadwal] === true;
      }
      
      return temaMatch && programMatch && bidangMatch && bulanMatch;
    });
  }, [selectedTema, selectedBulan, selectedProgram, selectedBidang]);

  // Summary statistics
  const stats = useMemo(() => {
    const totalBidang = [...new Set(filteredData.map(item => item.bidang))].length;
    const totalTema = [...new Set(filteredData.map(item => item.temaUtama))].length;
    const totalProgram = [...new Set(filteredData.map(item => item.programUnggulan).filter(Boolean))].length;
    const totalRAT = filteredData.reduce((sum, item) => sum + item.rat, 0);
    
    return { totalBidang, totalTema, totalProgram, totalRAT };
  }, [filteredData]);

  // Data for charts
  const ratByTema = useMemo(() => {
    const grouped: Record<string, number> = {};
    filteredData.forEach(item => {
      if (!grouped[item.temaUtama]) grouped[item.temaUtama] = 0;
      grouped[item.temaUtama] += item.rat;
    });
    return Object.entries(grouped).map(([name, value]) => ({ name, value }));
  }, [filteredData]);

  const ratByBidang = useMemo(() => {
    const grouped: Record<string, number> = {};
    filteredData.forEach(item => {
      if (!grouped[item.bidang]) grouped[item.bidang] = 0;
      grouped[item.bidang] += item.rat;
    });
    return Object.entries(grouped)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);
  }, [filteredData]);

  const programByTema = useMemo(() => {
    const grouped: Record<string, Set<string>> = {};
    filteredData.forEach(item => {
      if (!grouped[item.temaUtama]) grouped[item.temaUtama] = new Set();
      if (item.programUnggulan) grouped[item.temaUtama].add(item.programUnggulan);
    });
    return Object.entries(grouped).map(([name, programs]) => ({ 
      name, 
      value: programs.size,
      programs: Array.from(programs)
    }));
  }, [filteredData]);

  // Kegiatan per bulan
  const kegiatanPerBulan = useMemo(() => {
    return BULAN_LIST.map(bulan => {
      const count = filteredData.filter(item => item.jadwal[bulan.key as keyof typeof item.jadwal]).length;
      return { name: bulan.label, value: count };
    });
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-primary-foreground py-6 px-4">
        <div className="container max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">RENCANA KEGIATAN DPW PKS JATENG</h1>
          <p className="text-primary-foreground/80 text-sm mt-1">Rencana Kerja dan Rencana Anggaran Tahunan 2026</p>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Filters */}
        <Card className="shadow-elegant border-t-4 border-t-primary">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Filter className="w-5 h-5 text-primary" />
              Filter Pencarian
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedTema} onValueChange={setSelectedTema}>
                <SelectTrigger>
                  <SelectValue placeholder="Tema Utama" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Tema</SelectItem>
                  {TEMA_UTAMA.map(tema => (
                    <SelectItem key={tema} value={tema}>{tema}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBulan} onValueChange={setSelectedBulan}>
                <SelectTrigger>
                  <SelectValue placeholder="Bulan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Bulan</SelectItem>
                  {BULAN_LIST.map(bulan => (
                    <SelectItem key={bulan.key} value={bulan.key}>{bulan.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger>
                  <SelectValue placeholder="Program Unggulan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Program</SelectItem>
                  {programList.map(program => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBidang} onValueChange={setSelectedBidang}>
                <SelectTrigger>
                  <SelectValue placeholder="Bidang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Bidang</SelectItem>
                  {bidangList.map(bidang => (
                    <SelectItem key={bidang} value={bidang}>{bidang}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Detail Table - Kegiatan per Bulan */}
        <Card className="shadow-card">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-base font-semibold">DESKRIPSI DETAIL KEGIATAN SETIAP BULAN</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">No</TableHead>
                    <TableHead className="font-semibold">Bidang</TableHead>
                    <TableHead className="font-semibold">Kegiatan Utama</TableHead>
                    <TableHead className="font-semibold">Bulan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.slice(0, 10).map((item, index) => {
                    const bulanAktif = BULAN_LIST.filter(b => item.jadwal[b.key as keyof typeof item.jadwal]).map(b => b.label).join(", ");
                    return (
                      <TableRow key={item.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell className="font-medium">{item.bidang}</TableCell>
                        <TableCell>{item.kegiatanUtama}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{bulanAktif || "-"}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
            {filteredData.length > 10 && (
              <div className="p-3 text-center text-sm text-muted-foreground border-t">
                Menampilkan 10 dari {filteredData.length} kegiatan
              </div>
            )}
          </CardContent>
        </Card>

        {/* Kegiatan per Bulan Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-base font-semibold">PRESENTASE KEGIATAN SETIAP BULAN</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={kegiatanPerBulan} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={60} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-base font-semibold">PRESENTASE TEMA UTAMA</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={programByTema}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name.slice(0, 10)}... ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {programByTema.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detail Table - Tema dan Program */}
        <Card className="shadow-card">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-base font-semibold">DESKRIPSI DETAIL TEMA DAN PROGRAM UNGGULAN</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">No</TableHead>
                    <TableHead className="font-semibold">Tema Utama</TableHead>
                    <TableHead className="font-semibold">Bidang</TableHead>
                    <TableHead className="font-semibold">Program Unggulan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.filter(item => item.programUnggulan).slice(0, 10).map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{item.temaUtama}</TableCell>
                      <TableCell>{item.bidang}</TableCell>
                      <TableCell>{item.programUnggulan}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-card bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <p className="text-sm opacity-80 uppercase tracking-wider mb-2">Total Bidang</p>
              <p className="text-4xl font-bold">{stats.totalBidang}</p>
            </CardContent>
          </Card>
          <Card className="shadow-card bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <p className="text-sm opacity-80 uppercase tracking-wider mb-2">Tema Utama</p>
              <p className="text-4xl font-bold">{stats.totalTema}</p>
            </CardContent>
          </Card>
          <Card className="shadow-card bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <p className="text-sm opacity-80 uppercase tracking-wider mb-2">Total Program Unggulan</p>
              <p className="text-4xl font-bold">{stats.totalProgram}</p>
            </CardContent>
          </Card>
        </div>

        {/* RAT Section Header */}
        <header className="gradient-primary text-primary-foreground py-4 px-4 rounded-lg">
          <h2 className="text-xl font-bold text-center">RENCANA ANGGARAN TAHUNAN SETIAP BIDANG</h2>
        </header>

        {/* RAT Detail Table */}
        <Card className="shadow-card">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              DESKRIPSI DETAIL RENCANA ANGGARAN TAHUNAN SETIAP BIDANG
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">No</TableHead>
                    <TableHead className="font-semibold">Tema Utama</TableHead>
                    <TableHead className="font-semibold">Bidang</TableHead>
                    <TableHead className="font-semibold">Program Unggulan</TableHead>
                    <TableHead className="font-semibold">Kegiatan Utama</TableHead>
                    <TableHead className="font-semibold text-right">RAT</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.filter(item => item.rat > 0).slice(0, 10).map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{item.temaUtama}</TableCell>
                      <TableCell>{item.bidang}</TableCell>
                      <TableCell className="text-sm">{item.programUnggulan || "-"}</TableCell>
                      <TableCell className="text-sm">{item.kegiatanUtama}</TableCell>
                      <TableCell className="text-right font-medium text-primary">{formatCurrency(item.rat)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* RAT Summary & Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="shadow-card bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-6 text-center">
              <p className="text-sm opacity-80 uppercase tracking-wider mb-2">Total Jumlah RAT</p>
              <p className="text-2xl md:text-3xl font-bold">{formatCurrency(stats.totalRAT)}</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold">PRESENTASE RAT MENURUT TEMA</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={ratByTema}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
                  <Tooltip formatter={(value: number) => formatCurrency(value)} />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold">PRESENTASE RAT MENURUT BIDANG</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={ratByBidang}
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    dataKey="value"
                  >
                    {ratByBidang.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => formatCurrency(value)} />
                  <Legend 
                    layout="vertical" 
                    align="right" 
                    verticalAlign="middle"
                    formatter={(value) => <span className="text-xs">{value.slice(0, 12)}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Program Unggulan Section */}
        <header className="gradient-primary text-primary-foreground py-4 px-4 rounded-lg">
          <h2 className="text-xl font-bold text-center">PROGRAM UNGGULAN</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programList.slice(0, 9).map((program, index) => {
            const programData = filteredData.filter(item => item.programUnggulan === program);
            const totalRAT = programData.reduce((sum, item) => sum + item.rat, 0);
            return (
              <Card key={program} className="shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm text-foreground line-clamp-2">{program}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{programData.length} kegiatan</p>
                      <p className="text-sm font-medium text-primary mt-1">{formatCurrency(totalRAT)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6 mt-8">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 DPW PKS Jawa Tengah - Rencana Kerja dan Anggaran Tahunan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RKRAT;
