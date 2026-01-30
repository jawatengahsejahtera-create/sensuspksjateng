// Additional PKS Census Data - Pendidikan, Level Rukun UPA, Peran Masyarakat, etc.

import { kabupatenList } from "./pksData";

// Pendidikan per kabupaten per jenjang
export const pendidikanData: Record<string, Record<string, { 
  sma: number; 
  diploma: number; 
  s1: number; 
  s2: number; 
  s3: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { sma: 55, diploma: 10, s1: 68, s2: 5, s3: 0 },
    A4: { sma: 9, diploma: 7, s1: 34, s2: 1, s3: 0 },
    A5: { sma: 3, diploma: 0, s1: 3, s2: 1, s3: 0 }
  },
  "KAB. BANYUMAS": { 
    A3: { sma: 86, diploma: 14, s1: 104, s2: 6, s3: 1 },
    A4: { sma: 11, diploma: 3, s1: 27, s2: 6, s3: 0 },
    A5: { sma: 1, diploma: 0, s1: 7, s2: 1, s3: 0 }
  },
  "KAB. BATANG": { 
    A3: { sma: 47, diploma: 8, s1: 45, s2: 4, s3: 0 },
    A4: { sma: 6, diploma: 0, s1: 17, s2: 2, s3: 0 },
    A5: { sma: 0, diploma: 1, s1: 3, s2: 1, s3: 0 }
  },
  "KAB. BLORA": { 
    A3: { sma: 27, diploma: 11, s1: 42, s2: 2, s3: 0 },
    A4: { sma: 2, diploma: 2, s1: 11, s2: 2, s3: 0 },
    A5: { sma: 0, diploma: 1, s1: 5, s2: 0, s3: 0 }
  },
  "KAB. BOYOLALI": { 
    A3: { sma: 68, diploma: 27, s1: 133, s2: 11, s3: 0 },
    A4: { sma: 9, diploma: 9, s1: 44, s2: 8, s3: 0 },
    A5: { sma: 1, diploma: 2, s1: 10, s2: 1, s3: 0 }
  },
  "KAB. BREBES": { 
    A3: { sma: 26, diploma: 9, s1: 45, s2: 6, s3: 0 },
    A4: { sma: 3, diploma: 2, s1: 17, s2: 1, s3: 1 },
    A5: { sma: 2, diploma: 0, s1: 2, s2: 2, s3: 1 }
  },
  "KAB. CILACAP": { 
    A3: { sma: 93, diploma: 19, s1: 113, s2: 2, s3: 1 },
    A4: { sma: 20, diploma: 7, s1: 30, s2: 1, s3: 0 },
    A5: { sma: 5, diploma: 1, s1: 10, s2: 3, s3: 0 }
  },
  "KAB. DEMAK": { 
    A3: { sma: 19, diploma: 12, s1: 50, s2: 3, s3: 0 },
    A4: { sma: 10, diploma: 1, s1: 32, s2: 5, s3: 1 },
    A5: { sma: 2, diploma: 1, s1: 9, s2: 4, s3: 0 }
  },
  "KAB. GROBOGAN": { 
    A3: { sma: 18, diploma: 7, s1: 43, s2: 3, s3: 0 },
    A4: { sma: 4, diploma: 0, s1: 12, s2: 3, s3: 0 },
    A5: { sma: 0, diploma: 0, s1: 2, s2: 0, s3: 0 }
  },
  "KAB. JEPARA": { 
    A3: { sma: 30, diploma: 5, s1: 46, s2: 2, s3: 0 },
    A4: { sma: 2, diploma: 0, s1: 13, s2: 1, s3: 0 },
    A5: { sma: 1, diploma: 1, s1: 3, s2: 1, s3: 0 }
  },
  "KAB. KARANGANYAR": { 
    A3: { sma: 64, diploma: 21, s1: 133, s2: 14, s3: 0 },
    A4: { sma: 16, diploma: 1, s1: 51, s2: 6, s3: 0 },
    A5: { sma: 1, diploma: 2, s1: 12, s2: 1, s3: 0 }
  },
  "KAB. KEBUMEN": { 
    A3: { sma: 22, diploma: 10, s1: 64, s2: 3, s3: 0 },
    A4: { sma: 1, diploma: 1, s1: 10, s2: 3, s3: 0 },
    A5: { sma: 3, diploma: 1, s1: 5, s2: 1, s3: 0 }
  },
  "KAB. KENDAL": { 
    A3: { sma: 35, diploma: 10, s1: 75, s2: 5, s3: 0 },
    A4: { sma: 9, diploma: 1, s1: 12, s2: 0, s3: 0 },
    A5: { sma: 2, diploma: 1, s1: 12, s2: 1, s3: 0 }
  },
  "KAB. KLATEN": { 
    A3: { sma: 138, diploma: 35, s1: 190, s2: 9, s3: 0 },
    A4: { sma: 28, diploma: 10, s1: 49, s2: 10, s3: 1 },
    A5: { sma: 2, diploma: 2, s1: 21, s2: 4, s3: 0 }
  },
  "KAB. KUDUS": { 
    A3: { sma: 39, diploma: 13, s1: 87, s2: 4, s3: 0 },
    A4: { sma: 28, diploma: 3, s1: 38, s2: 3, s3: 0 },
    A5: { sma: 4, diploma: 2, s1: 12, s2: 2, s3: 0 }
  },
  "KAB. MAGELANG": { 
    A3: { sma: 57, diploma: 17, s1: 77, s2: 3, s3: 0 },
    A4: { sma: 10, diploma: 3, s1: 15, s2: 5, s3: 0 },
    A5: { sma: 1, diploma: 1, s1: 6, s2: 1, s3: 0 }
  },
  "KAB. PATI": { 
    A3: { sma: 14, diploma: 10, s1: 60, s2: 7, s3: 0 },
    A4: { sma: 3, diploma: 1, s1: 16, s2: 1, s3: 1 },
    A5: { sma: 1, diploma: 0, s1: 7, s2: 2, s3: 0 }
  },
  "KAB. PEKALONGAN": { 
    A3: { sma: 30, diploma: 6, s1: 63, s2: 1, s3: 0 },
    A4: { sma: 0, diploma: 1, s1: 21, s2: 2, s3: 0 },
    A5: { sma: 0, diploma: 0, s1: 4, s2: 0, s3: 0 }
  },
  "KAB. PEMALANG": { 
    A3: { sma: 74, diploma: 8, s1: 51, s2: 3, s3: 1 },
    A4: { sma: 12, diploma: 3, s1: 32, s2: 2, s3: 0 },
    A5: { sma: 1, diploma: 2, s1: 4, s2: 0, s3: 0 }
  },
  "KAB. PURBALINGGA": { 
    A3: { sma: 28, diploma: 10, s1: 53, s2: 5, s3: 0 },
    A4: { sma: 11, diploma: 2, s1: 14, s2: 5, s3: 0 },
    A5: { sma: 1, diploma: 0, s1: 9, s2: 0, s3: 0 }
  },
  "KAB. PURWOREJO": { 
    A3: { sma: 48, diploma: 14, s1: 72, s2: 6, s3: 0 },
    A4: { sma: 7, diploma: 2, s1: 11, s2: 4, s3: 1 },
    A5: { sma: 0, diploma: 0, s1: 5, s2: 1, s3: 0 }
  },
  "KAB. REMBANG": { 
    A3: { sma: 14, diploma: 1, s1: 27, s2: 1, s3: 0 },
    A4: { sma: 2, diploma: 1, s1: 6, s2: 3, s3: 0 },
    A5: { sma: 1, diploma: 0, s1: 0, s2: 0, s3: 0 }
  },
  "KAB. SEMARANG": { 
    A3: { sma: 57, diploma: 18, s1: 129, s2: 7, s3: 2 },
    A4: { sma: 14, diploma: 9, s1: 42, s2: 11, s3: 0 },
    A5: { sma: 5, diploma: 6, s1: 13, s2: 4, s3: 1 }
  },
  "KAB. SRAGEN": { 
    A3: { sma: 82, diploma: 11, s1: 107, s2: 4, s3: 0 },
    A4: { sma: 15, diploma: 5, s1: 32, s2: 4, s3: 0 },
    A5: { sma: 5, diploma: 1, s1: 14, s2: 1, s3: 0 }
  },
  "KAB. SUKOHARJO": { 
    A3: { sma: 99, diploma: 22, s1: 127, s2: 10, s3: 1 },
    A4: { sma: 31, diploma: 9, s1: 52, s2: 10, s3: 1 },
    A5: { sma: 6, diploma: 3, s1: 26, s2: 4, s3: 1 }
  },
  "KAB. TEGAL": { 
    A3: { sma: 75, diploma: 19, s1: 96, s2: 7, s3: 0 },
    A4: { sma: 18, diploma: 6, s1: 26, s2: 5, s3: 1 },
    A5: { sma: 6, diploma: 3, s1: 16, s2: 1, s3: 0 }
  },
  "KAB. TEMANGGUNG": { 
    A3: { sma: 29, diploma: 7, s1: 54, s2: 4, s3: 1 },
    A4: { sma: 3, diploma: 1, s1: 22, s2: 8, s3: 0 },
    A5: { sma: 0, diploma: 2, s1: 6, s2: 1, s3: 0 }
  },
  "KAB. WONOGIRI": { 
    A3: { sma: 124, diploma: 20, s1: 187, s2: 22, s3: 1 },
    A4: { sma: 34, diploma: 9, s1: 65, s2: 13, s3: 0 },
    A5: { sma: 3, diploma: 1, s1: 14, s2: 4, s3: 1 }
  },
  "KAB. WONOSOBO": { 
    A3: { sma: 24, diploma: 4, s1: 23, s2: 3, s3: 0 },
    A4: { sma: 4, diploma: 0, s1: 13, s2: 3, s3: 0 },
    A5: { sma: 0, diploma: 0, s1: 0, s2: 2, s3: 0 }
  },
  "KOTA MAGELANG": { 
    A3: { sma: 11, diploma: 9, s1: 38, s2: 3, s3: 0 },
    A4: { sma: 2, diploma: 0, s1: 14, s2: 1, s3: 0 },
    A5: { sma: 1, diploma: 0, s1: 3, s2: 0, s3: 0 }
  },
  "KOTA PEKALONGAN": { 
    A3: { sma: 23, diploma: 5, s1: 40, s2: 6, s3: 0 },
    A4: { sma: 9, diploma: 3, s1: 14, s2: 4, s3: 0 },
    A5: { sma: 1, diploma: 0, s1: 2, s2: 0, s3: 0 }
  },
  "KOTA SALATIGA": { 
    A3: { sma: 25, diploma: 10, s1: 58, s2: 2, s3: 0 },
    A4: { sma: 4, diploma: 2, s1: 14, s2: 3, s3: 0 },
    A5: { sma: 1, diploma: 2, s1: 5, s2: 3, s3: 1 }
  },
  "KOTA SEMARANG": { 
    A3: { sma: 163, diploma: 52, s1: 385, s2: 35, s3: 2 },
    A4: { sma: 32, diploma: 35, s1: 138, s2: 18, s3: 4 },
    A5: { sma: 9, diploma: 14, s1: 54, s2: 17, s3: 4 }
  },
  "KOTA SURAKARTA": { 
    A3: { sma: 77, diploma: 32, s1: 183, s2: 24, s3: 0 },
    A4: { sma: 15, diploma: 9, s1: 59, s2: 16, s3: 5 },
    A5: { sma: 2, diploma: 1, s1: 12, s2: 10, s3: 3 }
  },
  "KOTA TEGAL": { 
    A3: { sma: 26, diploma: 10, s1: 41, s2: 6, s3: 1 },
    A4: { sma: 5, diploma: 5, s1: 13, s2: 0, s3: 0 },
    A5: { sma: 1, diploma: 1, s1: 9, s2: 1, s3: 0 }
  }
};

