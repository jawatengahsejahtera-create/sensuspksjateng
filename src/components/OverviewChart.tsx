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
} from "@/data/pksData";

const COLORS = [
  "hsl(0, 85%, 45%)",
  "hsl(142, 76%, 36%)",
  "hsl(217, 91%, 60%)",
  "hsl(45, 100%, 50%)",
  "hsl(280, 65%, 60%)",
];

export const OverviewChart = () => {
  // Calculate total members across all kabupaten
  const totalStats = useMemo(() => {
    let totalA3 = 0;
    let totalA4 = 0;
    let totalA5 = 0;
    let totalLakiLaki = 0;
    let totalPerempuan = 0;

    kabupatenList.forEach((kab) => {
      const anggota = jumlahAnggotaData[kab];
      if (anggota) {
        totalA3 += anggota.A3 || 0;
        totalA4 += anggota.A4 || 0;
        totalA5 += anggota.A5 || 0;
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
      totalKabupaten: kabupatenList.length,
    };
  }, []);

  // Data for jenjang distribution pie chart
  const jenjangData = useMemo(() => [
    { name: "A3 (Kader Pemula)", value: totalStats.totalA3, fill: COLORS[0] },
    { name: "A4 (Kader Muda)", value: totalStats.totalA4, fill: COLORS[1] },
    { name: "A5 (Kader Madya)", value: totalStats.totalA5, fill: COLORS[2] },
  ], [totalStats]);

  // Data for gender distribution pie chart
  const genderData = useMemo(() => [
    { name: "Laki-laki", value: totalStats.totalLakiLaki, fill: COLORS[2] },
    { name: "Perempuan", value: totalStats.totalPerempuan, fill: COLORS[0] },
  ], [totalStats]);

  // Top 10 kabupaten by total members
  const top10Kabupaten = useMemo(() => {
    return kabupatenList
      .map((kab) => {
        const data = jumlahAnggotaData[kab];
        const total = data ? (data.A3 || 0) + (data.A4 || 0) + (data.A5 || 0) : 0;
        return { name: kab.replace("KAB. ", "").replace("KOTA ", ""), total };
      })
      .sort((a, b) => b.total - a.total)
      .slice(0, 10);
  }, []);

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

  return (
    <div className="space-y-6">
      {/* Summary Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/20">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Anggota</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalAnggota.toLocaleString()}</p>
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
                <p className="text-sm text-muted-foreground">Kader Madya (A5)</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalA5.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-blue-500/20">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Kabupaten/Kota</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalKabupaten}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-purple-500/20">
                <TrendingUp className="w-6 h-6 text-purple-600" />
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

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Jenjang Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Distribusi Jenjang Kaderisasi</CardTitle>
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
                  <Tooltip content={renderCustomTooltip} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top 10 Kabupaten Bar Chart */}
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
    </div>
  );
};
