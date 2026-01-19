// PKS Jawa Tengah Census Data
export const kabupatenList = [
  "KAB. BANJARNEGARA",
  "KAB. BANYUMAS",
  "KAB. BATANG",
  "KAB. BLORA",
  "KAB. BOYOLALI",
  "KAB. BREBES",
  "KAB. CILACAP",
  "KAB. DEMAK",
  "KAB. GROBOGAN",
  "KAB. JEPARA",
  "KAB. KARANGANYAR",
  "KAB. KEBUMEN",
  "KAB. KENDAL",
  "KAB. KLATEN",
  "KAB. KUDUS",
  "KAB. MAGELANG",
  "KAB. PATI",
  "KAB. PEKALONGAN",
  "KAB. PEMALANG",
  "KAB. PURBALINGGA",
  "KAB. PURWOREJO",
  "KAB. REMBANG",
  "KAB. SEMARANG",
  "KAB. SRAGEN",
  "KAB. SUKOHARJO",
  "KAB. TEGAL",
  "KAB. TEMANGGUNG",
  "KAB. WONOGIRI",
  "KAB. WONOSOBO",
  "KOTA MAGELANG",
  "KOTA PEKALONGAN",
  "KOTA SALATIGA",
  "KOTA SEMARANG",
  "KOTA SURAKARTA",
  "KOTA TEGAL"
];

export const jenjangList = ["A3", "A4", "A5"];

export type DataCategory = 
  | "jumlahAnggota"
  | "jenisKelamin"
  | "kelompokUmur"
  | "pendidikan"
  | "bpjs"
  | "statusKerja"
  | "alasanTidakKerja"
  | "pekerjaanUtama"
  | "lamaPembinaan"
  | "punyaBinaan"
  | "levelRukunUPA"
  | "peranMasyarakat"
  | "penerimaanMasyarakat"
  | "terlibatKepengurusan"
  | "bayarIuran"
  | "dampakPolitikPasangan"
  | "dampakPolitikAnak"
  | "dampakPolitikKarir"
  | "dukunganPasangan"
  | "ketahananEkonomi"
  | "pendapatanSES"
  | "pendapatanNishob"
  | "hafalanAnak"
  | "ketahananKeluarga"
  | "frekKonflik"
  | "jumlahAnak"
  | "umurAnak"
  | "sekolahAnak"
  | "pendidikanAnak"
  | "terimaBantuan"
  | "jenisBantuan"
  | "sumberBantuan"
  | "programDibutuhkan";

export const categoryLabels: Record<DataCategory, string> = {
  jumlahAnggota: "Jumlah Anggota",
  jenisKelamin: "Jenis Kelamin",
  kelompokUmur: "Kelompok Umur",
  pendidikan: "Pendidikan",
  bpjs: "Jaminan Kesehatan (BPJS)",
  statusKerja: "Status Kerja",
  alasanTidakKerja: "Alasan Tidak Kerja",
  pekerjaanUtama: "Pekerjaan Utama",
  lamaPembinaan: "Lama Pembinaan",
  punyaBinaan: "Punya Kelompok Binaan",
  levelRukunUPA: "Level Rukun UPA",
  peranMasyarakat: "Peran di Masyarakat",
  penerimaanMasyarakat: "Penerimaan Masyarakat",
  terlibatKepengurusan: "Terlibat Kepengurusan",
  bayarIuran: "Iuran Tetap Bulanan",
  dampakPolitikPasangan: "Dampak Politik Pasangan",
  dampakPolitikAnak: "Dampak Politik Anak",
  dampakPolitikKarir: "Dampak Politik Karir",
  dukunganPasangan: "Dukungan Pasangan",
  ketahananEkonomi: "Ketahanan Ekonomi",
  pendapatanSES: "Pendapatan SES",
  pendapatanNishob: "Pendapatan Nishab",
  hafalanAnak: "Hafalan Anak",
  ketahananKeluarga: "Ketahanan Keluarga",
  frekKonflik: "Frekuensi Konflik",
  jumlahAnak: "Jumlah Anak",
  umurAnak: "Umur Anak",
  sekolahAnak: "Sekolah Anak",
  pendidikanAnak: "Pendidikan Anak",
  terimaBantuan: "Terima Bantuan",
  jenisBantuan: "Jenis Bantuan",
  sumberBantuan: "Sumber Bantuan",
  programDibutuhkan: "Program yang Dibutuhkan"
};

// Jumlah anggota per kabupaten per jenjang
export const jumlahAnggotaData: Record<string, Record<string, number>> = {
  "KAB. BANJARNEGARA": { A3: 142, A4: 51, A5: 7 },
  "KAB. BANYUMAS": { A3: 215, A4: 49, A5: 9 },
  "KAB. BATANG": { A3: 108, A4: 25, A5: 5 },
  "KAB. BLORA": { A3: 82, A4: 17, A5: 6 },
  "KAB. BOYOLALI": { A3: 244, A4: 72, A5: 17 },
  "KAB. BREBES": { A3: 87, A4: 24, A5: 7 },
  "KAB. CILACAP": { A3: 232, A4: 60, A5: 19 },
  "KAB. DEMAK": { A3: 84, A4: 49, A5: 16 },
  "KAB. GROBOGAN": { A3: 71, A4: 19, A5: 2 },
  "KAB. JEPARA": { A3: 84, A4: 16, A5: 6 },
  "KAB. KARANGANYAR": { A3: 236, A4: 76, A5: 16 },
  "KAB. KEBUMEN": { A3: 100, A4: 15, A5: 10 },
  "KAB. KENDAL": { A3: 125, A4: 22, A5: 16 },
  "KAB. KLATEN": { A3: 378, A4: 100, A5: 29 },
  "KAB. KUDUS": { A3: 144, A4: 72, A5: 21 },
  "KAB. MAGELANG": { A3: 156, A4: 33, A5: 9 },
  "KAB. PATI": { A3: 92, A4: 22, A5: 10 },
  "KAB. PEKALONGAN": { A3: 102, A4: 24, A5: 4 },
  "KAB. PEMALANG": { A3: 138, A4: 49, A5: 7 },
  "KAB. PURBALINGGA": { A3: 100, A4: 33, A5: 10 },
  "KAB. PURWOREJO": { A3: 145, A4: 26, A5: 7 },
  "KAB. REMBANG": { A3: 44, A4: 13, A5: 1 },
  "KAB. SEMARANG": { A3: 223, A4: 78, A5: 29 },
  "KAB. SRAGEN": { A3: 209, A4: 58, A5: 21 },
  "KAB. SUKOHARJO": { A3: 264, A4: 105, A5: 40 },
  "KAB. TEGAL": { A3: 202, A4: 57, A5: 26 },
  "KAB. TEMANGGUNG": { A3: 97, A4: 35, A5: 9 },
  "KAB. WONOGIRI": { A3: 359, A4: 122, A5: 23 },
  "KAB. WONOSOBO": { A3: 54, A4: 21, A5: 2 },
  "KOTA MAGELANG": { A3: 61, A4: 17, A5: 4 },
  "KOTA PEKALONGAN": { A3: 77, A4: 31, A5: 3 },
  "KOTA SALATIGA": { A3: 97, A4: 23, A5: 12 },
  "KOTA SEMARANG": { A3: 649, A4: 231, A5: 98 },
  "KOTA SURAKARTA": { A3: 320, A4: 107, A5: 28 },
  "KOTA TEGAL": { A3: 85, A4: 23, A5: 12 }
};

// Jenis kelamin per kabupaten
export const jenisKelaminData: Record<string, { lakiLaki: number; perempuan: number }> = {
  "KAB. BANJARNEGARA": { lakiLaki: 98, perempuan: 102 },
  "KAB. BANYUMAS": { lakiLaki: 123, perempuan: 150 },
  "KAB. BATANG": { lakiLaki: 58, perempuan: 80 },
  "KAB. BLORA": { lakiLaki: 47, perempuan: 58 },
  "KAB. BOYOLALI": { lakiLaki: 147, perempuan: 186 },
  "KAB. BREBES": { lakiLaki: 56, perempuan: 62 },
  "KAB. CILACAP": { lakiLaki: 157, perempuan: 154 },
  "KAB. DEMAK": { lakiLaki: 50, perempuan: 99 },
  "KAB. GROBOGAN": { lakiLaki: 41, perempuan: 51 },
  "KAB. JEPARA": { lakiLaki: 53, perempuan: 53 },
  "KAB. KARANGANYAR": { lakiLaki: 157, perempuan: 171 },
  "KAB. KEBUMEN": { lakiLaki: 47, perempuan: 78 },
  "KAB. KENDAL": { lakiLaki: 67, perempuan: 96 },
  "KAB. KLATEN": { lakiLaki: 241, perempuan: 266 },
  "KAB. KUDUS": { lakiLaki: 101, perempuan: 136 },
  "KAB. MAGELANG": { lakiLaki: 90, perempuan: 108 },
  "KAB. PATI": { lakiLaki: 49, perempuan: 75 },
  "KAB. PEKALONGAN": { lakiLaki: 45, perempuan: 85 },
  "KAB. PEMALANG": { lakiLaki: 81, perempuan: 113 },
  "KAB. PURBALINGGA": { lakiLaki: 77, perempuan: 66 },
  "KAB. PURWOREJO": { lakiLaki: 73, perempuan: 105 },
  "KAB. REMBANG": { lakiLaki: 27, perempuan: 31 },
  "KAB. SEMARANG": { lakiLaki: 142, perempuan: 188 },
  "KAB. SRAGEN": { lakiLaki: 113, perempuan: 175 },
  "KAB. SUKOHARJO": { lakiLaki: 201, perempuan: 208 },
  "KAB. TEGAL": { lakiLaki: 125, perempuan: 160 },
  "KAB. TEMANGGUNG": { lakiLaki: 62, perempuan: 79 },
  "KAB. WONOGIRI": { lakiLaki: 189, perempuan: 315 },
  "KAB. WONOSOBO": { lakiLaki: 45, perempuan: 32 },
  "KOTA MAGELANG": { lakiLaki: 37, perempuan: 45 },
  "KOTA PEKALONGAN": { lakiLaki: 47, perempuan: 64 },
  "KOTA SALATIGA": { lakiLaki: 61, perempuan: 71 },
  "KOTA SEMARANG": { lakiLaki: 421, perempuan: 557 },
  "KOTA SURAKARTA": { lakiLaki: 231, perempuan: 224 },
  "KOTA TEGAL": { lakiLaki: 63, perempuan: 57 }
};

