import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RKRAT from "./pages/RKRAT";
import TrackingPengurus from "./pages/TrackingPengurus";
import Login from "./pages/Login";
import AdminApprovals from "./pages/AdminApprovals";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { DashboardLayout } from "./components/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Index />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/rkrat"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <RKRAT />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tracking-pengurus"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <TrackingPengurus />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/approvals"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AdminApprovals />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
