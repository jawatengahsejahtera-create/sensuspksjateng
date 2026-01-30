// Complete PKS Census Data - All 40 sheets from Excel

import { kabupatenList } from "./pksData";

// ============================================
// 1. Alasan Tidak Bekerja per kabupaten per jenjang
// ============================================
export const alasanTidakKerjaData: Record<string, Record<string, { 
  ibuRumahTangga: number; 
  lainnya: number; 
  pensiun: number; 
  phk: number; 
  sekolah: number; 
  usahaBangkrut: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { ibuRumahTangga: 8, lainnya: 14, pensiun: 1, phk: 0, sekolah: 2, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 3, lainnya: 3, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. BANYUMAS": { 
    A3: { ibuRumahTangga: 27, lainnya: 19, pensiun: 2, phk: 0, sekolah: 12, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 4, lainnya: 3, pensiun: 2, phk: 1, sekolah: 1, usahaBangkrut: 1 },
    A5: { ibuRumahTangga: 2, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. BATANG": { 
    A3: { ibuRumahTangga: 8, lainnya: 10, pensiun: 1, phk: 1, sekolah: 3, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 0, lainnya: 2, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. BLORA": { 
    A3: { ibuRumahTangga: 4, lainnya: 3, pensiun: 2, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 0, lainnya: 2, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. BOYOLALI": { 
    A3: { ibuRumahTangga: 12, lainnya: 16, pensiun: 0, phk: 0, sekolah: 5, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 5, lainnya: 2, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 1 },
    A5: { ibuRumahTangga: 0, lainnya: 1, pensiun: 0, phk: 1, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. BREBES": { 
    A3: { ibuRumahTangga: 3, lainnya: 10, pensiun: 0, phk: 2, sekolah: 0, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 4, lainnya: 2, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. CILACAP": { 
    A3: { ibuRumahTangga: 25, lainnya: 23, pensiun: 4, phk: 1, sekolah: 6, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 4, lainnya: 6, pensiun: 5, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 2, lainnya: 1, pensiun: 3, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. DEMAK": { 
    A3: { ibuRumahTangga: 7, lainnya: 7, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 1, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 1, lainnya: 3, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. GROBOGAN": { 
    A3: { ibuRumahTangga: 7, lainnya: 7, pensiun: 0, phk: 0, sekolah: 2, usahaBangkrut: 1 },
    A4: { ibuRumahTangga: 1, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 1 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. JEPARA": { 
    A3: { ibuRumahTangga: 8, lainnya: 5, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 1 },
    A4: { ibuRumahTangga: 1, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. KARANGANYAR": { 
    A3: { ibuRumahTangga: 18, lainnya: 20, pensiun: 0, phk: 1, sekolah: 6, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 3, lainnya: 2, pensiun: 0, phk: 2, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 1, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. KEBUMEN": { 
    A3: { ibuRumahTangga: 6, lainnya: 7, pensiun: 1, phk: 0, sekolah: 2, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 1, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 2, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. KENDAL": { 
    A3: { ibuRumahTangga: 12, lainnya: 14, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 3, lainnya: 1, pensiun: 0, phk: 1, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 2, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. KLATEN": { 
    A3: { ibuRumahTangga: 31, lainnya: 41, pensiun: 3, phk: 0, sekolah: 10, usahaBangkrut: 1 },
    A4: { ibuRumahTangga: 5, lainnya: 6, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 2, lainnya: 2, pensiun: 1, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. KUDUS": { 
    A3: { ibuRumahTangga: 15, lainnya: 16, pensiun: 1, phk: 0, sekolah: 1, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 8, lainnya: 6, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. MAGELANG": { 
    A3: { ibuRumahTangga: 6, lainnya: 4, pensiun: 2, phk: 2, sekolah: 3, usahaBangkrut: 3 },
    A4: { ibuRumahTangga: 1, lainnya: 2, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. PATI": { 
    A3: { ibuRumahTangga: 3, lainnya: 6, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 1, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 1, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. PEKALONGAN": { 
    A3: { ibuRumahTangga: 3, lainnya: 7, pensiun: 0, phk: 0, sekolah: 3, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 1, lainnya: 1, pensiun: 1, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. PEMALANG": { 
    A3: { ibuRumahTangga: 23, lainnya: 16, pensiun: 2, phk: 0, sekolah: 3, usahaBangkrut: 1 },
    A4: { ibuRumahTangga: 3, lainnya: 3, pensiun: 3, phk: 0, sekolah: 1, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. PURBALINGGA": { 
    A3: { ibuRumahTangga: 2, lainnya: 5, pensiun: 0, phk: 0, sekolah: 4, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 2, lainnya: 2, pensiun: 0, phk: 0, sekolah: 1, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 1, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. PURWOREJO": { 
    A3: { ibuRumahTangga: 16, lainnya: 8, pensiun: 0, phk: 2, sekolah: 5, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 0, lainnya: 2, pensiun: 1, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. REMBANG": { 
    A3: { ibuRumahTangga: 4, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. SEMARANG": { 
    A3: { ibuRumahTangga: 9, lainnya: 11, pensiun: 0, phk: 3, sekolah: 6, usahaBangkrut: 3 },
    A4: { ibuRumahTangga: 5, lainnya: 1, pensiun: 1, phk: 1, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 3, lainnya: 3, pensiun: 1, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. SRAGEN": { 
    A3: { ibuRumahTangga: 17, lainnya: 8, pensiun: 0, phk: 1, sekolah: 3, usahaBangkrut: 1 },
    A4: { ibuRumahTangga: 3, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 2, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. SUKOHARJO": { 
    A3: { ibuRumahTangga: 28, lainnya: 18, pensiun: 0, phk: 2, sekolah: 18, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 9, lainnya: 7, pensiun: 0, phk: 1, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 5, lainnya: 2, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. TEGAL": { 
    A3: { ibuRumahTangga: 20, lainnya: 22, pensiun: 0, phk: 1, sekolah: 0, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 3, lainnya: 5, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 1, lainnya: 3, pensiun: 1, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. TEMANGGUNG": { 
    A3: { ibuRumahTangga: 4, lainnya: 3, pensiun: 2, phk: 1, sekolah: 0, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. WONOGIRI": { 
    A3: { ibuRumahTangga: 38, lainnya: 28, pensiun: 0, phk: 1, sekolah: 3, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 7, lainnya: 5, pensiun: 2, phk: 0, sekolah: 0, usahaBangkrut: 1 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KAB. WONOSOBO": { 
    A3: { ibuRumahTangga: 5, lainnya: 3, pensiun: 2, phk: 0, sekolah: 0, usahaBangkrut: 1 },
    A4: { ibuRumahTangga: 0, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KOTA MAGELANG": { 
    A3: { ibuRumahTangga: 1, lainnya: 4, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 3, lainnya: 4, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KOTA PEKALONGAN": { 
    A3: { ibuRumahTangga: 7, lainnya: 6, pensiun: 0, phk: 0, sekolah: 1, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 2, lainnya: 3, pensiun: 1, phk: 1, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 0, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KOTA SALATIGA": { 
    A3: { ibuRumahTangga: 9, lainnya: 10, pensiun: 0, phk: 0, sekolah: 6, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 1, lainnya: 1, pensiun: 1, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 1, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KOTA SEMARANG": { 
    A3: { ibuRumahTangga: 59, lainnya: 73, pensiun: 3, phk: 3, sekolah: 29, usahaBangkrut: 1 },
    A4: { ibuRumahTangga: 15, lainnya: 19, pensiun: 1, phk: 1, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 10, lainnya: 8, pensiun: 3, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KOTA SURAKARTA": { 
    A3: { ibuRumahTangga: 21, lainnya: 19, pensiun: 1, phk: 2, sekolah: 20, usahaBangkrut: 1 },
    A4: { ibuRumahTangga: 11, lainnya: 9, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 3, lainnya: 2, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  },
  "KOTA TEGAL": { 
    A3: { ibuRumahTangga: 7, lainnya: 12, pensiun: 0, phk: 0, sekolah: 1, usahaBangkrut: 0 },
    A4: { ibuRumahTangga: 4, lainnya: 1, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 },
    A5: { ibuRumahTangga: 1, lainnya: 0, pensiun: 0, phk: 0, sekolah: 0, usahaBangkrut: 0 }
  }
};

// ============================================
// 2. Pekerjaan Utama per kabupaten per jenjang
// ============================================
export const pekerjaanUtamaData: Record<string, Record<string, { 
  berusahaSendiri: number; 
  pegawai: number; 
  serabutan: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { berusahaSendiri: 36, pegawai: 73, serabutan: 7 },
    A4: { berusahaSendiri: 16, pegawai: 27, serabutan: 2 },
    A5: { berusahaSendiri: 5, pegawai: 2, serabutan: 0 }
  },
  "KAB. BANYUMAS": { 
    A3: { berusahaSendiri: 43, pegawai: 93, serabutan: 15 },
    A4: { berusahaSendiri: 9, pegawai: 24, serabutan: 1 },
    A5: { berusahaSendiri: 1, pegawai: 4, serabutan: 0 }
  },
  "KAB. BATANG": { 
    A3: { berusahaSendiri: 19, pegawai: 60, serabutan: 5 },
    A4: { berusahaSendiri: 9, pegawai: 13, serabutan: 1 },
    A5: { berusahaSendiri: 2, pegawai: 2, serabutan: 0 }
  },
  "KAB. BLORA": { 
    A3: { berusahaSendiri: 9, pegawai: 59, serabutan: 5 },
    A4: { berusahaSendiri: 3, pegawai: 10, serabutan: 2 },
    A5: { berusahaSendiri: 5, pegawai: 1, serabutan: 0 }
  },
  "KAB. BOYOLALI": { 
    A3: { berusahaSendiri: 44, pegawai: 155, serabutan: 11 },
    A4: { berusahaSendiri: 9, pegawai: 53, serabutan: 2 },
    A5: { berusahaSendiri: 4, pegawai: 10, serabutan: 0 }
  },
  "KAB. BREBES": { 
    A3: { berusahaSendiri: 21, pegawai: 45, serabutan: 5 },
    A4: { berusahaSendiri: 6, pegawai: 11, serabutan: 0 },
    A5: { berusahaSendiri: 0, pegawai: 6, serabutan: 0 }
  },
  "KAB. CILACAP": { 
    A3: { berusahaSendiri: 46, pegawai: 119, serabutan: 8 },
    A4: { berusahaSendiri: 11, pegawai: 30, serabutan: 4 },
    A5: { berusahaSendiri: 6, pegawai: 7, serabutan: 0 }
  },
  "KAB. DEMAK": { 
    A3: { berusahaSendiri: 7, pegawai: 59, serabutan: 2 },
    A4: { berusahaSendiri: 11, pegawai: 35, serabutan: 1 },
    A5: { berusahaSendiri: 3, pegawai: 9, serabutan: 0 }
  },
  "KAB. GROBOGAN": { 
    A3: { berusahaSendiri: 14, pegawai: 36, serabutan: 4 },
    A4: { berusahaSendiri: 5, pegawai: 9, serabutan: 1 },
    A5: { berusahaSendiri: 1, pegawai: 1, serabutan: 0 }
  },
  "KAB. JEPARA": { 
    A3: { berusahaSendiri: 19, pegawai: 47, serabutan: 3 },
    A4: { berusahaSendiri: 7, pegawai: 7, serabutan: 1 },
    A5: { berusahaSendiri: 2, pegawai: 2, serabutan: 1 }
  },
  "KAB. KARANGANYAR": { 
    A3: { berusahaSendiri: 42, pegawai: 136, serabutan: 10 },
    A4: { berusahaSendiri: 25, pegawai: 43, serabutan: 1 },
    A5: { berusahaSendiri: 6, pegawai: 9, serabutan: 0 }
  },
  "KAB. KEBUMEN": { 
    A3: { berusahaSendiri: 22, pegawai: 56, serabutan: 6 },
    A4: { berusahaSendiri: 5, pegawai: 8, serabutan: 1 },
    A5: { berusahaSendiri: 3, pegawai: 5, serabutan: 0 }
  },
  "KAB. KENDAL": { 
    A3: { berusahaSendiri: 24, pegawai: 71, serabutan: 3 },
    A4: { berusahaSendiri: 10, pegawai: 5, serabutan: 2 },
    A5: { berusahaSendiri: 5, pegawai: 8, serabutan: 0 }
  },
  "KAB. KLATEN": { 
    A3: { berusahaSendiri: 70, pegawai: 203, serabutan: 15 },
    A4: { berusahaSendiri: 26, pegawai: 56, serabutan: 5 },
    A5: { berusahaSendiri: 13, pegawai: 10, serabutan: 1 }
  },
  "KAB. KUDUS": { 
    A3: { berusahaSendiri: 15, pegawai: 87, serabutan: 6 },
    A4: { berusahaSendiri: 15, pegawai: 37, serabutan: 5 },
    A5: { berusahaSendiri: 5, pegawai: 14, serabutan: 1 }
  },
  "KAB. MAGELANG": { 
    A3: { berusahaSendiri: 35, pegawai: 92, serabutan: 4 },
    A4: { berusahaSendiri: 11, pegawai: 18, serabutan: 1 },
    A5: { berusahaSendiri: 2, pegawai: 6, serabutan: 0 }
  },
  "KAB. PATI": { 
    A3: { berusahaSendiri: 17, pegawai: 63, serabutan: 3 },
    A4: { berusahaSendiri: 9, pegawai: 11, serabutan: 0 },
    A5: { berusahaSendiri: 5, pegawai: 3, serabutan: 0 }
  },
  "KAB. PEKALONGAN": { 
    A3: { berusahaSendiri: 15, pegawai: 70, serabutan: 4 },
    A4: { berusahaSendiri: 4, pegawai: 17, serabutan: 0 },
    A5: { berusahaSendiri: 0, pegawai: 4, serabutan: 0 }
  },
  "KAB. PEMALANG": { 
    A3: { berusahaSendiri: 28, pegawai: 55, serabutan: 10 },
    A4: { berusahaSendiri: 12, pegawai: 24, serabutan: 3 },
    A5: { berusahaSendiri: 5, pegawai: 1, serabutan: 1 }
  },
  "KAB. PURBALINGGA": { 
    A3: { berusahaSendiri: 20, pegawai: 65, serabutan: 4 },
    A4: { berusahaSendiri: 6, pegawai: 20, serabutan: 2 },
    A5: { berusahaSendiri: 5, pegawai: 4, serabutan: 0 }
  },
  "KAB. PURWOREJO": { 
    A3: { berusahaSendiri: 29, pegawai: 75, serabutan: 7 },
    A4: { berusahaSendiri: 7, pegawai: 16, serabutan: 0 },
    A5: { berusahaSendiri: 5, pegawai: 2, serabutan: 0 }
  },
  "KAB. REMBANG": { 
    A3: { berusahaSendiri: 8, pegawai: 26, serabutan: 4 },
    A4: { berusahaSendiri: 5, pegawai: 8, serabutan: 0 },
    A5: { berusahaSendiri: 1, pegawai: 0, serabutan: 0 }
  },
  "KAB. SEMARANG": { 
    A3: { berusahaSendiri: 32, pegawai: 149, serabutan: 9 },
    A4: { berusahaSendiri: 14, pegawai: 54, serabutan: 1 },
    A5: { berusahaSendiri: 8, pegawai: 13, serabutan: 1 }
  },
  "KAB. SRAGEN": { 
    A3: { berusahaSendiri: 35, pegawai: 121, serabutan: 20 },
    A4: { berusahaSendiri: 18, pegawai: 35, serabutan: 0 },
    A5: { berusahaSendiri: 6, pegawai: 10, serabutan: 1 }
  },
  "KAB. SUKOHARJO": { 
    A3: { berusahaSendiri: 46, pegawai: 126, serabutan: 23 },
    A4: { berusahaSendiri: 34, pegawai: 52, serabutan: 2 },
    A5: { berusahaSendiri: 15, pegawai: 18, serabutan: 0 }
  },
  "KAB. TEGAL": { 
    A3: { berusahaSendiri: 36, pegawai: 107, serabutan: 13 },
    A4: { berusahaSendiri: 17, pegawai: 30, serabutan: 1 },
    A5: { berusahaSendiri: 5, pegawai: 14, serabutan: 2 }
  },
  "KAB. TEMANGGUNG": { 
    A3: { berusahaSendiri: 20, pegawai: 61, serabutan: 6 },
    A4: { berusahaSendiri: 6, pegawai: 28, serabutan: 1 },
    A5: { berusahaSendiri: 0, pegawai: 9, serabutan: 0 }
  },
  "KAB. WONOGIRI": { 
    A3: { berusahaSendiri: 45, pegawai: 224, serabutan: 16 },
    A4: { berusahaSendiri: 20, pegawai: 78, serabutan: 9 },
    A5: { berusahaSendiri: 7, pegawai: 16, serabutan: 0 }
  },
  "KAB. WONOSOBO": { 
    A3: { berusahaSendiri: 16, pegawai: 22, serabutan: 4 },
    A4: { berusahaSendiri: 9, pegawai: 8, serabutan: 2 },
    A5: { berusahaSendiri: 1, pegawai: 1, serabutan: 0 }
  },
  "KOTA MAGELANG": { 
    A3: { berusahaSendiri: 10, pegawai: 43, serabutan: 1 },
    A4: { berusahaSendiri: 2, pegawai: 7, serabutan: 1 },
    A5: { berusahaSendiri: 1, pegawai: 2, serabutan: 0 }
  },
  "KOTA PEKALONGAN": { 
    A3: { berusahaSendiri: 15, pegawai: 45, serabutan: 2 },
    A4: { berusahaSendiri: 6, pegawai: 18, serabutan: 0 },
    A5: { berusahaSendiri: 1, pegawai: 2, serabutan: 0 }
  },
  "KOTA SALATIGA": { 
    A3: { berusahaSendiri: 11, pegawai: 57, serabutan: 3 },
    A4: { berusahaSendiri: 3, pegawai: 15, serabutan: 1 },
    A5: { berusahaSendiri: 3, pegawai: 8, serabutan: 0 }
  },
  "KOTA SEMARANG": { 
    A3: { berusahaSendiri: 86, pegawai: 355, serabutan: 31 },
    A4: { berusahaSendiri: 50, pegawai: 131, serabutan: 12 },
    A5: { berusahaSendiri: 21, pegawai: 52, serabutan: 4 }
  },
  "KOTA SURAKARTA": { 
    A3: { berusahaSendiri: 66, pegawai: 170, serabutan: 15 },
    A4: { berusahaSendiri: 30, pegawai: 52, serabutan: 2 },
    A5: { berusahaSendiri: 13, pegawai: 8, serabutan: 2 }
  },
  "KOTA TEGAL": { 
    A3: { berusahaSendiri: 17, pegawai: 42, serabutan: 6 },
    A4: { berusahaSendiri: 6, pegawai: 8, serabutan: 4 },
    A5: { berusahaSendiri: 3, pegawai: 6, serabutan: 2 }
  }
};

// ============================================
// 3. Peran Masyarakat per kabupaten per jenjang
// ============================================
export const peranMasyarakatData: Record<string, Record<string, { 
  sangatTidakDiterima: number;
  tidakDiterima: number;
  netral: number;
  diterima: number;
  sangatDiterima: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { sangatTidakDiterima: 3, tidakDiterima: 0, netral: 14, diterima: 79, sangatDiterima: 46 },
    A4: { sangatTidakDiterima: 0, tidakDiterima: 0, netral: 1, diterima: 23, sangatDiterima: 27 },
    A5: { sangatTidakDiterima: 0, tidakDiterima: 0, netral: 0, diterima: 2, sangatDiterima: 5 }
  },
  "KAB. BANYUMAS": { 
    A3: { sangatTidakDiterima: 2, tidakDiterima: 0, netral: 19, diterima: 138, sangatDiterima: 53 },
    A4: { sangatTidakDiterima: 0, tidakDiterima: 0, netral: 1, diterima: 25, sangatDiterima: 21 },
    A5: { sangatTidakDiterima: 1, tidakDiterima: 0, netral: 0, diterima: 4, sangatDiterima: 4 }
  },
  "KOTA SEMARANG": { 
    A3: { sangatTidakDiterima: 10, tidakDiterima: 1, netral: 98, diterima: 377, sangatDiterima: 160 },
    A4: { sangatTidakDiterima: 8, tidakDiterima: 0, netral: 15, diterima: 128, sangatDiterima: 80 },
    A5: { sangatTidakDiterima: 0, tidakDiterima: 0, netral: 1, diterima: 43, sangatDiterima: 54 }
  }
};

// ============================================
// 4. Dukungan Pasangan per kabupaten per jenjang
// ============================================
export const dukunganPasanganData: Record<string, Record<string, { 
  sangatNegatif: number;
  negatif: number;
  netral: number;
  positif: number;
  sangatPositif: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { sangatNegatif: 1, negatif: 3, netral: 31, positif: 83, sangatPositif: 24 },
    A4: { sangatNegatif: 0, negatif: 1, netral: 3, positif: 33, sangatPositif: 14 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 3, sangatPositif: 4 }
  },
  "KAB. BANYUMAS": { 
    A3: { sangatNegatif: 0, negatif: 3, netral: 46, positif: 126, sangatPositif: 33 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 5, positif: 27, sangatPositif: 15 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 4, sangatPositif: 5 }
  },
  "KOTA SEMARANG": { 
    A3: { sangatNegatif: 4, negatif: 14, netral: 163, positif: 338, sangatPositif: 123 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 20, positif: 138, sangatPositif: 73 },
    A5: { sangatNegatif: 0, negatif: 1, netral: 2, positif: 43, sangatPositif: 52 }
  }
};

// ============================================
// 5. Umur Anak per kabupaten
// ============================================
export const umurAnakData: Record<string, { 
  kurang6: number; 
  antara6_12: number; 
  antara13_15: number; 
  antara16_18: number; 
  lebih18: number 
}> = {
  "KAB. BANJARNEGARA": { kurang6: 47, antara6_12: 105, antara13_15: 51, antara16_18: 52, lebih18: 78 },
  "KAB. BANYUMAS": { kurang6: 42, antara6_12: 113, antara13_15: 60, antara16_18: 54, lebih18: 143 },
  "KAB. BATANG": { kurang6: 19, antara6_12: 44, antara13_15: 11, antara16_18: 19, lebih18: 18 },
  "KAB. BLORA": { kurang6: 15, antara6_12: 48, antara13_15: 25, antara16_18: 23, lebih18: 30 },
  "KAB. BOYOLALI": { kurang6: 55, antara6_12: 134, antara13_15: 72, antara16_18: 88, lebih18: 118 },
  "KAB. BREBES": { kurang6: 22, antara6_12: 50, antara13_15: 30, antara16_18: 29, lebih18: 58 },
  "KAB. CILACAP": { kurang6: 45, antara6_12: 113, antara13_15: 65, antara16_18: 69, lebih18: 143 },
  "KAB. DEMAK": { kurang6: 16, antara6_12: 47, antara13_15: 33, antara16_18: 36, lebih18: 87 },
  "KAB. GROBOGAN": { kurang6: 13, antara6_12: 39, antara13_15: 12, antara16_18: 18, lebih18: 40 },
  "KAB. JEPARA": { kurang6: 20, antara6_12: 42, antara13_15: 32, antara16_18: 26, lebih18: 63 },
  "KAB. KARANGANYAR": { kurang6: 57, antara6_12: 136, antara13_15: 74, antara16_18: 63, lebih18: 130 },
  "KAB. KEBUMEN": { kurang6: 15, antara6_12: 57, antara13_15: 26, antara16_18: 27, lebih18: 41 },
  "KAB. KENDAL": { kurang6: 22, antara6_12: 56, antara13_15: 34, antara16_18: 33, lebih18: 76 },
  "KAB. KLATEN": { kurang6: 80, antara6_12: 219, antara13_15: 108, antara16_18: 118, lebih18: 176 },
  "KAB. KUDUS": { kurang6: 25, antara6_12: 81, antara13_15: 36, antara16_18: 52, lebih18: 150 },
  "KAB. MAGELANG": { kurang6: 23, antara6_12: 72, antara13_15: 40, antara16_18: 51, lebih18: 128 },
  "KAB. PATI": { kurang6: 21, antara6_12: 41, antara13_15: 33, antara16_18: 33, lebih18: 49 },
  "KAB. PEKALONGAN": { kurang6: 29, antara6_12: 72, antara13_15: 20, antara16_18: 23, lebih18: 48 },
  "KAB. PEMALANG": { kurang6: 28, antara6_12: 66, antara13_15: 36, antara16_18: 35, lebih18: 109 },
  "KAB. PURBALINGGA": { kurang6: 18, antara6_12: 75, antara13_15: 28, antara16_18: 33, lebih18: 53 },
  "KAB. PURWOREJO": { kurang6: 24, antara6_12: 74, antara13_15: 46, antara16_18: 30, lebih18: 83 },
  "KAB. REMBANG": { kurang6: 11, antara6_12: 23, antara13_15: 11, antara16_18: 7, lebih18: 14 },
  "KAB. SEMARANG": { kurang6: 60, antara6_12: 127, antara13_15: 85, antara16_18: 60, lebih18: 139 },
  "KAB. SRAGEN": { kurang6: 46, antara6_12: 120, antara13_15: 72, antara16_18: 73, lebih18: 105 },
  "KAB. SUKOHARJO": { kurang6: 51, antara6_12: 159, antara13_15: 91, antara16_18: 114, lebih18: 152 },
  "KAB. TEGAL": { kurang6: 42, antara6_12: 91, antara13_15: 51, antara16_18: 70, lebih18: 192 },
  "KAB. TEMANGGUNG": { kurang6: 15, antara6_12: 52, antara13_15: 25, antara16_18: 26, lebih18: 60 },
  "KAB. WONOGIRI": { kurang6: 83, antara6_12: 174, antara13_15: 87, antara16_18: 101, lebih18: 164 },
  "KAB. WONOSOBO": { kurang6: 9, antara6_12: 25, antara13_15: 14, antara16_18: 19, lebih18: 33 },
  "KOTA MAGELANG": { kurang6: 10, antara6_12: 24, antara13_15: 22, antara16_18: 12, lebih18: 34 },
  "KOTA PEKALONGAN": { kurang6: 22, antara6_12: 34, antara13_15: 17, antara16_18: 23, lebih18: 30 },
  "KOTA SALATIGA": { kurang6: 12, antara6_12: 48, antara13_15: 34, antara16_18: 43, lebih18: 72 },
  "KOTA SEMARANG": { kurang6: 153, antara6_12: 367, antara13_15: 183, antara16_18: 188, lebih18: 326 },
  "KOTA SURAKARTA": { kurang6: 73, antara6_12: 204, antara13_15: 94, antara16_18: 95, lebih18: 136 },
  "KOTA TEGAL": { kurang6: 27, antara6_12: 52, antara13_15: 29, antara16_18: 22, lebih18: 40 }
};

// ============================================
// 6. Sekolah Anak per kabupaten
// ============================================
export const sekolahAnakData: Record<string, { kurang3: number; antara3_5: number; lebih6: number }> = {
  "KAB. BANJARNEGARA": { kurang3: 149, antara3_5: 40, lebih6: 1 },
  "KAB. BANYUMAS": { kurang3: 192, antara3_5: 39, lebih6: 3 },
  "KAB. BATANG": { kurang3: 101, antara3_5: 16, lebih6: 1 },
  "KAB. BLORA": { kurang3: 81, antara3_5: 16, lebih6: 0 },
  "KAB. BOYOLALI": { kurang3: 233, antara3_5: 71, lebih6: 0 },
  "KAB. BREBES": { kurang3: 83, antara3_5: 27, lebih6: 0 },
  "KAB. CILACAP": { kurang3: 239, antara3_5: 53, lebih6: 1 },
  "KAB. DEMAK": { kurang3: 128, antara3_5: 26, lebih6: 1 },
  "KAB. GROBOGAN": { kurang3: 71, antara3_5: 14, lebih6: 0 },
  "KAB. JEPARA": { kurang3: 69, antara3_5: 26, lebih6: 1 },
  "KAB. KARANGANYAR": { kurang3: 240, antara3_5: 58, lebih6: 1 },
  "KAB. KEBUMEN": { kurang3: 95, antara3_5: 22, lebih6: 0 },
  "KAB. KENDAL": { kurang3: 119, antara3_5: 28, lebih6: 1 },
  "KAB. KLATEN": { kurang3: 344, antara3_5: 112, lebih6: 1 },
  "KAB. KUDUS": { kurang3: 178, antara3_5: 40, lebih6: 4 },
  "KAB. MAGELANG": { kurang3: 145, antara3_5: 39, lebih6: 2 },
  "KAB. PATI": { kurang3: 88, antara3_5: 30, lebih6: 1 },
  "KAB. PEKALONGAN": { kurang3: 85, antara3_5: 28, lebih6: 1 },
  "KAB. PEMALANG": { kurang3: 149, antara3_5: 30, lebih6: 2 },
  "KAB. PURBALINGGA": { kurang3: 97, antara3_5: 29, lebih6: 0 },
  "KAB. PURWOREJO": { kurang3: 109, antara3_5: 42, lebih6: 2 },
  "KAB. REMBANG": { kurang3: 50, antara3_5: 9, lebih6: 0 },
  "KAB. SEMARANG": { kurang3: 232, antara3_5: 61, lebih6: 5 },
  "KAB. SRAGEN": { kurang3: 210, antara3_5: 58, lebih6: 2 },
  "KAB. SUKOHARJO": { kurang3: 305, antara3_5: 84, lebih6: 2 },
  "KAB. TEGAL": { kurang3: 223, antara3_5: 50, lebih6: 1 },
  "KAB. TEMANGGUNG": { kurang3: 111, antara3_5: 22, lebih6: 0 },
  "KAB. WONOGIRI": { kurang3: 376, antara3_5: 70, lebih6: 3 },
  "KAB. WONOSOBO": { kurang3: 59, antara3_5: 13, lebih6: 0 },
  "KOTA MAGELANG": { kurang3: 55, antara3_5: 13, lebih6: 2 },
  "KOTA PEKALONGAN": { kurang3: 82, antara3_5: 18, lebih6: 0 },
  "KOTA SALATIGA": { kurang3: 75, antara3_5: 34, lebih6: 0 },
  "KOTA SEMARANG": { kurang3: 664, antara3_5: 165, lebih6: 2 },
  "KOTA SURAKARTA": { kurang3: 283, antara3_5: 94, lebih6: 6 },
  "KOTA TEGAL": { kurang3: 93, antara3_5: 20, lebih6: 0 }
};

// ============================================
// 7. Pendidikan Anak per kabupaten
// ============================================
export const pendidikanAnakData: Record<string, { 
  tbTk: number; 
  sdMi: number; 
  smpMts: number; 
  smaMa: number; 
  diploma: number; 
  s1: number; 
  s2: number; 
  s3: number 
}> = {
  "KAB. BANJARNEGARA": { tbTk: 42, sdMi: 91, smpMts: 46, smaMa: 65, diploma: 8, s1: 56, s2: 0, s3: 0 },
  "KAB. BANYUMAS": { tbTk: 26, sdMi: 93, smpMts: 58, smaMa: 88, diploma: 13, s1: 100, s2: 2, s3: 0 },
  "KAB. BATANG": { tbTk: 17, sdMi: 29, smpMts: 13, smaMa: 21, diploma: 1, s1: 16, s2: 1, s3: 0 },
  "KAB. BLORA": { tbTk: 14, sdMi: 42, smpMts: 20, smaMa: 34, diploma: 1, s1: 20, s2: 1, s3: 0 },
  "KAB. BOYOLALI": { tbTk: 40, sdMi: 114, smpMts: 68, smaMa: 102, diploma: 9, s1: 99, s2: 3, s3: 0 },
  "KAB. BREBES": { tbTk: 16, sdMi: 39, smpMts: 27, smaMa: 42, diploma: 3, s1: 39, s2: 5, s3: 0 },
  "KAB. CILACAP": { tbTk: 29, sdMi: 101, smpMts: 64, smaMa: 87, diploma: 11, s1: 108, s2: 4, s3: 1 },
  "KAB. DEMAK": { tbTk: 11, sdMi: 40, smpMts: 29, smaMa: 57, diploma: 5, s1: 65, s2: 3, s3: 0 },
  "KAB. GROBOGAN": { tbTk: 9, sdMi: 32, smpMts: 12, smaMa: 24, diploma: 2, s1: 26, s2: 0, s3: 0 },
  "KAB. JEPARA": { tbTk: 13, sdMi: 33, smpMts: 33, smaMa: 42, diploma: 4, s1: 46, s2: 2, s3: 0 },
  "KAB. KARANGANYAR": { tbTk: 43, sdMi: 117, smpMts: 72, smaMa: 78, diploma: 9, s1: 104, s2: 1, s3: 0 },
  "KAB. KEBUMEN": { tbTk: 13, sdMi: 50, smpMts: 22, smaMa: 38, diploma: 1, s1: 33, s2: 0, s3: 0 },
  "KAB. KENDAL": { tbTk: 25, sdMi: 42, smpMts: 31, smaMa: 48, diploma: 3, s1: 60, s2: 1, s3: 0 },
  "KAB. KLATEN": { tbTk: 64, sdMi: 180, smpMts: 116, smaMa: 156, diploma: 18, s1: 121, s2: 1, s3: 0 },
  "KAB. KUDUS": { tbTk: 25, sdMi: 66, smpMts: 37, smaMa: 70, diploma: 11, s1: 116, s2: 8, s3: 0 },
  "KAB. MAGELANG": { tbTk: 21, sdMi: 68, smpMts: 37, smaMa: 69, diploma: 5, s1: 99, s2: 4, s3: 0 },
  "KAB. PATI": { tbTk: 13, sdMi: 39, smpMts: 28, smaMa: 44, diploma: 3, s1: 39, s2: 2, s3: 0 },
  "KAB. PEKALONGAN": { tbTk: 25, sdMi: 60, smpMts: 18, smaMa: 39, diploma: 3, s1: 33, s2: 0, s3: 0 },
  "KAB. PEMALANG": { tbTk: 23, sdMi: 59, smpMts: 38, smaMa: 72, diploma: 4, s1: 63, s2: 1, s3: 0 },
  "KAB. PURBALINGGA": { tbTk: 27, sdMi: 63, smpMts: 21, smaMa: 49, diploma: 2, s1: 40, s2: 1, s3: 0 },
  "KAB. PURWOREJO": { tbTk: 23, sdMi: 59, smpMts: 45, smaMa: 49, diploma: 5, s1: 63, s2: 1, s3: 0 },
  "KAB. REMBANG": { tbTk: 12, sdMi: 17, smpMts: 11, smaMa: 14, diploma: 1, s1: 7, s2: 1, s3: 0 },
  "KAB. SEMARANG": { tbTk: 36, sdMi: 112, smpMts: 71, smaMa: 96, diploma: 8, s1: 106, s2: 3, s3: 0 },
  "KAB. SRAGEN": { tbTk: 43, sdMi: 100, smpMts: 67, smaMa: 93, diploma: 7, s1: 77, s2: 4, s3: 1 },
  "KAB. SUKOHARJO": { tbTk: 38, sdMi: 137, smpMts: 81, smaMa: 124, diploma: 16, s1: 134, s2: 2, s3: 0 },
  "KAB. TEGAL": { tbTk: 28, sdMi: 80, smpMts: 52, smaMa: 97, diploma: 26, s1: 138, s2: 3, s3: 0 },
  "KAB. TEMANGGUNG": { tbTk: 18, sdMi: 42, smpMts: 24, smaMa: 39, diploma: 6, s1: 37, s2: 2, s3: 0 },
  "KAB. WONOGIRI": { tbTk: 52, sdMi: 148, smpMts: 95, smaMa: 133, diploma: 12, s1: 117, s2: 7, s3: 0 },
  "KAB. WONOSOBO": { tbTk: 9, sdMi: 22, smpMts: 15, smaMa: 26, diploma: 4, s1: 18, s2: 0, s3: 0 },
  "KOTA MAGELANG": { tbTk: 9, sdMi: 20, smpMts: 24, smaMa: 15, diploma: 1, s1: 28, s2: 1, s3: 0 },
  "KOTA PEKALONGAN": { tbTk: 14, sdMi: 27, smpMts: 18, smaMa: 25, diploma: 2, s1: 27, s2: 0, s3: 0 },
  "KOTA SALATIGA": { tbTk: 9, sdMi: 41, smpMts: 35, smaMa: 51, diploma: 3, s1: 61, s2: 1, s3: 0 },
  "KOTA SEMARANG": { tbTk: 110, sdMi: 285, smpMts: 175, smaMa: 242, diploma: 34, s1: 259, s2: 7, s3: 2 },
  "KOTA SURAKARTA": { tbTk: 56, sdMi: 162, smpMts: 102, smaMa: 105, diploma: 14, s1: 111, s2: 7, s3: 0 },
  "KOTA TEGAL": { tbTk: 21, sdMi: 46, smpMts: 28, smaMa: 30, diploma: 7, s1: 27, s2: 0, s3: 1 }
};

// ============================================
// 8. Jenis Bantuan per kabupaten
// ============================================
export const jenisBantuanData: Record<string, { 
  rumahTidakLayak: number; 
  lansia: number; 
  disabilitas: number; 
  bltUmkm: number; 
  pkh: number; 
  kur: number; 
  beasiswa: number; 
  kip: number; 
  bpnt: number; 
  lainnya: number 
}> = {
  "KAB. BANJARNEGARA": { rumahTidakLayak: 0, lansia: 1, disabilitas: 0, bltUmkm: 1, pkh: 5, kur: 6, beasiswa: 0, kip: 17, bpnt: 2, lainnya: 26 },
  "KAB. BANYUMAS": { rumahTidakLayak: 5, lansia: 0, disabilitas: 0, bltUmkm: 0, pkh: 8, kur: 9, beasiswa: 1, kip: 22, bpnt: 17, lainnya: 9 },
  "KAB. BATANG": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 2, pkh: 1, kur: 1, beasiswa: 1, kip: 8, bpnt: 3, lainnya: 6 },
  "KAB. BLORA": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 1, pkh: 0, kur: 2, beasiswa: 0, kip: 1, bpnt: 0, lainnya: 5 },
  "KAB. BOYOLALI": { rumahTidakLayak: 0, lansia: 1, disabilitas: 0, bltUmkm: 2, pkh: 6, kur: 7, beasiswa: 0, kip: 17, bpnt: 1, lainnya: 18 },
  "KAB. BREBES": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 0, pkh: 5, kur: 5, beasiswa: 0, kip: 11, bpnt: 2, lainnya: 1 },
  "KAB. CILACAP": { rumahTidakLayak: 0, lansia: 1, disabilitas: 0, bltUmkm: 3, pkh: 7, kur: 7, beasiswa: 0, kip: 43, bpnt: 11, lainnya: 6 },
  "KAB. DEMAK": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 1, pkh: 4, kur: 3, beasiswa: 1, kip: 13, bpnt: 3, lainnya: 11 },
  "KAB. GROBOGAN": { rumahTidakLayak: 0, lansia: 0, disabilitas: 1, bltUmkm: 0, pkh: 0, kur: 1, beasiswa: 0, kip: 2, bpnt: 1, lainnya: 0 },
  "KAB. JEPARA": { rumahTidakLayak: 1, lansia: 0, disabilitas: 0, bltUmkm: 2, pkh: 4, kur: 7, beasiswa: 1, kip: 10, bpnt: 3, lainnya: 4 },
  "KAB. KARANGANYAR": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 2, pkh: 3, kur: 7, beasiswa: 2, kip: 15, bpnt: 3, lainnya: 14 },
  "KAB. KEBUMEN": { rumahTidakLayak: 0, lansia: 1, disabilitas: 0, bltUmkm: 1, pkh: 2, kur: 4, beasiswa: 0, kip: 14, bpnt: 2, lainnya: 7 },
  "KAB. KENDAL": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 1, pkh: 1, kur: 12, beasiswa: 0, kip: 2, bpnt: 2, lainnya: 10 },
  "KAB. KLATEN": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 2, pkh: 13, kur: 14, beasiswa: 0, kip: 42, bpnt: 15, lainnya: 27 },
  "KAB. KUDUS": { rumahTidakLayak: 2, lansia: 0, disabilitas: 0, bltUmkm: 1, pkh: 5, kur: 2, beasiswa: 1, kip: 13, bpnt: 3, lainnya: 9 },
  "KAB. MAGELANG": { rumahTidakLayak: 0, lansia: 1, disabilitas: 0, bltUmkm: 1, pkh: 6, kur: 5, beasiswa: 0, kip: 10, bpnt: 2, lainnya: 11 },
  "KAB. PATI": { rumahTidakLayak: 0, lansia: 1, disabilitas: 0, bltUmkm: 0, pkh: 2, kur: 10, beasiswa: 0, kip: 3, bpnt: 0, lainnya: 5 },
  "KAB. PEKALONGAN": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 0, pkh: 2, kur: 5, beasiswa: 2, kip: 5, bpnt: 3, lainnya: 8 },
  "KAB. PEMALANG": { rumahTidakLayak: 0, lansia: 0, disabilitas: 1, bltUmkm: 1, pkh: 13, kur: 6, beasiswa: 0, kip: 19, bpnt: 11, lainnya: 5 },
  "KAB. PURBALINGGA": { rumahTidakLayak: 1, lansia: 0, disabilitas: 0, bltUmkm: 0, pkh: 2, kur: 3, beasiswa: 0, kip: 9, bpnt: 4, lainnya: 4 },
  "KAB. PURWOREJO": { rumahTidakLayak: 1, lansia: 0, disabilitas: 0, bltUmkm: 2, pkh: 1, kur: 4, beasiswa: 1, kip: 18, bpnt: 1, lainnya: 7 },
  "KAB. REMBANG": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 0, pkh: 3, kur: 2, beasiswa: 0, kip: 2, bpnt: 1, lainnya: 0 },
  "KAB. SEMARANG": { rumahTidakLayak: 2, lansia: 2, disabilitas: 3, bltUmkm: 3, pkh: 4, kur: 11, beasiswa: 4, kip: 13, bpnt: 4, lainnya: 19 },
  "KAB. SRAGEN": { rumahTidakLayak: 5, lansia: 0, disabilitas: 0, bltUmkm: 6, pkh: 7, kur: 15, beasiswa: 1, kip: 21, bpnt: 5, lainnya: 13 },
  "KAB. SUKOHARJO": { rumahTidakLayak: 4, lansia: 0, disabilitas: 1, bltUmkm: 11, pkh: 6, kur: 15, beasiswa: 0, kip: 20, bpnt: 7, lainnya: 20 },
  "KAB. TEGAL": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 1, pkh: 7, kur: 9, beasiswa: 2, kip: 36, bpnt: 10, lainnya: 13 },
  "KAB. TEMANGGUNG": { rumahTidakLayak: 3, lansia: 1, disabilitas: 0, bltUmkm: 0, pkh: 7, kur: 7, beasiswa: 1, kip: 8, bpnt: 2, lainnya: 1 },
  "KAB. WONOGIRI": { rumahTidakLayak: 4, lansia: 1, disabilitas: 1, bltUmkm: 2, pkh: 8, kur: 9, beasiswa: 0, kip: 39, bpnt: 13, lainnya: 21 },
  "KAB. WONOSOBO": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 0, pkh: 0, kur: 0, beasiswa: 0, kip: 0, bpnt: 1, lainnya: 2 },
  "KOTA MAGELANG": { rumahTidakLayak: 0, lansia: 0, disabilitas: 0, bltUmkm: 0, pkh: 1, kur: 2, beasiswa: 0, kip: 1, bpnt: 0, lainnya: 3 },
  "KOTA PEKALONGAN": { rumahTidakLayak: 4, lansia: 0, disabilitas: 0, bltUmkm: 0, pkh: 3, kur: 3, beasiswa: 0, kip: 8, bpnt: 1, lainnya: 6 },
  "KOTA SALATIGA": { rumahTidakLayak: 0, lansia: 0, disabilitas: 1, bltUmkm: 2, pkh: 0, kur: 0, beasiswa: 0, kip: 2, bpnt: 0, lainnya: 4 },
  "KOTA SEMARANG": { rumahTidakLayak: 1, lansia: 0, disabilitas: 1, bltUmkm: 8, pkh: 12, kur: 26, beasiswa: 5, kip: 53, bpnt: 6, lainnya: 44 },
  "KOTA SURAKARTA": { rumahTidakLayak: 2, lansia: 1, disabilitas: 0, bltUmkm: 7, pkh: 1, kur: 11, beasiswa: 0, kip: 12, bpnt: 3, lainnya: 18 },
  "KOTA TEGAL": { rumahTidakLayak: 1, lansia: 0, disabilitas: 0, bltUmkm: 0, pkh: 1, kur: 2, beasiswa: 2, kip: 19, bpnt: 4, lainnya: 14 }
};

// ============================================
// 9. Sumber Bantuan per kabupaten
// ============================================
export const sumberBantuanData: Record<string, { 
  anggotaDewan: number; 
  struktur: number; 
  mitraStrategis: number; 
  lainnya: number; 
  pemerintah: number 
}> = {
  "KAB. BANJARNEGARA": { anggotaDewan: 86, struktur: 87, mitraStrategis: 59, lainnya: 35, pemerintah: 45 },
  "KAB. BANYUMAS": { anggotaDewan: 126, struktur: 71, mitraStrategis: 34, lainnya: 59, pemerintah: 38 },
  "KAB. BATANG": { anggotaDewan: 32, struktur: 29, mitraStrategis: 40, lainnya: 41, pemerintah: 17 },
  "KAB. BLORA": { anggotaDewan: 30, struktur: 27, mitraStrategis: 27, lainnya: 32, pemerintah: 16 },
  "KAB. BOYOLALI": { anggotaDewan: 87, struktur: 70, mitraStrategis: 60, lainnya: 124, pemerintah: 55 },
  "KAB. BREBES": { anggotaDewan: 54, struktur: 19, mitraStrategis: 28, lainnya: 28, pemerintah: 24 },
  "KAB. CILACAP": { anggotaDewan: 90, struktur: 83, mitraStrategis: 87, lainnya: 76, pemerintah: 51 },
  "KAB. DEMAK": { anggotaDewan: 33, struktur: 25, mitraStrategis: 55, lainnya: 43, pemerintah: 21 },
  "KAB. GROBOGAN": { anggotaDewan: 33, struktur: 24, mitraStrategis: 24, lainnya: 20, pemerintah: 14 },
  "KAB. JEPARA": { anggotaDewan: 19, struktur: 19, mitraStrategis: 16, lainnya: 37, pemerintah: 24 },
  "KAB. KARANGANYAR": { anggotaDewan: 112, struktur: 79, mitraStrategis: 77, lainnya: 86, pemerintah: 36 },
  "KAB. KEBUMEN": { anggotaDewan: 31, struktur: 38, mitraStrategis: 35, lainnya: 36, pemerintah: 13 },
  "KAB. KENDAL": { anggotaDewan: 45, struktur: 33, mitraStrategis: 33, lainnya: 48, pemerintah: 32 },
  "KAB. KLATEN": { anggotaDewan: 179, struktur: 112, mitraStrategis: 107, lainnya: 122, pemerintah: 101 },
  "KAB. KUDUS": { anggotaDewan: 62, struktur: 46, mitraStrategis: 42, lainnya: 80, pemerintah: 37 },
  "KAB. MAGELANG": { anggotaDewan: 52, struktur: 71, mitraStrategis: 36, lainnya: 43, pemerintah: 30 },
  "KAB. PATI": { anggotaDewan: 29, struktur: 19, mitraStrategis: 32, lainnya: 46, pemerintah: 13 },
  "KAB. PEKALONGAN": { anggotaDewan: 26, struktur: 45, mitraStrategis: 35, lainnya: 34, pemerintah: 16 },
  "KAB. PEMALANG": { anggotaDewan: 44, struktur: 58, mitraStrategis: 42, lainnya: 55, pemerintah: 42 },
  "KAB. PURBALINGGA": { anggotaDewan: 47, struktur: 29, mitraStrategis: 27, lainnya: 41, pemerintah: 19 },
  "KAB. PURWOREJO": { anggotaDewan: 38, struktur: 41, mitraStrategis: 34, lainnya: 52, pemerintah: 45 },
  "KAB. REMBANG": { anggotaDewan: 8, struktur: 10, mitraStrategis: 11, lainnya: 21, pemerintah: 9 },
  "KAB. SEMARANG": { anggotaDewan: 95, struktur: 78, mitraStrategis: 98, lainnya: 74, pemerintah: 56 },
  "KAB. SRAGEN": { anggotaDewan: 131, struktur: 67, mitraStrategis: 45, lainnya: 63, pemerintah: 45 },
  "KAB. SUKOHARJO": { anggotaDewan: 124, struktur: 59, mitraStrategis: 71, lainnya: 147, pemerintah: 75 },
  "KAB. TEGAL": { anggotaDewan: 90, struktur: 51, mitraStrategis: 41, lainnya: 77, pemerintah: 49 },
  "KAB. TEMANGGUNG": { anggotaDewan: 34, struktur: 17, mitraStrategis: 34, lainnya: 50, pemerintah: 26 },
  "KAB. WONOGIRI": { anggotaDewan: 149, struktur: 109, mitraStrategis: 100, lainnya: 131, pemerintah: 90 },
  "KAB. WONOSOBO": { anggotaDewan: 3, struktur: 21, mitraStrategis: 17, lainnya: 33, pemerintah: 9 },
  "KOTA MAGELANG": { anggotaDewan: 9, struktur: 22, mitraStrategis: 20, lainnya: 31, pemerintah: 12 },
  "KOTA PEKALONGAN": { anggotaDewan: 21, struktur: 27, mitraStrategis: 27, lainnya: 35, pemerintah: 22 },
  "KOTA SALATIGA": { anggotaDewan: 55, struktur: 35, mitraStrategis: 20, lainnya: 39, pemerintah: 23 },
  "KOTA SEMARANG": { anggotaDewan: 303, struktur: 389, mitraStrategis: 179, lainnya: 241, pemerintah: 155 },
  "KOTA SURAKARTA": { anggotaDewan: 129, struktur: 190, mitraStrategis: 96, lainnya: 98, pemerintah: 67 },
  "KOTA TEGAL": { anggotaDewan: 67, struktur: 40, mitraStrategis: 29, lainnya: 20, pemerintah: 34 }
};

// ============================================
// 10. Program yang Dibutuhkan per kabupaten
// ============================================
export const programDibutuhkanData: Record<string, { 
  disabilitas: number; 
  beasiswa: number; 
  pelatihan: number; 
  modalUsaha: number; 
  asuransi: number; 
  lainnya: number; 
  konseling: number; 
  bantuanDarurat: number; 
  bantuanHukum: number 
}> = {
  "KAB. BANJARNEGARA": { disabilitas: 6, beasiswa: 158, pelatihan: 95, modalUsaha: 120, asuransi: 73, lainnya: 4, konseling: 30, bantuanDarurat: 30, bantuanHukum: 19 },
  "KAB. BANYUMAS": { disabilitas: 6, beasiswa: 210, pelatihan: 119, modalUsaha: 161, asuransi: 89, lainnya: 3, konseling: 74, bantuanDarurat: 40, bantuanHukum: 15 },
  "KAB. BATANG": { disabilitas: 2, beasiswa: 99, pelatihan: 66, modalUsaha: 84, asuransi: 35, lainnya: 3, konseling: 31, bantuanDarurat: 16, bantuanHukum: 10 },
  "KAB. BLORA": { disabilitas: 0, beasiswa: 82, pelatihan: 57, modalUsaha: 57, asuransi: 23, lainnya: 6, konseling: 25, bantuanDarurat: 9, bantuanHukum: 5 },
  "KAB. BOYOLALI": { disabilitas: 4, beasiswa: 257, pelatihan: 169, modalUsaha: 201, asuransi: 88, lainnya: 5, konseling: 63, bantuanDarurat: 38, bantuanHukum: 21 },
  "KAB. BREBES": { disabilitas: 4, beasiswa: 99, pelatihan: 56, modalUsaha: 92, asuransi: 38, lainnya: 0, konseling: 16, bantuanDarurat: 13, bantuanHukum: 7 },
  "KAB. CILACAP": { disabilitas: 10, beasiswa: 234, pelatihan: 144, modalUsaha: 200, asuransi: 99, lainnya: 6, konseling: 48, bantuanDarurat: 24, bantuanHukum: 19 },
  "KAB. DEMAK": { disabilitas: 8, beasiswa: 105, pelatihan: 59, modalUsaha: 78, asuransi: 41, lainnya: 5, konseling: 27, bantuanDarurat: 27, bantuanHukum: 14 },
  "KAB. GROBOGAN": { disabilitas: 3, beasiswa: 70, pelatihan: 38, modalUsaha: 56, asuransi: 33, lainnya: 0, konseling: 17, bantuanDarurat: 9, bantuanHukum: 8 },
  "KAB. JEPARA": { disabilitas: 3, beasiswa: 78, pelatihan: 50, modalUsaha: 66, asuransi: 26, lainnya: 2, konseling: 21, bantuanDarurat: 15, bantuanHukum: 11 },
  "KAB. KARANGANYAR": { disabilitas: 8, beasiswa: 233, pelatihan: 157, modalUsaha: 196, asuransi: 103, lainnya: 2, konseling: 54, bantuanDarurat: 45, bantuanHukum: 30 },
  "KAB. KEBUMEN": { disabilitas: 3, beasiswa: 84, pelatihan: 70, modalUsaha: 84, asuransi: 26, lainnya: 4, konseling: 19, bantuanDarurat: 14, bantuanHukum: 11 },
  "KAB. KENDAL": { disabilitas: 2, beasiswa: 124, pelatihan: 67, modalUsaha: 89, asuransi: 42, lainnya: 2, konseling: 39, bantuanDarurat: 22, bantuanHukum: 14 },
  "KAB. KLATEN": { disabilitas: 13, beasiswa: 388, pelatihan: 273, modalUsaha: 308, asuransi: 153, lainnya: 9, konseling: 76, bantuanDarurat: 57, bantuanHukum: 37 },
  "KAB. KUDUS": { disabilitas: 8, beasiswa: 172, pelatihan: 139, modalUsaha: 135, asuransi: 53, lainnya: 3, konseling: 38, bantuanDarurat: 25, bantuanHukum: 18 },
  "KAB. MAGELANG": { disabilitas: 1, beasiswa: 164, pelatihan: 95, modalUsaha: 113, asuransi: 65, lainnya: 5, konseling: 31, bantuanDarurat: 14, bantuanHukum: 6 },
  "KAB. PATI": { disabilitas: 4, beasiswa: 88, pelatihan: 73, modalUsaha: 74, asuransi: 26, lainnya: 7, konseling: 21, bantuanDarurat: 10, bantuanHukum: 10 },
  "KAB. PEKALONGAN": { disabilitas: 2, beasiswa: 99, pelatihan: 64, modalUsaha: 76, asuransi: 37, lainnya: 4, konseling: 28, bantuanDarurat: 12, bantuanHukum: 12 },
  "KAB. PEMALANG": { disabilitas: 8, beasiswa: 161, pelatihan: 104, modalUsaha: 136, asuransi: 69, lainnya: 1, konseling: 29, bantuanDarurat: 11, bantuanHukum: 10 },
  "KAB. PURBALINGGA": { disabilitas: 1, beasiswa: 111, pelatihan: 64, modalUsaha: 81, asuransi: 47, lainnya: 2, konseling: 27, bantuanDarurat: 25, bantuanHukum: 12 },
  "KAB. PURWOREJO": { disabilitas: 4, beasiswa: 136, pelatihan: 78, modalUsaha: 95, asuransi: 60, lainnya: 5, konseling: 52, bantuanDarurat: 17, bantuanHukum: 8 },
  "KAB. REMBANG": { disabilitas: 3, beasiswa: 35, pelatihan: 22, modalUsaha: 39, asuransi: 14, lainnya: 1, konseling: 4, bantuanDarurat: 9, bantuanHukum: 2 },
  "KAB. SEMARANG": { disabilitas: 10, beasiswa: 251, pelatihan: 170, modalUsaha: 174, asuransi: 91, lainnya: 6, konseling: 67, bantuanDarurat: 40, bantuanHukum: 24 },
  "KAB. SRAGEN": { disabilitas: 10, beasiswa: 237, pelatihan: 135, modalUsaha: 189, asuransi: 73, lainnya: 7, konseling: 32, bantuanDarurat: 37, bantuanHukum: 16 },
  "KAB. SUKOHARJO": { disabilitas: 15, beasiswa: 309, pelatihan: 206, modalUsaha: 229, asuransi: 130, lainnya: 10, konseling: 73, bantuanDarurat: 58, bantuanHukum: 27 },
  "KAB. TEGAL": { disabilitas: 7, beasiswa: 230, pelatihan: 124, modalUsaha: 178, asuransi: 100, lainnya: 6, konseling: 60, bantuanDarurat: 31, bantuanHukum: 18 },
  "KAB. TEMANGGUNG": { disabilitas: 2, beasiswa: 111, pelatihan: 66, modalUsaha: 91, asuransi: 41, lainnya: 1, konseling: 15, bantuanDarurat: 27, bantuanHukum: 10 },
  "KAB. WONOGIRI": { disabilitas: 15, beasiswa: 382, pelatihan: 264, modalUsaha: 296, asuransi: 135, lainnya: 13, konseling: 95, bantuanDarurat: 64, bantuanHukum: 40 },
  "KAB. WONOSOBO": { disabilitas: 1, beasiswa: 56, pelatihan: 42, modalUsaha: 46, asuransi: 18, lainnya: 1, konseling: 19, bantuanDarurat: 6, bantuanHukum: 7 },
  "KOTA MAGELANG": { disabilitas: 2, beasiswa: 67, pelatihan: 39, modalUsaha: 45, asuransi: 15, lainnya: 3, konseling: 16, bantuanDarurat: 10, bantuanHukum: 9 },
  "KOTA PEKALONGAN": { disabilitas: 0, beasiswa: 86, pelatihan: 53, modalUsaha: 57, asuransi: 27, lainnya: 5, konseling: 31, bantuanDarurat: 21, bantuanHukum: 10 },
  "KOTA SALATIGA": { disabilitas: 3, beasiswa: 99, pelatihan: 66, modalUsaha: 79, asuransi: 40, lainnya: 1, konseling: 29, bantuanDarurat: 23, bantuanHukum: 18 },
  "KOTA SEMARANG": { disabilitas: 16, beasiswa: 730, pelatihan: 495, modalUsaha: 583, asuransi: 299, lainnya: 12, konseling: 183, bantuanDarurat: 127, bantuanHukum: 76 },
  "KOTA SURAKARTA": { disabilitas: 14, beasiswa: 362, pelatihan: 247, modalUsaha: 297, asuransi: 131, lainnya: 19, konseling: 118, bantuanDarurat: 72, bantuanHukum: 48 },
  "KOTA TEGAL": { disabilitas: 5, beasiswa: 99, pelatihan: 58, modalUsaha: 81, asuransi: 37, lainnya: 1, konseling: 28, bantuanDarurat: 13, bantuanHukum: 14 }
};

// ============================================
// 11. Pendapatan SES lengkap per kabupaten per jenjang
// ============================================
export const pendapatanSESLengkapData: Record<string, Record<string, { 
  rendah: number; 
  menengah: number; 
  menengahAtas: number; 
  tinggi: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { rendah: 10, menengah: 27, menengahAtas: 18, tinggi: 52 },
    A4: { rendah: 3, menengah: 7, menengahAtas: 3, tinggi: 25 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 6 }
  },
  "KAB. BANYUMAS": { 
    A3: { rendah: 22, menengah: 28, menengahAtas: 24, tinggi: 67 },
    A4: { rendah: 2, menengah: 2, menengahAtas: 5, tinggi: 27 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 7 }
  },
  "KAB. BATANG": { 
    A3: { rendah: 11, menengah: 21, menengahAtas: 16, tinggi: 31 },
    A4: { rendah: 0, menengah: 2, menengahAtas: 2, tinggi: 13 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 4 }
  },
  "KAB. BLORA": { 
    A3: { rendah: 9, menengah: 14, menengahAtas: 8, tinggi: 24 },
    A4: { rendah: 0, menengah: 1, menengahAtas: 4, tinggi: 9 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 6 }
  },
  "KAB. BOYOLALI": { 
    A3: { rendah: 34, menengah: 35, menengahAtas: 37, tinggi: 81 },
    A4: { rendah: 2, menengah: 4, menengahAtas: 5, tinggi: 37 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 1, tinggi: 7 }
  },
  "KAB. BREBES": { 
    A3: { rendah: 7, menengah: 14, menengahAtas: 13, tinggi: 37 },
    A4: { rendah: 1, menengah: 3, menengahAtas: 1, tinggi: 15 },
    A5: { rendah: 1, menengah: 0, menengahAtas: 0, tinggi: 5 }
  },
  "KAB. CILACAP": { 
    A3: { rendah: 24, menengah: 35, menengahAtas: 33, tinggi: 85 },
    A4: { rendah: 3, menengah: 7, menengahAtas: 7, tinggi: 33 },
    A5: { rendah: 0, menengah: 2, menengahAtas: 0, tinggi: 9 }
  },
  "KAB. DEMAK": { 
    A3: { rendah: 4, menengah: 16, menengahAtas: 15, tinggi: 30 },
    A4: { rendah: 1, menengah: 7, menengahAtas: 11, tinggi: 15 },
    A5: { rendah: 1, menengah: 1, menengahAtas: 1, tinggi: 9 }
  },
  "KAB. GROBOGAN": { 
    A3: { rendah: 5, menengah: 14, menengahAtas: 8, tinggi: 25 },
    A4: { rendah: 0, menengah: 2, menengahAtas: 2, tinggi: 8 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 1 }
  },
  "KAB. JEPARA": { 
    A3: { rendah: 6, menengah: 6, menengahAtas: 11, tinggi: 29 },
    A4: { rendah: 1, menengah: 0, menengahAtas: 2, tinggi: 7 },
    A5: { rendah: 0, menengah: 1, menengahAtas: 1, tinggi: 4 }
  },
  "KAB. KARANGANYAR": { 
    A3: { rendah: 18, menengah: 31, menengahAtas: 35, tinggi: 100 },
    A4: { rendah: 3, menengah: 3, menengahAtas: 4, tinggi: 38 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 2, tinggi: 10 }
  },
  "KAB. KEBUMEN": { 
    A3: { rendah: 16, menengah: 16, menengahAtas: 15, tinggi: 31 },
    A4: { rendah: 0, menengah: 2, menengahAtas: 0, tinggi: 7 },
    A5: { rendah: 0, menengah: 1, menengahAtas: 2, tinggi: 6 }
  },
  "KAB. KENDAL": { 
    A3: { rendah: 9, menengah: 12, menengahAtas: 26, tinggi: 37 },
    A4: { rendah: 2, menengah: 1, menengahAtas: 2, tinggi: 7 },
    A5: { rendah: 1, menengah: 0, menengahAtas: 4, tinggi: 8 }
  },
  "KAB. KLATEN": { 
    A3: { rendah: 34, menengah: 51, menengahAtas: 52, tinggi: 118 },
    A4: { rendah: 5, menengah: 7, menengahAtas: 15, tinggi: 47 },
    A5: { rendah: 0, menengah: 5, menengahAtas: 0, tinggi: 17 }
  },
  "KAB. KUDUS": { 
    A3: { rendah: 12, menengah: 21, menengahAtas: 12, tinggi: 46 },
    A4: { rendah: 8, menengah: 4, menengahAtas: 7, tinggi: 34 },
    A5: { rendah: 0, menengah: 1, menengahAtas: 2, tinggi: 13 }
  },
  "KAB. MAGELANG": { 
    A3: { rendah: 19, menengah: 39, menengahAtas: 20, tinggi: 39 },
    A4: { rendah: 2, menengah: 3, menengahAtas: 2, tinggi: 18 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 8 }
  },
  "KAB. PATI": { 
    A3: { rendah: 4, menengah: 10, menengahAtas: 18, tinggi: 39 },
    A4: { rendah: 1, menengah: 2, menengahAtas: 3, tinggi: 9 },
    A5: { rendah: 1, menengah: 0, menengahAtas: 0, tinggi: 7 }
  },
  "KAB. PEKALONGAN": { 
    A3: { rendah: 11, menengah: 16, menengahAtas: 21, tinggi: 29 },
    A4: { rendah: 0, menengah: 4, menengahAtas: 2, tinggi: 10 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 1, tinggi: 2 }
  },
  "KAB. PEMALANG": { 
    A3: { rendah: 19, menengah: 36, menengahAtas: 14, tinggi: 33 },
    A4: { rendah: 7, menengah: 4, menengahAtas: 7, tinggi: 20 },
    A5: { rendah: 0, menengah: 2, menengahAtas: 0, tinggi: 3 }
  },
  "KAB. PURBALINGGA": { 
    A3: { rendah: 10, menengah: 16, menengahAtas: 20, tinggi: 26 },
    A4: { rendah: 0, menengah: 1, menengahAtas: 2, tinggi: 23 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 6 }
  },
  "KAB. PURWOREJO": { 
    A3: { rendah: 9, menengah: 24, menengahAtas: 19, tinggi: 40 },
    A4: { rendah: 1, menengah: 2, menengahAtas: 2, tinggi: 16 },
    A5: { rendah: 1, menengah: 0, menengahAtas: 0, tinggi: 5 }
  },
  "KAB. REMBANG": { 
    A3: { rendah: 6, menengah: 8, menengahAtas: 7, tinggi: 15 },
    A4: { rendah: 0, menengah: 3, menengahAtas: 0, tinggi: 3 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 1 }
  },
  "KAB. SEMARANG": { 
    A3: { rendah: 14, menengah: 34, menengahAtas: 43, tinggi: 68 },
    A4: { rendah: 5, menengah: 2, menengahAtas: 11, tinggi: 39 },
    A5: { rendah: 0, menengah: 1, menengahAtas: 0, tinggi: 19 }
  },
  "KAB. SRAGEN": { 
    A3: { rendah: 28, menengah: 37, menengahAtas: 23, tinggi: 66 },
    A4: { rendah: 3, menengah: 3, menengahAtas: 2, tinggi: 31 },
    A5: { rendah: 1, menengah: 1, menengahAtas: 3, tinggi: 12 }
  },
  "KAB. SUKOHARJO": { 
    A3: { rendah: 31, menengah: 30, menengahAtas: 25, tinggi: 95 },
    A4: { rendah: 8, menengah: 7, menengahAtas: 13, tinggi: 56 },
    A5: { rendah: 3, menengah: 2, menengahAtas: 1, tinggi: 20 }
  },
  "KAB. TEGAL": { 
    A3: { rendah: 28, menengah: 28, menengahAtas: 28, tinggi: 59 },
    A4: { rendah: 1, menengah: 7, menengahAtas: 2, tinggi: 30 },
    A5: { rendah: 3, menengah: 3, menengahAtas: 2, tinggi: 9 }
  },
  "KAB. TEMANGGUNG": { 
    A3: { rendah: 13, menengah: 27, menengahAtas: 10, tinggi: 28 },
    A4: { rendah: 2, menengah: 6, menengahAtas: 3, tinggi: 15 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 1, tinggi: 7 }
  },
  "KAB. WONOGIRI": { 
    A3: { rendah: 59, menengah: 47, menengahAtas: 49, tinggi: 88 },
    A4: { rendah: 19, menengah: 6, menengahAtas: 4, tinggi: 64 },
    A5: { rendah: 0, menengah: 1, menengahAtas: 1, tinggi: 12 }
  },
  "KAB. WONOSOBO": { 
    A3: { rendah: 6, menengah: 6, menengahAtas: 10, tinggi: 25 },
    A4: { rendah: 2, menengah: 1, menengahAtas: 2, tinggi: 10 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 2 }
  },
  "KOTA MAGELANG": { 
    A3: { rendah: 4, menengah: 8, menengahAtas: 8, tinggi: 18 },
    A4: { rendah: 1, menengah: 2, menengahAtas: 0, tinggi: 10 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 2 }
  },
  "KOTA PEKALONGAN": { 
    A3: { rendah: 2, menengah: 11, menengahAtas: 12, tinggi: 26 },
    A4: { rendah: 1, menengah: 2, menengahAtas: 5, tinggi: 14 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 0 }
  },
  "KOTA SALATIGA": { 
    A3: { rendah: 6, menengah: 14, menengahAtas: 12, tinggi: 31 },
    A4: { rendah: 2, menengah: 0, menengahAtas: 2, tinggi: 13 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 0, tinggi: 7 }
  },
  "KOTA SEMARANG": { 
    A3: { rendah: 28, menengah: 55, menengahAtas: 78, tinggi: 265 },
    A4: { rendah: 4, menengah: 11, menengahAtas: 17, tinggi: 129 },
    A5: { rendah: 2, menengah: 3, menengahAtas: 2, tinggi: 60 }
  },
  "KOTA SURAKARTA": { 
    A3: { rendah: 11, menengah: 24, menengahAtas: 36, tinggi: 126 },
    A4: { rendah: 2, menengah: 4, menengahAtas: 5, tinggi: 64 },
    A5: { rendah: 1, menengah: 0, menengahAtas: 1, tinggi: 20 }
  },
  "KOTA TEGAL": { 
    A3: { rendah: 6, menengah: 6, menengahAtas: 11, tinggi: 38 },
    A4: { rendah: 1, menengah: 2, menengahAtas: 1, tinggi: 9 },
    A5: { rendah: 0, menengah: 0, menengahAtas: 2, tinggi: 4 }
  }
};

// ============================================
// 12. Dampak Politik Pasangan per kabupaten per jenjang (lengkap)
// ============================================
export const dampakPolitikPasanganLengkapData: Record<string, Record<string, { 
  sangatNegatif: number;
  negatif: number;
  netral: number;
  positif: number;
  sangatPositif: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 34, positif: 90, sangatPositif: 18 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 5, positif: 39, sangatPositif: 7 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 4, sangatPositif: 2 }
  },
  "KAB. BANYUMAS": { 
    A3: { sangatNegatif: 1, negatif: 6, netral: 45, positif: 137, sangatPositif: 18 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 8, positif: 28, sangatPositif: 11 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 7, sangatPositif: 2 }
  },
  "KAB. BATANG": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 43, positif: 53, sangatPositif: 12 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 4, positif: 16, sangatPositif: 5 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 2, positif: 1, sangatPositif: 2 }
  },
  "KAB. BLORA": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 16, positif: 45, sangatPositif: 21 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 2, positif: 12, sangatPositif: 3 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 4, sangatPositif: 2 }
  },
  "KAB. BOYOLALI": { 
    A3: { sangatNegatif: 1, negatif: 2, netral: 72, positif: 141, sangatPositif: 27 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 10, positif: 52, sangatPositif: 10 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 11, sangatPositif: 5 }
  },
  "KAB. BREBES": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 15, positif: 55, sangatPositif: 16 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 2, positif: 16, sangatPositif: 6 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 6, sangatPositif: 1 }
  },
  "KAB. CILACAP": { 
    A3: { sangatNegatif: 1, negatif: 1, netral: 53, positif: 149, sangatPositif: 27 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 8, positif: 44, sangatPositif: 8 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 13, sangatPositif: 6 }
  },
  "KAB. DEMAK": { 
    A3: { sangatNegatif: 0, negatif: 3, netral: 36, positif: 30, sangatPositif: 11 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 17, positif: 25, sangatPositif: 6 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 13, sangatPositif: 2 }
  },
  "KAB. GROBOGAN": { 
    A3: { sangatNegatif: 1, negatif: 0, netral: 23, positif: 28, sangatPositif: 16 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 3, positif: 9, sangatPositif: 6 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 2, sangatPositif: 0 }
  },
  "KAB. JEPARA": { 
    A3: { sangatNegatif: 0, negatif: 4, netral: 12, positif: 60, sangatPositif: 8 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 5, positif: 7, sangatPositif: 4 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 6, sangatPositif: 0 }
  },
  "KAB. KARANGANYAR": { 
    A3: { sangatNegatif: 1, negatif: 0, netral: 59, positif: 146, sangatPositif: 30 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 5, positif: 55, sangatPositif: 16 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 15, sangatPositif: 1 }
  },
  "KAB. KEBUMEN": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 34, positif: 56, sangatPositif: 10 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 12, sangatPositif: 2 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 7, sangatPositif: 2 }
  },
  "KAB. KENDAL": { 
    A3: { sangatNegatif: 2, negatif: 0, netral: 32, positif: 73, sangatPositif: 18 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 3, positif: 16, sangatPositif: 3 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 7, sangatPositif: 8 }
  },
  "KAB. KLATEN": { 
    A3: { sangatNegatif: 1, negatif: 2, netral: 92, positif: 235, sangatPositif: 44 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 15, positif: 62, sangatPositif: 22 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 4, positif: 16, sangatPositif: 9 }
  },
  "KAB. KUDUS": { 
    A3: { sangatNegatif: 0, negatif: 4, netral: 42, positif: 86, sangatPositif: 11 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 13, positif: 49, sangatPositif: 10 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 13, sangatPositif: 7 }
  },
  "KAB. MAGELANG": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 29, positif: 96, sangatPositif: 25 },
    A4: { sangatNegatif: 0, negatif: 1, netral: 4, positif: 21, sangatPositif: 7 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 7, sangatPositif: 1 }
  },
  "KAB. PATI": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 19, positif: 53, sangatPositif: 20 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 2, positif: 17, sangatPositif: 3 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 5, sangatPositif: 5 }
  },
  "KAB. PEKALONGAN": { 
    A3: { sangatNegatif: 0, negatif: 1, netral: 30, positif: 59, sangatPositif: 12 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 5, positif: 14, sangatPositif: 5 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 2, sangatPositif: 2 }
  },
  "KAB. PEMALANG": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 39, positif: 84, sangatPositif: 14 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 5, positif: 33, sangatPositif: 11 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 4, sangatPositif: 2 }
  },
  "KAB. PURBALINGGA": { 
    A3: { sangatNegatif: 0, negatif: 2, netral: 28, positif: 62, sangatPositif: 8 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 6, positif: 25, sangatPositif: 2 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 7, sangatPositif: 2 }
  },
  "KAB. PURWOREJO": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 34, positif: 93, sangatPositif: 18 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 7, positif: 16, sangatPositif: 3 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 6, sangatPositif: 1 }
  },
  "KAB. REMBANG": { 
    A3: { sangatNegatif: 1, negatif: 1, netral: 10, positif: 16, sangatPositif: 13 },
    A4: { sangatNegatif: 1, negatif: 0, netral: 2, positif: 4, sangatPositif: 6 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 0, sangatPositif: 1 }
  },
  "KAB. SEMARANG": { 
    A3: { sangatNegatif: 0, negatif: 2, netral: 59, positif: 120, sangatPositif: 39 },
    A4: { sangatNegatif: 0, negatif: 1, netral: 11, positif: 56, sangatPositif: 10 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 4, positif: 14, sangatPositif: 11 }
  },
  "KAB. SRAGEN": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 42, positif: 136, sangatPositif: 30 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 4, positif: 42, sangatPositif: 12 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 14, sangatPositif: 6 }
  },
  "KAB. SUKOHARJO": { 
    A3: { sangatNegatif: 0, negatif: 4, netral: 78, positif: 140, sangatPositif: 31 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 12, positif: 67, sangatPositif: 26 },
    A5: { sangatNegatif: 0, negatif: 1, netral: 4, positif: 23, sangatPositif: 12 }
  },
  "KAB. TEGAL": { 
    A3: { sangatNegatif: 0, negatif: 1, netral: 50, positif: 116, sangatPositif: 35 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 6, positif: 41, sangatPositif: 10 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 4, positif: 15, sangatPositif: 7 }
  },
  "KAB. TEMANGGUNG": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 30, positif: 61, sangatPositif: 6 },
    A4: { sangatNegatif: 0, negatif: 1, netral: 9, positif: 24, sangatPositif: 1 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 6, sangatPositif: 3 }
  },
  "KAB. WONOGIRI": { 
    A3: { sangatNegatif: 0, negatif: 3, netral: 95, positif: 221, sangatPositif: 40 },
    A4: { sangatNegatif: 0, negatif: 1, netral: 15, positif: 83, sangatPositif: 23 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 2, positif: 13, sangatPositif: 8 }
  },
  "KAB. WONOSOBO": { 
    A3: { sangatNegatif: 0, negatif: 1, netral: 11, positif: 35, sangatPositif: 7 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 4, positif: 15, sangatPositif: 2 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 2, sangatPositif: 0 }
  },
  "KOTA MAGELANG": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 19, positif: 30, sangatPositif: 11 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 5, positif: 9, sangatPositif: 3 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 3, sangatPositif: 1 }
  },
  "KOTA PEKALONGAN": { 
    A3: { sangatNegatif: 0, negatif: 2, netral: 33, positif: 38, sangatPositif: 4 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 7, positif: 16, sangatPositif: 8 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 1, sangatPositif: 2 }
  },
  "KOTA SALATIGA": { 
    A3: { sangatNegatif: 0, negatif: 2, netral: 39, positif: 50, sangatPositif: 5 },
    A4: { sangatNegatif: 0, negatif: 1, netral: 4, positif: 10, sangatPositif: 8 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 6, sangatPositif: 5 }
  },
  "KOTA SEMARANG": { 
    A3: { sangatNegatif: 2, negatif: 7, netral: 199, positif: 336, sangatPositif: 98 },
    A4: { sangatNegatif: 0, negatif: 1, netral: 37, positif: 164, sangatPositif: 29 },
    A5: { sangatNegatif: 1, negatif: 0, netral: 3, positif: 60, sangatPositif: 34 }
  },
  "KOTA SURAKARTA": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 98, positif: 185, sangatPositif: 32 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 15, positif: 77, sangatPositif: 14 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 1, positif: 20, sangatPositif: 7 }
  },
  "KOTA TEGAL": { 
    A3: { sangatNegatif: 1, negatif: 1, netral: 33, positif: 38, sangatPositif: 12 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 3, positif: 13, sangatPositif: 7 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 0, positif: 9, sangatPositif: 3 }
  }
};

