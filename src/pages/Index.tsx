import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchFilters } from "@/components/SearchFilters";
import { CategorySelector } from "@/components/CategorySelector";
import { DataChart } from "@/components/DataChart";
import { SummaryCards } from "@/components/SummaryCards";
import { DataCategory } from "@/data/pksData";
import { BarChart3, Search, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import logoPks from "@/assets/logo-pks.jpg";

const Index = () => {
  const [selectedKabupaten, setSelectedKabupaten] = useState("");
  const [selectedJenjang, setSelectedJenjang] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<DataCategory>("jumlahAnggota");
  const { user, signOut } = useAuth();

  const isSearchReady = selectedKabupaten && selectedJenjang;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-primary-foreground py-8 px-4 mb-8">
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img 
                src={logoPks} 
                alt="Logo PKS" 
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white p-1 shadow-lg object-contain"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Sistem Sensus Data Anggota PKS
                </h1>
                <p className="text-primary-foreground/80 text-sm md:text-base">
                  Jawa Tengah
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-primary-foreground/80 hidden md:block">
                {user?.email}
              </span>
              <Button
                variant="secondary"
                size="sm"
                onClick={signOut}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden md:inline">Logout</span>
              </Button>
            </div>
          </div>
          <p className="max-w-2xl text-primary-foreground/90 text-sm md:text-base leading-relaxed">
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
              onKabupatenChange={setSelectedKabupaten}
              onJenjangChange={setSelectedJenjang}
            />
          </CardContent>
        </Card>

        {/* Content */}
        {!isSearchReady ? (
          <Card className="shadow-card">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="p-4 rounded-full bg-secondary mb-4">
                <BarChart3 className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Silakan Pilih Filter
              </h3>
              <p className="text-muted-foreground max-w-md">
                Pilih Kabupaten/Kota dan Jenjang Kaderisasi di atas untuk melihat data statistik anggota PKS
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
                  {selectedJenjang === "A3" && " (Kader Pemula)"}
                  {selectedJenjang === "A4" && " (Kader Muda)"}
                  {selectedJenjang === "A5" && " (Kader Madya)"}
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
