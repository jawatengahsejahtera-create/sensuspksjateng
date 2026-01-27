import { useState, useEffect } from "react";
import { Calendar, Users, LogOut, Building2, UserCheck, FileCheck } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ProfileSettings } from "@/components/ProfileSettings";
import logoPks from "@/assets/logo-pks.jpg";
import { supabase } from "@/integrations/supabase/client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { 
    title: "Sensus Data Anggota", 
    url: "/", 
    icon: Users,
    description: "Data anggota PKS Jawa Tengah"
  },
  { 
    title: "RKRAT", 
    url: "/rkrat", 
    icon: Calendar,
    description: "Rencana Kerja & Anggaran Tahunan"
  },
  { 
    title: "Tracking DPC & DPRA", 
    url: "/tracking-pengurus", 
    icon: Building2,
    description: "Data pengurus tingkat Kecamatan & Desa"
  },
];

const adminMenuItems = [
  { 
    title: "Manajemen User", 
    url: "/admin/approvals", 
    icon: UserCheck,
    description: "Kelola persetujuan pendaftaran user"
  },
  { 
    title: "Persetujuan RKRAT", 
    url: "/admin/rkrat-approvals", 
    icon: FileCheck,
    description: "Setujui pengajuan kegiatan bidang"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { user, signOut } = useAuth();
  const collapsed = state === "collapsed";
  const [isSuperadmin, setIsSuperadmin] = useState(false);

  useEffect(() => {
    const checkSuperadmin = async () => {
      if (!user) return;
      
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "superadmin")
        .maybeSingle();
      
      setIsSuperadmin(data?.role === "superadmin");
    };
    
    checkSuperadmin();
  }, [user]);

  return (
    <Sidebar className="border-r border-border bg-card">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-3">
          <img 
            src={logoPks} 
            alt="Logo PKS" 
            className="w-10 h-10 rounded-lg bg-white p-0.5 shadow-sm object-contain flex-shrink-0"
          />
          {!collapsed && (
            <div className="min-w-0">
              <h2 className="font-bold text-foreground text-sm truncate">DPW PKS Jateng</h2>
              <p className="text-xs text-muted-foreground truncate">Sistem Informasi</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">
            {!collapsed && "Menu Utama"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200" 
                      activeClassName="bg-primary/10 text-primary font-medium border-l-2 border-primary"
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && (
                        <div className="min-w-0">
                          <span className="block text-sm truncate">{item.title}</span>
                          <span className="block text-xs text-muted-foreground truncate">{item.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {isSuperadmin && (
          <SidebarGroup className="mt-4">
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">
              {!collapsed && "Admin"}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {adminMenuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="w-full">
                      <NavLink 
                        to={item.url} 
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200" 
                        activeClassName="bg-primary/10 text-primary font-medium border-l-2 border-primary"
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        {!collapsed && (
                          <div className="min-w-0">
                            <span className="block text-sm truncate">{item.title}</span>
                            <span className="block text-xs text-muted-foreground truncate">{item.description}</span>
                          </div>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4 space-y-2">
        {!collapsed && user && (
          <div className="mb-2">
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>
        )}
        <ProfileSettings collapsed={collapsed} />
        <Button
          variant="ghost"
          size={collapsed ? "icon" : "sm"}
          onClick={signOut}
          className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span>Logout</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
