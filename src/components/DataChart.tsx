import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { BarChart3, PieChart as PieChartIcon } from "lucide-react";
import {
  DataCategory,
  categoryLabels,
  jumlahAnggotaData,
  jenisKelaminData,
  kelompokUmurData,
  statusKerjaData,
  punyaBinaanData,
  terlibatKepengurusanData,
  bayarIuranData,
  terimaBantuanData,
  frekKonflikData,
  jumlahAnakData,
  ketahananKeluargaData,
  hafalanAnakData,
  pendapatanNishabData,
} from "@/data/pksData";

interface DataChartProps {
  kabupaten: string;
  jenjang: string;
  category: DataCategory;
}

const COLORS = [
  "hsl(0, 85%, 45%)",
  "hsl(142, 76%, 36%)",
  "hsl(217, 91%, 60%)",
  "hsl(45, 100%, 50%)",
  "hsl(280, 65%, 60%)",
  "hsl(180, 65%, 45%)",
  "hsl(320, 65%, 55%)",
];

export const DataChart = ({ kabupaten, jenjang, category }: DataChartProps) => {
  const [chartType, setChartType] = useState<"bar" | "pie">("bar");

  const chartData = useMemo(() => {
    switch (category) {
      case "jumlahAnggota": {
        const data = jumlahAnggotaData[kabupaten];
        if (!data) return [];
        return [
          { name: "A3", value: data.A3, fill: COLORS[0] },
          { name: "A4", value: data.A4, fill: COLORS[1] },
          { name: "A5", value: data.A5, fill: COLORS[2] },
        ];
      }
      case "jenisKelamin": {
        const data = jenisKelaminData[kabupaten];
        if (!data) return [];
        return [
          { name: "Laki-laki", value: data.lakiLaki, fill: COLORS[2] },
          { name: "Perempuan", value: data.perempuan, fill: COLORS[0] },
        ];
      }
      case "kelompokUmur": {
        const data = kelompokUmurData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Baby Boomer", value: data.babyBoomer, fill: COLORS[0] },
          { name: "Gen X", value: data.genX, fill: COLORS[1] },
          { name: "Milenial", value: data.milenial, fill: COLORS[2] },
          { name: "Gen Z", value: data.genZ, fill: COLORS[3] },
        ];
      }
      case "statusKerja": {
        const data = statusKerjaData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Bekerja", value: data.bekerja, fill: COLORS[1] },
          { name: "Tidak Bekerja", value: data.tidakBekerja, fill: COLORS[0] },
        ];
      }
      case "punyaBinaan": {
        const data = punyaBinaanData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Punya Binaan", value: data.punya, fill: COLORS[1] },
          { name: "Tidak Punya", value: data.tidak, fill: COLORS[4] },
        ];
      }
      case "terlibatKepengurusan": {
        const data = terlibatKepengurusanData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Terlibat", value: data.ya, fill: COLORS[1] },
          { name: "Tidak Terlibat", value: data.tidak, fill: COLORS[4] },
        ];
      }
      case "bayarIuran": {
        const data = bayarIuranData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Bayar Iuran", value: data.ya, fill: COLORS[1] },
          { name: "Tidak Bayar", value: data.tidak, fill: COLORS[0] },
        ];
      }
      case "terimaBantuan": {
        const data = terimaBantuanData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Menerima Bantuan", value: data.menerima, fill: COLORS[1] },
          { name: "Tidak Menerima", value: data.tidakMenerima, fill: COLORS[4] },
        ];
      }
      case "frekKonflik": {
        const data = frekKonflikData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Tidak Pernah", value: data.tidakPernah, fill: COLORS[1] },
          { name: "Sangat Jarang", value: data.sangatJarang, fill: COLORS[2] },
          { name: "Jarang", value: data.jarang, fill: COLORS[3] },
          { name: "Cukup Sering", value: data.cukupSering, fill: COLORS[4] },
          { name: "Sering", value: data.sering, fill: COLORS[0] },
        ];
      }
      case "jumlahAnak": {
        const data = jumlahAnakData[kabupaten];
        if (!data) return [];
        return [
          { name: "< 3 Anak", value: data.kurang3, fill: COLORS[1] },
          { name: "3-5 Anak", value: data.antara3sampai5, fill: COLORS[2] },
          { name: ">= 6 Anak", value: data.lebih6, fill: COLORS[3] },
        ];
      }
      case "ketahananKeluarga": {
        const data = ketahananKeluargaData[kabupaten];
        if (!data) return [];
        return [
          { name: "Spiritual", value: data.spiritual, fill: COLORS[0] },
          { name: "Fisik Ekonomi", value: data.fisikEkonomi, fill: COLORS[1] },
          { name: "Sosial", value: data.sosial, fill: COLORS[2] },
          { name: "Psikologis", value: data.psikologis, fill: COLORS[3] },
        ];
      }
      case "hafalanAnak": {
        const data = hafalanAnakData[kabupaten];
        if (!data) return [];
        return [
          { name: "1-5 Juz", value: data.juz1_5, fill: COLORS[0] },
          { name: "6-10 Juz", value: data.juz6_10, fill: COLORS[1] },
          { name: "11-15 Juz", value: data.juz11_15, fill: COLORS[2] },
          { name: "16-20 Juz", value: data.juz16_20, fill: COLORS[3] },
          { name: "21-25 Juz", value: data.juz21_25, fill: COLORS[4] },
          { name: "26-29 Juz", value: data.juz26_29, fill: COLORS[5] },
          { name: "30 Juz", value: data.juz30, fill: COLORS[6] },
        ];
      }
      case "pendapatanNishob": {
        const data = pendapatanNishabData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Di Bawah Nishab", value: data.dibawahNishab, fill: COLORS[0] },
          { name: "Di Atas Nishab", value: data.diatasNishab, fill: COLORS[1] },
        ];
      }
      default:
        return [];
    }
  }, [kabupaten, jenjang, category]);

  const totalValue = useMemo(() => {
    return chartData.reduce((sum, item) => sum + item.value, 0);
  }, [chartData]);

  if (chartData.length === 0) {
    return (
      <Card className="shadow-card">
        <CardContent className="flex items-center justify-center h-80">
          <p className="text-muted-foreground">Data tidak tersedia untuk kombinasi ini</p>
        </CardContent>
      </Card>
    );
  }

  const renderCustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const percentage = totalValue > 0 ? ((data.value / totalValue) * 100).toFixed(1) : 0;
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
    <Card className="shadow-card animate-scale-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">
          {categoryLabels[category]} - {kabupaten}
          {category !== "jumlahAnggota" && category !== "jenisKelamin" && category !== "jumlahAnak" && category !== "ketahananKeluarga" && category !== "hafalanAnak" && (
            <span className="text-primary ml-2">({jenjang})</span>
          )}
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant={chartType === "bar" ? "default" : "outline"}
            size="sm"
            onClick={() => setChartType("bar")}
            className="h-9"
          >
            <BarChart3 className="w-4 h-4 mr-1" />
            Bar
          </Button>
          <Button
            variant={chartType === "pie" ? "default" : "outline"}
            size="sm"
            onClick={() => setChartType("pie")}
            className="h-9"
          >
            <PieChartIcon className="w-4 h-4 mr-1" />
            Pie
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "bar" ? (
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip content={renderCustomTooltip} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            ) : (
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
                <Legend />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {chartData.map((item, index) => (
            <div
              key={item.name}
              className="p-3 rounded-lg bg-secondary/50 border border-border"
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-xs text-muted-foreground truncate">{item.name}</span>
              </div>
              <p className="font-bold text-foreground">{item.value.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">
                {totalValue > 0 ? ((item.value / totalValue) * 100).toFixed(1) : 0}%
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
