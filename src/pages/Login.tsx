import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, LogIn, UserPlus } from "lucide-react";
import logoPks from "@/assets/logo-pks.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        
        // Create approval request for new user
        if (data.user) {
          await supabase.from("user_approvals").insert({
            user_id: data.user.id,
            email: data.user.email || email,
            status: "pending",
          });
        }
        
        toast({
          title: "Registrasi Berhasil!",
          description: "Akun Anda telah dibuat. Menunggu persetujuan dari admin untuk dapat login.",
        });
        setIsSignUp(false);
        // Sign out immediately after signup
        await supabase.auth.signOut();
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;

        // Check if user is approved
        const { data: approvalData } = await supabase
          .from("user_approvals")
          .select("status")
          .eq("user_id", data.user.id)
          .maybeSingle();

        // Check if user is superadmin (bypass approval)
        const { data: roleData } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", data.user.id)
          .eq("role", "superadmin")
          .maybeSingle();

        const isSuperadmin = roleData?.role === "superadmin";
        const isApproved = approvalData?.status === "approved";

        if (!isSuperadmin && !isApproved) {
          // Sign out the user if not approved
          await supabase.auth.signOut();
          
          const statusMessage = approvalData?.status === "rejected" 
            ? "Pendaftaran Anda ditolak oleh admin."
            : "Akun Anda belum disetujui oleh admin. Silakan tunggu persetujuan.";
          
          toast({
            title: "Akses Ditolak",
            description: statusMessage,
            variant: "destructive",
          });
          return;
        }

        toast({
          title: "Login Berhasil!",
          description: "Selamat datang kembali.",
        });
        navigate("/");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Terjadi kesalahan",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-elegant border-t-4 border-t-primary">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <img
              src={logoPks}
              alt="Logo PKS"
              className="w-20 h-20 rounded-xl bg-white p-1 shadow-lg object-contain"
            />
          </div>
          <div>
            <CardTitle className="text-2xl">
              {isSignUp ? "Daftar Akun" : "Login"}
            </CardTitle>
            <CardDescription>
              Sistem Sensus Data Anggota PKS Jawa Tengah
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                "Loading..."
              ) : isSignUp ? (
                <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Daftar
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </>
              )}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <button
              type="button"
              className="text-sm text-primary hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Sudah punya akun? Login"
                : "Belum punya akun? Daftar"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
