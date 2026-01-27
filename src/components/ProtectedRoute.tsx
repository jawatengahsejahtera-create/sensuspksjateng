import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

// Routes that bidang users cannot access
const RESTRICTED_ROUTES_FOR_BIDANG_USERS = ["/", "/tracking-pengurus"];

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading: authLoading } = useAuth();
  const location = useLocation();
  const [accessLoading, setAccessLoading] = useState(true);
  const [isSuperadmin, setIsSuperadmin] = useState(false);
  const [hasBidang, setHasBidang] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      if (!user) {
        setAccessLoading(false);
        return;
      }

      // Check if superadmin
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "superadmin")
        .maybeSingle();

      setIsSuperadmin(roleData?.role === "superadmin");

      // Check if user has bidang assignment
      const { data: bidangData } = await supabase
        .from("user_bidang")
        .select("id")
        .eq("user_id", user.id)
        .maybeSingle();

      setHasBidang(!!bidangData);
      setAccessLoading(false);
    };

    checkAccess();
  }, [user]);

  if (authLoading || accessLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user has bidang assignment and is not superadmin, restrict access to certain routes
  if (hasBidang && !isSuperadmin && RESTRICTED_ROUTES_FOR_BIDANG_USERS.includes(location.pathname)) {
    return <Navigate to="/rkrat" replace />;
  }

  return <>{children}</>;
};
