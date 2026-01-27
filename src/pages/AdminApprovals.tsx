import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Clock, Users, UserCheck, UserX, Building2, Link } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useBidangList, useUserBidangMutations, useAllUserBidang } from "@/hooks/useRKRAT";

interface UserApproval {
  id: string;
  user_id: string;
  email: string;
  status: string;
  created_at: string;
  approved_at: string | null;
}

const AdminApprovals = () => {
  const [approvals, setApprovals] = useState<UserApproval[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const { toast } = useToast();
  const { bidangList } = useBidangList();
  const { assignments, refetch: refetchAssignments } = useAllUserBidang();
  const { assignUserToBidang, loading: assignLoading } = useUserBidangMutations();

  const [selectedBidang, setSelectedBidang] = useState<Record<string, string>>({});

  const fetchApprovals = async () => {
    try {
      const { data, error } = await supabase
        .from("user_approvals")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setApprovals(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Gagal memuat data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApprovals();
  }, []);

  const handleApproval = async (userId: string, status: "approved" | "rejected") => {
    setActionLoading(userId);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from("user_approvals")
        .update({
          status,
          approved_by: user?.id,
          approved_at: new Date().toISOString(),
        })
        .eq("user_id", userId);

      if (error) throw error;

      toast({
        title: status === "approved" ? "User Disetujui" : "User Ditolak",
        description: `Status user berhasil diubah menjadi ${status === "approved" ? "disetujui" : "ditolak"}.`,
      });

      fetchApprovals();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Gagal mengubah status",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleAssignBidang = async (userId: string) => {
    const bidangId = selectedBidang[userId];
    if (!bidangId) {
      toast({
        title: "Error",
        description: "Pilih bidang terlebih dahulu",
        variant: "destructive",
      });
      return;
    }

    try {
      await assignUserToBidang(userId, bidangId);
      toast({
        title: "Berhasil",
        description: "User berhasil ditugaskan ke bidang",
      });
      refetchAssignments();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Gagal menugaskan user",
        variant: "destructive",
      });
    }
  };

  const getUserBidang = (userId: string) => {
    return assignments.find(a => a.user_id === userId);
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

  const pendingCount = approvals.filter((a) => a.status === "pending").length;
  const approvedCount = approvals.filter((a) => a.status === "approved").length;
  const rejectedCount = approvals.filter((a) => a.status === "rejected").length;
  const approvedUsers = approvals.filter((a) => a.status === "approved");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Manajemen User</h1>
        <p className="text-muted-foreground">
          Kelola persetujuan user dan penugasan bidang
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total User</p>
                <p className="text-2xl font-bold">{approvals.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
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
                <UserCheck className="w-6 h-6 text-green-600" />
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
              <div className="p-3 bg-primary/10 rounded-lg">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Bidang</p>
                <p className="text-2xl font-bold">{bidangList.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="approvals" className="space-y-4">
        <TabsList>
          <TabsTrigger value="approvals">Persetujuan User</TabsTrigger>
          <TabsTrigger value="bidang">Penugasan Bidang</TabsTrigger>
        </TabsList>

        <TabsContent value="approvals">
          <Card>
            <CardHeader>
              <CardTitle>Daftar Permintaan Pendaftaran</CardTitle>
              <CardDescription>
                User yang mendaftar harus disetujui oleh superadmin sebelum dapat login
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : approvals.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Belum ada permintaan pendaftaran
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Tanggal Daftar</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tanggal Approval</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {approvals.map((approval) => (
                      <TableRow key={approval.id}>
                        <TableCell className="font-medium">{approval.email}</TableCell>
                        <TableCell>
                          {format(new Date(approval.created_at), "dd MMM yyyy, HH:mm", {
                            locale: id,
                          })}
                        </TableCell>
                        <TableCell>{getStatusBadge(approval.status)}</TableCell>
                        <TableCell>
                          {approval.approved_at
                            ? format(new Date(approval.approved_at), "dd MMM yyyy, HH:mm", {
                                locale: id,
                              })
                            : "-"}
                        </TableCell>
                        <TableCell className="text-right">
                          {approval.status === "pending" && (
                            <div className="flex justify-end gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-green-600 hover:text-green-700 hover:bg-green-50"
                                onClick={() => handleApproval(approval.user_id, "approved")}
                                disabled={actionLoading === approval.user_id}
                              >
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Setujui
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                onClick={() => handleApproval(approval.user_id, "rejected")}
                                disabled={actionLoading === approval.user_id}
                              >
                                <XCircle className="w-4 h-4 mr-1" />
                                Tolak
                              </Button>
                            </div>
                          )}
                          {approval.status !== "pending" && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleApproval(approval.user_id, "pending" as any)}
                              disabled={actionLoading === approval.user_id}
                            >
                              Reset
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bidang">
          <Card>
            <CardHeader>
              <CardTitle>Penugasan User ke Bidang</CardTitle>
              <CardDescription>
                Tugaskan user yang sudah disetujui ke bidang tertentu untuk dapat menginput RKRAT
              </CardDescription>
            </CardHeader>
            <CardContent>
              {approvedUsers.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Belum ada user yang disetujui
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Bidang Saat Ini</TableHead>
                      <TableHead>Pilih Bidang</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {approvedUsers.map((user) => {
                      const currentBidang = getUserBidang(user.user_id);
                      return (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.email}</TableCell>
                          <TableCell>
                            {currentBidang?.bidang ? (
                              <Badge variant="secondary">{currentBidang.bidang.name}</Badge>
                            ) : (
                              <span className="text-muted-foreground text-sm">Belum ditugaskan</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <Select
                              value={selectedBidang[user.user_id] || ""}
                              onValueChange={(value) =>
                                setSelectedBidang((prev) => ({ ...prev, [user.user_id]: value }))
                              }
                            >
                              <SelectTrigger className="w-[250px]">
                                <SelectValue placeholder="Pilih bidang" />
                              </SelectTrigger>
                              <SelectContent>
                                {bidangList.map((bidang) => (
                                  <SelectItem key={bidang.id} value={bidang.id}>
                                    {bidang.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              size="sm"
                              onClick={() => handleAssignBidang(user.user_id)}
                              disabled={assignLoading || !selectedBidang[user.user_id]}
                            >
                              <Link className="w-4 h-4 mr-1" />
                              Tugaskan
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminApprovals;