// Kelompok umur per kabupaten per jenjang
export const kelompokUmurData: Record<string, Record<string, { babyBoomer: number; genX: number; milenial: number; genZ: number }>> = {
  "KAB. BANJARNEGARA": { 
    A3: { babyBoomer: 2, genX: 56, milenial: 80, genZ: 4 },
    A4: { babyBoomer: 1, genX: 34, milenial: 16, genZ: 0 },
    A5: { babyBoomer: 0, genX: 7, milenial: 0, genZ: 0 }
  },
  "KAB. BANYUMAS": { 
    A3: { babyBoomer: 3, genX: 96, milenial: 92, genZ: 24 },
    A4: { babyBoomer: 1, genX: 35, milenial: 13, genZ: 0 },
    A5: { babyBoomer: 0, genX: 9, milenial: 0, genZ: 0 }
  },
  "KAB. BATANG": { 
    A3: { babyBoomer: 2, genX: 42, milenial: 45, genZ: 19 },
    A4: { babyBoomer: 0, genX: 13, milenial: 12, genZ: 0 },
    A5: { babyBoomer: 0, genX: 4, milenial: 1, genZ: 0 }
  },
  "KAB. BLORA": { 
    A3: { babyBoomer: 5, genX: 35, milenial: 41, genZ: 1 },
    A4: { babyBoomer: 1, genX: 10, milenial: 6, genZ: 0 },
    A5: { babyBoomer: 0, genX: 6, milenial: 0, genZ: 0 }
  },
  "KAB. BOYOLALI": { 
    A3: { babyBoomer: 3, genX: 102, milenial: 118, genZ: 20 },
    A4: { babyBoomer: 4, genX: 53, milenial: 15, genZ: 0 },
    A5: { babyBoomer: 5, genX: 12, milenial: 0, genZ: 0 }
  },
  "KAB. BREBES": { 
    A3: { babyBoomer: 2, genX: 46, milenial: 39, genZ: 0 },
    A4: { babyBoomer: 2, genX: 19, milenial: 3, genZ: 0 },
    A5: { babyBoomer: 0, genX: 7, milenial: 0, genZ: 0 }
  },
  "KAB. CILACAP": { 
    A3: { babyBoomer: 6, genX: 104, milenial: 109, genZ: 13 },
    A4: { babyBoomer: 6, genX: 43, milenial: 11, genZ: 0 },
    A5: { babyBoomer: 5, genX: 13, milenial: 1, genZ: 0 }
  },
  "KAB. DEMAK": { 
    A3: { babyBoomer: 1, genX: 39, milenial: 41, genZ: 3 },
    A4: { babyBoomer: 1, genX: 27, milenial: 21, genZ: 0 },
    A5: { babyBoomer: 2, genX: 13, milenial: 1, genZ: 0 }
  },
  "KAB. GROBOGAN": { 
    A3: { babyBoomer: 1, genX: 30, milenial: 35, genZ: 5 },
    A4: { babyBoomer: 0, genX: 14, milenial: 5, genZ: 0 },
    A5: { babyBoomer: 0, genX: 2, milenial: 0, genZ: 0 }
  },
  "KAB. JEPARA": { 
    A3: { babyBoomer: 1, genX: 46, milenial: 31, genZ: 6 },
    A4: { babyBoomer: 1, genX: 12, milenial: 3, genZ: 0 },
    A5: { babyBoomer: 0, genX: 6, milenial: 0, genZ: 0 }
  },
  "KAB. KARANGANYAR": { 
    A3: { babyBoomer: 2, genX: 102, milenial: 124, genZ: 8 },
    A4: { babyBoomer: 2, genX: 62, milenial: 11, genZ: 1 },
    A5: { babyBoomer: 0, genX: 16, milenial: 0, genZ: 0 }
  },
  "KAB. KEBUMEN": { 
    A3: { babyBoomer: 0, genX: 51, milenial: 47, genZ: 2 },
    A4: { babyBoomer: 0, genX: 13, milenial: 2, genZ: 0 },
    A5: { babyBoomer: 0, genX: 10, milenial: 0, genZ: 0 }
  },
  "KAB. KENDAL": { 
    A3: { babyBoomer: 1, genX: 54, milenial: 61, genZ: 9 },
    A4: { babyBoomer: 1, genX: 19, milenial: 2, genZ: 0 },
    A5: { babyBoomer: 2, genX: 13, milenial: 1, genZ: 0 }
  },
  "KAB. KLATEN": { 
    A3: { babyBoomer: 3, genX: 181, milenial: 163, genZ: 31 },
    A4: { babyBoomer: 0, genX: 76, milenial: 24, genZ: 0 },
    A5: { babyBoomer: 0, genX: 29, milenial: 0, genZ: 0 }
  },
  "KAB. KUDUS": { 
    A3: { babyBoomer: 4, genX: 61, milenial: 68, genZ: 11 },
    A4: { babyBoomer: 6, genX: 47, milenial: 19, genZ: 0 },
    A5: { babyBoomer: 3, genX: 18, milenial: 0, genZ: 0 }
  },
  "KAB. MAGELANG": { 
    A3: { babyBoomer: 6, genX: 105, milenial: 36, genZ: 9 },
    A4: { babyBoomer: 2, genX: 26, milenial: 5, genZ: 0 },
    A5: { babyBoomer: 2, genX: 6, milenial: 0, genZ: 1 }
  },
  "KAB. PATI": { 
    A3: { babyBoomer: 1, genX: 40, milenial: 44, genZ: 7 },
    A4: { babyBoomer: 1, genX: 17, milenial: 4, genZ: 0 },
    A5: { babyBoomer: 1, genX: 9, milenial: 0, genZ: 0 }
  },
  "KAB. PEKALONGAN": { 
    A3: { babyBoomer: 2, genX: 45, milenial: 50, genZ: 5 },
    A4: { babyBoomer: 1, genX: 18, milenial: 5, genZ: 0 },
    A5: { babyBoomer: 0, genX: 3, milenial: 1, genZ: 0 }
  },
  "KAB. PEMALANG": { 
    A3: { babyBoomer: 1, genX: 73, milenial: 54, genZ: 10 },
    A4: { babyBoomer: 3, genX: 33, milenial: 12, genZ: 0 },
    A5: { babyBoomer: 0, genX: 7, milenial: 0, genZ: 0 }
  },
  "KAB. PURBALINGGA": { 
    A3: { babyBoomer: 1, genX: 36, milenial: 53, genZ: 10 },
    A4: { babyBoomer: 0, genX: 23, milenial: 10, genZ: 0 },
    A5: { babyBoomer: 0, genX: 10, milenial: 0, genZ: 0 }
  },
  "KAB. PURWOREJO": { 
    A3: { babyBoomer: 0, genX: 70, milenial: 59, genZ: 16 },
    A4: { babyBoomer: 2, genX: 16, milenial: 8, genZ: 0 },
    A5: { babyBoomer: 0, genX: 7, milenial: 0, genZ: 0 }
  },
  "KAB. REMBANG": { 
    A3: { babyBoomer: 0, genX: 16, milenial: 28, genZ: 0 },
    A4: { babyBoomer: 0, genX: 5, milenial: 8, genZ: 0 },
    A5: { babyBoomer: 0, genX: 1, milenial: 0, genZ: 0 }
  },
  "KAB. SEMARANG": { 
    A3: { babyBoomer: 2, genX: 98, milenial: 99, genZ: 24 },
    A4: { babyBoomer: 0, genX: 50, milenial: 27, genZ: 1 },
    A5: { babyBoomer: 0, genX: 27, milenial: 2, genZ: 0 }
  },
  "KAB. SRAGEN": { 
    A3: { babyBoomer: 2, genX: 100, milenial: 97, genZ: 10 },
    A4: { babyBoomer: 2, genX: 41, milenial: 15, genZ: 0 },
    A5: { babyBoomer: 1, genX: 20, milenial: 0, genZ: 0 }
  },
  "KAB. SUKOHARJO": { 
    A3: { babyBoomer: 3, genX: 116, milenial: 114, genZ: 31 },
    A4: { babyBoomer: 0, genX: 89, milenial: 14, genZ: 2 },
    A5: { babyBoomer: 2, genX: 38, milenial: 0, genZ: 0 }
  },
  "KAB. TEGAL": { 
    A3: { babyBoomer: 5, genX: 117, milenial: 72, genZ: 8 },
    A4: { babyBoomer: 1, genX: 46, milenial: 10, genZ: 0 },
    A5: { babyBoomer: 5, genX: 21, milenial: 0, genZ: 0 }
  },
  "KAB. TEMANGGUNG": { 
    A3: { babyBoomer: 2, genX: 47, milenial: 45, genZ: 3 },
    A4: { babyBoomer: 0, genX: 21, milenial: 14, genZ: 0 },
    A5: { babyBoomer: 1, genX: 8, milenial: 0, genZ: 0 }
  },
  "KAB. WONOGIRI": { 
    A3: { babyBoomer: 1, genX: 135, milenial: 195, genZ: 28 },
    A4: { babyBoomer: 2, genX: 85, milenial: 35, genZ: 0 },
    A5: { babyBoomer: 1, genX: 22, milenial: 0, genZ: 0 }
  },
  "KAB. WONOSOBO": { 
    A3: { babyBoomer: 4, genX: 24, milenial: 26, genZ: 0 },
    A4: { babyBoomer: 2, genX: 14, milenial: 5, genZ: 0 },
    A5: { babyBoomer: 0, genX: 2, milenial: 0, genZ: 0 }
  },
  "KOTA MAGELANG": { 
    A3: { babyBoomer: 0, genX: 29, milenial: 31, genZ: 1 },
    A4: { babyBoomer: 1, genX: 14, milenial: 2, genZ: 0 },
    A5: { babyBoomer: 1, genX: 3, milenial: 0, genZ: 0 }
  },
  "KOTA PEKALONGAN": { 
    A3: { babyBoomer: 0, genX: 29, milenial: 42, genZ: 6 },
    A4: { babyBoomer: 0, genX: 20, milenial: 11, genZ: 0 },
    A5: { babyBoomer: 0, genX: 2, milenial: 1, genZ: 0 }
  },
  "KOTA SALATIGA": { 
    A3: { babyBoomer: 0, genX: 43, milenial: 39, genZ: 15 },
    A4: { babyBoomer: 0, genX: 14, milenial: 9, genZ: 0 },
    A5: { babyBoomer: 0, genX: 12, milenial: 0, genZ: 0 }
  },
  "KOTA SEMARANG": { 
    A3: { babyBoomer: 6, genX: 237, milenial: 327, genZ: 79 },
    A4: { babyBoomer: 1, genX: 145, milenial: 84, genZ: 1 },
    A5: { babyBoomer: 9, genX: 86, milenial: 3, genZ: 0 }
  },
  "KOTA SURAKARTA": { 
    A3: { babyBoomer: 2, genX: 96, milenial: 188, genZ: 34 },
    A4: { babyBoomer: 1, genX: 82, milenial: 24, genZ: 0 },
    A5: { babyBoomer: 1, genX: 27, milenial: 0, genZ: 0 }
  },
  "KOTA TEGAL": { 
    A3: { babyBoomer: 0, genX: 35, milenial: 41, genZ: 9 },
    A4: { babyBoomer: 0, genX: 18, milenial: 5, genZ: 0 },
    A5: { babyBoomer: 2, genX: 9, milenial: 1, genZ: 0 }
  }
};

