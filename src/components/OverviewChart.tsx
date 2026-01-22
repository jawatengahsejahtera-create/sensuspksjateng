import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Users, UserCheck, MapPin, TrendingUp } from "lucide-react";
import {
  kabupatenList,
  jumlahAnggotaData,
  jenisKelaminData,
  kelompokUmurData,
  statusKerjaData,
  punyaBinaanData,
  bayarIuranData,
  pendapatanNishabData,
  frekKonflikData,
} from "@/data/pksData";

const COLORS = [
  "hsl(0, 85%, 45%)",
  "hsl(142, 76%, 36%)",
  "hsl(217, 91%, 60%)",
  "hsl(45, 100%, 50%)",
  "hsl(280, 65%, 60%)",
  "hsl(180, 70%, 45%)",
];

interface OverviewChartProps {
  selectedKabupaten?: string;
  selectedJenjang?: string;
}

export const OverviewChart = ({ selectedKabupaten, selectedJenjang }: OverviewChartProps) => {
  // Determine if we're filtering or showing all data
  const isFiltered = selectedKabupaten && selectedJenjang;
  const kabupatenToUse = isFiltered ? [selectedKabupaten] : kabupatenList;
  const jenjangToUse = isFiltered ? [selectedJenjang] : ["A3", "A4", "A5"];

  // Calculate total members
  const totalStats = useMemo(() => {
    let totalA3 = 0;
    let totalA4 = 0;
    let totalA5 = 0;
    let totalLakiLaki = 0;
    let totalPerempuan = 0;

    kabupatenToUse.forEach((kab) => {
      const anggota = jumlahAnggotaData[kab];
      if (anggota) {
        if (jenjangToUse.includes("A3")) totalA3 += anggota.A3 || 0;
        if (jenjangToUse.includes("A4")) totalA4 += anggota.A4 || 0;
        if (jenjangToUse.includes("A5")) totalA5 += anggota.A5 || 0;
      }
      const jk = jenisKelaminData[kab];
      if (jk) {
        totalLakiLaki += jk.lakiLaki || 0;
        totalPerempuan += jk.perempuan || 0;
      }
    });

    return {
      totalA3,
      totalA4,
      totalA5,
      totalAnggota: totalA3 + totalA4 + totalA5,
      totalLakiLaki,
      totalPerempuan,
      totalKabupaten: kabupatenToUse.length,
    };
  }, [kabupatenToUse, jenjangToUse]);

  // Data for jenjang distribution pie chart
  const jenjangData = useMemo(() => {
    if (isFiltered) {
      // Show single jenjang when filtered
      const jenjangValue = selectedJenjang === "A3" ? totalStats.totalA3 
        : selectedJenjang === "A4" ? totalStats.totalA4 
        : totalStats.totalA5;
      return [
        { name: selectedJenjang, value: jenjangValue, fill: COLORS[selectedJenjang === "A3" ? 0 : selectedJenjang === "A4" ? 1 : 2] },
      ];
    }
    return [
      { name: "A3", value: totalStats.totalA3, fill: COLORS[0] },
      { name: "A4", value: totalStats.totalA4, fill: COLORS[1] },
      { name: "A5", value: totalStats.totalA5, fill: COLORS[2] },
    ];
  }, [totalStats, isFiltered, selectedJenjang]);

  // Data for gender distribution pie chart
  const genderData = useMemo(() => [
    { name: "Laki-laki", value: totalStats.totalLakiLaki, fill: COLORS[2] },
    { name: "Perempuan", value: totalStats.totalPerempuan, fill: COLORS[0] },
  ], [totalStats]);

  // Top 10 kabupaten by total members (only show when not filtered)
  const top10Kabupaten = useMemo(() => {
    if (isFiltered) return [];
    return kabupatenList
      .map((kab) => {
        const data = jumlahAnggotaData[kab];
        const total = data ? (data.A3 || 0) + (data.A4 || 0) + (data.A5 || 0) : 0;
        return { name: kab.replace("KAB. ", "").replace("KOTA ", ""), total };
      })
      .sort((a, b) => b.total - a.total)
      .slice(0, 10);
  }, [isFiltered]);

  // Aggregate kelompok umur data
  const kelompokUmurAggregated = useMemo(() => {
    let babyBoomer = 0, genX = 0, milenial = 0, genZ = 0;
    kabupatenToUse.forEach((kab) => {
      const data = kelompokUmurData[kab];
      if (data) {
        jenjangToUse.forEach((jenjang) => {
          const j = data[jenjang];
          if (j) {
            babyBoomer += j.babyBoomer || 0;
            genX += j.genX || 0;
            milenial += j.milenial || 0;
            genZ += j.genZ || 0;
          }
        });
      }
    });
    return [
      { name: "Baby Boomer", value: babyBoomer, fill: COLORS[0] },
      { name: "Gen X", value: genX, fill: COLORS[1] },
      { name: "Milenial", value: milenial, fill: COLORS[2] },
      { name: "Gen Z", value: genZ, fill: COLORS[3] },
    ];
  }, [kabupatenToUse, jenjangToUse]);

  // Aggregate status kerja data
  const statusKerjaAggregated = useMemo(() => {
    let bekerja = 0, tidakBekerja = 0;
    kabupatenToUse.forEach((kab) => {
      const data = statusKerjaData[kab];
      if (data) {
        jenjangToUse.forEach((jenjang) => {
          const j = data[jenjang];
          if (j) {
            bekerja += j.bekerja || 0;
            tidakBekerja += j.tidakBekerja || 0;
          }
        });
      }
    });
    return [
      { name: "Bekerja", value: bekerja, fill: COLORS[1] },
      { name: "Tidak Bekerja", value: tidakBekerja, fill: COLORS[0] },
    ];
  }, [kabupatenToUse, jenjangToUse]);

  // Aggregate punya binaan data
  const punyaBinaanAggregated = useMemo(() => {
    let punya = 0, tidak = 0;
    kabupatenToUse.forEach((kab) => {
      const data = punyaBinaanData[kab];
      if (data) {
        jenjangToUse.forEach((jenjang) => {
          const j = data[jenjang];
          if (j) {
            punya += j.punya || 0;
            tidak += j.tidak || 0;
          }
        });
      }
    });
    return [
      { name: "Punya Binaan", value: punya, fill: COLORS[1] },
      { name: "Tidak Punya", value: tidak, fill: COLORS[4] },
    ];
  }, [kabupatenToUse, jenjangToUse]);

  // Aggregate bayar iuran data
  const bayarIuranAggregated = useMemo(() => {
    let ya = 0, tidak = 0;
    kabupatenToUse.forEach((kab) => {
      const data = bayarIuranData[kab];
      if (data) {
        jenjangToUse.forEach((jenjang) => {
          const j = data[jenjang];
          if (j) {
            ya += j.ya || 0;
            tidak += j.tidak || 0;
          }
        });
      }
    });
    return [
      { name: "Bayar Iuran", value: ya, fill: COLORS[2] },
      { name: "Tidak Bayar", value: tidak, fill: COLORS[0] },
    ];
  }, [kabupatenToUse, jenjangToUse]);

  // Aggregate pendapatan nishab data
  const pendapatanNishabAggregated = useMemo(() => {
    let dibawah = 0, diatas = 0;
    kabupatenToUse.forEach((kab) => {
      const data = pendapatanNishabData[kab];
      if (data) {
        jenjangToUse.forEach((jenjang) => {
          const j = data[jenjang];
          if (j) {
            dibawah += j.dibawahNishab || 0;
            diatas += j.diatasNishab || 0;
          }
        });
      }
    });
    return [
      { name: "Di Bawah Nishab", value: dibawah, fill: COLORS[3] },
      { name: "Di Atas Nishab", value: diatas, fill: COLORS[1] },
    ];
  }, [kabupatenToUse, jenjangToUse]);

  // Aggregate frekuensi konflik data
  const frekKonflikAggregated = useMemo(() => {
    let tidakPernah = 0, sangatJarang = 0, jarang = 0, cukupSering = 0, sering = 0;
    kabupatenToUse.forEach((kab) => {
      const data = frekKonflikData[kab];
      if (data) {
        jenjangToUse.forEach((jenjang) => {
          const j = data[jenjang];
          if (j) {
            tidakPernah += j.tidakPernah || 0;
            sangatJarang += j.sangatJarang || 0;
            jarang += j.jarang || 0;
            cukupSering += j.cukupSering || 0;
            sering += j.sering || 0;
          }
        });
      }
    });
    return [
      { name: "Tidak Pernah", value: tidakPernah, fill: COLORS[1] },
      { name: "Sangat Jarang", value: sangatJarang, fill: COLORS[2] },
      { name: "Jarang", value: jarang, fill: COLORS[3] },
      { name: "Cukup Sering", value: cukupSering, fill: COLORS[4] },
      { name: "Sering", value: sering, fill: COLORS[0] },
    ];
  }, [kabupatenToUse, jenjangToUse]);

  const renderCustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const total = jenjangData.reduce((sum, item) => sum + item.value, 0);
      const percentage = total > 0 ? ((data.value / total) * 100).toFixed(1) : 0;
      return (
        <div className="bg-card border border-border rounded-lg shadow-lg p-3">
          <p className="font-semibold text-foreground">{data.name}</p>
          <p className="text-muted-foreground">
            Jumlah: <span className="font-bold text-primary">{data.value.toLocaleString()}</span>
          </p>
          <p className="text-muted-foreground">
            Persentase: <span className="font-bold text-primary">{percentage}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const renderGenericTooltip = (dataArray: any[]) => ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const total = dataArray.reduce((sum, item) => sum + item.value, 0);
      const percentage = total > 0 ? ((data.value / total) * 100).toFixed(1) : 0;
      return (
        <div className="bg-card border border-border rounded-lg shadow-lg p-3">
          <p className="font-semibold text-foreground">{data.name}</p>
          <p className="text-muted-foreground">
            Jumlah: <span className="font-bold text-primary">{data.value.toLocaleString()}</span>
          </p>
          <p className="text-muted-foreground">
            Persentase: <span className="font-bold text-primary">{percentage}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const getTitle = () => {
    if (isFiltered) {
      return `Data ${selectedKabupaten} - Jenjang ${selectedJenjang}`;
    }
    return "Data Keseluruhan Jawa Tengah";
  };

  return (
    <div className="space-y-6">
      {/* Filter Info Banner */}
      {isFiltered && (
        <Card className="bg-primary/10 border-primary/30">
          <CardContent className="py-3">
            <p className="text-sm text-center text-foreground">
              Menampilkan data untuk <strong>{selectedKabupaten}</strong> - Jenjang <strong className="text-primary">{selectedJenjang}</strong>
            </p>
          </CardContent>
        </Card>
      )}

      {/* Summary Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="shadow-card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/20">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{isFiltered ? `Total ${selectedJenjang}` : "Total Anggota"}</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalAnggota.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-red-500/20">
                <UserCheck className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Kader A3</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalA3.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-green-500/20">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Kader A4</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalA4.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-blue-500/20">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Kader A5</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalA5.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-secondary/30 to-secondary/10 border-secondary/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-secondary/40">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{isFiltered ? "Jenjang" : "Kabupaten/Kota"}</p>
                <p className="text-2xl font-bold text-foreground">
                  {isFiltered ? selectedJenjang : totalStats.totalKabupaten}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-muted/50 to-muted/20 border-muted/30">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-muted">
                <TrendingUp className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rasio L/P</p>
                <p className="text-2xl font-bold text-foreground">
                  {totalStats.totalPerempuan > 0 
                    ? (totalStats.totalLakiLaki / totalStats.totalPerempuan).toFixed(2) 
                    : "N/A"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 - Jenjang & Gender */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Jenjang Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">
              {isFiltered ? `Anggota ${selectedJenjang}` : "Distribusi Jenjang Kaderisasi"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={jenjangData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {jenjangData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={renderCustomTooltip} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Gender Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Distribusi Jenis Kelamin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={renderGenericTooltip(genderData)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 - Kelompok Umur & Status Kerja */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Kelompok Umur */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Distribusi Kelompok Umur</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={kelompokUmurAggregated}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {kelompokUmurAggregated.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={renderGenericTooltip(kelompokUmurAggregated)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Status Kerja */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Distribusi Status Kerja</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusKerjaAggregated}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {statusKerjaAggregated.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={renderGenericTooltip(statusKerjaAggregated)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 3 - Punya Binaan & Bayar Iuran */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Punya Binaan */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Kepemilikan Kelompok Binaan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={punyaBinaanAggregated}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {punyaBinaanAggregated.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={renderGenericTooltip(punyaBinaanAggregated)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Bayar Iuran */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Pembayaran Iuran Bulanan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={bayarIuranAggregated}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {bayarIuranAggregated.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={renderGenericTooltip(bayarIuranAggregated)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 4 - Pendapatan Nishab & Frekuensi Konflik */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Pendapatan Nishab */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Distribusi Pendapatan (Nishab)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pendapatanNishabAggregated}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {pendapatanNishabAggregated.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={renderGenericTooltip(pendapatanNishabAggregated)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Frekuensi Konflik */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Frekuensi Konflik dalam Keluarga</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={frekKonflikAggregated}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {frekKonflikAggregated.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={renderGenericTooltip(frekKonflikAggregated)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top 10 Kabupaten Bar Chart - Only show when not filtered */}
      {!isFiltered && (
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Top 10 Kabupaten/Kota dengan Anggota Terbanyak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={top10Kabupaten} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [value.toLocaleString(), "Total Anggota"]}
                  />
                  <Bar dataKey="total" fill="hsl(0, 85%, 45%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
