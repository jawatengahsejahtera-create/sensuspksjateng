import { Card } from "@/components/ui/card";
import { DataCategory, categoryLabels } from "@/data/pksData";
import { 
  Users, 
  UserCircle2, 
  Calendar, 
  GraduationCap, 
  HeartPulse, 
  Briefcase, 
  Clock, 
  UsersRound, 
  Building2, 
  Award, 
  MessageCircle, 
  Wallet, 
  Home, 
  Baby, 
  HandHeart,
  Target,
  Heart,
  TrendingUp,
  BookOpen
} from "lucide-react";

interface CategorySelectorProps {
  selectedCategory: DataCategory;
  onCategoryChange: (category: DataCategory) => void;
}

const categoryIcons: Record<DataCategory, React.ReactNode> = {
  jumlahAnggota: <Users className="w-5 h-5" />,
  jenisKelamin: <UserCircle2 className="w-5 h-5" />,
  kelompokUmur: <Calendar className="w-5 h-5" />,
  pendidikan: <GraduationCap className="w-5 h-5" />,
  bpjs: <HeartPulse className="w-5 h-5" />,
  statusKerja: <Briefcase className="w-5 h-5" />,
  alasanTidakKerja: <Briefcase className="w-5 h-5" />,
  pekerjaanUtama: <Building2 className="w-5 h-5" />,
  lamaPembinaan: <Clock className="w-5 h-5" />,
  punyaBinaan: <UsersRound className="w-5 h-5" />,
  levelRukunUPA: <Award className="w-5 h-5" />,
  peranMasyarakat: <MessageCircle className="w-5 h-5" />,
  penerimaanMasyarakat: <Heart className="w-5 h-5" />,
  terlibatKepengurusan: <Building2 className="w-5 h-5" />,
  bayarIuran: <Wallet className="w-5 h-5" />,
  dampakPolitikPasangan: <Heart className="w-5 h-5" />,
  dampakPolitikAnak: <Baby className="w-5 h-5" />,
  dampakPolitikKarir: <TrendingUp className="w-5 h-5" />,
  dukunganPasangan: <Heart className="w-5 h-5" />,
  ketahananEkonomi: <Wallet className="w-5 h-5" />,
  pendapatanSES: <TrendingUp className="w-5 h-5" />,
  pendapatanNishob: <Target className="w-5 h-5" />,
  hafalanAnak: <BookOpen className="w-5 h-5" />,
  ketahananKeluarga: <Home className="w-5 h-5" />,
  frekKonflik: <MessageCircle className="w-5 h-5" />,
  jumlahAnak: <Baby className="w-5 h-5" />,
  umurAnak: <Calendar className="w-5 h-5" />,
  sekolahAnak: <GraduationCap className="w-5 h-5" />,
  pendidikanAnak: <BookOpen className="w-5 h-5" />,
  terimaBantuan: <HandHeart className="w-5 h-5" />,
  jenisBantuan: <HandHeart className="w-5 h-5" />,
  sumberBantuan: <Building2 className="w-5 h-5" />,
  programDibutuhkan: <Target className="w-5 h-5" />,
};

const availableCategories: DataCategory[] = [
  "jumlahAnggota",
  "jenisKelamin",
  "kelompokUmur",
  "statusKerja",
  "punyaBinaan",
  "terlibatKepengurusan",
  "bayarIuran",
  "pendapatanNishob",
  "ketahananKeluarga",
  "jumlahAnak",
  "hafalanAnak",
  "terimaBantuan",
  "frekKonflik"
];

export const CategorySelector = ({ selectedCategory, onCategoryChange }: CategorySelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Pilih Kategori Data</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {availableCategories.map((category) => (
          <Card
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-card-hover group ${
              selectedCategory === category
                ? "ring-2 ring-primary bg-primary/5 border-primary"
                : "hover:border-primary/30 bg-card"
            }`}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <div
                className={`p-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                }`}
              >
                {categoryIcons[category]}
              </div>
              <span className={`text-xs font-medium ${
                selectedCategory === category ? "text-primary" : "text-muted-foreground"
              }`}>
                {categoryLabels[category]}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