// Status kerja per kabupaten per jenjang
export const statusKerjaData: Record<string, Record<string, { bekerja: number; tidakBekerja: number }>> = {
  "KAB. BANJARNEGARA": { A3: { bekerja: 117, tidakBekerja: 25 }, A4: { bekerja: 45, tidakBekerja: 6 }, A5: { bekerja: 7, tidakBekerja: 0 } },
  "KAB. BANYUMAS": { A3: { bekerja: 155, tidakBekerja: 60 }, A4: { bekerja: 37, tidakBekerja: 12 }, A5: { bekerja: 6, tidakBekerja: 3 } },
  "KAB. BATANG": { A3: { bekerja: 85, tidakBekerja: 23 }, A4: { bekerja: 23, tidakBekerja: 2 }, A5: { bekerja: 5, tidakBekerja: 0 } },
  "KAB. BLORA": { A3: { bekerja: 73, tidakBekerja: 9 }, A4: { bekerja: 15, tidakBekerja: 2 }, A5: { bekerja: 6, tidakBekerja: 0 } },
  "KAB. BOYOLALI": { A3: { bekerja: 211, tidakBekerja: 33 }, A4: { bekerja: 64, tidakBekerja: 8 }, A5: { bekerja: 14, tidakBekerja: 3 } },
  "KAB. BREBES": { A3: { bekerja: 72, tidakBekerja: 15 }, A4: { bekerja: 18, tidakBekerja: 6 }, A5: { bekerja: 6, tidakBekerja: 1 } },
  "KAB. CILACAP": { A3: { bekerja: 173, tidakBekerja: 59 }, A4: { bekerja: 45, tidakBekerja: 15 }, A5: { bekerja: 13, tidakBekerja: 6 } },
  "KAB. DEMAK": { A3: { bekerja: 70, tidakBekerja: 14 }, A4: { bekerja: 47, tidakBekerja: 2 }, A5: { bekerja: 12, tidakBekerja: 4 } },
  "KAB. GROBOGAN": { A3: { bekerja: 54, tidakBekerja: 17 }, A4: { bekerja: 16, tidakBekerja: 3 }, A5: { bekerja: 2, tidakBekerja: 0 } },
  "KAB. JEPARA": { A3: { bekerja: 70, tidakBekerja: 14 }, A4: { bekerja: 15, tidakBekerja: 1 }, A5: { bekerja: 5, tidakBekerja: 1 } },
  "KAB. KARANGANYAR": { A3: { bekerja: 191, tidakBekerja: 45 }, A4: { bekerja: 69, tidakBekerja: 7 }, A5: { bekerja: 15, tidakBekerja: 1 } },
  "KAB. KEBUMEN": { A3: { bekerja: 84, tidakBekerja: 16 }, A4: { bekerja: 14, tidakBekerja: 1 }, A5: { bekerja: 8, tidakBekerja: 2 } },
  "KAB. KENDAL": { A3: { bekerja: 99, tidakBekerja: 26 }, A4: { bekerja: 17, tidakBekerja: 5 }, A5: { bekerja: 13, tidakBekerja: 3 } },
  "KAB. KLATEN": { A3: { bekerja: 292, tidakBekerja: 86 }, A4: { bekerja: 89, tidakBekerja: 11 }, A5: { bekerja: 24, tidakBekerja: 5 } },
  "KAB. KUDUS": { A3: { bekerja: 111, tidakBekerja: 33 }, A4: { bekerja: 58, tidakBekerja: 14 }, A5: { bekerja: 20, tidakBekerja: 1 } },
  "KAB. MAGELANG": { A3: { bekerja: 136, tidakBekerja: 20 }, A4: { bekerja: 30, tidakBekerja: 3 }, A5: { bekerja: 8, tidakBekerja: 1 } },
  "KAB. PATI": { A3: { bekerja: 83, tidakBekerja: 9 }, A4: { bekerja: 20, tidakBekerja: 2 }, A5: { bekerja: 9, tidakBekerja: 1 } },
  "KAB. PEKALONGAN": { A3: { bekerja: 89, tidakBekerja: 13 }, A4: { bekerja: 21, tidakBekerja: 3 }, A5: { bekerja: 4, tidakBekerja: 0 } },
  "KAB. PEMALANG": { A3: { bekerja: 93, tidakBekerja: 45 }, A4: { bekerja: 39, tidakBekerja: 10 }, A5: { bekerja: 7, tidakBekerja: 0 } },
  "KAB. PURBALINGGA": { A3: { bekerja: 89, tidakBekerja: 11 }, A4: { bekerja: 28, tidakBekerja: 5 }, A5: { bekerja: 9, tidakBekerja: 1 } },
  "KAB. PURWOREJO": { A3: { bekerja: 114, tidakBekerja: 31 }, A4: { bekerja: 23, tidakBekerja: 3 }, A5: { bekerja: 7, tidakBekerja: 0 } },
  "KAB. REMBANG": { A3: { bekerja: 39, tidakBekerja: 5 }, A4: { bekerja: 13, tidakBekerja: 0 }, A5: { bekerja: 1, tidakBekerja: 0 } },
  "KAB. SEMARANG": { A3: { bekerja: 191, tidakBekerja: 32 }, A4: { bekerja: 70, tidakBekerja: 8 }, A5: { bekerja: 22, tidakBekerja: 7 } },
  "KAB. SRAGEN": { A3: { bekerja: 179, tidakBekerja: 30 }, A4: { bekerja: 54, tidakBekerja: 4 }, A5: { bekerja: 19, tidakBekerja: 2 } },
  "KAB. SUKOHARJO": { A3: { bekerja: 198, tidakBekerja: 66 }, A4: { bekerja: 88, tidakBekerja: 17 }, A5: { bekerja: 33, tidakBekerja: 7 } },
  "KAB. TEGAL": { A3: { bekerja: 159, tidakBekerja: 43 }, A4: { bekerja: 49, tidakBekerja: 8 }, A5: { bekerja: 21, tidakBekerja: 5 } },
  "KAB. TEMANGGUNG": { A3: { bekerja: 87, tidakBekerja: 10 }, A4: { bekerja: 35, tidakBekerja: 0 }, A5: { bekerja: 9, tidakBekerja: 0 } },
  "KAB. WONOGIRI": { A3: { bekerja: 289, tidakBekerja: 70 }, A4: { bekerja: 107, tidakBekerja: 15 }, A5: { bekerja: 23, tidakBekerja: 0 } },
  "KAB. WONOSOBO": { A3: { bekerja: 43, tidakBekerja: 11 }, A4: { bekerja: 20, tidakBekerja: 1 }, A5: { bekerja: 2, tidakBekerja: 0 } },
  "KOTA MAGELANG": { A3: { bekerja: 56, tidakBekerja: 5 }, A4: { bekerja: 10, tidakBekerja: 7 }, A5: { bekerja: 3, tidakBekerja: 1 } },
  "KOTA PEKALONGAN": { A3: { bekerja: 63, tidakBekerja: 14 }, A4: { bekerja: 24, tidakBekerja: 7 }, A5: { bekerja: 3, tidakBekerja: 0 } },
  "KOTA SALATIGA": { A3: { bekerja: 72, tidakBekerja: 25 }, A4: { bekerja: 20, tidakBekerja: 3 }, A5: { bekerja: 11, tidakBekerja: 1 } },
  "KOTA SEMARANG": { A3: { bekerja: 481, tidakBekerja: 168 }, A4: { bekerja: 195, tidakBekerja: 36 }, A5: { bekerja: 77, tidakBekerja: 21 } },
  "KOTA SURAKARTA": { A3: { bekerja: 256, tidakBekerja: 64 }, A4: { bekerja: 87, tidakBekerja: 20 }, A5: { bekerja: 23, tidakBekerja: 5 } },
  "KOTA TEGAL": { A3: { bekerja: 65, tidakBekerja: 20 }, A4: { bekerja: 18, tidakBekerja: 5 }, A5: { bekerja: 11, tidakBekerja: 1 } }
};

