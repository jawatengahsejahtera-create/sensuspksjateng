import { Card, CardContent } from "@/components/ui/card";
import { Users, UserCheck, TrendingUp, Award } from "lucide-react";
import { jumlahAnggotaData, jenisKelaminData, punyaBinaanData, bayarIuranData } from "@/data/pksData";

interface SummaryCardsProps {
  kabupaten: string;
  jenjang: string;
}

export const SummaryCards = ({ kabupaten, jenjang }: SummaryCardsProps) => {
  const anggotaData = jumlahAnggotaData[kabupaten];
  const genderData = jenisKelaminData[kabupaten];
  const binaanData = punyaBinaanData[kabupaten]?.[jenjang];
  const iuranData = bayarIuranData[kabupaten]?.[jenjang];

  const totalAnggota = anggotaData ? anggotaData.A3 + anggotaData.A4 + anggotaData.A5 : 0;
  const anggotaJenjang = anggotaData ? anggotaData[jenjang as keyof typeof anggotaData] : 0;
  const persentasePunyaBinaan = binaanData ? ((binaanData.punya / (binaanData.punya + binaanData.tidak)) * 100).toFixed(1) : "0";
  const persentaseBayarIuran = iuranData ? ((iuranData.ya / (iuranData.ya + iuranData.tidak)) * 100).toFixed(1) : "0";

  const cards = [
    {
      title: "Total Anggota",
      value: totalAnggota.toLocaleString(),
      subtitle: `Di ${kabupaten}`,
      icon: Users,
      color: "bg-primary text-primary-foreground",
    },
    {
      title: `Anggota ${jenjang}`,
      value: anggotaJenjang.toLocaleString(),
      subtitle: `${totalAnggota > 0 ? ((anggotaJenjang / totalAnggota) * 100).toFixed(1) : 0}% dari total`,
      icon: UserCheck,
      color: "bg-pks-green text-white",
    },
    {
      title: "Punya Binaan",
      value: `${persentasePunyaBinaan}%`,
      subtitle: `Jenjang ${jenjang}`,
      icon: TrendingUp,
      color: "bg-pks-blue text-white",
    },
    {
      title: "Bayar Iuran",
      value: `${persentaseBayarIuran}%`,
      subtitle: `Jenjang ${jenjang}`,
      icon: Award,
      color: "bg-pks-gold text-foreground",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          className="shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-0">
            <div className="flex items-start justify-between p-4">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-medium">{card.title}</p>
                <p className="text-2xl font-bold text-foreground">{card.value}</p>
                <p className="text-xs text-muted-foreground">{card.subtitle}</p>
              </div>
              <div className={`p-2 rounded-lg ${card.color}`}>
                <card.icon className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
