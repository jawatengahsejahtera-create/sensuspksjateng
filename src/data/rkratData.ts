export interface RKRATItem {
  id: number;
  temaUtama: string;
  programUnggulan: string;
  bidang: string;
  kegiatanUtama: string;
  outcome?: string;
  target?: string;
  fokus?: string;
  rat: number;
  jadwal: {
    des1: boolean;
    jan: boolean;
    feb: boolean;
    mar: boolean;
    apr: boolean;
    mei: boolean;
    jun: boolean;
    jul: boolean;
    agu: boolean;
    sep: boolean;
    okt: boolean;
    nov: boolean;
    des2: boolean;
  };
}

export const TEMA_UTAMA = ["KADERISASI", "STRUKTURISASI", "CITRA PARTAI"] as const;
export type TemaUtama = typeof TEMA_UTAMA[number];

export const BULAN_LIST = [
  { key: "des1", label: "Des '25" },
  { key: "jan", label: "Jan" },
  { key: "feb", label: "Feb" },
  { key: "mar", label: "Mar" },
  { key: "apr", label: "Apr" },
  { key: "mei", label: "Mei" },
  { key: "jun", label: "Jun" },
  { key: "jul", label: "Jul" },
  { key: "agu", label: "Agu" },
  { key: "sep", label: "Sep" },
  { key: "okt", label: "Okt" },
  { key: "nov", label: "Nov" },
  { key: "des2", label: "Des '26" },
] as const;