// BPJS per kabupaten per jenjang
export const bpjsData: Record<string, Record<string, { 
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
  "KOTA SEMARANG": { 
    A3: { asuransiSwasta: 19, bpjsPbi: 313, bpjsNonPbi: 222, keduanya: 37, tidakMemiliki: 58 },
    A4: { asuransiSwasta: 12, bpjsPbi: 108, bpjsNonPbi: 75, keduanya: 17, tidakMemiliki: 19 },
    A5: { asuransiSwasta: 7, bpjsPbi: 45, bpjsNonPbi: 36, keduanya: 6, tidakMemiliki: 4 }
  }
};

// Punya binaan per kabupaten per jenjang
export const punyaBinaanData: Record<string, Record<string, { punya: number; tidak: number }>> = {
  "KAB. BANJARNEGARA": { A3: { punya: 76, tidak: 66 }, A4: { punya: 44, tidak: 7 }, A5: { punya: 7, tidak: 0 } },
  "KAB. BANYUMAS": { A3: { punya: 125, tidak: 90 }, A4: { punya: 43, tidak: 6 }, A5: { punya: 9, tidak: 0 } },
  "KAB. BATANG": { A3: { punya: 70, tidak: 38 }, A4: { punya: 21, tidak: 4 }, A5: { punya: 5, tidak: 0 } },
  "KAB. BLORA": { A3: { punya: 53, tidak: 29 }, A4: { punya: 17, tidak: 0 }, A5: { punya: 6, tidak: 0 } },
  "KAB. BOYOLALI": { A3: { punya: 124, tidak: 120 }, A4: { punya: 66, tidak: 6 }, A5: { punya: 17, tidak: 0 } },
  "KAB. BREBES": { A3: { punya: 53, tidak: 34 }, A4: { punya: 23, tidak: 1 }, A5: { punya: 7, tidak: 0 } },
  "KAB. CILACAP": { A3: { punya: 98, tidak: 134 }, A4: { punya: 50, tidak: 10 }, A5: { punya: 18, tidak: 1 } },
  "KAB. DEMAK": { A3: { punya: 29, tidak: 55 }, A4: { punya: 32, tidak: 17 }, A5: { punya: 14, tidak: 2 } },
  "KAB. GROBOGAN": { A3: { punya: 33, tidak: 38 }, A4: { punya: 16, tidak: 3 }, A5: { punya: 2, tidak: 0 } },
  "KAB. JEPARA": { A3: { punya: 34, tidak: 50 }, A4: { punya: 14, tidak: 2 }, A5: { punya: 6, tidak: 0 } },
  "KAB. KARANGANYAR": { A3: { punya: 165, tidak: 71 }, A4: { punya: 69, tidak: 7 }, A5: { punya: 16, tidak: 0 } },
  "KAB. KEBUMEN": { A3: { punya: 53, tidak: 47 }, A4: { punya: 14, tidak: 1 }, A5: { punya: 10, tidak: 0 } },
  "KAB. KENDAL": { A3: { punya: 46, tidak: 79 }, A4: { punya: 14, tidak: 8 }, A5: { punya: 16, tidak: 0 } },
  "KAB. KLATEN": { A3: { punya: 202, tidak: 176 }, A4: { punya: 87, tidak: 13 }, A5: { punya: 27, tidak: 2 } },
  "KAB. KUDUS": { A3: { punya: 59, tidak: 85 }, A4: { punya: 57, tidak: 15 }, A5: { punya: 21, tidak: 0 } },
  "KAB. MAGELANG": { A3: { punya: 89, tidak: 67 }, A4: { punya: 32, tidak: 1 }, A5: { punya: 8, tidak: 1 } },
  "KAB. PATI": { A3: { punya: 63, tidak: 29 }, A4: { punya: 19, tidak: 3 }, A5: { punya: 10, tidak: 0 } },
  "KAB. PEKALONGAN": { A3: { punya: 43, tidak: 59 }, A4: { punya: 21, tidak: 3 }, A5: { punya: 4, tidak: 0 } },
  "KAB. PEMALANG": { A3: { punya: 56, tidak: 82 }, A4: { punya: 44, tidak: 5 }, A5: { punya: 7, tidak: 0 } },
  "KAB. PURBALINGGA": { A3: { punya: 58, tidak: 42 }, A4: { punya: 25, tidak: 8 }, A5: { punya: 8, tidak: 2 } },
  "KAB. PURWOREJO": { A3: { punya: 85, tidak: 60 }, A4: { punya: 23, tidak: 3 }, A5: { punya: 7, tidak: 0 } },
  "KAB. REMBANG": { A3: { punya: 16, tidak: 28 }, A4: { punya: 11, tidak: 2 }, A5: { punya: 1, tidak: 0 } },
  "KAB. SEMARANG": { A3: { punya: 111, tidak: 112 }, A4: { punya: 61, tidak: 17 }, A5: { punya: 27, tidak: 2 } },
  "KAB. SRAGEN": { A3: { punya: 106, tidak: 103 }, A4: { punya: 54, tidak: 4 }, A5: { punya: 21, tidak: 0 } },
  "KAB. SUKOHARJO": { A3: { punya: 133, tidak: 131 }, A4: { punya: 87, tidak: 18 }, A5: { punya: 40, tidak: 0 } },
  "KAB. TEGAL": { A3: { punya: 123, tidak: 79 }, A4: { punya: 48, tidak: 9 }, A5: { punya: 25, tidak: 1 } },
  "KAB. TEMANGGUNG": { A3: { punya: 45, tidak: 52 }, A4: { punya: 31, tidak: 4 }, A5: { punya: 9, tidak: 0 } },
  "KAB. WONOGIRI": { A3: { punya: 194, tidak: 165 }, A4: { punya: 102, tidak: 20 }, A5: { punya: 23, tidak: 0 } },
  "KAB. WONOSOBO": { A3: { punya: 24, tidak: 30 }, A4: { punya: 18, tidak: 3 }, A5: { punya: 2, tidak: 0 } },
  "KOTA MAGELANG": { A3: { punya: 36, tidak: 25 }, A4: { punya: 17, tidak: 0 }, A5: { punya: 4, tidak: 0 } },
  "KOTA PEKALONGAN": { A3: { punya: 30, tidak: 47 }, A4: { punya: 26, tidak: 5 }, A5: { punya: 3, tidak: 0 } },
  "KOTA SALATIGA": { A3: { punya: 30, tidak: 67 }, A4: { punya: 18, tidak: 5 }, A5: { punya: 11, tidak: 1 } },
  "KOTA SEMARANG": { A3: { punya: 263, tidak: 386 }, A4: { punya: 180, tidak: 51 }, A5: { punya: 93, tidak: 5 } },
  "KOTA SURAKARTA": { A3: { punya: 167, tidak: 153 }, A4: { punya: 93, tidak: 14 }, A5: { punya: 28, tidak: 0 } },
  "KOTA TEGAL": { A3: { punya: 67, tidak: 18 }, A4: { punya: 21, tidak: 2 }, A5: { punya: 12, tidak: 0 } }
};

