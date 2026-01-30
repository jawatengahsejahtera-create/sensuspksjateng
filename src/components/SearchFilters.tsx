import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { kabupatenList, jenjangList, DataCategory, categoryLabels } from "@/data/pksData";
import { MapPin, GraduationCap, Database } from "lucide-react";

// Group categories for dropdown filter
export const categoryGroups = {
  demografi: ["jumlahAnggota", "jenisKelamin", "kelompokUmur", "pendidikan"] as DataCategory[],
  kesejahteraan: ["bpjs", "statusKerja", "pendapatanNishob", "terimaBantuan"] as DataCategory[],
  organisasi: ["lamaPembinaan", "punyaBinaan", "terlibatKepengurusan", "bayarIuran", "levelRukunUPA"] as DataCategory[],
  sosial: ["peranMasyarakat", "penerimaanMasyarakat", "dampakPolitikPasangan", "dampakPolitikAnak", "dampakPolitikKarir"] as DataCategory[],
  keluarga: ["jumlahAnak", "ketahananKeluarga", "hafalanAnak", "frekKonflik"] as DataCategory[],
};

export const categoryGroupLabels: Record<string, string> = {
  demografi: "Data Demografi",
  kesejahteraan: "Data Kesejahteraan",
  organisasi: "Data Organisasi",
  sosial: "Data Sosial",
  keluarga: "Data Keluarga",
};

interface SearchFiltersProps {
  selectedKabupaten: string;
  selectedJenjang: string;
  selectedCategoryGroup: string;
  onKabupatenChange: (value: string) => void;
  onJenjangChange: (value: string) => void;
  onCategoryGroupChange: (value: string) => void;
}

export const SearchFilters = ({
  selectedKabupaten,
  selectedJenjang,
  selectedCategoryGroup,
  onKabupatenChange,
  onJenjangChange,
  onCategoryGroupChange,
}: SearchFiltersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          Pilih Kabupaten/Kota
        </label>
        <Select value={selectedKabupaten} onValueChange={onKabupatenChange}>
          <SelectTrigger className="w-full h-12 bg-card border-border hover:border-primary/50 transition-colors">
            <SelectValue placeholder="Pilih Kabupaten/Kota..." />
          </SelectTrigger>
          <SelectContent className="max-h-80 bg-popover z-50">
            {kabupatenList.map((kab) => (
              <SelectItem key={kab} value={kab} className="cursor-pointer hover:bg-accent">
                {kab}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <GraduationCap className="w-4 h-4 text-primary" />
          Pilih Jenjang Kaderisasi
        </label>
        <Select value={selectedJenjang} onValueChange={onJenjangChange}>
          <SelectTrigger className="w-full h-12 bg-card border-border hover:border-primary/50 transition-colors">
            <SelectValue placeholder="Pilih Jenjang..." />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            {jenjangList.map((jenjang) => (
              <SelectItem key={jenjang} value={jenjang} className="cursor-pointer hover:bg-accent">
                {jenjang}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Database className="w-4 h-4 text-primary" />
          Pilih Kategori Data
        </label>
        <Select value={selectedCategoryGroup} onValueChange={onCategoryGroupChange}>
          <SelectTrigger className="w-full h-12 bg-card border-border hover:border-primary/50 transition-colors">
            <SelectValue placeholder="Semua Data" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            <SelectItem value="semua" className="cursor-pointer hover:bg-accent">
              Semua Data
            </SelectItem>
            {Object.entries(categoryGroupLabels).map(([key, label]) => (
              <SelectItem key={key} value={key} className="cursor-pointer hover:bg-accent">
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