export const rkratData: RKRATItem[] = [
  // BKAP - Kaderisasi
  { id: 1, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Sosialisasi & Pelatihan Implementasi Kurikulum Tarbiyah", rat: 20000000, jadwal: { des1: false, jan: true, feb: true, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 2, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Dauroh Musyrif Al Qur'an", rat: 21000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: true, mei: true, jun: true, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 3, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Mukhoyam Al Qur'an", rat: 20000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: true, sep: false, okt: false, nov: false, des2: false } },
  { id: 4, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Dauroh TFT Bahasa Arab", rat: 14000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: true, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 5, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Multaqo Muwajihin", rat: 5000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: true, des2: false } },
  { id: 6, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Penyusunan kurikulum & modul tarbiyah terkait", rat: 2000000, jadwal: { des1: false, jan: true, feb: true, mar: true, apr: true, mei: true, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 7, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Upgrading Pembimbing UPA", rat: 40000000, jadwal: { des1: false, jan: true, feb: false, mar: true, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 8, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Forum Pembimbing Utama", rat: 16000000, jadwal: { des1: false, jan: false, feb: true, mar: false, apr: false, mei: true, jun: false, jul: false, agu: true, sep: false, okt: false, nov: true, des2: false } },
  { id: 9, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "PPS & PKK", rat: 16000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 10, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Pendidikan Anggota Lanjut Pemuda", rat: 30000000, jadwal: { des1: false, jan: false, feb: true, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 11, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Supervisi & Koordinasi Pengelola Tarbiyah Pemuda", rat: 20000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: true, jun: false, jul: false, agu: false, sep: false, okt: true, nov: false, des2: false } },
  { id: 12, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Upgrading & Pelatihan Murobbi Pemuda", rat: 30000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 13, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "JAULAH BKAP DAERAH", rat: 30000000, jadwal: { des1: false, jan: true, feb: true, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 14, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKAP", kegiatanUtama: "Digitalisasi Data Kaderisasi", rat: 15000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 15, temaUtama: "KADERISASI", programUnggulan: "JOIN PKS", bidang: "BKAP", kegiatanUtama: "Dauroh Rekrutmen", rat: 10000000, jadwal: { des1: false, jan: false, feb: true, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 16, temaUtama: "KADERISASI", programUnggulan: "JOIN PKS", bidang: "BKAP", kegiatanUtama: "TFT Dauroh Murobbi", rat: 20000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: true, jun: false, jul: false, agu: false, sep: false, okt: true, nov: false, des2: false } },
  { id: 17, temaUtama: "KADERISASI", programUnggulan: "JOIN PKS", bidang: "BKAP", kegiatanUtama: "Jarkom Tarbiyah", rat: 10000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 18, temaUtama: "KADERISASI", programUnggulan: "JOIN PKS", bidang: "BKAP", kegiatanUtama: "Kemah Ukhuwah Pemuda", rat: 50000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: true, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  
  // BIDANG RELAWAN & SAKSI
  { id: 19, temaUtama: "KADERISASI", programUnggulan: "", bidang: "BIDANG RELAWAN & SAKSI", kegiatanUtama: "REKRUTMEN relawan KPTPS dari Saksi 2024", rat: 30000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 20, temaUtama: "KADERISASI", programUnggulan: "", bidang: "BIDANG RELAWAN & SAKSI", kegiatanUtama: "Pembinaan Relawan KPTPS dari Saksi 2024", rat: 30000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 21, temaUtama: "KADERISASI", programUnggulan: "", bidang: "BIDANG RELAWAN & SAKSI", kegiatanUtama: "Rekrutmen Relawan KPTPS Non Saksi", rat: 5000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 22, temaUtama: "KADERISASI", programUnggulan: "", bidang: "BIDANG RELAWAN & SAKSI", kegiatanUtama: "Launching Relawan KPTPS", rat: 50000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: true, jun: false, jul: false, agu: false, sep: false, okt: false, nov: true, des2: false } },
  
  // Polhukam
  { id: 23, temaUtama: "STRUKTURISASI", programUnggulan: "", bidang: "Polhukam", kegiatanUtama: "Membentuk Political Intelligence Unit", rat: 0, jadwal: { des1: false, jan: true, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 24, temaUtama: "STRUKTURISASI", programUnggulan: "", bidang: "Polhukam", kegiatanUtama: "Koordinasi rutin pekanan Bidang Polhukam DPW", rat: 0, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 25, temaUtama: "STRUKTURISASI", programUnggulan: "", bidang: "Polhukam", kegiatanUtama: "Koordinasi rutin bulanan dengan Fraksi PKS", rat: 0, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 26, temaUtama: "STRUKTURISASI", programUnggulan: "", bidang: "Polhukam", kegiatanUtama: "Menyusun Policy Brief bulanan", rat: 0, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 27, temaUtama: "STRUKTURISASI", programUnggulan: "", bidang: "Polhukam", kegiatanUtama: "Forum diskusi dengan stakeholder terkait", rat: 0, jadwal: { des1: false, jan: false, feb: true, mar: false, apr: false, mei: true, jun: false, jul: false, agu: true, sep: false, okt: false, nov: true, des2: false } },
  { id: 28, temaUtama: "CITRA PARTAI", programUnggulan: "", bidang: "Polhukam", kegiatanUtama: "Membuat Dashboard Isu & Kebijakan", rat: 0, jadwal: { des1: false, jan: false, feb: true, mar: true, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 29, temaUtama: "CITRA PARTAI", programUnggulan: "", bidang: "Polhukam", kegiatanUtama: "Menyajikan timeline rekam jejak Fraksi/Anggota Dewan", rat: 0, jadwal: { des1: false, jan: false, feb: false, mar: true, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 30, temaUtama: "CITRA PARTAI", programUnggulan: "", bidang: "Polhukam", kegiatanUtama: "Membentuk Tim Paralegal", rat: 0, jadwal: { des1: false, jan: false, feb: true, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 31, temaUtama: "CITRA PARTAI", programUnggulan: "", bidang: "Polhukam", kegiatanUtama: "Mengkapitalisasi isu berdasarkan perkembangan terkini", rat: 0, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: true, jun: false, jul: false, agu: false, sep: true, okt: false, nov: false, des2: false } },
  { id: 32, temaUtama: "CITRA PARTAI", programUnggulan: "", bidang: "Polhukam", kegiatanUtama: "Menjalin hubungan dengan pemangku keamanan (Polisi, TNI)", rat: 0, jadwal: { des1: false, jan: false, feb: true, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  
  // BPDK
  { id: 33, temaUtama: "KADERISASI", programUnggulan: "Gerakan Keluarga Pintar, Kreatif Sehat", bidang: "BPDK", kegiatanUtama: "Mendorong semua Anggota Pelopor mengikuti program Cek Kesehatan", rat: 50000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: false } },
  { id: 34, temaUtama: "KADERISASI", programUnggulan: "Gerakan Keluarga Pintar, Kreatif Sehat", bidang: "BPDK", kegiatanUtama: "Mendorong semua kader sadar gizi anak sejak dini", rat: 50000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: false } },
  { id: 35, temaUtama: "KADERISASI", programUnggulan: "Gerakan Keluarga Pintar, Kreatif Sehat", bidang: "BPDK", kegiatanUtama: "Mendorong keluarga anggota Pelopor menjadi Peserta BPJS Kesehatan", rat: 50000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: false } },
  { id: 36, temaUtama: "KADERISASI", programUnggulan: "Gerakan Keluarga Pintar, Kreatif Sehat", bidang: "BPDK", kegiatanUtama: "Mengadvokasi keluarga Anggota PKS berstatus mustahik untuk biaya Pendidikan", rat: 50000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: false } },
  { id: 37, temaUtama: "KADERISASI", programUnggulan: "Sekolah Kader Patriot Indonesia & JOIN PKS", bidang: "BPDK", kegiatanUtama: "Silaturahim Wilayah SDM Pendidikan", rat: 50000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: false } },
  { id: 38, temaUtama: "KADERISASI", programUnggulan: "Sekolah Kader Patriot Indonesia & JOIN PKS", bidang: "BPDK", kegiatanUtama: "Silaturrahim Wilayah SDM Kesehatan", rat: 50000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: false } },
  
  // BELHPI
  { id: 39, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI) & JOIN PKS", bidang: "BELHPI", kegiatanUtama: "Forum peduli krisis ELHPI", rat: 45000000, jadwal: { des1: true, jan: false, feb: false, mar: false, apr: true, mei: false, jun: false, jul: false, agu: true, sep: false, okt: false, nov: false, des2: false } },
  { id: 40, temaUtama: "STRUKTURISASI", programUnggulan: "TRANFORMASI DIGITAL PKS (TOTAL PKS)", bidang: "BELHPI", kegiatanUtama: "FGD dan Podcast Tematik ELHPI", rat: 45000000, jadwal: { des1: false, jan: false, feb: true, mar: false, apr: false, mei: false, jun: true, jul: false, agu: false, sep: false, okt: false, nov: true, des2: false } },
  
  // Bappilu
  { id: 41, temaUtama: "KADERISASI", programUnggulan: "JARING WAKIL RAKYAT (JAWARA)", bidang: "Bappilu", kegiatanUtama: "Rekrutmen Bacaleg melalui diskusi dan silaturrahim tokoh", rat: 5000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 42, temaUtama: "STRUKTURISASI", programUnggulan: "PENGUATAN STRUKTUR TINGKAT RANTING (PASTI)", bidang: "Bappilu", kegiatanUtama: "Kordinasi Tim Pemenangan", rat: 5000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 43, temaUtama: "CITRA PARTAI", programUnggulan: "TRANSFORMASI DIGITAL PKS (TOTAL-PKS)", bidang: "Bappilu", kegiatanUtama: "Penyusunan roadmap Pemenangan", rat: 25000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 44, temaUtama: "CITRA PARTAI", programUnggulan: "ADVOKASI KEBIJAKAN UNTUK RAKYAT (AKAR)", bidang: "Bappilu", kegiatanUtama: "PKS Insight Center", rat: 25000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: true, sep: true, okt: true, nov: false, des2: false } },
  
  // BPPN
  { id: 45, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH PPN (PETERNAK-PETANI-NELAYAN)", bidang: "BPPN", kegiatanUtama: "Penanaman alpokat dan peternakan kambing ettawa", rat: 240000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: false } },
  { id: 46, temaUtama: "STRUKTURISASI", programUnggulan: "PENGUATAN STRUKTUR TINGKAT RANTING (PASTI)", bidang: "BPPN", kegiatanUtama: "Konsolidasi penguatan struktur DPD-DPC-DPRa", rat: 50000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 47, temaUtama: "CITRA PARTAI", programUnggulan: "ADVOKASI KEBIJAKAN PARTAI UNTUK RAKYAT", bidang: "BPPN", kegiatanUtama: "Advokasi rakyat berbasis pejabat publik", rat: 50000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  
  // Boemkraf
  { id: 48, temaUtama: "KADERISASI", programUnggulan: "JOIN PKS", bidang: "Boemkraf", kegiatanUtama: "Pelatihan dan pendampingan UMKM", rat: 25000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 49, temaUtama: "KADERISASI", programUnggulan: "JOIN PKS", bidang: "Boemkraf", kegiatanUtama: "Pameran dan promosi produk UMKM", rat: 25000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 50, temaUtama: "KADERISASI", programUnggulan: "GERAKAN KEMANDIRIAN (GEMA)", bidang: "Boemkraf", kegiatanUtama: "Pelatihan affiliate marketing (tiktok dan shopee)", rat: 20000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 51, temaUtama: "STRUKTURISASI", programUnggulan: "TRANSFORMASI DIGITAL PKS (TOTAL-PKS)", bidang: "Boemkraf", kegiatanUtama: "Pendataan UMKM, E-Katalog dan Market Place", rat: 10000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 52, temaUtama: "STRUKTURISASI", programUnggulan: "TRANSFORMASI DIGITAL PKS (TOTAL-PKS)", bidang: "Boemkraf", kegiatanUtama: "Pendataan Mentor UMKM", rat: 5000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 53, temaUtama: "STRUKTURISASI", programUnggulan: "TRANSFORMASI DIGITAL PKS (TOTAL-PKS)", bidang: "Boemkraf", kegiatanUtama: "Sertifikasi Mentor UMKM", rat: 175000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 54, temaUtama: "STRUKTURISASI", programUnggulan: "ADVOKASI KEBIJAKAN UNTUK RAKYAT (AKAR)", bidang: "Boemkraf", kegiatanUtama: "Pendirian Yayasan dan Asosiasi", rat: 7000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 55, temaUtama: "CITRA PARTAI", programUnggulan: "ADVOKASI KEBIJAKAN UNTUK RAKYAT (AKAR)", bidang: "Boemkraf", kegiatanUtama: "PUSAT INKUBASI DAN PENGEMBANGAN BISNIS", rat: 175000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  
  // Bidang Koperasi dan Desa
  { id: 56, temaUtama: "KADERISASI", programUnggulan: "AKADEMI PEMIMPIN INDONESIA (API)", bidang: "Bidang Koperasi dan Desa", kegiatanUtama: "SEMPEDES (Sepuluh Persen Menjadi Pemimpin Desa)", rat: 25000000, jadwal: { des1: false, jan: true, feb: true, mar: true, apr: true, mei: false, jun: false, jul: true, agu: true, sep: true, okt: true, nov: false, des2: false } },
  { id: 57, temaUtama: "KADERISASI", programUnggulan: "AKADEMI PEMIMPIN INDONESIA (API)", bidang: "Bidang Koperasi dan Desa", kegiatanUtama: "SEKOLAH MEMBANGUN DESA", rat: 50000000, jadwal: { des1: false, jan: true, feb: true, mar: false, apr: false, mei: false, jun: true, jul: true, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 58, temaUtama: "KADERISASI", programUnggulan: "GERAKAN EKONOMI MANDIRI (GEMA)", bidang: "Bidang Koperasi dan Desa", kegiatanUtama: "AKADEMI KOPERASI INDONESIA", rat: 30000000, jadwal: { des1: true, jan: false, feb: false, mar: false, apr: true, mei: true, jun: true, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 59, temaUtama: "KADERISASI", programUnggulan: "GERAKAN EKONOMI MANDIRI (GEMA)", bidang: "Bidang Koperasi dan Desa", kegiatanUtama: "1D1KOP", rat: 50000000, jadwal: { des1: true, jan: true, feb: false, mar: false, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  
  // BINAPORA
  { id: 60, temaUtama: "KADERISASI", programUnggulan: "RUMAH KELUARGA INDONESIA (RKI)", bidang: "BINAPORA", kegiatanUtama: "Pelatihan Nasional Penggerak Olahraga Berbasis UPA", rat: 300000000, jadwal: { des1: false, jan: true, feb: false, mar: false, apr: true, mei: false, jun: false, jul: true, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 61, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA DAN JOIN PKS", bidang: "BINAPORA", kegiatanUtama: "DIKLAT PIMKORWIL & Perluasan Basis Jaringan Komunitas Olahraga", rat: 50000000, jadwal: { des1: false, jan: false, feb: false, mar: true, apr: false, mei: false, jun: false, jul: false, agu: true, sep: false, okt: false, nov: false, des2: false } },
  { id: 62, temaUtama: "CITRA PARTAI", programUnggulan: "TRANSFORMASI DIGITAL PKS", bidang: "BINAPORA", kegiatanUtama: "Pembuatan konten video latihan dan tips olahraga", rat: 150000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: false } },
  { id: 63, temaUtama: "KADERISASI", programUnggulan: "JAWARA (JARING WAKIL RAKYAT)", bidang: "BINAPORA", kegiatanUtama: "Pemetaaan tokoh keolahragaan / atlit / instruktur", rat: 10000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  
  // KOMDIGI
  { id: 64, temaUtama: "STRUKTURISASI", programUnggulan: "PENGUATAN STRUKTUR TINGKAT RANTING (PASTI)", bidang: "KOMDIGI", kegiatanUtama: "Penguatan Infrastuktur dan SDM Komdigi", rat: 175000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 65, temaUtama: "CITRA PARTAI", programUnggulan: "TRANSFORMASI DIGITAL PKS (TOTAL-PKS)", bidang: "KOMDIGI", kegiatanUtama: "PEMBUATAN KONTEN PKS JAWA TENGAH", rat: 120000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 66, temaUtama: "CITRA PARTAI", programUnggulan: "ADVOKASI KEBIJAKAN UNTUK RAKYAT (AKAR)", bidang: "KOMDIGI", kegiatanUtama: "PUBLIKASI KEGIATAN PKS JAWA TENGAH", rat: 60000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  
  // BPMRD
  { id: 67, temaUtama: "KADERISASI", programUnggulan: "RUMAH KELUARGA INDONESIA (RKI)", bidang: "BPMRD", kegiatanUtama: "Kampanye Gerakan Sayangi Masyarakat Rentan dan Disabilitas", rat: 7000000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 68, temaUtama: "KADERISASI", programUnggulan: "RUMAH KELUARGA INDONESIA (RKI)", bidang: "BPMRD", kegiatanUtama: "Sahabat Inklusi (Sahabatin) untuk keluarga kader", rat: 1000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: false } },
  { id: 69, temaUtama: "KADERISASI", programUnggulan: "GERAKAN EKONOMI MANDIRI (GEMA)", bidang: "BPMRD", kegiatanUtama: "Pendataan dan pemetaan internal (rentan dan disabilitas)", rat: 1000000, jadwal: { des1: false, jan: true, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 70, temaUtama: "KADERISASI", programUnggulan: "GERAKAN EKONOMI MANDIRI (GEMA)", bidang: "BPMRD", kegiatanUtama: "Pelatihan & Pemberdayaan", rat: 10000000, jadwal: { des1: false, jan: false, feb: false, mar: true, apr: false, mei: true, jun: false, jul: true, agu: false, sep: true, okt: false, nov: true, des2: false } },
  { id: 71, temaUtama: "KADERISASI", programUnggulan: "JOIN PKS", bidang: "BPMRD", kegiatanUtama: "Silaturahim ke tokoh dan jejaring organisasi disabilitas", rat: 5000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: true, mei: false, jun: false, jul: false, agu: true, sep: false, okt: true, nov: false, des2: false } },
  { id: 72, temaUtama: "STRUKTURISASI", programUnggulan: "PENGUATAN STRUKTUR TINGKAT RANTING (PASTI)", bidang: "BPMRD", kegiatanUtama: "Turba dan silaturahmi ke DPD", rat: 18000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: false } },
  { id: 73, temaUtama: "STRUKTURISASI", programUnggulan: "", bidang: "BPMRD", kegiatanUtama: "Rapat dan koordinasi bidang", rat: 2500000, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 74, temaUtama: "CITRA PARTAI", programUnggulan: "ADVOKASI KEBIJAKAN UNTUK RAKYAT (AKAR)", bidang: "BPMRD", kegiatanUtama: "Sosialisasi kebijakan inklusif untuk Pejabat Publik PKS", rat: 1000000, jadwal: { des1: false, jan: true, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: true, des2: false } },
  
  // BKBN
  { id: 75, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKBN", kegiatanUtama: "Kemah Bela Negara (KEMBARA)", rat: 75000000, jadwal: { des1: true, jan: true, feb: false, mar: false, apr: false, mei: true, jun: false, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 76, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKBN", kegiatanUtama: "LATANSA & Pengokohan patriotisme Anggota", rat: 60000000, jadwal: { des1: true, jan: true, feb: false, mar: false, apr: false, mei: false, jun: false, jul: true, agu: false, sep: true, okt: false, nov: true, des2: false } },
  { id: 77, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BKBN", kegiatanUtama: "Rekrutmen KORSAD dan SANTIKA", rat: 25000000, jadwal: { des1: true, jan: true, feb: false, mar: false, apr: false, mei: false, jun: false, jul: true, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 78, temaUtama: "KADERISASI", programUnggulan: "JOIN PKS", bidang: "BKBN", kegiatanUtama: "Kembara Variasi Rekrutmen dan Jambore Pandu Desa", rat: 25000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: true, jul: true, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 79, temaUtama: "STRUKTURISASI", programUnggulan: "PENGUATAN STRUKTUR SD TINGKAT RANTING (PASTI)", bidang: "BKBN", kegiatanUtama: "Memperkuat struktur organisasi Kepanduan di tingkat ranting", rat: 0, jadwal: { des1: true, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 80, temaUtama: "CITRA PARTAI", programUnggulan: "TRANSFORMASI DIGITAL PKS (TOTAL-PKS)", bidang: "BKBN", kegiatanUtama: "Modernisasi organisasi melalui teknologi", rat: 5000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  { id: 81, temaUtama: "CITRA PARTAI", programUnggulan: "ADVOKASI KEBIJAKAN UNTUK RAKYAT (AKAR)", bidang: "BKBN", kegiatanUtama: "Posko Mudik PKS", rat: 20000000, jadwal: { des1: false, jan: false, feb: false, mar: true, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 82, temaUtama: "CITRA PARTAI", programUnggulan: "ADVOKASI KEBIJAKAN UNTUK RAKYAT (AKAR)", bidang: "BKBN", kegiatanUtama: "Pendidikan dan Pelatihan Relawan Kemanusiaan", rat: 20000000, jadwal: { des1: true, jan: false, feb: false, mar: false, apr: false, mei: true, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 83, temaUtama: "CITRA PARTAI", programUnggulan: "JARING WAKIL RAKYAT (JAWARA)", bidang: "BKBN", kegiatanUtama: "Pelatihan Standar Pengamanan Pemilu", rat: 25000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: true, okt: true, nov: false, des2: false } },
  { id: 84, temaUtama: "CITRA PARTAI", programUnggulan: "JARING WAKIL RAKYAT (JAWARA)", bidang: "BKBN", kegiatanUtama: "DIKLAT PERJAKA: Pendidikan Kader Penggerak Jejaring Komunitas", rat: 25000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: true, agu: false, sep: false, okt: false, nov: false, des2: false } },
  
  // BPPM
  { id: 85, temaUtama: "CITRA PARTAI", programUnggulan: "JARING WAKIL RAKYAT (JAWARA)", bidang: "BPPM", kegiatanUtama: "Indonesia Muda Bicara", rat: 240000000, jadwal: { des1: false, jan: true, feb: true, mar: true, apr: true, mei: true, jun: true, jul: true, agu: true, sep: true, okt: true, nov: true, des2: true } },
  
  // Komdig & Humas Fraksi
  { id: 86, temaUtama: "CITRA PARTAI", programUnggulan: "ADVOKASI KEBIJAKAN UNTUK RAKYAT (AKAR)", bidang: "KOMDIG & HUMAS FRAKSI", kegiatanUtama: "Pelatihan Fungelan (uji coba gejolak pesan)", rat: 5000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  
  // BPRM
  { id: 87, temaUtama: "KADERISASI", programUnggulan: "RUMAH KELUARGA INDONESIA (RKI)", bidang: "BPRM", kegiatanUtama: "Webinar Perempuan Cerdas PKS", rat: 15000000, jadwal: { des1: false, jan: false, feb: true, mar: false, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 88, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BPRM", kegiatanUtama: "Workshop Fungsionaris Perempuan DPD", rat: 30000000, jadwal: { des1: false, jan: false, feb: false, mar: true, apr: false, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 89, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BPRM", kegiatanUtama: "TFT Isu Perempuan dan Keluarga", rat: 20000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: true, mei: false, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 90, temaUtama: "KADERISASI", programUnggulan: "SEKOLAH KADER PATRIOT INDONESIA (SAKTI)", bidang: "BPRM", kegiatanUtama: "Upgrading Pembina UPA Perempuan", rat: 25000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: true, jun: false, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 91, temaUtama: "STRUKTURISASI", programUnggulan: "PENGUATAN STRUKTUR SD TINGKAT RANTING (PASTI)", bidang: "BPRM", kegiatanUtama: "Rakorwil BPRM se Jateng", rat: 25000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: true, jul: false, agu: false, sep: false, okt: false, nov: false, des2: false } },
  { id: 92, temaUtama: "CITRA PARTAI", programUnggulan: "ADVOKASI KEBIJAKAN UNTUK RAKYAT (AKAR)", bidang: "BPRM", kegiatanUtama: "Bakti Sosial Perempuan Kolaborasi", rat: 50000000, jadwal: { des1: false, jan: false, feb: false, mar: false, apr: false, mei: false, jun: false, jul: true, agu: false, sep: false, okt: false, nov: false, des2: false } },
];

// Helper functions
export const getBidangList = (): string[] => {
  return [...new Set(rkratData.map(item => item.bidang))].filter(Boolean);
};

export const getProgramUnggulanList = (): string[] => {
  return [...new Set(rkratData.map(item => item.programUnggulan))].filter(Boolean);
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