// Terlibat kepengurusan per kabupaten per jenjang
export const terlibatKepengurusanData: Record<string, Record<string, { ya: number; tidak: number }>> = {
  "KAB. BANJARNEGARA": { A3: { ya: 75, tidak: 67 }, A4: { ya: 35, tidak: 16 }, A5: { ya: 3, tidak: 4 } },
  "KAB. BANYUMAS": { A3: { ya: 124, tidak: 87 }, A4: { ya: 41, tidak: 6 }, A5: { ya: 7, tidak: 2 } },
  "KAB. BATANG": { A3: { ya: 46, tidak: 62 }, A4: { ya: 21, tidak: 4 }, A5: { ya: 5, tidak: 0 } },
  "KAB. BLORA": { A3: { ya: 42, tidak: 40 }, A4: { ya: 16, tidak: 1 }, A5: { ya: 6, tidak: 0 } },
  "KAB. BOYOLALI": { A3: { ya: 108, tidak: 136 }, A4: { ya: 56, tidak: 16 }, A5: { ya: 10, tidak: 7 } },
  "KAB. BREBES": { A3: { ya: 57, tidak: 29 }, A4: { ya: 23, tidak: 1 }, A5: { ya: 7, tidak: 0 } },
  "KAB. CILACAP": { A3: { ya: 123, tidak: 109 }, A4: { ya: 44, tidak: 16 }, A5: { ya: 18, tidak: 1 } },
  "KAB. DEMAK": { A3: { ya: 17, tidak: 63 }, A4: { ya: 21, tidak: 28 }, A5: { ya: 10, tidak: 6 } },
  "KAB. GROBOGAN": { A3: { ya: 33, tidak: 35 }, A4: { ya: 16, tidak: 2 }, A5: { ya: 2, tidak: 0 } },
  "KAB. JEPARA": { A3: { ya: 45, tidak: 39 }, A4: { ya: 15, tidak: 1 }, A5: { ya: 4, tidak: 2 } },
  "KAB. KARANGANYAR": { A3: { ya: 129, tidak: 107 }, A4: { ya: 57, tidak: 19 }, A5: { ya: 14, tidak: 2 } },
  "KAB. KEBUMEN": { A3: { ya: 60, tidak: 40 }, A4: { ya: 13, tidak: 2 }, A5: { ya: 7, tidak: 3 } },
  "KAB. KENDAL": { A3: { ya: 75, tidak: 50 }, A4: { ya: 16, tidak: 6 }, A5: { ya: 15, tidak: 1 } },
  "KAB. KLATEN": { A3: { ya: 221, tidak: 154 }, A4: { ya: 76, tidak: 23 }, A5: { ya: 20, tidak: 9 } },
  "KAB. KUDUS": { A3: { ya: 72, tidak: 71 }, A4: { ya: 42, tidak: 30 }, A5: { ya: 20, tidak: 1 } },
  "KAB. MAGELANG": { A3: { ya: 96, tidak: 55 }, A4: { ya: 26, tidak: 7 }, A5: { ya: 7, tidak: 2 } },
  "KAB. PATI": { A3: { ya: 53, tidak: 39 }, A4: { ya: 18, tidak: 4 }, A5: { ya: 10, tidak: 0 } },
  "KAB. PEKALONGAN": { A3: { ya: 52, tidak: 50 }, A4: { ya: 20, tidak: 4 }, A5: { ya: 4, tidak: 0 } },
  "KAB. PEMALANG": { A3: { ya: 73, tidak: 64 }, A4: { ya: 42, tidak: 7 }, A5: { ya: 7, tidak: 0 } },
  "KAB. PURBALINGGA": { A3: { ya: 71, tidak: 29 }, A4: { ya: 28, tidak: 5 }, A5: { ya: 7, tidak: 3 } },
  "KAB. PURWOREJO": { A3: { ya: 58, tidak: 87 }, A4: { ya: 16, tidak: 10 }, A5: { ya: 5, tidak: 2 } },
  "KAB. REMBANG": { A3: { ya: 17, tidak: 24 }, A4: { ya: 8, tidak: 5 }, A5: { ya: 1, tidak: 0 } },
  "KAB. SEMARANG": { A3: { ya: 91, tidak: 131 }, A4: { ya: 62, tidak: 16 }, A5: { ya: 27, tidak: 2 } },
  "KAB. SRAGEN": { A3: { ya: 109, tidak: 100 }, A4: { ya: 45, tidak: 13 }, A5: { ya: 12, tidak: 9 } },
  "KAB. SUKOHARJO": { A3: { ya: 118, tidak: 136 }, A4: { ya: 72, tidak: 33 }, A5: { ya: 20, tidak: 20 } },
  "KAB. TEGAL": { A3: { ya: 74, tidak: 128 }, A4: { ya: 35, tidak: 22 }, A5: { ya: 21, tidak: 5 } },
  "KAB. TEMANGGUNG": { A3: { ya: 45, tidak: 52 }, A4: { ya: 32, tidak: 3 }, A5: { ya: 8, tidak: 1 } },
  "KAB. WONOGIRI": { A3: { ya: 148, tidak: 211 }, A4: { ya: 70, tidak: 52 }, A5: { ya: 19, tidak: 4 } },
  "KAB. WONOSOBO": { A3: { ya: 31, tidak: 23 }, A4: { ya: 14, tidak: 7 }, A5: { ya: 1, tidak: 1 } },
  "KOTA MAGELANG": { A3: { ya: 42, tidak: 18 }, A4: { ya: 14, tidak: 3 }, A5: { ya: 4, tidak: 0 } },
  "KOTA PEKALONGAN": { A3: { ya: 33, tidak: 44 }, A4: { ya: 21, tidak: 10 }, A5: { ya: 1, tidak: 2 } },
  "KOTA SALATIGA": { A3: { ya: 45, tidak: 52 }, A4: { ya: 20, tidak: 3 }, A5: { ya: 12, tidak: 0 } },
  "KOTA SEMARANG": { A3: { ya: 328, tidak: 318 }, A4: { ya: 173, tidak: 58 }, A5: { ya: 80, tidak: 18 } },
  "KOTA SURAKARTA": { A3: { ya: 131, tidak: 186 }, A4: { ya: 80, tidak: 26 }, A5: { ya: 20, tidak: 8 } },
  "KOTA TEGAL": { A3: { ya: 63, tidak: 22 }, A4: { ya: 15, tidak: 8 }, A5: { ya: 9, tidak: 3 } }
};

// Bayar iuran per kabupaten per jenjang
export const bayarIuranData: Record<string, Record<string, { ya: number; tidak: number }>> = {
  "KAB. BANJARNEGARA": { A3: { ya: 76, tidak: 66 }, A4: { ya: 45, tidak: 6 }, A5: { ya: 7, tidak: 0 } },
  "KAB. BANYUMAS": { A3: { ya: 107, tidak: 104 }, A4: { ya: 25, tidak: 22 }, A5: { ya: 5, tidak: 4 } },
  "KAB. BATANG": { A3: { ya: 91, tidak: 17 }, A4: { ya: 20, tidak: 5 }, A5: { ya: 4, tidak: 1 } },
  "KAB. BLORA": { A3: { ya: 75, tidak: 7 }, A4: { ya: 17, tidak: 0 }, A5: { ya: 6, tidak: 0 } },
  "KAB. BOYOLALI": { A3: { ya: 190, tidak: 54 }, A4: { ya: 66, tidak: 6 }, A5: { ya: 17, tidak: 0 } },
  "KAB. BREBES": { A3: { ya: 47, tidak: 39 }, A4: { ya: 19, tidak: 5 }, A5: { ya: 5, tidak: 2 } },
  "KAB. CILACAP": { A3: { ya: 156, tidak: 76 }, A4: { ya: 47, tidak: 13 }, A5: { ya: 16, tidak: 3 } },
  "KAB. DEMAK": { A3: { ya: 43, tidak: 37 }, A4: { ya: 21, tidak: 28 }, A5: { ya: 7, tidak: 9 } },
  "KAB. GROBOGAN": { A3: { ya: 50, tidak: 18 }, A4: { ya: 17, tidak: 1 }, A5: { ya: 2, tidak: 0 } },
  "KAB. JEPARA": { A3: { ya: 28, tidak: 56 }, A4: { ya: 6, tidak: 10 }, A5: { ya: 3, tidak: 3 } },
  "KAB. KARANGANYAR": { A3: { ya: 205, tidak: 31 }, A4: { ya: 76, tidak: 0 }, A5: { ya: 16, tidak: 0 } },
  "KAB. KEBUMEN": { A3: { ya: 56, tidak: 44 }, A4: { ya: 9, tidak: 6 }, A5: { ya: 8, tidak: 2 } },
  "KAB. KENDAL": { A3: { ya: 66, tidak: 59 }, A4: { ya: 16, tidak: 6 }, A5: { ya: 13, tidak: 3 } },
  "KAB. KLATEN": { A3: { ya: 280, tidak: 95 }, A4: { ya: 88, tidak: 11 }, A5: { ya: 26, tidak: 3 } },
  "KAB. KUDUS": { A3: { ya: 87, tidak: 56 }, A4: { ya: 54, tidak: 18 }, A5: { ya: 17, tidak: 4 } },
  "KAB. MAGELANG": { A3: { ya: 112, tidak: 39 }, A4: { ya: 27, tidak: 6 }, A5: { ya: 7, tidak: 2 } },
  "KAB. PATI": { A3: { ya: 51, tidak: 41 }, A4: { ya: 13, tidak: 9 }, A5: { ya: 7, tidak: 3 } },
  "KAB. PEKALONGAN": { A3: { ya: 39, tidak: 63 }, A4: { ya: 3, tidak: 21 }, A5: { ya: 1, tidak: 3 } },
  "KAB. PEMALANG": { A3: { ya: 57, tidak: 80 }, A4: { ya: 32, tidak: 17 }, A5: { ya: 4, tidak: 3 } },
  "KAB. PURBALINGGA": { A3: { ya: 37, tidak: 63 }, A4: { ya: 20, tidak: 13 }, A5: { ya: 9, tidak: 1 } },
  "KAB. PURWOREJO": { A3: { ya: 123, tidak: 22 }, A4: { ya: 21, tidak: 5 }, A5: { ya: 6, tidak: 1 } },
  "KAB. REMBANG": { A3: { ya: 22, tidak: 19 }, A4: { ya: 9, tidak: 4 }, A5: { ya: 1, tidak: 0 } },
  "KAB. SEMARANG": { A3: { ya: 163, tidak: 59 }, A4: { ya: 69, tidak: 9 }, A5: { ya: 27, tidak: 2 } },
  "KAB. SRAGEN": { A3: { ya: 130, tidak: 79 }, A4: { ya: 47, tidak: 11 }, A5: { ya: 21, tidak: 0 } },
  "KAB. SUKOHARJO": { A3: { ya: 165, tidak: 89 }, A4: { ya: 69, tidak: 36 }, A5: { ya: 36, tidak: 4 } },
  "KAB. TEGAL": { A3: { ya: 157, tidak: 45 }, A4: { ya: 48, tidak: 9 }, A5: { ya: 26, tidak: 0 } },
  "KAB. TEMANGGUNG": { A3: { ya: 56, tidak: 41 }, A4: { ya: 30, tidak: 5 }, A5: { ya: 9, tidak: 0 } },
  "KAB. WONOGIRI": { A3: { ya: 261, tidak: 98 }, A4: { ya: 103, tidak: 19 }, A5: { ya: 22, tidak: 1 } },
  "KAB. WONOSOBO": { A3: { ya: 32, tidak: 22 }, A4: { ya: 12, tidak: 9 }, A5: { ya: 2, tidak: 0 } },
  "KOTA MAGELANG": { A3: { ya: 32, tidak: 28 }, A4: { ya: 14, tidak: 3 }, A5: { ya: 3, tidak: 1 } },
  "KOTA PEKALONGAN": { A3: { ya: 46, tidak: 31 }, A4: { ya: 24, tidak: 7 }, A5: { ya: 2, tidak: 1 } },
  "KOTA SALATIGA": { A3: { ya: 39, tidak: 58 }, A4: { ya: 16, tidak: 7 }, A5: { ya: 10, tidak: 2 } },
  "KOTA SEMARANG": { A3: { ya: 282, tidak: 364 }, A4: { ya: 140, tidak: 91 }, A5: { ya: 86, tidak: 12 } },
  "KOTA SURAKARTA": { A3: { ya: 269, tidak: 48 }, A4: { ya: 102, tidak: 4 }, A5: { ya: 27, tidak: 1 } },
  "KOTA TEGAL": { A3: { ya: 52, tidak: 33 }, A4: { ya: 19, tidak: 4 }, A5: { ya: 10, tidak: 2 } }
};