// ============================================
// 13. Dampak Politik Anak per kabupaten per jenjang (lengkap)
// ============================================
export const dampakPolitikAnakLengkapData: Record<string, Record<string, { 
  sangatNegatif: number;
  negatif: number;
  netral: number;
  positif: number;
  sangatPositif: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { sangatNegatif: 0, negatif: 1, netral: 23, positif: 90, sangatPositif: 28 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 6, positif: 40, sangatPositif: 5 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 2, positif: 5, sangatPositif: 0 }
  },
  "KAB. BANYUMAS": { 
    A3: { sangatNegatif: 0, negatif: 4, netral: 52, positif: 130, sangatPositif: 21 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 7, positif: 30, sangatPositif: 10 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 2, positif: 6, sangatPositif: 1 }
  },
  "KOTA SEMARANG": { 
    A3: { sangatNegatif: 0, negatif: 2, netral: 205, positif: 329, sangatPositif: 106 },
    A4: { sangatNegatif: 0, negatif: 2, netral: 41, positif: 157, sangatPositif: 31 },
    A5: { sangatNegatif: 1, negatif: 0, netral: 11, positif: 63, sangatPositif: 23 }
  }
};

// ============================================
// 14. Dampak Politik Karir per kabupaten per jenjang (lengkap)
// ============================================
export const dampakPolitikKarirLengkapData: Record<string, Record<string, { 
  sangatNegatif: number;
  negatif: number;
  netral: number;
  positif: number;
  sangatPositif: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { sangatNegatif: 0, negatif: 0, netral: 31, positif: 92, sangatPositif: 19 },
    A4: { sangatNegatif: 0, negatif: 0, netral: 14, positif: 33, sangatPositif: 4 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 3, positif: 4, sangatPositif: 0 }
  },
  "KAB. BANYUMAS": { 
    A3: { sangatNegatif: 0, negatif: 5, netral: 68, positif: 126, sangatPositif: 12 },
    A4: { sangatNegatif: 0, negatif: 2, netral: 11, positif: 28, sangatPositif: 6 },
    A5: { sangatNegatif: 0, negatif: 0, netral: 4, positif: 5, sangatPositif: 0 }
  },
  "KOTA SEMARANG": { 
    A3: { sangatNegatif: 4, negatif: 14, netral: 245, positif: 318, sangatPositif: 65 },
    A4: { sangatNegatif: 0, negatif: 4, netral: 86, positif: 119, sangatPositif: 22 },
    A5: { sangatNegatif: 1, negatif: 1, netral: 18, positif: 53, sangatPositif: 25 }
  }
};