// Level Rukun UPA per kabupaten per jenjang
export const levelRukunUPAData: Record<string, Record<string, { 
  rendah: number; 
  sedang: number; 
  tinggi: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { rendah: 5, sedang: 99, tinggi: 38 },
    A4: { rendah: 6, sedang: 30, tinggi: 15 },
    A5: { rendah: 2, sedang: 5, tinggi: 0 }
  },
  "KAB. BANYUMAS": { 
    A3: { rendah: 16, sedang: 158, tinggi: 41 },
    A4: { rendah: 4, sedang: 31, tinggi: 14 },
    A5: { rendah: 1, sedang: 6, tinggi: 2 }
  },
  "KAB. BATANG": { 
    A3: { rendah: 3, sedang: 74, tinggi: 31 },
    A4: { rendah: 0, sedang: 18, tinggi: 7 },
    A5: { rendah: 1, sedang: 2, tinggi: 2 }
  },
  "KAB. BLORA": { 
    A3: { rendah: 3, sedang: 51, tinggi: 28 },
    A4: { rendah: 2, sedang: 13, tinggi: 2 },
    A5: { rendah: 0, sedang: 5, tinggi: 1 }
  },
  "KAB. BOYOLALI": { 
    A3: { rendah: 17, sedang: 181, tinggi: 46 },
    A4: { rendah: 4, sedang: 51, tinggi: 17 },
    A5: { rendah: 2, sedang: 13, tinggi: 2 }
  },
  "KAB. BREBES": { 
    A3: { rendah: 7, sedang: 69, tinggi: 11 },
    A4: { rendah: 1, sedang: 21, tinggi: 2 },
    A5: { rendah: 0, sedang: 7, tinggi: 0 }
  },
  "KAB. CILACAP": { 
    A3: { rendah: 7, sedang: 171, tinggi: 54 },
    A4: { rendah: 2, sedang: 44, tinggi: 14 },
    A5: { rendah: 0, sedang: 16, tinggi: 3 }
  },
  "KAB. DEMAK": { 
    A3: { rendah: 7, sedang: 51, tinggi: 26 },
    A4: { rendah: 3, sedang: 34, tinggi: 12 },
    A5: { rendah: 2, sedang: 11, tinggi: 3 }
  },
  "KAB. GROBOGAN": { 
    A3: { rendah: 5, sedang: 46, tinggi: 20 },
    A4: { rendah: 3, sedang: 10, tinggi: 6 },
    A5: { rendah: 0, sedang: 2, tinggi: 0 }
  },
  "KAB. JEPARA": { 
    A3: { rendah: 7, sedang: 59, tinggi: 18 },
    A4: { rendah: 2, sedang: 10, tinggi: 4 },
    A5: { rendah: 0, sedang: 5, tinggi: 1 }
  },
  "KAB. KARANGANYAR": { 
    A3: { rendah: 15, sedang: 159, tinggi: 62 },
    A4: { rendah: 2, sedang: 57, tinggi: 17 },
    A5: { rendah: 0, sedang: 16, tinggi: 0 }
  },
  "KAB. KEBUMEN": { 
    A3: { rendah: 6, sedang: 79, tinggi: 15 },
    A4: { rendah: 0, sedang: 12, tinggi: 3 },
    A5: { rendah: 1, sedang: 8, tinggi: 1 }
  },
  "KAB. KENDAL": { 
    A3: { rendah: 0, sedang: 95, tinggi: 30 },
    A4: { rendah: 0, sedang: 21, tinggi: 1 },
    A5: { rendah: 1, sedang: 14, tinggi: 1 }
  },
  "KAB. KLATEN": { 
    A3: { rendah: 17, sedang: 282, tinggi: 79 },
    A4: { rendah: 3, sedang: 69, tinggi: 28 },
    A5: { rendah: 1, sedang: 23, tinggi: 5 }
  },
  "KAB. KUDUS": { 
    A3: { rendah: 7, sedang: 124, tinggi: 13 },
    A4: { rendah: 2, sedang: 54, tinggi: 16 },
    A5: { rendah: 1, sedang: 13, tinggi: 7 }
  },
  "KAB. MAGELANG": { 
    A3: { rendah: 10, sedang: 120, tinggi: 26 },
    A4: { rendah: 1, sedang: 19, tinggi: 13 },
    A5: { rendah: 0, sedang: 6, tinggi: 3 }
  },
  "KAB. PATI": { 
    A3: { rendah: 3, sedang: 60, tinggi: 29 },
    A4: { rendah: 0, sedang: 12, tinggi: 10 },
    A5: { rendah: 0, sedang: 6, tinggi: 4 }
  },
  "KAB. PEKALONGAN": { 
    A3: { rendah: 2, sedang: 75, tinggi: 25 },
    A4: { rendah: 2, sedang: 17, tinggi: 5 },
    A5: { rendah: 0, sedang: 4, tinggi: 0 }
  },
  "KAB. PEMALANG": { 
    A3: { rendah: 10, sedang: 99, tinggi: 29 },
    A4: { rendah: 5, sedang: 34, tinggi: 10 },
    A5: { rendah: 1, sedang: 5, tinggi: 1 }
  },
  "KAB. PURBALINGGA": { 
    A3: { rendah: 12, sedang: 72, tinggi: 16 },
    A4: { rendah: 4, sedang: 25, tinggi: 4 },
    A5: { rendah: 1, sedang: 9, tinggi: 0 }
  },
  "KAB. PURWOREJO": { 
    A3: { rendah: 6, sedang: 105, tinggi: 34 },
    A4: { rendah: 2, sedang: 19, tinggi: 5 },
    A5: { rendah: 0, sedang: 7, tinggi: 0 }
  },
  "KAB. REMBANG": { 
    A3: { rendah: 4, sedang: 24, tinggi: 16 },
    A4: { rendah: 1, sedang: 7, tinggi: 5 },
    A5: { rendah: 0, sedang: 0, tinggi: 1 }
  },
  "KAB. SEMARANG": { 
    A3: { rendah: 11, sedang: 151, tinggi: 61 },
    A4: { rendah: 0, sedang: 63, tinggi: 15 },
    A5: { rendah: 2, sedang: 15, tinggi: 12 }
  },
  "KAB. SRAGEN": { 
    A3: { rendah: 2, sedang: 153, tinggi: 54 },
    A4: { rendah: 1, sedang: 41, tinggi: 16 },
    A5: { rendah: 0, sedang: 15, tinggi: 6 }
  },
  "KAB. SUKOHARJO": { 
    A3: { rendah: 20, sedang: 197, tinggi: 47 },
    A4: { rendah: 4, sedang: 78, tinggi: 23 },
    A5: { rendah: 0, sedang: 32, tinggi: 8 }
  },
  "KAB. TEGAL": { 
    A3: { rendah: 10, sedang: 151, tinggi: 41 },
    A4: { rendah: 3, sedang: 41, tinggi: 13 },
    A5: { rendah: 0, sedang: 20, tinggi: 6 }
  },
  "KAB. TEMANGGUNG": { 
    A3: { rendah: 10, sedang: 62, tinggi: 25 },
    A4: { rendah: 0, sedang: 27, tinggi: 8 },
    A5: { rendah: 0, sedang: 8, tinggi: 1 }
  },
  "KAB. WONOGIRI": { 
    A3: { rendah: 13, sedang: 247, tinggi: 99 },
    A4: { rendah: 4, sedang: 81, tinggi: 37 },
    A5: { rendah: 1, sedang: 16, tinggi: 6 }
  },
  "KAB. WONOSOBO": { 
    A3: { rendah: 5, sedang: 40, tinggi: 9 },
    A4: { rendah: 1, sedang: 20, tinggi: 0 },
    A5: { rendah: 0, sedang: 1, tinggi: 1 }
  },
  "KOTA MAGELANG": { 
    A3: { rendah: 5, sedang: 46, tinggi: 10 },
    A4: { rendah: 2, sedang: 13, tinggi: 2 },
    A5: { rendah: 0, sedang: 1, tinggi: 3 }
  },
  "KOTA PEKALONGAN": { 
    A3: { rendah: 1, sedang: 60, tinggi: 16 },
    A4: { rendah: 3, sedang: 21, tinggi: 7 },
    A5: { rendah: 0, sedang: 1, tinggi: 2 }
  },
  "KOTA SALATIGA": { 
    A3: { rendah: 1, sedang: 74, tinggi: 22 },
    A4: { rendah: 0, sedang: 12, tinggi: 11 },
    A5: { rendah: 0, sedang: 9, tinggi: 3 }
  },
  "KOTA SEMARANG": { 
    A3: { rendah: 24, sedang: 465, tinggi: 160 },
    A4: { rendah: 10, sedang: 167, tinggi: 54 },
    A5: { rendah: 0, sedang: 66, tinggi: 32 }
  },
  "KOTA SURAKARTA": { 
    A3: { rendah: 9, sedang: 233, tinggi: 78 },
    A4: { rendah: 3, sedang: 77, tinggi: 27 },
    A5: { rendah: 0, sedang: 18, tinggi: 10 }
  },
  "KOTA TEGAL": { 
    A3: { rendah: 4, sedang: 66, tinggi: 15 },
    A4: { rendah: 1, sedang: 13, tinggi: 9 },
    A5: { rendah: 0, sedang: 10, tinggi: 2 }
  }
};