// Pendapatan SES per kabupaten per jenjang
export const pendapatanSESData: Record<string, Record<string, { 
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
  "KOTA SEMARANG": { 
    A3: { rendah: 28, menengah: 55, menengahAtas: 78, tinggi: 265 },
    A4: { rendah: 4, menengah: 11, menengahAtas: 17, tinggi: 129 },
    A5: { rendah: 2, menengah: 3, menengahAtas: 2, tinggi: 60 }
  }
};

// Pendapatan Nishab per kabupaten per jenjang
export const pendapatanNishabData: Record<string, Record<string, { 
  dibawahNishab: number; 
  diatasNishab: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { dibawahNishab: 84, diatasNishab: 23 },
    A4: { dibawahNishab: 21, diatasNishab: 17 },
    A5: { dibawahNishab: 5, diatasNishab: 1 }
  },
  "KAB. BANYUMAS": { 
    A3: { dibawahNishab: 105, diatasNishab: 36 },
    A4: { dibawahNishab: 19, diatasNishab: 17 },
    A5: { dibawahNishab: 3, diatasNishab: 4 }
  },
  "KOTA SEMARANG": { 
    A3: { dibawahNishab: 295, diatasNishab: 131 },
    A4: { dibawahNishab: 86, diatasNishab: 75 },
    A5: { dibawahNishab: 25, diatasNishab: 42 }
  }
};

// Terima bantuan per kabupaten per jenjang
export const terimaBantuanData: Record<string, Record<string, { menerima: number; tidakMenerima: number }>> = {
  "KAB. BANJARNEGARA": { A3: { menerima: 34, tidakMenerima: 108 }, A4: { menerima: 18, tidakMenerima: 33 }, A5: { menerima: 4, tidakMenerima: 3 } },
  "KAB. BANYUMAS": { A3: { menerima: 74, tidakMenerima: 141 }, A4: { menerima: 9, tidakMenerima: 40 }, A5: { menerima: 0, tidakMenerima: 9 } },
  "KAB. BATANG": { A3: { menerima: 20, tidakMenerima: 88 }, A4: { menerima: 5, tidakMenerima: 20 }, A5: { menerima: 0, tidakMenerima: 5 } },
  "KAB. BLORA": { A3: { menerima: 10, tidakMenerima: 72 }, A4: { menerima: 1, tidakMenerima: 16 }, A5: { menerima: 0, tidakMenerima: 6 } },
  "KAB. BOYOLALI": { A3: { menerima: 48, tidakMenerima: 196 }, A4: { menerima: 17, tidakMenerima: 55 }, A5: { menerima: 1, tidakMenerima: 16 } },
  "KAB. BREBES": { A3: { menerima: 26, tidakMenerima: 61 }, A4: { menerima: 6, tidakMenerima: 18 }, A5: { menerima: 1, tidakMenerima: 6 } },
  "KAB. CILACAP": { A3: { menerima: 66, tidakMenerima: 166 }, A4: { menerima: 15, tidakMenerima: 45 }, A5: { menerima: 3, tidakMenerima: 16 } },
  "KAB. DEMAK": { A3: { menerima: 19, tidakMenerima: 65 }, A4: { menerima: 14, tidakMenerima: 35 }, A5: { menerima: 6, tidakMenerima: 10 } },
  "KAB. GROBOGAN": { A3: { menerima: 9, tidakMenerima: 62 }, A4: { menerima: 0, tidakMenerima: 19 }, A5: { menerima: 0, tidakMenerima: 2 } },
  "KAB. JEPARA": { A3: { menerima: 25, tidakMenerima: 59 }, A4: { menerima: 2, tidakMenerima: 14 }, A5: { menerima: 2, tidakMenerima: 4 } },
  "KAB. KARANGANYAR": { A3: { menerima: 36, tidakMenerima: 200 }, A4: { menerima: 6, tidakMenerima: 70 }, A5: { menerima: 6, tidakMenerima: 10 } },
  "KAB. KEBUMEN": { A3: { menerima: 25, tidakMenerima: 75 }, A4: { menerima: 3, tidakMenerima: 12 }, A5: { menerima: 1, tidakMenerima: 9 } },
  "KAB. KENDAL": { A3: { menerima: 22, tidakMenerima: 103 }, A4: { menerima: 5, tidakMenerima: 17 }, A5: { menerima: 1, tidakMenerima: 15 } },
  "KAB. KLATEN": { A3: { menerima: 88, tidakMenerima: 290 }, A4: { menerima: 22, tidakMenerima: 78 }, A5: { menerima: 7, tidakMenerima: 22 } },
  "KAB. KUDUS": { A3: { menerima: 29, tidakMenerima: 115 }, A4: { menerima: 11, tidakMenerima: 61 }, A5: { menerima: 1, tidakMenerima: 20 } },
  "KAB. MAGELANG": { A3: { menerima: 32, tidakMenerima: 124 }, A4: { menerima: 4, tidakMenerima: 29 }, A5: { menerima: 1, tidakMenerima: 8 } },
  "KAB. PATI": { A3: { menerima: 12, tidakMenerima: 80 }, A4: { menerima: 6, tidakMenerima: 16 }, A5: { menerima: 2, tidakMenerima: 8 } },
  "KAB. PEKALONGAN": { A3: { menerima: 18, tidakMenerima: 84 }, A4: { menerima: 2, tidakMenerima: 22 }, A5: { menerima: 1, tidakMenerima: 3 } },
  "KAB. PEMALANG": { A3: { menerima: 40, tidakMenerima: 98 }, A4: { menerima: 7, tidakMenerima: 42 }, A5: { menerima: 1, tidakMenerima: 6 } },
  "KAB. PURBALINGGA": { A3: { menerima: 20, tidakMenerima: 80 }, A4: { menerima: 3, tidakMenerima: 30 }, A5: { menerima: 0, tidakMenerima: 10 } },
  "KAB. PURWOREJO": { A3: { menerima: 35, tidakMenerima: 110 }, A4: { menerima: 3, tidakMenerima: 23 }, A5: { menerima: 0, tidakMenerima: 7 } },
  "KAB. REMBANG": { A3: { menerima: 16, tidakMenerima: 28 }, A4: { menerima: 1, tidakMenerima: 12 }, A5: { menerima: 0, tidakMenerima: 1 } },
  "KAB. SEMARANG": { A3: { menerima: 47, tidakMenerima: 176 }, A4: { menerima: 8, tidakMenerima: 70 }, A5: { menerima: 7, tidakMenerima: 22 } },
  "KAB. SRAGEN": { A3: { menerima: 51, tidakMenerima: 158 }, A4: { menerima: 10, tidakMenerima: 48 }, A5: { menerima: 4, tidakMenerima: 17 } },
  "KAB. SUKOHARJO": { A3: { menerima: 63, tidakMenerima: 201 }, A4: { menerima: 23, tidakMenerima: 82 }, A5: { menerima: 4, tidakMenerima: 36 } },
  "KAB. TEGAL": { A3: { menerima: 48, tidakMenerima: 154 }, A4: { menerima: 14, tidakMenerima: 43 }, A5: { menerima: 9, tidakMenerima: 17 } },
  "KAB. TEMANGGUNG": { A3: { menerima: 18, tidakMenerima: 79 }, A4: { menerima: 6, tidakMenerima: 29 }, A5: { menerima: 0, tidakMenerima: 9 } },
  "KAB. WONOGIRI": { A3: { menerima: 67, tidakMenerima: 292 }, A4: { menerima: 23, tidakMenerima: 99 }, A5: { menerima: 5, tidakMenerima: 18 } },
  "KAB. WONOSOBO": { A3: { menerima: 3, tidakMenerima: 51 }, A4: { menerima: 1, tidakMenerima: 20 }, A5: { menerima: 0, tidakMenerima: 2 } },
  "KOTA MAGELANG": { A3: { menerima: 8, tidakMenerima: 53 }, A4: { menerima: 1, tidakMenerima: 16 }, A5: { menerima: 0, tidakMenerima: 4 } },
  "KOTA PEKALONGAN": { A3: { menerima: 18, tidakMenerima: 59 }, A4: { menerima: 4, tidakMenerima: 27 }, A5: { menerima: 1, tidakMenerima: 2 } },
  "KOTA SALATIGA": { A3: { menerima: 8, tidakMenerima: 89 }, A4: { menerima: 2, tidakMenerima: 21 }, A5: { menerima: 1, tidakMenerima: 11 } },
  "KOTA SEMARANG": { A3: { menerima: 124, tidakMenerima: 525 }, A4: { menerima: 50, tidakMenerima: 181 }, A5: { menerima: 11, tidakMenerima: 87 } },
  "KOTA SURAKARTA": { A3: { menerima: 53, tidakMenerima: 267 }, A4: { menerima: 6, tidakMenerima: 101 }, A5: { menerima: 2, tidakMenerima: 26 } },
  "KOTA TEGAL": { A3: { menerima: 26, tidakMenerima: 59 }, A4: { menerima: 10, tidakMenerima: 13 }, A5: { menerima: 2, tidakMenerima: 10 } }
};

