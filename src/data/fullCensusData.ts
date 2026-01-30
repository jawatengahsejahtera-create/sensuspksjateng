// Full Census Data - Complete dataset from Excel for ALL categories
import { kabupatenList } from "./pksData";

// ============================================
// BPJS Complete Data per kabupaten per jenjang
// ============================================
export const bpjsLengkapData: Record<string, Record<string, { 
  asuransiSwasta: number; 
  bpjsPbi: number; 
  bpjsNonPbi: number; 
  keduanya: number; 
  tidakMemiliki: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { asuransiSwasta: 8, bpjsPbi: 58, bpjsNonPbi: 46, keduanya: 5, tidakMemiliki: 25 },
    A4: { asuransiSwasta: 0, bpjsPbi: 16, bpjsNonPbi: 28, keduanya: 1, tidakMemiliki: 6 },
    A5: { asuransiSwasta: 0, bpjsPbi: 0, bpjsNonPbi: 2, keduanya: 0, tidakMemiliki: 5 }
  },
  "KAB. BANYUMAS": { 
    A3: { asuransiSwasta: 8, bpjsPbi: 78, bpjsNonPbi: 87, keduanya: 14, tidakMemiliki: 28 },
    A4: { asuransiSwasta: 6, bpjsPbi: 15, bpjsNonPbi: 17, keduanya: 7, tidakMemiliki: 4 },
    A5: { asuransiSwasta: 1, bpjsPbi: 0, bpjsNonPbi: 8, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. BATANG": { 
    A3: { asuransiSwasta: 7, bpjsPbi: 37, bpjsNonPbi: 29, keduanya: 13, tidakMemiliki: 22 },
    A4: { asuransiSwasta: 3, bpjsPbi: 8, bpjsNonPbi: 10, keduanya: 2, tidakMemiliki: 2 },
    A5: { asuransiSwasta: 0, bpjsPbi: 3, bpjsNonPbi: 1, keduanya: 1, tidakMemiliki: 0 }
  },
  "KAB. BLORA": { 
    A3: { asuransiSwasta: 4, bpjsPbi: 34, bpjsNonPbi: 31, keduanya: 10, tidakMemiliki: 3 },
    A4: { asuransiSwasta: 1, bpjsPbi: 9, bpjsNonPbi: 5, keduanya: 2, tidakMemiliki: 0 },
    A5: { asuransiSwasta: 1, bpjsPbi: 4, bpjsNonPbi: 1, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. BOYOLALI": { 
    A3: { asuransiSwasta: 9, bpjsPbi: 75, bpjsNonPbi: 110, keduanya: 16, tidakMemiliki: 33 },
    A4: { asuransiSwasta: 6, bpjsPbi: 28, bpjsNonPbi: 31, keduanya: 5, tidakMemiliki: 2 },
    A5: { asuransiSwasta: 0, bpjsPbi: 6, bpjsNonPbi: 9, keduanya: 1, tidakMemiliki: 1 }
  },
  "KAB. BREBES": { 
    A3: { asuransiSwasta: 3, bpjsPbi: 33, bpjsNonPbi: 31, keduanya: 7, tidakMemiliki: 13 },
    A4: { asuransiSwasta: 0, bpjsPbi: 7, bpjsNonPbi: 14, keduanya: 1, tidakMemiliki: 2 },
    A5: { asuransiSwasta: 0, bpjsPbi: 3, bpjsNonPbi: 4, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. CILACAP": { 
    A3: { asuransiSwasta: 12, bpjsPbi: 70, bpjsNonPbi: 83, keduanya: 28, tidakMemiliki: 39 },
    A4: { asuransiSwasta: 2, bpjsPbi: 20, bpjsNonPbi: 25, keduanya: 8, tidakMemiliki: 5 },
    A5: { asuransiSwasta: 2, bpjsPbi: 4, bpjsNonPbi: 6, keduanya: 4, tidakMemiliki: 3 }
  },
  "KAB. DEMAK": { 
    A3: { asuransiSwasta: 2, bpjsPbi: 43, bpjsNonPbi: 23, keduanya: 10, tidakMemiliki: 6 },
    A4: { asuransiSwasta: 2, bpjsPbi: 21, bpjsNonPbi: 20, keduanya: 4, tidakMemiliki: 2 },
    A5: { asuransiSwasta: 2, bpjsPbi: 6, bpjsNonPbi: 5, keduanya: 1, tidakMemiliki: 2 }
  },
  "KAB. GROBOGAN": { 
    A3: { asuransiSwasta: 5, bpjsPbi: 32, bpjsNonPbi: 17, keduanya: 8, tidakMemiliki: 9 },
    A4: { asuransiSwasta: 1, bpjsPbi: 9, bpjsNonPbi: 7, keduanya: 1, tidakMemiliki: 1 },
    A5: { asuransiSwasta: 0, bpjsPbi: 0, bpjsNonPbi: 1, keduanya: 0, tidakMemiliki: 1 }
  },
  "KAB. JEPARA": { 
    A3: { asuransiSwasta: 5, bpjsPbi: 36, bpjsNonPbi: 32, keduanya: 3, tidakMemiliki: 8 },
    A4: { asuransiSwasta: 0, bpjsPbi: 5, bpjsNonPbi: 9, keduanya: 1, tidakMemiliki: 1 },
    A5: { asuransiSwasta: 0, bpjsPbi: 3, bpjsNonPbi: 2, keduanya: 0, tidakMemiliki: 1 }
  },
  "KAB. KARANGANYAR": { 
    A3: { asuransiSwasta: 8, bpjsPbi: 87, bpjsNonPbi: 94, keduanya: 27, tidakMemiliki: 20 },
    A4: { asuransiSwasta: 3, bpjsPbi: 33, bpjsNonPbi: 29, keduanya: 8, tidakMemiliki: 3 },
    A5: { asuransiSwasta: 1, bpjsPbi: 6, bpjsNonPbi: 9, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. KEBUMEN": { 
    A3: { asuransiSwasta: 5, bpjsPbi: 38, bpjsNonPbi: 37, keduanya: 3, tidakMemiliki: 17 },
    A4: { asuransiSwasta: 0, bpjsPbi: 8, bpjsNonPbi: 7, keduanya: 0, tidakMemiliki: 0 },
    A5: { asuransiSwasta: 1, bpjsPbi: 3, bpjsNonPbi: 5, keduanya: 0, tidakMemiliki: 1 }
  },
  "KAB. KENDAL": { 
    A3: { asuransiSwasta: 4, bpjsPbi: 50, bpjsNonPbi: 45, keduanya: 9, tidakMemiliki: 17 },
    A4: { asuransiSwasta: 0, bpjsPbi: 7, bpjsNonPbi: 13, keduanya: 0, tidakMemiliki: 2 },
    A5: { asuransiSwasta: 0, bpjsPbi: 8, bpjsNonPbi: 4, keduanya: 1, tidakMemiliki: 3 }
  },
  "KAB. KLATEN": { 
    A3: { asuransiSwasta: 14, bpjsPbi: 130, bpjsNonPbi: 174, keduanya: 11, tidakMemiliki: 49 },
    A4: { asuransiSwasta: 9, bpjsPbi: 31, bpjsNonPbi: 51, keduanya: 5, tidakMemiliki: 4 },
    A5: { asuransiSwasta: 3, bpjsPbi: 15, bpjsNonPbi: 5, keduanya: 3, tidakMemiliki: 3 }
  },
  "KAB. KUDUS": { 
    A3: { asuransiSwasta: 1, bpjsPbi: 69, bpjsNonPbi: 44, keduanya: 8, tidakMemiliki: 22 },
    A4: { asuransiSwasta: 4, bpjsPbi: 32, bpjsNonPbi: 20, keduanya: 5, tidakMemiliki: 11 },
    A5: { asuransiSwasta: 1, bpjsPbi: 10, bpjsNonPbi: 4, keduanya: 4, tidakMemiliki: 2 }
  },
  "KAB. MAGELANG": { 
    A3: { asuransiSwasta: 6, bpjsPbi: 65, bpjsNonPbi: 58, keduanya: 5, tidakMemiliki: 22 },
    A4: { asuransiSwasta: 2, bpjsPbi: 14, bpjsNonPbi: 12, keduanya: 4, tidakMemiliki: 1 },
    A5: { asuransiSwasta: 0, bpjsPbi: 6, bpjsNonPbi: 3, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. PATI": { 
    A3: { asuransiSwasta: 1, bpjsPbi: 49, bpjsNonPbi: 31, keduanya: 7, tidakMemiliki: 4 },
    A4: { asuransiSwasta: 0, bpjsPbi: 11, bpjsNonPbi: 7, keduanya: 0, tidakMemiliki: 4 },
    A5: { asuransiSwasta: 0, bpjsPbi: 4, bpjsNonPbi: 6, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. PEKALONGAN": { 
    A3: { asuransiSwasta: 3, bpjsPbi: 28, bpjsNonPbi: 49, keduanya: 8, tidakMemiliki: 14 },
    A4: { asuransiSwasta: 2, bpjsPbi: 9, bpjsNonPbi: 8, keduanya: 3, tidakMemiliki: 2 },
    A5: { asuransiSwasta: 1, bpjsPbi: 2, bpjsNonPbi: 1, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. PEMALANG": { 
    A3: { asuransiSwasta: 6, bpjsPbi: 53, bpjsNonPbi: 45, keduanya: 3, tidakMemiliki: 31 },
    A4: { asuransiSwasta: 1, bpjsPbi: 22, bpjsNonPbi: 17, keduanya: 2, tidakMemiliki: 6 },
    A5: { asuransiSwasta: 0, bpjsPbi: 3, bpjsNonPbi: 4, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. PURBALINGGA": { 
    A3: { asuransiSwasta: 4, bpjsPbi: 24, bpjsNonPbi: 47, keduanya: 1, tidakMemiliki: 24 },
    A4: { asuransiSwasta: 1, bpjsPbi: 18, bpjsNonPbi: 11, keduanya: 0, tidakMemiliki: 3 },
    A5: { asuransiSwasta: 3, bpjsPbi: 3, bpjsNonPbi: 4, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. PURWOREJO": { 
    A3: { asuransiSwasta: 7, bpjsPbi: 55, bpjsNonPbi: 53, keduanya: 3, tidakMemiliki: 27 },
    A4: { asuransiSwasta: 0, bpjsPbi: 10, bpjsNonPbi: 11, keduanya: 1, tidakMemiliki: 4 },
    A5: { asuransiSwasta: 0, bpjsPbi: 5, bpjsNonPbi: 0, keduanya: 0, tidakMemiliki: 2 }
  },
  "KAB. REMBANG": { 
    A3: { asuransiSwasta: 3, bpjsPbi: 16, bpjsNonPbi: 15, keduanya: 5, tidakMemiliki: 5 },
    A4: { asuransiSwasta: 1, bpjsPbi: 8, bpjsNonPbi: 3, keduanya: 0, tidakMemiliki: 1 },
    A5: { asuransiSwasta: 0, bpjsPbi: 1, bpjsNonPbi: 0, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. SEMARANG": { 
    A3: { asuransiSwasta: 14, bpjsPbi: 84, bpjsNonPbi: 97, keduanya: 10, tidakMemiliki: 18 },
    A4: { asuransiSwasta: 1, bpjsPbi: 27, bpjsNonPbi: 41, keduanya: 2, tidakMemiliki: 7 },
    A5: { asuransiSwasta: 1, bpjsPbi: 7, bpjsNonPbi: 15, keduanya: 4, tidakMemiliki: 2 }
  },
  "KAB. SRAGEN": { 
    A3: { asuransiSwasta: 6, bpjsPbi: 63, bpjsNonPbi: 94, keduanya: 17, tidakMemiliki: 29 },
    A4: { asuransiSwasta: 1, bpjsPbi: 20, bpjsNonPbi: 29, keduanya: 3, tidakMemiliki: 5 },
    A5: { asuransiSwasta: 3, bpjsPbi: 8, bpjsNonPbi: 8, keduanya: 0, tidakMemiliki: 2 }
  },
  "KAB. SUKOHARJO": { 
    A3: { asuransiSwasta: 6, bpjsPbi: 97, bpjsNonPbi: 101, keduanya: 12, tidakMemiliki: 48 },
    A4: { asuransiSwasta: 6, bpjsPbi: 39, bpjsNonPbi: 40, keduanya: 9, tidakMemiliki: 11 },
    A5: { asuransiSwasta: 1, bpjsPbi: 14, bpjsNonPbi: 21, keduanya: 1, tidakMemiliki: 3 }
  },
  "KAB. TEGAL": { 
    A3: { asuransiSwasta: 6, bpjsPbi: 77, bpjsNonPbi: 78, keduanya: 10, tidakMemiliki: 31 },
    A4: { asuransiSwasta: 1, bpjsPbi: 22, bpjsNonPbi: 22, keduanya: 8, tidakMemiliki: 4 },
    A5: { asuransiSwasta: 1, bpjsPbi: 7, bpjsNonPbi: 14, keduanya: 4, tidakMemiliki: 0 }
  },
  "KAB. TEMANGGUNG": { 
    A3: { asuransiSwasta: 9, bpjsPbi: 42, bpjsNonPbi: 37, keduanya: 6, tidakMemiliki: 3 },
    A4: { asuransiSwasta: 1, bpjsPbi: 9, bpjsNonPbi: 19, keduanya: 5, tidakMemiliki: 1 },
    A5: { asuransiSwasta: 1, bpjsPbi: 1, bpjsNonPbi: 7, keduanya: 0, tidakMemiliki: 0 }
  },
  "KAB. WONOGIRI": { 
    A3: { asuransiSwasta: 12, bpjsPbi: 99, bpjsNonPbi: 180, keduanya: 34, tidakMemiliki: 34 },
    A4: { asuransiSwasta: 5, bpjsPbi: 35, bpjsNonPbi: 60, keduanya: 10, tidakMemiliki: 12 },
    A5: { asuransiSwasta: 0, bpjsPbi: 7, bpjsNonPbi: 12, keduanya: 4, tidakMemiliki: 0 }
  },
  "KAB. WONOSOBO": { 
    A3: { asuransiSwasta: 4, bpjsPbi: 14, bpjsNonPbi: 22, keduanya: 4, tidakMemiliki: 10 },
    A4: { asuransiSwasta: 3, bpjsPbi: 4, bpjsNonPbi: 7, keduanya: 0, tidakMemiliki: 7 },
    A5: { asuransiSwasta: 0, bpjsPbi: 1, bpjsNonPbi: 0, keduanya: 1, tidakMemiliki: 0 }
  },
  "KOTA MAGELANG": { 
    A3: { asuransiSwasta: 0, bpjsPbi: 32, bpjsNonPbi: 21, keduanya: 5, tidakMemiliki: 3 },
    A4: { asuransiSwasta: 0, bpjsPbi: 9, bpjsNonPbi: 7, keduanya: 1, tidakMemiliki: 0 },
    A5: { asuransiSwasta: 3, bpjsPbi: 0, bpjsNonPbi: 1, keduanya: 0, tidakMemiliki: 0 }
  },
  "KOTA PEKALONGAN": { 
    A3: { asuransiSwasta: 2, bpjsPbi: 34, bpjsNonPbi: 30, keduanya: 6, tidakMemiliki: 5 },
    A4: { asuransiSwasta: 1, bpjsPbi: 19, bpjsNonPbi: 10, keduanya: 0, tidakMemiliki: 1 },
    A5: { asuransiSwasta: 0, bpjsPbi: 1, bpjsNonPbi: 1, keduanya: 1, tidakMemiliki: 0 }
  },
  "KOTA SALATIGA": { 
    A3: { asuransiSwasta: 3, bpjsPbi: 49, bpjsNonPbi: 36, keduanya: 4, tidakMemiliki: 5 },
    A4: { asuransiSwasta: 3, bpjsPbi: 9, bpjsNonPbi: 10, keduanya: 1, tidakMemiliki: 0 },
    A5: { asuransiSwasta: 0, bpjsPbi: 2, bpjsNonPbi: 6, keduanya: 3, tidakMemiliki: 1 }
  },
  "KOTA SEMARANG": { 
    A3: { asuransiSwasta: 19, bpjsPbi: 313, bpjsNonPbi: 222, keduanya: 37, tidakMemiliki: 58 },
    A4: { asuransiSwasta: 12, bpjsPbi: 108, bpjsNonPbi: 75, keduanya: 17, tidakMemiliki: 19 },
    A5: { asuransiSwasta: 7, bpjsPbi: 45, bpjsNonPbi: 36, keduanya: 6, tidakMemiliki: 4 }
  },
  "KOTA SURAKARTA": { 
    A3: { asuransiSwasta: 11, bpjsPbi: 133, bpjsNonPbi: 119, keduanya: 24, tidakMemiliki: 33 },
    A4: { asuransiSwasta: 3, bpjsPbi: 50, bpjsNonPbi: 38, keduanya: 9, tidakMemiliki: 7 },
    A5: { asuransiSwasta: 1, bpjsPbi: 7, bpjsNonPbi: 18, keduanya: 1, tidakMemiliki: 1 }
  },
  "KOTA TEGAL": { 
    A3: { asuransiSwasta: 8, bpjsPbi: 22, bpjsNonPbi: 45, keduanya: 4, tidakMemiliki: 6 },
    A4: { asuransiSwasta: 0, bpjsPbi: 7, bpjsNonPbi: 14, keduanya: 2, tidakMemiliki: 0 },
    A5: { asuransiSwasta: 1, bpjsPbi: 4, bpjsNonPbi: 5, keduanya: 1, tidakMemiliki: 1 }
  }
};

// ============================================
// Lama Pembinaan Complete Data per kabupaten per jenjang  
// ============================================
export const lamaPembinaanLengkapData: Record<string, Record<string, { 
  kurang5: number; 
  antara6_10: number; 
  antara11_15: number; 
  antara16_20: number; 
  antara21_25: number; 
  lebih25: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { kurang5: 5, antara6_10: 21, antara11_15: 33, antara16_20: 52, antara21_25: 28, lebih25: 3 },
    A4: { kurang5: 0, antara6_10: 1, antara11_15: 3, antara16_20: 6, antara21_25: 27, lebih25: 14 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 1, lebih25: 6 }
  },
  "KAB. BANYUMAS": { 
    A3: { kurang5: 16, antara6_10: 32, antara11_15: 46, antara16_20: 51, antara21_25: 43, lebih25: 27 },
    A4: { kurang5: 2, antara6_10: 0, antara11_15: 3, antara16_20: 10, antara21_25: 16, lebih25: 18 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 1, lebih25: 8 }
  },
  "KAB. BATANG": { 
    A3: { kurang5: 13, antara6_10: 23, antara11_15: 25, antara16_20: 25, antara21_25: 15, lebih25: 7 },
    A4: { kurang5: 1, antara6_10: 2, antara11_15: 3, antara16_20: 5, antara21_25: 12, lebih25: 2 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 1, antara21_25: 2, lebih25: 2 }
  },
  "KAB. BLORA": { 
    A3: { kurang5: 2, antara6_10: 17, antara11_15: 20, antara16_20: 27, antara21_25: 9, lebih25: 7 },
    A4: { kurang5: 0, antara6_10: 0, antara11_15: 4, antara16_20: 5, antara21_25: 5, lebih25: 3 },
    A5: { kurang5: 0, antara6_10: 1, antara11_15: 2, antara16_20: 0, antara21_25: 0, lebih25: 3 }
  },
  "KAB. BOYOLALI": { 
    A3: { kurang5: 27, antara6_10: 29, antara11_15: 45, antara16_20: 78, antara21_25: 50, lebih25: 15 },
    A4: { kurang5: 0, antara6_10: 3, antara11_15: 2, antara16_20: 9, antara21_25: 29, lebih25: 29 },
    A5: { kurang5: 1, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 0, lebih25: 16 }
  },
  "KAB. BREBES": { 
    A3: { kurang5: 3, antara6_10: 8, antara11_15: 20, antara16_20: 35, antara21_25: 14, lebih25: 7 },
    A4: { kurang5: 1, antara6_10: 0, antara11_15: 1, antara16_20: 6, antara21_25: 8, lebih25: 8 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 0, lebih25: 7 }
  },
  "KAB. CILACAP": { 
    A3: { kurang5: 18, antara6_10: 40, antara11_15: 54, antara16_20: 57, antara21_25: 46, lebih25: 17 },
    A4: { kurang5: 1, antara6_10: 1, antara11_15: 4, antara16_20: 11, antara21_25: 18, lebih25: 25 },
    A5: { kurang5: 0, antara6_10: 1, antara11_15: 0, antara16_20: 0, antara21_25: 3, lebih25: 15 }
  },
  "KAB. DEMAK": { 
    A3: { kurang5: 10, antara6_10: 24, antara11_15: 17, antara16_20: 17, antara21_25: 12, lebih25: 4 },
    A4: { kurang5: 0, antara6_10: 1, antara11_15: 9, antara16_20: 13, antara21_25: 23, lebih25: 3 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 5, lebih25: 11 }
  },
  "KAB. GROBOGAN": { 
    A3: { kurang5: 10, antara6_10: 10, antara11_15: 16, antara16_20: 19, antara21_25: 13, lebih25: 3 },
    A4: { kurang5: 1, antara6_10: 0, antara11_15: 2, antara16_20: 8, antara21_25: 2, lebih25: 6 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 0, lebih25: 2 }
  },
  "KAB. JEPARA": { 
    A3: { kurang5: 7, antara6_10: 12, antara11_15: 13, antara16_20: 21, antara21_25: 16, lebih25: 15 },
    A4: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 4, antara21_25: 6, lebih25: 6 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 1, antara21_25: 2, lebih25: 3 }
  },
  "KAB. KARANGANYAR": { 
    A3: { kurang5: 6, antara6_10: 28, antara11_15: 42, antara16_20: 82, antara21_25: 57, lebih25: 21 },
    A4: { kurang5: 2, antara6_10: 1, antara11_15: 2, antara16_20: 14, antara21_25: 25, lebih25: 32 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 1, antara21_25: 2, lebih25: 13 }
  },
  "KAB. KEBUMEN": { 
    A3: { kurang5: 4, antara6_10: 8, antara11_15: 18, antara16_20: 19, antara21_25: 33, lebih25: 18 },
    A4: { kurang5: 0, antara6_10: 2, antara11_15: 0, antara16_20: 4, antara21_25: 3, lebih25: 6 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 1, antara21_25: 1, lebih25: 8 }
  },
  "KAB. KENDAL": { 
    A3: { kurang5: 13, antara6_10: 35, antara11_15: 25, antara16_20: 28, antara21_25: 16, lebih25: 8 },
    A4: { kurang5: 0, antara6_10: 0, antara11_15: 1, antara16_20: 6, antara21_25: 10, lebih25: 5 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 2, antara21_25: 2, lebih25: 12 }
  },
  "KAB. KLATEN": { 
    A3: { kurang5: 11, antara6_10: 49, antara11_15: 71, antara16_20: 116, antara21_25: 100, lebih25: 31 },
    A4: { kurang5: 1, antara6_10: 3, antara11_15: 4, antara16_20: 22, antara21_25: 34, lebih25: 36 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 4, lebih25: 25 }
  },
  "KAB. KUDUS": { 
    A3: { kurang5: 7, antara6_10: 36, antara11_15: 28, antara16_20: 35, antara21_25: 27, lebih25: 11 },
    A4: { kurang5: 2, antara6_10: 2, antara11_15: 5, antara16_20: 16, antara21_25: 29, lebih25: 18 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 1, antara21_25: 3, lebih25: 17 }
  },
  "KAB. MAGELANG": { 
    A3: { kurang5: 6, antara6_10: 13, antara11_15: 33, antara16_20: 39, antara21_25: 36, lebih25: 29 },
    A4: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 5, antara21_25: 11, lebih25: 17 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 2, lebih25: 7 }
  },
  "KAB. PATI": { 
    A3: { kurang5: 2, antara6_10: 15, antara11_15: 15, antara16_20: 22, antara21_25: 28, lebih25: 10 },
    A4: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 1, antara21_25: 5, lebih25: 16 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 0, lebih25: 10 }
  },
  "KAB. PEKALONGAN": { 
    A3: { kurang5: 10, antara6_10: 26, antara11_15: 15, antara16_20: 26, antara21_25: 17, lebih25: 8 },
    A4: { kurang5: 0, antara6_10: 1, antara11_15: 2, antara16_20: 7, antara21_25: 7, lebih25: 7 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 1, lebih25: 3 }
  },
  "KAB. PEMALANG": { 
    A3: { kurang5: 3, antara6_10: 28, antara11_15: 39, antara16_20: 34, antara21_25: 20, lebih25: 14 },
    A4: { kurang5: 0, antara6_10: 2, antara11_15: 4, antara16_20: 13, antara21_25: 13, lebih25: 17 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 1, lebih25: 6 }
  },
  "KAB. PURBALINGGA": { 
    A3: { kurang5: 9, antara6_10: 20, antara11_15: 23, antara16_20: 27, antara21_25: 17, lebih25: 4 },
    A4: { kurang5: 1, antara6_10: 0, antara11_15: 3, antara16_20: 9, antara21_25: 10, lebih25: 10 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 1, antara21_25: 1, lebih25: 8 }
  },
  "KAB. PURWOREJO": { 
    A3: { kurang5: 8, antara6_10: 19, antara11_15: 27, antara16_20: 39, antara21_25: 32, lebih25: 20 },
    A4: { kurang5: 0, antara6_10: 1, antara11_15: 0, antara16_20: 8, antara21_25: 9, lebih25: 8 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 2, lebih25: 5 }
  },
  "KAB. REMBANG": { 
    A3: { kurang5: 6, antara6_10: 9, antara11_15: 10, antara16_20: 12, antara21_25: 4, lebih25: 3 },
    A4: { kurang5: 0, antara6_10: 3, antara11_15: 0, antara16_20: 3, antara21_25: 5, lebih25: 2 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 0, lebih25: 1 }
  },
  "KAB. SEMARANG": { 
    A3: { kurang5: 14, antara6_10: 35, antara11_15: 56, antara16_20: 61, antara21_25: 44, lebih25: 13 },
    A4: { kurang5: 1, antara6_10: 8, antara11_15: 7, antara16_20: 20, antara21_25: 29, lebih25: 13 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 2, antara16_20: 0, antara21_25: 10, lebih25: 17 }
  },
  "KAB. SRAGEN": { 
    A3: { kurang5: 10, antara6_10: 30, antara11_15: 52, antara16_20: 53, antara21_25: 46, lebih25: 18 },
    A4: { kurang5: 1, antara6_10: 3, antara11_15: 0, antara16_20: 11, antara21_25: 27, lebih25: 16 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 1, antara21_25: 3, lebih25: 17 }
  },
  "KAB. SUKOHARJO": { 
    A3: { kurang5: 24, antara6_10: 37, antara11_15: 52, antara16_20: 76, antara21_25: 56, lebih25: 19 },
    A4: { kurang5: 0, antara6_10: 2, antara11_15: 8, antara16_20: 23, antara21_25: 35, lebih25: 37 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 2, antara21_25: 2, lebih25: 36 }
  },
  "KAB. TEGAL": { 
    A3: { kurang5: 14, antara6_10: 41, antara11_15: 43, antara16_20: 43, antara21_25: 29, lebih25: 32 },
    A4: { kurang5: 1, antara6_10: 1, antara11_15: 5, antara16_20: 11, antara21_25: 9, lebih25: 30 },
    A5: { kurang5: 1, antara6_10: 1, antara11_15: 0, antara16_20: 3, antara21_25: 3, lebih25: 18 }
  },
  "KAB. TEMANGGUNG": { 
    A3: { kurang5: 3, antara6_10: 10, antara11_15: 20, antara16_20: 36, antara21_25: 22, lebih25: 6 },
    A4: { kurang5: 0, antara6_10: 0, antara11_15: 1, antara16_20: 7, antara21_25: 24, lebih25: 3 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 2, lebih25: 7 }
  },
  "KAB. WONOGIRI": { 
    A3: { kurang5: 18, antara6_10: 68, antara11_15: 91, antara16_20: 115, antara21_25: 41, lebih25: 26 },
    A4: { kurang5: 1, antara6_10: 4, antara11_15: 4, antara16_20: 27, antara21_25: 47, lebih25: 39 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 1, antara16_20: 1, antara21_25: 6, lebih25: 15 }
  },
  "KAB. WONOSOBO": { 
    A3: { kurang5: 3, antara6_10: 5, antara11_15: 11, antara16_20: 15, antara21_25: 17, lebih25: 3 },
    A4: { kurang5: 0, antara6_10: 0, antara11_15: 1, antara16_20: 6, antara21_25: 10, lebih25: 4 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 0, lebih25: 2 }
  },
  "KOTA MAGELANG": { 
    A3: { kurang5: 3, antara6_10: 9, antara11_15: 11, antara16_20: 16, antara21_25: 15, lebih25: 7 },
    A4: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 1, antara21_25: 5, lebih25: 11 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 0, lebih25: 4 }
  },
  "KOTA PEKALONGAN": { 
    A3: { kurang5: 9, antara6_10: 15, antara11_15: 18, antara16_20: 17, antara21_25: 16, lebih25: 2 },
    A4: { kurang5: 0, antara6_10: 0, antara11_15: 6, antara16_20: 10, antara21_25: 5, lebih25: 10 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 1, lebih25: 2 }
  },
  "KOTA SALATIGA": { 
    A3: { kurang5: 18, antara6_10: 17, antara11_15: 14, antara16_20: 17, antara21_25: 23, lebih25: 8 },
    A4: { kurang5: 0, antara6_10: 1, antara11_15: 2, antara16_20: 5, antara21_25: 6, lebih25: 9 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 1, lebih25: 11 }
  },
  "KOTA SEMARANG": { 
    A3: { kurang5: 68, antara6_10: 131, antara11_15: 139, antara16_20: 175, antara21_25: 95, lebih25: 41 },
    A4: { kurang5: 3, antara6_10: 7, antara11_15: 15, antara16_20: 61, antara21_25: 92, lebih25: 53 },
    A5: { kurang5: 0, antara6_10: 1, antara11_15: 1, antara16_20: 1, antara21_25: 19, lebih25: 76 }
  },
  "KOTA SURAKARTA": { 
    A3: { kurang5: 26, antara6_10: 31, antara11_15: 66, antara16_20: 84, antara21_25: 82, lebih25: 31 },
    A4: { kurang5: 1, antara6_10: 0, antara11_15: 2, antara16_20: 17, antara21_25: 39, lebih25: 48 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 2, lebih25: 26 }
  },
  "KOTA TEGAL": { 
    A3: { kurang5: 6, antara6_10: 11, antara11_15: 24, antara16_20: 24, antara21_25: 12, lebih25: 8 },
    A4: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 4, antara21_25: 7, lebih25: 12 },
    A5: { kurang5: 0, antara6_10: 0, antara11_15: 0, antara16_20: 0, antara21_25: 3, lebih25: 9 }
  }
};

// ============================================
// Peran Masyarakat Complete Data
// ============================================
export const peranMasyarakatData: Record<string, Record<string, { 
  aktivisSosial: number; 
  anggotaBiasa: number; 
  guruMengaji: number; 
  lainnya: number; 
  pengurusOrmas: number; 
  pengurusRtRw: number; 
  tokohAgama: number; 
  tokohMasyarakat: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { aktivisSosial: 6, anggotaBiasa: 53, guruMengaji: 24, lainnya: 4, pengurusOrmas: 16, pengurusRtRw: 25, tokohAgama: 5, tokohMasyarakat: 9 },
    A4: { aktivisSosial: 1, anggotaBiasa: 12, guruMengaji: 11, lainnya: 0, pengurusOrmas: 5, pengurusRtRw: 10, tokohAgama: 1, tokohMasyarakat: 11 },
    A5: { aktivisSosial: 0, anggotaBiasa: 0, guruMengaji: 0, lainnya: 0, pengurusOrmas: 0, pengurusRtRw: 4, tokohAgama: 0, tokohMasyarakat: 3 }
  },
  "KAB. BANYUMAS": { 
    A3: { aktivisSosial: 13, anggotaBiasa: 70, guruMengaji: 30, lainnya: 9, pengurusOrmas: 20, pengurusRtRw: 52, tokohAgama: 6, tokohMasyarakat: 12 },
    A4: { aktivisSosial: 3, anggotaBiasa: 10, guruMengaji: 7, lainnya: 2, pengurusOrmas: 5, pengurusRtRw: 9, tokohAgama: 6, tokohMasyarakat: 5 },
    A5: { aktivisSosial: 0, anggotaBiasa: 2, guruMengaji: 1, lainnya: 0, pengurusOrmas: 2, pengurusRtRw: 1, tokohAgama: 2, tokohMasyarakat: 1 }
  },
  "KAB. BATANG": { 
    A3: { aktivisSosial: 11, anggotaBiasa: 60, guruMengaji: 20, lainnya: 2, pengurusOrmas: 4, pengurusRtRw: 7, tokohAgama: 0, tokohMasyarakat: 4 },
    A4: { aktivisSosial: 0, anggotaBiasa: 13, guruMengaji: 2, lainnya: 1, pengurusOrmas: 1, pengurusRtRw: 5, tokohAgama: 0, tokohMasyarakat: 3 },
    A5: { aktivisSosial: 0, anggotaBiasa: 0, guruMengaji: 2, lainnya: 0, pengurusOrmas: 0, pengurusRtRw: 1, tokohAgama: 2, tokohMasyarakat: 0 }
  },
  "KOTA SEMARANG": { 
    A3: { aktivisSosial: 19, anggotaBiasa: 276, guruMengaji: 95, lainnya: 14, pengurusOrmas: 31, pengurusRtRw: 179, tokohAgama: 6, tokohMasyarakat: 26 },
    A4: { aktivisSosial: 8, anggotaBiasa: 53, guruMengaji: 28, lainnya: 4, pengurusOrmas: 16, pengurusRtRw: 96, tokohAgama: 13, tokohMasyarakat: 13 },
    A5: { aktivisSosial: 2, anggotaBiasa: 9, guruMengaji: 14, lainnya: 4, pengurusOrmas: 5, pengurusRtRw: 25, tokohAgama: 18, tokohMasyarakat: 21 }
  }
};

// ============================================
// Penerimaan Masyarakat Complete Data
// ============================================
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
  "KAB. BATANG": { 
    A3: { sangatTidakDiterima: 1, tidakDiterima: 0, netral: 28, diterima: 51, sangatDiterima: 28 },
    A4: { sangatTidakDiterima: 0, tidakDiterima: 0, netral: 1, diterima: 14, sangatDiterima: 10 },
    A5: { sangatTidakDiterima: 0, tidakDiterima: 0, netral: 1, diterima: 3, sangatDiterima: 1 }
  },
  "KOTA SEMARANG": { 
    A3: { sangatTidakDiterima: 10, tidakDiterima: 1, netral: 98, diterima: 377, sangatDiterima: 160 },
    A4: { sangatTidakDiterima: 8, tidakDiterima: 0, netral: 15, diterima: 128, sangatDiterima: 80 },
    A5: { sangatTidakDiterima: 0, tidakDiterima: 0, netral: 1, diterima: 43, sangatDiterima: 54 }
  }
};

// ============================================
// Ketahanan Ekonomi Complete Data (from page 23)
// ============================================
export const ketahananEkonomiData: Record<string, { 
  sangatTidakSetuju: number; 
  tidakSetuju: number; 
  raguRagu: number; 
  setuju: number; 
  sangatSetuju: number 
}> = {
  "KAB. BANJARNEGARA": { sangatTidakSetuju: 1, tidakSetuju: 10, raguRagu: 22, setuju: 119, sangatSetuju: 48 },
  "KAB. BANYUMAS": { sangatTidakSetuju: 6, tidakSetuju: 12, raguRagu: 28, setuju: 173, sangatSetuju: 53 },
  "KAB. BATANG": { sangatTidakSetuju: 2, tidakSetuju: 3, raguRagu: 17, setuju: 77, sangatSetuju: 39 },
  "KAB. BLORA": { sangatTidakSetuju: 2, tidakSetuju: 2, raguRagu: 6, setuju: 64, sangatSetuju: 31 },
  "KAB. BOYOLALI": { sangatTidakSetuju: 1, tidakSetuju: 11, raguRagu: 36, setuju: 213, sangatSetuju: 72 },
  "KAB. BREBES": { sangatTidakSetuju: 3, tidakSetuju: 11, raguRagu: 12, setuju: 72, sangatSetuju: 19 },
  "KAB. CILACAP": { sangatTidakSetuju: 3, tidakSetuju: 28, raguRagu: 36, setuju: 176, sangatSetuju: 68 },
  "KAB. DEMAK": { sangatTidakSetuju: 3, tidakSetuju: 14, raguRagu: 13, setuju: 93, sangatSetuju: 26 },
  "KAB. GROBOGAN": { sangatTidakSetuju: 0, tidakSetuju: 5, raguRagu: 11, setuju: 54, sangatSetuju: 22 },
  "KAB. JEPARA": { sangatTidakSetuju: 0, tidakSetuju: 5, raguRagu: 7, setuju: 66, sangatSetuju: 28 },
  "KAB. KARANGANYAR": { sangatTidakSetuju: 3, tidakSetuju: 7, raguRagu: 38, setuju: 207, sangatSetuju: 73 },
  "KAB. KEBUMEN": { sangatTidakSetuju: 2, tidakSetuju: 3, raguRagu: 12, setuju: 77, sangatSetuju: 31 },
  "KAB. KENDAL": { sangatTidakSetuju: 0, tidakSetuju: 4, raguRagu: 18, setuju: 106, sangatSetuju: 35 },
  "KAB. KLATEN": { sangatTidakSetuju: 5, tidakSetuju: 13, raguRagu: 60, setuju: 315, sangatSetuju: 111 },
  "KAB. KUDUS": { sangatTidakSetuju: 1, tidakSetuju: 7, raguRagu: 25, setuju: 163, sangatSetuju: 41 },
  "KAB. MAGELANG": { sangatTidakSetuju: 2, tidakSetuju: 7, raguRagu: 26, setuju: 124, sangatSetuju: 37 },
  "KAB. PATI": { sangatTidakSetuju: 0, tidakSetuju: 3, raguRagu: 10, setuju: 75, sangatSetuju: 36 },
  "KAB. PEKALONGAN": { sangatTidakSetuju: 0, tidakSetuju: 4, raguRagu: 11, setuju: 92, sangatSetuju: 23 },
  "KAB. PEMALANG": { sangatTidakSetuju: 3, tidakSetuju: 17, raguRagu: 25, setuju: 108, sangatSetuju: 41 },
  "KAB. PURBALINGGA": { sangatTidakSetuju: 4, tidakSetuju: 9, raguRagu: 15, setuju: 74, sangatSetuju: 41 },
  "KAB. PURWOREJO": { sangatTidakSetuju: 1, tidakSetuju: 7, raguRagu: 19, setuju: 122, sangatSetuju: 29 },
  "KAB. REMBANG": { sangatTidakSetuju: 0, tidakSetuju: 7, raguRagu: 7, setuju: 32, sangatSetuju: 10 },
  "KAB. SEMARANG": { sangatTidakSetuju: 3, tidakSetuju: 7, raguRagu: 36, setuju: 205, sangatSetuju: 79 },
  "KAB. SRAGEN": { sangatTidakSetuju: 3, tidakSetuju: 18, raguRagu: 34, setuju: 178, sangatSetuju: 55 },
  "KAB. SUKOHARJO": { sangatTidakSetuju: 5, tidakSetuju: 10, raguRagu: 38, setuju: 278, sangatSetuju: 74 },
  "KAB. TEGAL": { sangatTidakSetuju: 6, tidakSetuju: 19, raguRagu: 28, setuju: 177, sangatSetuju: 55 },
  "KAB. TEMANGGUNG": { sangatTidakSetuju: 0, tidakSetuju: 11, raguRagu: 17, setuju: 92, sangatSetuju: 21 },
  "KAB. WONOGIRI": { sangatTidakSetuju: 8, tidakSetuju: 17, raguRagu: 44, setuju: 328, sangatSetuju: 107 },
  "KAB. WONOSOBO": { sangatTidakSetuju: 0, tidakSetuju: 1, raguRagu: 6, setuju: 45, sangatSetuju: 25 },
  "KOTA MAGELANG": { sangatTidakSetuju: 0, tidakSetuju: 1, raguRagu: 7, setuju: 63, sangatSetuju: 11 },
  "KOTA PEKALONGAN": { sangatTidakSetuju: 0, tidakSetuju: 4, raguRagu: 18, setuju: 65, sangatSetuju: 24 },
  "KOTA SALATIGA": { sangatTidakSetuju: 2, tidakSetuju: 1, raguRagu: 11, setuju: 99, sangatSetuju: 19 },
  "KOTA SEMARANG": { sangatTidakSetuju: 9, tidakSetuju: 32, raguRagu: 97, setuju: 656, sangatSetuju: 183 },
  "KOTA SURAKARTA": { sangatTidakSetuju: 10, tidakSetuju: 15, raguRagu: 48, setuju: 269, sangatSetuju: 110 },
  "KOTA TEGAL": { sangatTidakSetuju: 1, tidakSetuju: 6, raguRagu: 14, setuju: 71, sangatSetuju: 28 }
};

// ============================================
// Dukungan Pasangan Complete Data (from dampak pasangan)
// ============================================
export const dukunganPasanganLengkapData: Record<string, Record<string, { 
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
  "KOTA SEMARANG": { 
    A3: { sangatNegatif: 2, negatif: 7, netral: 199, positif: 336, sangatPositif: 98 },
    A4: { sangatNegatif: 0, negatif: 1, netral: 37, positif: 164, sangatPositif: 29 },
    A5: { sangatNegatif: 1, negatif: 0, netral: 3, positif: 60, sangatPositif: 34 }
  }
};
