import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, XCircle, Clock, FileText, DollarSign } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useRKRATEntries, useRKRATMutations, useBidangList, useRKRATPeriods, RKRATEntry } from "@/hooks/useRKRAT";
import { formatCurrency } from "@/data/rkratData";

const RKRATApprovals = () => {
  const { toast } = useToast();
  const { bidangList } = useBidangList();
  const { activePeriod, periods } = useRKRATPeriods();
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [selectedBidang, setSelectedBidang] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("pending");

  const periodId = selectedPeriod || activePeriod?.id || "";
  const { entries, loading, refetch } = useRKRATEntries(periodId, selectedBidang === "all" ? undefined : selectedBidang);
  const { approveEntry, loading: actionLoading } = useRKRATMutations();

  const [rejectDialog, setRejectDialog] = useState<{ open: boolean; entry: RKRATEntry | null }>({
    open: false,
    entry: null,
  });
  const [rejectionReason, setRejectionReason] = useState("");

  const filteredEntries = entries.filter((entry) => {
    if (statusFilter === "all") return true;
    return entry.status === statusFilter;
  });

  const handleApprove = async (entry: RKRATEntry) => {
    try {
      await approveEntry(entry.id, true);
      toast({
        title: "Berhasil",
        description: "Kegiatan berhasil disetujui",
      });
      refetch();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Gagal menyetujui kegiatan",
        variant: "destructive",
      });
    }
  };

  const handleReject = async () => {
    if (!rejectDialog.entry) return;

    try {
      await approveEntry(rejectDialog.entry.id, false, rejectionReason);
      toast({
        title: "Berhasil",
        description: "Kegiatan berhasil ditolak",
      });
      setRejectDialog({ open: false, entry: null });
      setRejectionReason("");
      refetch();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Gagal menolak kegiatan",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            <Clock className="w-3 h-3 mr-1" />
            Menunggu
          </Badge>
        );
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="w-3 h-3 mr-1" />
            Disetujui
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            <XCircle className="w-3 h-3 mr-1" />
            Ditolak
          </Badge>
        );
      default:
        return null;
    }
  };

  const pendingCount = entries.filter((e) => e.status === "pending").length;
  const approvedCount = entries.filter((e) => e.status === "approved").length;
  const rejectedCount = entries.filter((e) => e.status === "rejected").length;
  const totalAnggaran = entries.filter((e) => e.status === "approved").reduce((sum, e) => sum + e.anggaran, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Persetujuan RKRAT</h1>
        <p className="text-muted-foreground">
          Setujui atau tolak pengajuan kegiatan dari bidang-bidang
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Menunggu</p>
                <p className="text-2xl font-bold">{pendingCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Disetujui</p>
                <p className="text-2xl font-bold">{approvedCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ditolak</p>
                <p className="text-2xl font-bold">{rejectedCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total RAT Disetujui</p>
                <p className="text-lg font-bold">{formatCurrency(totalAnggaran)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedPeriod || activePeriod?.id || ""} onValueChange={setSelectedPeriod}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih Periode" />
              </SelectTrigger>
              <SelectContent>
                {periods.map((period) => (
                  <SelectItem key={period.id} value={period.id}>
                    Tahun {period.year} {period.is_active && "(Aktif)"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedBidang} onValueChange={setSelectedBidang}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih Bidang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Bidang</SelectItem>
                {bidangList.map((bidang) => (
                  <SelectItem key={bidang.id} value={bidang.id}>
                    {bidang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="pending">Menunggu</SelectItem>
                <SelectItem value="approved">Disetujui</SelectItem>
                <SelectItem value="rejected">Ditolak</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Pengajuan Kegiatan</CardTitle>
          <CardDescription>
            {filteredEntries.length} kegiatan ditemukan
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : filteredEntries.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
              Belum ada pengajuan kegiatan
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bidang</TableHead>
                    <TableHead>Kegiatan</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Anggaran</TableHead>
                    <TableHead>Tanggal Pengajuan</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEntries.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell className="font-medium">
                        {entry.bidang?.name || "-"}
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {entry.kegiatan_utama}
                      </TableCell>
                      <TableCell>{entry.program_unggulan}</TableCell>
                      <TableCell className="text-primary font-medium">
                        {formatCurrency(entry.anggaran)}
                      </TableCell>
                      <TableCell>
                        {format(new Date(entry.submitted_at), "dd MMM yyyy", { locale: id })}
                      </TableCell>
                      <TableCell>{getStatusBadge(entry.status)}</TableCell>
                      <TableCell className="text-right">
                        {entry.status === "pending" && (
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-green-600 hover:text-green-700 hover:bg-green-50"
                              onClick={() => handleApprove(entry)}
                              disabled={actionLoading}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Setujui
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => setRejectDialog({ open: true, entry })}
                              disabled={actionLoading}
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Tolak
                            </Button>
                          </div>
                        )}
                        {entry.status === "rejected" && entry.rejection_reason && (
                          <span className="text-sm text-muted-foreground">
                            Alasan: {entry.rejection_reason}
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Reject Dialog */}
      <Dialog open={rejectDialog.open} onOpenChange={(open) => setRejectDialog({ open, entry: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tolak Pengajuan</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Berikan alasan penolakan untuk kegiatan ini:
            </p>
            <p className="font-medium">{rejectDialog.entry?.kegiatan_utama}</p>
            <Textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Alasan penolakan..."
              rows={3}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRejectDialog({ open: false, entry: null })}>
              Batal
            </Button>
            <Button variant="destructive" onClick={handleReject} disabled={actionLoading}>
              Tolak
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RKRATApprovals;
