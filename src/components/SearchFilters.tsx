import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { kabupatenList, jenjangList } from "@/data/pksData";
import { MapPin, GraduationCap } from "lucide-react";

interface SearchFiltersProps {
  selectedKabupaten: string;
  selectedJenjang: string;
  onKabupatenChange: (value: string) => void;
  onJenjangChange: (value: string) => void;
}

export const SearchFilters = ({
  selectedKabupaten,
  selectedJenjang,
  onKabupatenChange,
  onJenjangChange,
}: SearchFiltersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          Pilih Kabupaten/Kota
        </label>
        <Select value={selectedKabupaten} onValueChange={onKabupatenChange}>
          <SelectTrigger className="w-full h-12 bg-card border-border hover:border-primary/50 transition-colors">
            <SelectValue placeholder="Pilih Kabupaten/Kota..." />
          </SelectTrigger>
          <SelectContent className="max-h-80 bg-card z-50">
            {kabupatenList.map((kab) => (
              <SelectItem key={kab} value={kab} className="cursor-pointer hover:bg-secondary">
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
          <SelectContent className="bg-card z-50">
            {jenjangList.map((jenjang) => (
              <SelectItem key={jenjang} value={jenjang} className="cursor-pointer hover:bg-secondary">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{jenjang}</span>
                  <span className="text-muted-foreground text-xs">
                    {jenjang === "A3" && "- Kader Pemula"}
                    {jenjang === "A4" && "- Kader Muda"}
                    {jenjang === "A5" && "- Kader Madya"}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