// Frekuensi konflik per kabupaten per jenjang
export const frekKonflikData: Record<string, Record<string, { 
  tidakPernah: number; 
  sangatJarang: number; 
  jarang: number; 
  cukupSering: number; 
  sering: number 
}>> = {
  "KAB. BANJARNEGARA": { 
    A3: { tidakPernah: 35, sangatJarang: 59, jarang: 29, cukupSering: 7, sering: 2 },
    A4: { tidakPernah: 17, sangatJarang: 26, jarang: 6, cukupSering: 0, sering: 0 },
    A5: { tidakPernah: 4, sangatJarang: 2, jarang: 0, cukupSering: 0, sering: 0 }
  },
  "KAB. BANYUMAS": { 
    A3: { tidakPernah: 32, sangatJarang: 80, jarang: 65, cukupSering: 5, sering: 2 },
    A4: { tidakPernah: 9, sangatJarang: 26, jarang: 12, cukupSering: 2, sering: 0 },
    A5: { tidakPernah: 2, sangatJarang: 7, jarang: 0, cukupSering: 1, sering: 0 }
  },
  "KOTA SEMARANG": { 
    A3: { tidakPernah: 123, sangatJarang: 262, jarang: 140, cukupSering: 24, sering: 6 },
    A4: { tidakPernah: 52, sangatJarang: 119, jarang: 39, cukupSering: 5, sering: 3 },
    A5: { tidakPernah: 28, sangatJarang: 49, jarang: 17, cukupSering: 0, sering: 0 }
  }
};

// Jumlah anak per kabupaten
export const jumlahAnakData: Record<string, { kurang3: number; antara3sampai5: number; lebih6: number }> = {
  "KAB. BANJARNEGARA": { kurang3: 134, antara3sampai5: 57, lebih6: 4 },
  "KAB. BANYUMAS": { kurang3: 187, antara3sampai5: 77, lebih6: 8 },
  "KAB. BATANG": { kurang3: 110, antara3sampai5: 22, lebih6: 2 },
  "KAB. BLORA": { kurang3: 77, antara3sampai5: 24, lebih6: 1 },
  "KAB. BOYOLALI": { kurang3: 224, antara3sampai5: 97, lebih6: 3 },
  "KAB. BREBES": { kurang3: 71, antara3sampai5: 42, lebih6: 1 },
  "KAB. CILACAP": { kurang3: 216, antara3sampai5: 87, lebih6: 3 },
  "KAB. DEMAK": { kurang3: 114, antara3sampai5: 40, lebih6: 4 },
  "KAB. GROBOGAN": { kurang3: 72, antara3sampai5: 15, lebih6: 6 },
  "KAB. JEPARA": { kurang3: 67, antara3sampai5: 35, lebih6: 2 },
  "KAB. KARANGANYAR": { kurang3: 214, antara3sampai5: 97, lebih6: 2 },
  "KAB. KEBUMEN": { kurang3: 94, antara3sampai5: 32, lebih6: 0 },
  "KAB. KENDAL": { kurang3: 108, antara3sampai5: 42, lebih6: 4 },
  "KAB. KLATEN": { kurang3: 336, antara3sampai5: 149, lebih6: 6 },
  "KAB. KUDUS": { kurang3: 173, antara3sampai5: 59, lebih6: 9 },
  "KAB. MAGELANG": { kurang3: 133, antara3sampai5: 54, lebih6: 5 },
  "KAB. PATI": { kurang3: 89, antara3sampai5: 34, lebih6: 1 },
  "KAB. PEKALONGAN": { kurang3: 84, antara3sampai5: 40, lebih6: 1 },
  "KAB. PEMALANG": { kurang3: 135, antara3sampai5: 50, lebih6: 3 },
  "KAB. PURBALINGGA": { kurang3: 100, antara3sampai5: 38, lebih6: 1 },
  "KAB. PURWOREJO": { kurang3: 116, antara3sampai5: 49, lebih6: 6 },
  "KAB. REMBANG": { kurang3: 50, antara3sampai5: 12, lebih6: 0 },
  "KAB. SEMARANG": { kurang3: 228, antara3sampai5: 88, lebih6: 8 },
  "KAB. SRAGEN": { kurang3: 200, antara3sampai5: 78, lebih6: 4 },
  "KAB. SUKOHARJO": { kurang3: 308, antara3sampai5: 107, lebih6: 4 },
  "KAB. TEGAL": { kurang3: 207, antara3sampai5: 85, lebih6: 4 },
  "KAB. TEMANGGUNG": { kurang3: 106, antara3sampai5: 35, lebih6: 1 },
  "KAB. WONOGIRI": { kurang3: 369, antara3sampai5: 97, lebih6: 6 },
  "KAB. WONOSOBO": { kurang3: 53, antara3sampai5: 19, lebih6: 1 },
  "KOTA MAGELANG": { kurang3: 54, antara3sampai5: 20, lebih6: 2 },
  "KOTA PEKALONGAN": { kurang3: 86, antara3sampai5: 22, lebih6: 2 },
  "KOTA SALATIGA": { kurang3: 84, antara3sampai5: 41, lebih6: 3 },
  "KOTA SEMARANG": { kurang3: 689, antara3sampai5: 207, lebih6: 18 },
  "KOTA SURAKARTA": { kurang3: 313, antara3sampai5: 111, lebih6: 10 },
  "KOTA TEGAL": { kurang3: 89, antara3sampai5: 29, lebih6: 1 }
};

// Ketahanan keluarga per kabupaten (persentase)
export const ketahananKeluargaData: Record<string, { 
  spiritual: number; 
  fisikEkonomi: number; 
  sosial: number; 
  psikologis: number 
}> = {
  "KAB. BANJARNEGARA": { spiritual: 87.9, fisikEkonomi: 74.6, sosial: 84.3, psikologis: 82.6 },
  "KAB. BANYUMAS": { spiritual: 89.5, fisikEkonomi: 74.5, sosial: 83.9, psikologis: 83.8 },
  "KAB. BATANG": { spiritual: 86.8, fisikEkonomi: 77.1, sosial: 82.4, psikologis: 82.9 },
  "KAB. BLORA": { spiritual: 91.1, fisikEkonomi: 80.6, sosial: 82.4, psikologis: 85.6 },
  "KAB. BOYOLALI": { spiritual: 88.9, fisikEkonomi: 77.0, sosial: 85.6, psikologis: 83.1 },
  "KAB. BREBES": { spiritual: 88.0, fisikEkonomi: 72.2, sosial: 83.5, psikologis: 83.3 },
  "KAB. CILACAP": { spiritual: 89.3, fisikEkonomi: 74.0, sosial: 82.5, psikologis: 82.6 },
  "KAB. DEMAK": { spiritual: 87.2, fisikEkonomi: 74.1, sosial: 81.6, psikologis: 82.1 },
  "KAB. GROBOGAN": { spiritual: 92.4, fisikEkonomi: 77.2, sosial: 84.6, psikologis: 84.6 },
  "KAB. JEPARA": { spiritual: 91.1, fisikEkonomi: 78.1, sosial: 78.7, psikologis: 85.4 },
  "KAB. KARANGANYAR": { spiritual: 89.8, fisikEkonomi: 77.5, sosial: 86.2, psikologis: 83.9 },
  "KAB. KEBUMEN": { spiritual: 87.9, fisikEkonomi: 77.3, sosial: 80.7, psikologis: 83.1 },
  "KAB. KENDAL": { spiritual: 89.5, fisikEkonomi: 77.4, sosial: 83.5, psikologis: 85.3 },
  "KAB. KLATEN": { spiritual: 89.9, fisikEkonomi: 77.2, sosial: 85.9, psikologis: 84.7 },
  "KAB. KUDUS": { spiritual: 87.8, fisikEkonomi: 76.6, sosial: 80.3, psikologis: 81.6 },
  "KAB. MAGELANG": { spiritual: 88.8, fisikEkonomi: 74.1, sosial: 84.6, psikologis: 82.7 },
  "KAB. PATI": { spiritual: 92.2, fisikEkonomi: 81.1, sosial: 83.0, psikologis: 88.2 },
  "KAB. PEKALONGAN": { spiritual: 88.1, fisikEkonomi: 76.1, sosial: 79.2, psikologis: 83.4 },
  "KAB. PEMALANG": { spiritual: 88.3, fisikEkonomi: 72.9, sosial: 79.9, psikologis: 82.7 },
  "KAB. PURBALINGGA": { spiritual: 90.5, fisikEkonomi: 73.8, sosial: 82.7, psikologis: 83.6 },
  "KAB. PURWOREJO": { spiritual: 88.8, fisikEkonomi: 74.8, sosial: 83.3, psikologis: 82.8 },
  "KAB. REMBANG": { spiritual: 89.0, fisikEkonomi: 75.1, sosial: 85.4, psikologis: 84.3 },
  "KAB. SEMARANG": { spiritual: 89.1, fisikEkonomi: 78.3, sosial: 85.0, psikologis: 83.7 },
  "KAB. SRAGEN": { spiritual: 90.3, fisikEkonomi: 75.6, sosial: 85.7, psikologis: 83.5 },
  "KAB. SUKOHARJO": { spiritual: 88.7, fisikEkonomi: 76.7, sosial: 84.9, psikologis: 82.7 },
  "KAB. TEGAL": { spiritual: 88.1, fisikEkonomi: 74.3, sosial: 81.0, psikologis: 83.2 },
  "KAB. TEMANGGUNG": { spiritual: 88.3, fisikEkonomi: 74.5, sosial: 83.4, psikologis: 83.8 },
  "KAB. WONOGIRI": { spiritual: 90.5, fisikEkonomi: 77.0, sosial: 86.3, psikologis: 84.7 },
  "KAB. WONOSOBO": { spiritual: 89.5, fisikEkonomi: 79.6, sosial: 82.7, psikologis: 83.9 },
  "KOTA MAGELANG": { spiritual: 90.5, fisikEkonomi: 79.0, sosial: 81.9, psikologis: 82.1 },
  "KOTA PEKALONGAN": { spiritual: 89.5, fisikEkonomi: 76.1, sosial: 79.6, psikologis: 85.1 },
  "KOTA SALATIGA": { spiritual: 88.9, fisikEkonomi: 77.7, sosial: 85.0, psikologis: 84.1 },
  "KOTA SEMARANG": { spiritual: 89.0, fisikEkonomi: 77.1, sosial: 84.2, psikologis: 83.5 },
  "KOTA SURAKARTA": { spiritual: 89.0, fisikEkonomi: 76.9, sosial: 85.9, psikologis: 82.8 },
  "KOTA TEGAL": { spiritual: 87.3, fisikEkonomi: 76.2, sosial: 81.5, psikologis: 82.3 }
};

