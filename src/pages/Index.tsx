import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchFilters, categoryGroups, categoryGroupLabels } from "@/components/SearchFilters";
import { CategorySelector } from "@/components/CategorySelector";
import { DataChart } from "@/components/DataChart";
import { SummaryCards } from "@/components/SummaryCards";
import { OverviewChart } from "@/components/OverviewChart";
import { DataCategory } from "@/data/pksData";
import { BarChart3, Search } from "lucide-react";
import logoPks from "@/assets/logo-pks.jpg";

const Index = () => {
  const [selectedKabupaten, setSelectedKabupaten] = useState("");
  const [selectedJenjang, setSelectedJenjang] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<DataCategory>("jumlahAnggota");
  const [selectedCategoryGroup, setSelectedCategoryGroup] = useState("semua");

  const isSearchReady = selectedKabupaten && selectedJenjang;

  // Get filtered categories based on selected group
  const filteredCategories = useMemo(() => {
    if (selectedCategoryGroup === "semua") {
      return Object.values(categoryGroups).flat();
    }
    return categoryGroups[selectedCategoryGroup as keyof typeof categoryGroups] || [];
  }, [selectedCategoryGroup]);

  // Reset category when group changes if current category is not in new group
  const handleCategoryGroupChange = (value: string) => {
    setSelectedCategoryGroup(value);
    if (value !== "semua") {
      const groupCategories = categoryGroups[value as keyof typeof categoryGroups] || [];
      if (!groupCategories.includes(selectedCategory)) {
        setSelectedCategory(groupCategories[0] || "jumlahAnggota");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-primary-foreground py-6 px-4 mb-6">
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <img 
              src={logoPks} 
              alt="Logo PKS" 
              className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white p-1 shadow-lg object-contain"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                Sistem Sensus Data Anggota PKS
              </h1>
              <p className="text-primary-foreground/80 text-sm">
                Jawa Tengah
              </p>
            </div>
          </div>
          <p className="max-w-2xl text-primary-foreground/90 text-sm leading-relaxed">
            Selamat datang di sistem pencarian sensus data anggota PKS Jawa Tengah. 
            Silakan pilih Kabupaten/Kota dan Jenjang Kaderisasi untuk memulai pencarian data anggota.
          </p>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-4 pb-12 space-y-8">
        {/* Search Filters Card */}
        <Card className="shadow-elegant border-t-4 border-t-primary">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Search className="w-5 h-5 text-primary" />
              Filter Pencarian
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SearchFilters
              selectedKabupaten={selectedKabupaten}
              selectedJenjang={selectedJenjang}
              selectedCategoryGroup={selectedCategoryGroup}
              onKabupatenChange={setSelectedKabupaten}
              onJenjangChange={setSelectedJenjang}
              onCategoryGroupChange={handleCategoryGroupChange}
            />
          </CardContent>
        </Card>

        {/* Overview Charts - Always Visible */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            {isSearchReady ? `Data ${selectedKabupaten} - Jenjang ${selectedJenjang}` : "Data Keseluruhan Jawa Tengah"}
          </h2>
          <OverviewChart 
            selectedKabupaten={selectedKabupaten} 
            selectedJenjang={selectedJenjang} 
          />
        </div>

        {/* Detailed Content */}
        {!isSearchReady ? (
          <Card className="shadow-card border-dashed border-2">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <div className="p-4 rounded-full bg-secondary mb-4">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Ingin Lihat Data Per Daerah?
              </h3>
              <p className="text-muted-foreground max-w-md text-sm">
                Pilih Kabupaten/Kota dan Jenjang Kaderisasi di atas untuk melihat data statistik detail per daerah
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8 animate-fade-up">
            {/* Summary Cards */}
            <SummaryCards kabupaten={selectedKabupaten} jenjang={selectedJenjang} />

            {/* Category Selector */}
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <CategorySelector
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  filteredCategories={filteredCategories}
                  selectedGroup={selectedCategoryGroup}
                />
              </CardContent>
            </Card>

            {/* Chart */}
            <DataChart
              kabupaten={selectedKabupaten}
              jenjang={selectedJenjang}
              category={selectedCategory}
            />

            {/* Info */}
            <Card className="bg-secondary/30 border-dashed">
              <CardContent className="py-4">
                <p className="text-sm text-muted-foreground text-center">
                  Menampilkan data untuk <strong className="text-foreground">{selectedKabupaten}</strong> dengan 
                  Jenjang Kaderisasi <strong className="text-primary">{selectedJenjang}</strong>
                  {selectedCategoryGroup !== "semua" && (
                    <span> - Kategori: <strong className="text-primary">{categoryGroupLabels[selectedCategoryGroup]}</strong></span>
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Sistem Sensus Data Anggota PKS Jawa Tengah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
