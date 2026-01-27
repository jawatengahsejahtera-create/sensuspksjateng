-- Create table for RKRAT periods (yearly configuration)
CREATE TABLE public.rkrat_periods (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  year INTEGER NOT NULL UNIQUE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for bidang (divisions)
CREATE TABLE public.bidang (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for user-bidang assignments (1 user = 1 bidang)
CREATE TABLE public.user_bidang (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  bidang_id UUID NOT NULL REFERENCES public.bidang(id) ON DELETE CASCADE,
  assigned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  assigned_by UUID
);

-- Create table for RKRAT entries
CREATE TABLE public.rkrat_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  period_id UUID NOT NULL REFERENCES public.rkrat_periods(id) ON DELETE CASCADE,
  bidang_id UUID NOT NULL REFERENCES public.bidang(id) ON DELETE CASCADE,
  tema_utama TEXT NOT NULL,
  program_unggulan TEXT NOT NULL,
  kegiatan_utama TEXT NOT NULL,
  outcome TEXT,
  target TEXT,
  fokus TEXT,
  anggaran BIGINT NOT NULL DEFAULT 0,
  jadwal_jan BOOLEAN DEFAULT false,
  jadwal_feb BOOLEAN DEFAULT false,
  jadwal_mar BOOLEAN DEFAULT false,
  jadwal_apr BOOLEAN DEFAULT false,
  jadwal_may BOOLEAN DEFAULT false,
  jadwal_jun BOOLEAN DEFAULT false,
  jadwal_jul BOOLEAN DEFAULT false,
  jadwal_aug BOOLEAN DEFAULT false,
  jadwal_sep BOOLEAN DEFAULT false,
  jadwal_oct BOOLEAN DEFAULT false,
  jadwal_nov BOOLEAN DEFAULT false,
  jadwal_dec BOOLEAN DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  submitted_by UUID NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  approved_by UUID,
  approved_at TIMESTAMP WITH TIME ZONE,
  rejection_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.rkrat_periods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bidang ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_bidang ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rkrat_entries ENABLE ROW LEVEL SECURITY;

-- Create function to get user's bidang_id
CREATE OR REPLACE FUNCTION public.get_user_bidang(_user_id UUID)
RETURNS UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT bidang_id FROM public.user_bidang WHERE user_id = _user_id LIMIT 1
$$;

-- RLS Policies for rkrat_periods
CREATE POLICY "Everyone can view active periods"
  ON public.rkrat_periods FOR SELECT
  USING (true);

CREATE POLICY "Superadmins can manage periods"
  ON public.rkrat_periods FOR ALL
  USING (is_superadmin(auth.uid()));

-- RLS Policies for bidang
CREATE POLICY "Everyone can view bidang"
  ON public.bidang FOR SELECT
  USING (true);

CREATE POLICY "Superadmins can manage bidang"
  ON public.bidang FOR ALL
  USING (is_superadmin(auth.uid()));

-- RLS Policies for user_bidang
CREATE POLICY "Users can view their own bidang assignment"
  ON public.user_bidang FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Superadmins can view all bidang assignments"
  ON public.user_bidang FOR SELECT
  USING (is_superadmin(auth.uid()));

CREATE POLICY "Superadmins can manage bidang assignments"
  ON public.user_bidang FOR ALL
  USING (is_superadmin(auth.uid()));

-- RLS Policies for rkrat_entries
CREATE POLICY "Users can view entries from their bidang"
  ON public.rkrat_entries FOR SELECT
  USING (
    is_superadmin(auth.uid()) 
    OR bidang_id = get_user_bidang(auth.uid())
  );

CREATE POLICY "Users can insert entries for their bidang"
  ON public.rkrat_entries FOR INSERT
  WITH CHECK (
    bidang_id = get_user_bidang(auth.uid())
    AND submitted_by = auth.uid()
  );

CREATE POLICY "Users can update their own pending entries"
  ON public.rkrat_entries FOR UPDATE
  USING (
    (submitted_by = auth.uid() AND status = 'pending')
    OR is_superadmin(auth.uid())
  );

CREATE POLICY "Users can delete their own pending entries"
  ON public.rkrat_entries FOR DELETE
  USING (
    (submitted_by = auth.uid() AND status = 'pending')
    OR is_superadmin(auth.uid())
  );

-- Trigger for updated_at
CREATE TRIGGER update_rkrat_periods_updated_at
  BEFORE UPDATE ON public.rkrat_periods
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_rkrat_entries_updated_at
  BEFORE UPDATE ON public.rkrat_entries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial bidang data from existing RKRAT
INSERT INTO public.bidang (name) VALUES
  ('KADERISASI'),
  ('KELEMBAGAAN'),
  ('PEREMPUAN DAN KETAHANAN KELUARGA'),
  ('PARIWISATA DAN EKONOMI KREATIF'),
  ('JARINGAN USAHA DAN WIRAUSAHA'),
  ('HUKUM'),
  ('HAK ASASI MANUSIA'),
  ('KEPEMUDAAN'),
  ('BURUH DAN PEKERJA'),
  ('ADVOKASI DAN PENYELAMATAN ALAM'),
  ('PEMBERDAYAAN SUMBER DAYA ALAM'),
  ('PEMBERDAYAAN JARINGAN DAN TEKNOLOGI'),
  ('KESEHATAN'),
  ('PETANI DAN NELAYAN'),
  ('PENDIDIKAN'),
  ('PENGEMBANGAN KERJASAMA DAERAH'),
  ('PEMERINTAHAN'),
  ('HUBUNGAN INTERNASIONAL'),
  ('HUBUNGAN MASYARAKAT DAN MULTIMEDIA'),
  ('MEDIA DAN KOMUNIKASI'),
  ('PENGELOLAAN KADER PILIHAN');

-- Insert initial period for 2026
INSERT INTO public.rkrat_periods (year, start_date, end_date, is_active) VALUES
  (2026, '2026-01-01', '2026-12-31', true);