// Lama Pembinaan per kabupaten per jenjang
export const lamaPembinaanData: Record<string, Record<string, { 
  kurang5: number; 
  tahun6_10: number; 
  tahun11_15: number; 
  tahun16_20: number;
  tahun21_25: number;
  lebih25: number;
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { kurang5: 5, tahun6_10: 21, tahun11_15: 33, tahun16_20: 52, tahun21_25: 28, lebih25: 3 },
    A4: { kurang5: 0, tahun6_10: 1, tahun11_15: 3, tahun16_20: 6, tahun21_25: 27, lebih25: 14 },
    A5: { kurang5: 0, tahun6_10: 0, tahun11_15: 0, tahun16_20: 0, tahun21_25: 1, lebih25: 6 }
  },
  "KAB. BANYUMAS": { 
    A3: { kurang5: 16, tahun6_10: 32, tahun11_15: 46, tahun16_20: 51, tahun21_25: 43, lebih25: 27 },
    A4: { kurang5: 2, tahun6_10: 0, tahun11_15: 3, tahun16_20: 10, tahun21_25: 16, lebih25: 18 },
    A5: { kurang5: 0, tahun6_10: 0, tahun11_15: 0, tahun16_20: 0, tahun21_25: 1, lebih25: 8 }
  },
  "KOTA SEMARANG": { 
    A3: { kurang5: 68, tahun6_10: 131, tahun11_15: 139, tahun16_20: 175, tahun21_25: 95, lebih25: 41 },
    A4: { kurang5: 3, tahun6_10: 7, tahun11_15: 15, tahun16_20: 61, tahun21_25: 92, lebih25: 53 },
    A5: { kurang5: 0, tahun6_10: 1, tahun11_15: 1, tahun16_20: 1, tahun21_25: 19, lebih25: 76 }
  }
};