// Hafalan anak per kabupaten (rentang juz)
export const hafalanAnakData: Record<string, { 
  juz1_5: number; 
  juz6_10: number; 
  juz11_15: number; 
  juz16_20: number; 
  juz21_25: number; 
  juz26_29: number; 
  juz30: number 
}> = {
  "KAB. BANJARNEGARA": { juz1_5: 296, juz6_10: 21, juz11_15: 2, juz16_20: 3, juz21_25: 4, juz26_29: 0, juz30: 10 },
  "KAB. BANYUMAS": { juz1_5: 344, juz6_10: 36, juz11_15: 9, juz16_20: 4, juz21_25: 3, juz26_29: 0, juz30: 21 },
  "KAB. BATANG": { juz1_5: 93, juz6_10: 6, juz11_15: 7, juz16_20: 1, juz21_25: 1, juz26_29: 0, juz30: 4 },
  "KAB. BLORA": { juz1_5: 110, juz6_10: 11, juz11_15: 8, juz16_20: 2, juz21_25: 2, juz26_29: 0, juz30: 10 },
  "KAB. BOYOLALI": { juz1_5: 373, juz6_10: 41, juz11_15: 15, juz16_20: 11, juz21_25: 3, juz26_29: 5, juz30: 21 },
  "KAB. BREBES": { juz1_5: 171, juz6_10: 13, juz11_15: 5, juz16_20: 0, juz21_25: 1, juz26_29: 0, juz30: 0 },
  "KAB. CILACAP": { juz1_5: 393, juz6_10: 18, juz11_15: 5, juz16_20: 3, juz21_25: 0, juz26_29: 2, juz30: 18 },
  "KAB. DEMAK": { juz1_5: 168, juz6_10: 13, juz11_15: 8, juz16_20: 4, juz21_25: 6, juz26_29: 0, juz30: 21 },
  "KAB. GROBOGAN": { juz1_5: 92, juz6_10: 11, juz11_15: 3, juz16_20: 0, juz21_25: 0, juz26_29: 1, juz30: 16 },
  "KAB. JEPARA": { juz1_5: 148, juz6_10: 10, juz11_15: 7, juz16_20: 1, juz21_25: 1, juz26_29: 2, juz30: 14 },
  "KAB. KARANGANYAR": { juz1_5: 378, juz6_10: 30, juz11_15: 12, juz16_20: 0, juz21_25: 3, juz26_29: 0, juz30: 38 },
  "KAB. KEBUMEN": { juz1_5: 141, juz6_10: 13, juz11_15: 4, juz16_20: 1, juz21_25: 2, juz26_29: 1, juz30: 4 },
  "KAB. KENDAL": { juz1_5: 168, juz6_10: 24, juz11_15: 6, juz16_20: 6, juz21_25: 3, juz26_29: 0, juz30: 17 },
  "KAB. KLATEN": { juz1_5: 586, juz6_10: 54, juz11_15: 24, juz16_20: 11, juz21_25: 2, juz26_29: 4, juz30: 22 },
  "KAB. KUDUS": { juz1_5: 260, juz6_10: 17, juz11_15: 20, juz16_20: 17, juz21_25: 6, juz26_29: 0, juz30: 24 },
  "KAB. MAGELANG": { juz1_5: 258, juz6_10: 22, juz11_15: 12, juz16_20: 4, juz21_25: 4, juz26_29: 0, juz30: 15 },
  "KAB. PATI": { juz1_5: 123, juz6_10: 23, juz11_15: 16, juz16_20: 4, juz21_25: 2, juz26_29: 3, juz30: 7 },
  "KAB. PEKALONGAN": { juz1_5: 167, juz6_10: 16, juz11_15: 5, juz16_20: 1, juz21_25: 0, juz26_29: 0, juz30: 4 },
  "KAB. PEMALANG": { juz1_5: 238, juz6_10: 11, juz11_15: 3, juz16_20: 3, juz21_25: 1, juz26_29: 2, juz30: 17 },
  "KAB. PURBALINGGA": { juz1_5: 170, juz6_10: 22, juz11_15: 7, juz16_20: 4, juz21_25: 0, juz26_29: 0, juz30: 5 },
  "KAB. PURWOREJO": { juz1_5: 206, juz6_10: 15, juz11_15: 13, juz16_20: 2, juz21_25: 2, juz26_29: 1, juz30: 22 },
  "KAB. REMBANG": { juz1_5: 61, juz6_10: 5, juz11_15: 1, juz16_20: 0, juz21_25: 0, juz26_29: 0, juz30: 0 },
  "KAB. SEMARANG": { juz1_5: 362, juz6_10: 46, juz11_15: 21, juz16_20: 8, juz21_25: 7, juz26_29: 2, juz30: 26 },
  "KAB. SRAGEN": { juz1_5: 294, juz6_10: 46, juz11_15: 16, juz16_20: 8, juz21_25: 2, juz26_29: 0, juz30: 50 },
  "KAB. SUKOHARJO": { juz1_5: 438, juz6_10: 53, juz11_15: 23, juz16_20: 6, juz21_25: 4, juz26_29: 6, juz30: 40 },
  "KAB. TEGAL": { juz1_5: 375, juz6_10: 26, juz11_15: 7, juz16_20: 12, juz21_25: 3, juz26_29: 1, juz30: 24 },
  "KAB. TEMANGGUNG": { juz1_5: 141, juz6_10: 17, juz11_15: 9, juz16_20: 1, juz21_25: 1, juz26_29: 0, juz30: 11 },
  "KAB. WONOGIRI": { juz1_5: 525, juz6_10: 42, juz11_15: 16, juz16_20: 4, juz21_25: 0, juz26_29: 1, juz30: 25 },
  "KAB. WONOSOBO": { juz1_5: 89, juz6_10: 6, juz11_15: 2, juz16_20: 0, juz21_25: 0, juz26_29: 1, juz30: 3 },
  "KOTA MAGELANG": { juz1_5: 82, juz6_10: 9, juz11_15: 4, juz16_20: 2, juz21_25: 1, juz26_29: 0, juz30: 6 },
  "KOTA PEKALONGAN": { juz1_5: 104, juz6_10: 15, juz11_15: 4, juz16_20: 0, juz21_25: 1, juz26_29: 1, juz30: 3 },
  "KOTA SALATIGA": { juz1_5: 151, juz6_10: 30, juz11_15: 11, juz16_20: 4, juz21_25: 5, juz26_29: 2, juz30: 9 },
  "KOTA SEMARANG": { juz1_5: 999, juz6_10: 78, juz11_15: 46, juz16_20: 21, juz21_25: 11, juz26_29: 3, juz30: 66 },
  "KOTA SURAKARTA": { juz1_5: 479, juz6_10: 50, juz11_15: 28, juz16_20: 10, juz21_25: 8, juz26_29: 4, juz30: 27 },
  "KOTA TEGAL": { juz1_5: 147, juz6_10: 11, juz11_15: 4, juz16_20: 1, juz21_25: 1, juz26_29: 1, juz30: 9 }
};
