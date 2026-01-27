import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";
import { useRKRATMutations, useRKRATPeriods, useUserBidang, RKRATEntryInput } from "@/hooks/useRKRAT";
import { TEMA_UTAMA } from "@/data/rkratData";

const BULAN_OPTIONS = [
  { key: "jadwal_jan", label: "Januari" },
  { key: "jadwal_feb", label: "Februari" },
  { key: "jadwal_mar", label: "Maret" },
  { key: "jadwal_apr", label: "April" },
  { key: "jadwal_may", label: "Mei" },
  { key: "jadwal_jun", label: "Juni" },
  { key: "jadwal_jul", label: "Juli" },
  { key: "jadwal_aug", label: "Agustus" },
  { key: "jadwal_sep", label: "September" },
  { key: "jadwal_oct", label: "Oktober" },
  { key: "jadwal_nov", label: "November" },
  { key: "jadwal_dec", label: "Desember" },
];

interface RKRATEntryFormProps {
  onSuccess?: () => void;
}

export function RKRATEntryForm({ onSuccess }: RKRATEntryFormProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { createEntry, loading } = useRKRATMutations();
  const { activePeriod } = useRKRATPeriods();
  const { userBidang } = useUserBidang();

  const [formData, setFormData] = useState({
    tema_utama: "",
    program_unggulan: "",
    kegiatan_utama: "",
    outcome: "",
    target: "",
    fokus: "",
    anggaran: "",
    jadwal: {} as Record<string, boolean>,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!activePeriod) {
      toast({
        title: "Error",
        description: "Tidak ada periode aktif",
        variant: "destructive",
      });
      return;
    }

    if (!userBidang?.bidang_id) {
      toast({
        title: "Error",
        description: "Anda belum ditugaskan ke bidang manapun. Hubungi Superadmin.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.tema_utama || !formData.program_unggulan || !formData.kegiatan_utama) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive",
      });
      return;
    }

    try {
      const input: RKRATEntryInput = {
        period_id: activePeriod.id,
        bidang_id: userBidang.bidang_id,
        tema_utama: formData.tema_utama,
        program_unggulan: formData.program_unggulan,
        kegiatan_utama: formData.kegiatan_utama,
        outcome: formData.outcome || undefined,
        target: formData.target || undefined,
        fokus: formData.fokus || undefined,
        anggaran: parseInt(formData.anggaran) || 0,
        jadwal_jan: formData.jadwal.jadwal_jan || false,
        jadwal_feb: formData.jadwal.jadwal_feb || false,
        jadwal_mar: formData.jadwal.jadwal_mar || false,
        jadwal_apr: formData.jadwal.jadwal_apr || false,
        jadwal_may: formData.jadwal.jadwal_may || false,
        jadwal_jun: formData.jadwal.jadwal_jun || false,
        jadwal_jul: formData.jadwal.jadwal_jul || false,
        jadwal_aug: formData.jadwal.jadwal_aug || false,
        jadwal_sep: formData.jadwal.jadwal_sep || false,
        jadwal_oct: formData.jadwal.jadwal_oct || false,
        jadwal_nov: formData.jadwal.jadwal_nov || false,
        jadwal_dec: formData.jadwal.jadwal_dec || false,
      };

      await createEntry(input);

      toast({
        title: "Berhasil",
        description: "Kegiatan berhasil diajukan dan menunggu persetujuan Superadmin",
      });

      setFormData({
        tema_utama: "",
        program_unggulan: "",
        kegiatan_utama: "",
        outcome: "",
        target: "",
        fokus: "",
        anggaran: "",
        jadwal: {},
      });
      setOpen(false);
      onSuccess?.();
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Gagal menyimpan kegiatan",
        variant: "destructive",
      });
    }
  };

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      jadwal: {
        ...prev.jadwal,
        [key]: checked,
      },
    }));
  };

  if (!userBidang) {
    return (
      <Button disabled className="gap-2">
        <Plus className="w-4 h-4" />
        Tambah Kegiatan
      </Button>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Tambah Kegiatan
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Tambah Kegiatan RKRAT</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-muted/50 p-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Bidang: <span className="font-medium text-foreground">{userBidang.bidang?.name}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Periode: <span className="font-medium text-foreground">{activePeriod?.year || "-"}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tema_utama">Tema Utama *</Label>
              <Select
                value={formData.tema_utama}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, tema_utama: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih tema utama" />
                </SelectTrigger>
                <SelectContent>
                  {TEMA_UTAMA.map((tema) => (
                    <SelectItem key={tema} value={tema}>
                      {tema}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="program_unggulan">Program Unggulan *</Label>
              <Input
                id="program_unggulan"
                value={formData.program_unggulan}
                onChange={(e) => setFormData((prev) => ({ ...prev, program_unggulan: e.target.value }))}
                placeholder="Nama program unggulan"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="kegiatan_utama">Kegiatan Utama *</Label>
            <Textarea
              id="kegiatan_utama"
              value={formData.kegiatan_utama}
              onChange={(e) => setFormData((prev) => ({ ...prev, kegiatan_utama: e.target.value }))}
              placeholder="Deskripsi kegiatan utama"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="outcome">Outcome</Label>
              <Textarea
                id="outcome"
                value={formData.outcome}
                onChange={(e) => setFormData((prev) => ({ ...prev, outcome: e.target.value }))}
                placeholder="Hasil yang diharapkan"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="target">Target</Label>
              <Textarea
                id="target"
                value={formData.target}
                onChange={(e) => setFormData((prev) => ({ ...prev, target: e.target.value }))}
                placeholder="Target capaian"
                rows={2}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fokus">Fokus</Label>
              <Input
                id="fokus"
                value={formData.fokus}
                onChange={(e) => setFormData((prev) => ({ ...prev, fokus: e.target.value }))}
                placeholder="Fokus kegiatan"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="anggaran">Rencana Anggaran (Rp)</Label>
              <Input
                id="anggaran"
                type="number"
                value={formData.anggaran}
                onChange={(e) => setFormData((prev) => ({ ...prev, anggaran: e.target.value }))}
                placeholder="0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Jadwal Pelaksanaan</Label>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {BULAN_OPTIONS.map((bulan) => (
                <div key={bulan.key} className="flex items-center space-x-2">
                  <Checkbox
                    id={bulan.key}
                    checked={formData.jadwal[bulan.key] || false}
                    onCheckedChange={(checked) => handleCheckboxChange(bulan.key, checked as boolean)}
                  />
                  <Label htmlFor={bulan.key} className="text-sm font-normal cursor-pointer">
                    {bulan.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Batal
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Menyimpan..." : "Ajukan Kegiatan"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
