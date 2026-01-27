import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

// Types
export interface Bidang {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
}

export interface RKRATPeriod {
  id: string;
  year: number;
  start_date: string;
  end_date: string;
  is_active: boolean;
  created_at: string;
}

export interface UserBidang {
  id: string;
  user_id: string;
  bidang_id: string;
  assigned_at: string;
  assigned_by: string | null;
  bidang?: Bidang;
}

export interface RKRATEntry {
  id: string;
  period_id: string;
  bidang_id: string;
  tema_utama: string;
  program_unggulan: string;
  kegiatan_utama: string;
  outcome: string | null;
  target: string | null;
  fokus: string | null;
  anggaran: number;
  jadwal_jan: boolean;
  jadwal_feb: boolean;
  jadwal_mar: boolean;
  jadwal_apr: boolean;
  jadwal_may: boolean;
  jadwal_jun: boolean;
  jadwal_jul: boolean;
  jadwal_aug: boolean;
  jadwal_sep: boolean;
  jadwal_oct: boolean;
  jadwal_nov: boolean;
  jadwal_dec: boolean;
  status: "pending" | "approved" | "rejected";
  submitted_by: string;
  submitted_at: string;
  approved_by: string | null;
  approved_at: string | null;
  rejection_reason: string | null;
  created_at: string;
  bidang?: Bidang;
  period?: RKRATPeriod;
}

export interface RKRATEntryInput {
  period_id: string;
  bidang_id: string;
  tema_utama: string;
  program_unggulan: string;
  kegiatan_utama: string;
  outcome?: string;
  target?: string;
  fokus?: string;
  anggaran: number;
  jadwal_jan?: boolean;
  jadwal_feb?: boolean;
  jadwal_mar?: boolean;
  jadwal_apr?: boolean;
  jadwal_may?: boolean;
  jadwal_jun?: boolean;
  jadwal_jul?: boolean;
  jadwal_aug?: boolean;
  jadwal_sep?: boolean;
  jadwal_oct?: boolean;
  jadwal_nov?: boolean;
  jadwal_dec?: boolean;
}

// Hook: Fetch all bidang
export function useBidangList() {
  const [bidangList, setBidangList] = useState<Bidang[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBidang = async () => {
      try {
        const { data, error } = await supabase
          .from("bidang")
          .select("*")
          .order("name");

        if (error) throw error;
        setBidangList(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBidang();
  }, []);

  return { bidangList, loading, error };
}

// Hook: Fetch active periods
export function useRKRATPeriods() {
  const [periods, setPeriods] = useState<RKRATPeriod[]>([]);
  const [activePeriod, setActivePeriod] = useState<RKRATPeriod | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPeriods = async () => {
      try {
        const { data, error } = await supabase
          .from("rkrat_periods")
          .select("*")
          .order("year", { ascending: false });

        if (error) throw error;
        setPeriods(data || []);
        
        const active = data?.find(p => p.is_active);
        setActivePeriod(active || null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPeriods();
  }, []);

  return { periods, activePeriod, loading, error };
}

// Hook: Get current user's bidang assignment
export function useUserBidang() {
  const { user } = useAuth();
  const [userBidang, setUserBidang] = useState<UserBidang | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserBidang = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("user_bidang")
          .select(`
            *,
            bidang:bidang_id (*)
          `)
          .eq("user_id", user.id)
          .maybeSingle();

        if (error) throw error;
        setUserBidang(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBidang();
  }, [user]);

  return { userBidang, loading, error };
}

// Hook: Check if user is superadmin
export function useIsSuperadmin() {
  const { user } = useAuth();
  const [isSuperadmin, setIsSuperadmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSuperadmin = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .eq("role", "superadmin")
          .maybeSingle();

        setIsSuperadmin(data?.role === "superadmin");
      } catch {
        setIsSuperadmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkSuperadmin();
  }, [user]);

  return { isSuperadmin, loading };
}

// Hook: Fetch RKRAT entries (filtered by bidang for non-superadmin)
export function useRKRATEntries(periodId?: string, bidangId?: string) {
  const { isSuperadmin } = useIsSuperadmin();
  const { userBidang } = useUserBidang();
  const [entries, setEntries] = useState<RKRATEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from("rkrat_entries")
        .select(`
          *,
          bidang:bidang_id (*),
          period:period_id (*)
        `)
        .order("created_at", { ascending: false });

      if (periodId) {
        query = query.eq("period_id", periodId);
      }

      // Filter by bidang - non-superadmin only see their own bidang
      if (!isSuperadmin && userBidang?.bidang_id) {
        query = query.eq("bidang_id", userBidang.bidang_id);
      } else if (bidangId) {
        query = query.eq("bidang_id", bidangId);
      }

      const { data, error } = await query;

      if (error) throw error;
      setEntries((data || []) as RKRATEntry[]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [periodId, bidangId, isSuperadmin, userBidang]);

  return { entries, loading, error, refetch: fetchEntries };
}

// Hook: CRUD operations for RKRAT entries
export function useRKRATMutations() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createEntry = async (input: RKRATEntryInput) => {
    if (!user) throw new Error("User not authenticated");
    
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from("rkrat_entries")
        .insert({
          ...input,
          submitted_by: user.id,
          status: "pending",
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateEntry = async (id: string, input: Partial<RKRATEntryInput>) => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from("rkrat_entries")
        .update(input)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteEntry = async (id: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from("rkrat_entries")
        .delete()
        .eq("id", id);

      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const approveEntry = async (id: string, approved: boolean, rejectionReason?: string) => {
    if (!user) throw new Error("User not authenticated");
    
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from("rkrat_entries")
        .update({
          status: approved ? "approved" : "rejected",
          approved_by: user.id,
          approved_at: new Date().toISOString(),
          rejection_reason: rejectionReason || null,
        })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createEntry, updateEntry, deleteEntry, approveEntry, loading, error };
}

// Hook: Admin - Fetch all user-bidang assignments
export function useAllUserBidang() {
  const [assignments, setAssignments] = useState<(UserBidang & { email?: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAssignments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("user_bidang")
        .select(`
          *,
          bidang:bidang_id (*)
        `)
        .order("assigned_at", { ascending: false });

      if (error) throw error;
      setAssignments((data || []) as (UserBidang & { email?: string })[]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return { assignments, loading, error, refetch: fetchAssignments };
}

// Hook: Admin - Assign user to bidang
export function useUserBidangMutations() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const assignUserToBidang = async (userId: string, bidangId: string) => {
    if (!user) throw new Error("User not authenticated");
    
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from("user_bidang")
        .upsert({
          user_id: userId,
          bidang_id: bidangId,
          assigned_by: user.id,
          assigned_at: new Date().toISOString(),
        }, {
          onConflict: "user_id",
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const removeUserBidang = async (userId: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from("user_bidang")
        .delete()
        .eq("user_id", userId);

      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { assignUserToBidang, removeUserBidang, loading, error };
}