// Penerimaan Masyarakat per kabupaten per jenjang
export const penerimaanMasyarakatData: Record<string, Record<string, { 
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

// Dampak Politik Pasangan per kabupaten per jenjang  
export const dampakPolitikPasanganData: Record<string, Record<string, { 
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
  "KOTA SEMARANG": { 
    A3: { sangatNegatif: 2, negatif: 7, netral: 199, positif: 336, sangatPositif: 98 },
    A4: { sangatNegatif: 0, negatif: 1, netral: 37, positif: 164, sangatPositif: 29 },
    A5: { sangatNegatif: 1, negatif: 0, netral: 3, positif: 60, sangatPositif: 34 }
  }
};

// Dampak Politik Anak per kabupaten per jenjang
export const dampakPolitikAnakData: Record<string, Record<string, { 
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

// Dampak Politik Karir per kabupaten per jenjang
export const dampakPolitikKarirData: Record<string, Record<string, { 
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
    A3: { sangatNegatif: 4, negatif: 23, netral: 274, positif: 287, sangatPositif: 54 },
    A4: { sangatNegatif: 2, negatif: 9, netral: 81, positif: 116, sangatPositif: 23 },
    A5: { sangatNegatif: 0, negatif: 3, netral: 24, positif: 55, sangatPositif: 16 }
  }
};

// Peran Masyarakat per kabupaten per jenjang
export const peranMasyarakatData: Record<string, Record<string, {
  aktivis: number;
  anggota: number;
  guruMengaji: number;
  lainnya: number;
  pengurusOrmas: number;
  pengurusRTRW: number;
  tokohAgama: number;
  tokohMasyarakat: number;
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { aktivis: 6, anggota: 53, guruMengaji: 24, lainnya: 4, pengurusOrmas: 16, pengurusRTRW: 25, tokohAgama: 5, tokohMasyarakat: 9 },
    A4: { aktivis: 1, anggota: 12, guruMengaji: 11, lainnya: 0, pengurusOrmas: 5, pengurusRTRW: 10, tokohAgama: 1, tokohMasyarakat: 11 },
    A5: { aktivis: 0, anggota: 0, guruMengaji: 0, lainnya: 0, pengurusOrmas: 0, pengurusRTRW: 4, tokohAgama: 0, tokohMasyarakat: 3 }
  },
  "KAB. BANYUMAS": { 
    A3: { aktivis: 13, anggota: 70, guruMengaji: 30, lainnya: 9, pengurusOrmas: 20, pengurusRTRW: 52, tokohAgama: 6, tokohMasyarakat: 12 },
    A4: { aktivis: 3, anggota: 10, guruMengaji: 7, lainnya: 2, pengurusOrmas: 5, pengurusRTRW: 9, tokohAgama: 6, tokohMasyarakat: 5 },
    A5: { aktivis: 0, anggota: 2, guruMengaji: 1, lainnya: 0, pengurusOrmas: 2, pengurusRTRW: 1, tokohAgama: 2, tokohMasyarakat: 1 }
  },
  "KOTA SEMARANG": { 
    A3: { aktivis: 19, anggota: 276, guruMengaji: 95, lainnya: 14, pengurusOrmas: 31, pengurusRTRW: 179, tokohAgama: 6, tokohMasyarakat: 26 },
    A4: { aktivis: 8, anggota: 53, guruMengaji: 28, lainnya: 4, pengurusOrmas: 16, pengurusRTRW: 96, tokohAgama: 13, tokohMasyarakat: 13 },
    A5: { aktivis: 2, anggota: 9, guruMengaji: 14, lainnya: 4, pengurusOrmas: 5, pengurusRTRW: 25, tokohAgama: 18, tokohMasyarakat: 21 }
  }
};
