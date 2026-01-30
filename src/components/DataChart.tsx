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
import { pendidikanData, levelRukunUPAData } from "@/data/additionalPksData";
import {
  alasanTidakKerjaData,
  pekerjaanUtamaData,
  umurAnakData,
  sekolahAnakData,
  pendidikanAnakData,
  jenisBantuanData,
  sumberBantuanData,
  programDibutuhkanData,
  pendapatanSESLengkapData,
  dampakPolitikPasanganLengkapData,
  dampakPolitikAnakLengkapData,
  dampakPolitikKarirLengkapData,
  dukunganPasanganData,
} from "@/data/completeData";
import {
  bpjsLengkapData,
  lamaPembinaanLengkapData,
  peranMasyarakatData,
  penerimaanMasyarakatData,
  ketahananEkonomiData,
} from "@/data/fullCensusData";

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
      case "bpjs": {
        const data = bpjsLengkapData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Asuransi Swasta", value: data.asuransiSwasta, fill: COLORS[0] },
          { name: "BPJS PBI", value: data.bpjsPbi, fill: COLORS[1] },
          { name: "BPJS Non-PBI", value: data.bpjsNonPbi, fill: COLORS[2] },
          { name: "Keduanya", value: data.keduanya, fill: COLORS[3] },
          { name: "Tidak Memiliki", value: data.tidakMemiliki, fill: COLORS[4] },
        ];
      }
      case "lamaPembinaan": {
        const data = lamaPembinaanLengkapData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "≤5 tahun", value: data.kurang5, fill: COLORS[0] },
          { name: "6-10 tahun", value: data.antara6_10, fill: COLORS[1] },
          { name: "11-15 tahun", value: data.antara11_15, fill: COLORS[2] },
          { name: "16-20 tahun", value: data.antara16_20, fill: COLORS[3] },
          { name: "21-25 tahun", value: data.antara21_25, fill: COLORS[4] },
          { name: ">25 tahun", value: data.lebih25, fill: COLORS[5] },
        ];
      }
      case "peranMasyarakat": {
        const data = peranMasyarakatData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Aktivis Sosial", value: data.aktivisSosial, fill: COLORS[0] },
          { name: "Anggota Biasa", value: data.anggotaBiasa, fill: COLORS[1] },
          { name: "Guru Mengaji", value: data.guruMengaji, fill: COLORS[2] },
          { name: "Pengurus Ormas", value: data.pengurusOrmas, fill: COLORS[3] },
          { name: "Pengurus RT/RW", value: data.pengurusRtRw, fill: COLORS[4] },
          { name: "Tokoh Agama", value: data.tokohAgama, fill: COLORS[5] },
          { name: "Tokoh Masyarakat", value: data.tokohMasyarakat, fill: COLORS[6] },
        ];
      }
      case "penerimaanMasyarakat": {
        const data = penerimaanMasyarakatData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Sangat Tidak Diterima", value: data.sangatTidakDiterima, fill: COLORS[0] },
          { name: "Tidak Diterima", value: data.tidakDiterima, fill: COLORS[4] },
          { name: "Netral", value: data.netral, fill: COLORS[3] },
          { name: "Diterima", value: data.diterima, fill: COLORS[2] },
          { name: "Sangat Diterima", value: data.sangatDiterima, fill: COLORS[1] },
        ];
      }
      case "ketahananEkonomi": {
        const data = ketahananEkonomiData[kabupaten];
        if (!data) return [];
        return [
          { name: "Sangat Tidak Setuju", value: data.sangatTidakSetuju, fill: COLORS[0] },
          { name: "Tidak Setuju", value: data.tidakSetuju, fill: COLORS[4] },
          { name: "Ragu-ragu", value: data.raguRagu, fill: COLORS[3] },
          { name: "Setuju", value: data.setuju, fill: COLORS[2] },
          { name: "Sangat Setuju", value: data.sangatSetuju, fill: COLORS[1] },
        ];
      }
      case "dukunganPasangan": {
        const data = dukunganPasanganData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Sangat Negatif", value: data.sangatNegatif, fill: COLORS[0] },
          { name: "Negatif", value: data.negatif, fill: COLORS[4] },
          { name: "Netral", value: data.netral, fill: COLORS[3] },
          { name: "Positif", value: data.positif, fill: COLORS[2] },
          { name: "Sangat Positif", value: data.sangatPositif, fill: COLORS[1] },
        ];
      }
      case "alasanTidakKerja": {
        const data = alasanTidakKerjaData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Ibu Rumah Tangga", value: data.ibuRumahTangga, fill: COLORS[0] },
          { name: "Lainnya", value: data.lainnya, fill: COLORS[1] },
          { name: "Pensiun", value: data.pensiun, fill: COLORS[2] },
          { name: "PHK", value: data.phk, fill: COLORS[3] },
          { name: "Sekolah", value: data.sekolah, fill: COLORS[4] },
          { name: "Usaha Bangkrut", value: data.usahaBangkrut, fill: COLORS[5] },
        ];
      }
      case "pekerjaanUtama": {
        const data = pekerjaanUtamaData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Berusaha Sendiri", value: data.berusahaSendiri, fill: COLORS[0] },
          { name: "Pegawai/Karyawan", value: data.pegawai, fill: COLORS[1] },
          { name: "Serabutan", value: data.serabutan, fill: COLORS[2] },
        ];
      }
      case "pendidikan": {
        const data = pendidikanData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "SMA/sederajat", value: data.sma, fill: COLORS[0] },
          { name: "Diploma", value: data.diploma, fill: COLORS[1] },
          { name: "S1", value: data.s1, fill: COLORS[2] },
          { name: "S2", value: data.s2, fill: COLORS[3] },
          { name: "S3", value: data.s3, fill: COLORS[4] },
        ];
      }
      case "levelRukunUPA": {
        const data = levelRukunUPAData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Rendah", value: data.rendah, fill: COLORS[0] },
          { name: "Sedang", value: data.sedang, fill: COLORS[2] },
          { name: "Tinggi", value: data.tinggi, fill: COLORS[1] },
        ];
      }
      case "umurAnak": {
        const data = umurAnakData[kabupaten];
        if (!data) return [];
        return [
          { name: "< 6 tahun", value: data.kurang6, fill: COLORS[0] },
          { name: "6-12 tahun", value: data.antara6_12, fill: COLORS[1] },
          { name: "13-15 tahun", value: data.antara13_15, fill: COLORS[2] },
          { name: "16-18 tahun", value: data.antara16_18, fill: COLORS[3] },
          { name: "> 18 tahun", value: data.lebih18, fill: COLORS[4] },
        ];
      }
      case "sekolahAnak": {
        const data = sekolahAnakData[kabupaten];
        if (!data) return [];
        return [
          { name: "< 3 Anak", value: data.kurang3, fill: COLORS[1] },
          { name: "3-5 Anak", value: data.antara3_5, fill: COLORS[2] },
          { name: ">= 6 Anak", value: data.lebih6, fill: COLORS[3] },
        ];
      }
      case "pendidikanAnak": {
        const data = pendidikanAnakData[kabupaten];
        if (!data) return [];
        return [
          { name: "TB/TK", value: data.tbTk, fill: COLORS[0] },
          { name: "SD/MI", value: data.sdMi, fill: COLORS[1] },
          { name: "SMP/MTs", value: data.smpMts, fill: COLORS[2] },
          { name: "SMA/MA", value: data.smaMa, fill: COLORS[3] },
          { name: "Diploma", value: data.diploma, fill: COLORS[4] },
          { name: "S1", value: data.s1, fill: COLORS[5] },
        ];
      }
      case "pendapatanSES": {
        const data = pendapatanSESLengkapData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Rendah", value: data.rendah, fill: COLORS[0] },
          { name: "Menengah", value: data.menengah, fill: COLORS[2] },
          { name: "Menengah Atas", value: data.menengahAtas, fill: COLORS[3] },
          { name: "Tinggi", value: data.tinggi, fill: COLORS[1] },
        ];
      }
      case "dampakPolitikPasangan": {
        const data = dampakPolitikPasanganLengkapData[kabupaten]?.[jenjang];
        if (!data) return [];
        return [
          { name: "Sangat Negatif", value: data.sangatNegatif, fill: COLORS[0] },
          { name: "Negatif", value: data.negatif, fill: COLORS[4] },
          { name: "Netral", value: data.netral, fill: COLORS[3] },
          { name: "Positif", value: data.positif, fill: COLORS[2] },
          { name: "Sangat Positif", value: data.sangatPositif, fill: COLORS[1] },
        ];
      }
      case "jenisBantuan": {
        const data = jenisBantuanData[kabupaten];
        if (!data) return [];
        return [
          { name: "PKH", value: data.pkh, fill: COLORS[0] },
          { name: "KIP", value: data.kip, fill: COLORS[1] },
          { name: "BPNT", value: data.bpnt, fill: COLORS[2] },
          { name: "KUR", value: data.kur, fill: COLORS[3] },
          { name: "Lainnya", value: data.lainnya, fill: COLORS[4] },
        ];
      }
      case "sumberBantuan": {
        const data = sumberBantuanData[kabupaten];
        if (!data) return [];
        return [
          { name: "Anggota Dewan", value: data.anggotaDewan, fill: COLORS[0] },
          { name: "Struktur", value: data.struktur, fill: COLORS[1] },
          { name: "Mitra Strategis", value: data.mitraStrategis, fill: COLORS[2] },
          { name: "Pemerintah", value: data.pemerintah, fill: COLORS[3] },
          { name: "Lainnya", value: data.lainnya, fill: COLORS[4] },
        ];
      }
      case "programDibutuhkan": {
        const data = programDibutuhkanData[kabupaten];
        if (!data) return [];
        return [
          { name: "Beasiswa", value: data.beasiswa, fill: COLORS[0] },
          { name: "Modal Usaha", value: data.modalUsaha, fill: COLORS[1] },
          { name: "Pelatihan", value: data.pelatihan, fill: COLORS[2] },
          { name: "Asuransi", value: data.asuransi, fill: COLORS[3] },
          { name: "Konseling", value: data.konseling, fill: COLORS[4] },
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
