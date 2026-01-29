// Data Anggota Legislatif (ALEG) PKS Jawa Tengah Periode 2024-2029

export interface AnggotaLegislatif {
  id: number;
  dpd: string;
  nama: string;
  daerah: string;
  dapil: string;
}

export interface AlegProvinsi {
  id: number;
  dapil: string;
  nama: string;
  alamat: string;
  daerah: string;
  wilayah: string;
}

export interface AlegDPRRI {
  id: number;
  dapil: string;
  nama: string;
  wilayah: string;
}

export interface DPDStatistik {
  dpd: string;
  jumlahAleg: number;
}

// Data ALEG Perempuan
export const alegPerempuanData: AnggotaLegislatif[] = [
  { id: 1, dpd: "Provinsi Jawa Tengah", nama: "Hj. Ida Nurul Farida, M.Pd.", daerah: "Provinsi Jawa Tengah", dapil: "Dapil 2" },
  { id: 2, dpd: "Banjarnegara", nama: "Sri Rusupiati", daerah: "Banjarnegara", dapil: "Dapil 1" },
  { id: 3, dpd: "Banyumas", nama: "Atik Luthfiah", daerah: "Banyumas", dapil: "Dapil 1" },
  { id: 4, dpd: "Cilacap", nama: "Dra. Wiwiek Yuning Prapti", daerah: "Cilacap", dapil: "Dapil 1" },
  { id: 5, dpd: "Kebumen", nama: "Erwin Puji Oktiana", daerah: "Kebumen", dapil: "Dapil 4" },
  { id: 6, dpd: "Kudus", nama: "Umi Bariroh", daerah: "Kudus", dapil: "Dapil 4" },
  { id: 7, dpd: "Kab. Magelang", nama: "Arifah Aprilliani", daerah: "Magelang", dapil: "Dapil 5" },
  { id: 8, dpd: "Kab. Pekalongan", nama: "Dinda Aniva Nutkhi", daerah: "Pekalongan", dapil: "Dapil 3" },
  { id: 9, dpd: "Pemalang", nama: "dr. Irma Suryani Widyastuti", daerah: "Pemalang", dapil: "Dapil 1" },
  { id: 10, dpd: "Pemalang", nama: "Rina Tyastuti", daerah: "Pemalang", dapil: "Dapil 6" },
  { id: 11, dpd: "Purbalingga", nama: "Niken Hindrianingsih", daerah: "Purbalingga", dapil: "Dapil 1" },
  { id: 12, dpd: "Purbalingga", nama: "Siti Sifa, S.Pd.", daerah: "Purbalingga", dapil: "Dapil 2" },
  { id: 13, dpd: "Purbalingga", nama: "Sumarsih, S.I.P., M.Pd.", daerah: "Purbalingga", dapil: "Dapil 4" },
  { id: 14, dpd: "Kab. Semarang", nama: "Musyarofah", daerah: "Semarang", dapil: "Dapil 1" },
  { id: 15, dpd: "Sukoharjo", nama: "Siti Zakiyatun Ni'mah", daerah: "Sukoharjo", dapil: "Dapil 4" },
  { id: 16, dpd: "Sukoharjo", nama: "Sumiyati, S.E.", daerah: "Sukoharjo", dapil: "Dapil 5" },
  { id: 17, dpd: "Kab. Tegal", nama: "Nurul Fajrin, S.A.P.", daerah: "Tegal", dapil: "Dapil 4" },
  { id: 18, dpd: "Temanggung", nama: "Elynawati", daerah: "Temanggung", dapil: "Dapil 4" },
  { id: 19, dpd: "Temanggung", nama: "Herlina Dwi P", daerah: "Temanggung", dapil: "Dapil 6" },
  { id: 20, dpd: "Wonogiri", nama: "Nyamik Saptati, S.Pd.", daerah: "Wonogiri", dapil: "Dapil 2" },
  { id: 21, dpd: "Kota Semarang", nama: "Siti Roika", daerah: "Kota Semarang", dapil: "Dapil 1" },
  { id: 22, dpd: "Kota Semarang", nama: "Dini Inayati", daerah: "Kota Semarang", dapil: "Dapil 3" },
  { id: 23, dpd: "Kota Surakarta", nama: "Widyastuti", daerah: "Kota Surakarta", dapil: "Dapil 2" },
  { id: 24, dpd: "Kota Tegal", nama: "Erni Ratnani, SE. MM.", daerah: "Kota Tegal", dapil: "Dapil 4" },
];

// Data ALEG DPRD Provinsi Jawa Tengah - 11 orang
export const alegProvinsiData: AlegProvinsi[] = [
  { id: 1, dapil: "Dapil 1", nama: "H. MUHAMMAD AFIF", alamat: "Gedawang RT. 002, RW. 002, Kecamatan Banyumanik, Kota Semarang", daerah: "Kota Semarang", wilayah: "Kota Semarang" },
  { id: 2, dapil: "Dapil 2", nama: "Hj. IDA NURUL FARIDA, M.Pd.", alamat: "Nobowetan RT. 001/008, Kecamatan Argomulyo, Kota Salatiga", daerah: "Kota Salatiga", wilayah: "Semarang, Kendal, Kota Salatiga" },
  { id: 3, dapil: "Dapil 5", nama: "HAFIDZ ALHAQ FATIH, S.T.", alamat: "Totosari No. 32 RT. 004/RW. 014, Pajang, Kecamatan Laweyan, Kota Surakarta", daerah: "Kota Surakarta", wilayah: "Blora, Grobogan" },
  { id: 4, dapil: "Dapil 6", nama: "DEDY ENDRIYATNO, S.E.", alamat: "Mojomulyo RT. 002/RW. 011, Sragen Kulon, Kecamatan Sragen, Kabupaten Sragen", daerah: "Sragen", wilayah: "Sragen, Karanganyar, Wonogiri" },
  { id: 5, dapil: "Dapil 7", nama: "MARTONO, S.Pd., M.Si.", alamat: "Kemasan RT. 001/RW. 008, Banmati, Kecamatan Sukoharjo, Kabupaten Sukoharjo", daerah: "Kota Surakarta", wilayah: "Klaten, Sukoharjo, Kota Surakarta" },
  { id: 6, dapil: "Dapil 8", nama: "H. TUGIMAN, S.P.", alamat: "Wates RT. 006/RW. 005 Tegalgiri, Kecamatan Nogosari, Kabupaten Boyolali", daerah: "Boyolali", wilayah: "Boyolali, Magelang, Kota Magelang" },
  { id: 7, dapil: "Dapil 9", nama: "AMIR MASDUKI, S.PD.I.", alamat: "Ling Aglik Utara RT. 001/RW. 008 Semawung Daleman, Kecamatan Kutoarjo, Kabupaten Purworejo", daerah: "Purworejo", wilayah: "Temanggung, Wonosobo, Purworejo" },
  { id: 8, dapil: "Dapil 10", nama: "KARSONO, S.Pd.I.", alamat: "Jl. Suka Damai RT. 001/RW. 003 Mewek, Kecamatan Kalimanah, Kabupaten Purbalingga", daerah: "Purbalingga", wilayah: "Banjarnegara, Kebumen, Purbalingga" },
  { id: 9, dapil: "Dapil 11", nama: "SETYA ARINUGROHO", alamat: "Jl. Kebocoran RT. 004/RW. 001 Karangsalam Kidul, Kecamatan Kedung Banteng, Kabupaten Banyumas", daerah: "Banyumas", wilayah: "Banyumas, Cilacap" },
  { id: 10, dapil: "Dapil 12", nama: "H. SURURUL FUAD", alamat: "Krajan II RT. 007/RW. 002 Kalierang, Kecamatan Bumiayu, Kabupaten Brebes", daerah: "Brebes", wilayah: "Kota Tegal, Tegal, Brebes" },
  { id: 11, dapil: "Dapil 13", nama: "MUCH. MUCHLIS ARISTON, S.T.", alamat: "Jl. KH. A. Dahlan Gg 14 No. 16 RT. 001/RW. 007 Tirto, Kecamatan Pekalongan Barat, Kota Pekalongan", daerah: "Kota Pekalongan", wilayah: "Kota Pekalongan, Pekalongan, Batang, Pemalang" },
];

// Data ALEG DPR RI Dapil Jawa Tengah - 7 orang
export const alegDPRRIData: AlegDPRRI[] = [
  { id: 1, dapil: "Dapil 1", nama: "Dr. H. MUH HARIS, M.Si.", wilayah: "Kota Semarang, Semarang, Kendal, Kota Salatiga" },
  { id: 2, dapil: "Dapil 4", nama: "Drs. HAMID NOOR YASIN, M.M.", wilayah: "Sragen, Karanganyar, Wonogiri" },
  { id: 3, dapil: "Dapil 5", nama: "Dr. H. ABDUL KHARIS ALMASYHARI, S.E., M.Si.", wilayah: "Klaten, Sukoharjo, Boyolali, Kota Surakarta" },
  { id: 4, dapil: "Dapil 7", nama: "H. ROFIK HANANTO, S.E.", wilayah: "Banjarnegara, Kebumen, Purbalingga" },
  { id: 5, dapil: "Dapil 8", nama: "H. YANUAR ARIF WIBOWO, S.H.", wilayah: "Banyumas, Cilacap" },
  { id: 6, dapil: "Dapil 9", nama: "Dr. H. ABDUL FIKRI FAQIH, M.M.", wilayah: "Kota Tegal, Tegal, Brebes" },
  { id: 7, dapil: "Dapil 10", nama: "Rizal Bawazier, Amd.Pjk.", wilayah: "Kota Pekalongan, Pekalongan, Batang, Pemalang" },
];

// Data ALEG DPRD Kabupaten/Kota
export const alegData: AnggotaLegislatif[] = [
  // Banjarnegara - 5 orang
  { id: 1, dpd: "Banjarnegara", nama: "Sri Rusupiati", daerah: "Banjarnegara", dapil: "Dapil 1" },
  { id: 2, dpd: "Banjarnegara", nama: "Rokhman Supriyadi", daerah: "Banjarnegara", dapil: "Dapil 2" },
  { id: 3, dpd: "Banjarnegara", nama: "Dedi Suromli", daerah: "Banjarnegara", dapil: "Dapil 3" },
  { id: 4, dpd: "Banjarnegara", nama: "Edi Santosa", daerah: "Banjarnegara", dapil: "Dapil 4" },
  { id: 5, dpd: "Banjarnegara", nama: "Achmad Salabi", daerah: "Banjarnegara", dapil: "Dapil 6" },
  
  // Banyumas - 6 orang
  { id: 6, dpd: "Banyumas", nama: "Atik Luthfiah", daerah: "Banyumas", dapil: "Dapil 1" },
  { id: 7, dpd: "Banyumas", nama: "Eko Pramono", daerah: "Banyumas", dapil: "Dapil 2" },
  { id: 8, dpd: "Banyumas", nama: "Dedi Suprianto", daerah: "Banyumas", dapil: "Dapil 3" },
  { id: 9, dpd: "Banyumas", nama: "Sutrisno Rudiyanto", daerah: "Banyumas", dapil: "Dapil 4" },
  { id: 10, dpd: "Banyumas", nama: "Joko Pramono", daerah: "Banyumas", dapil: "Dapil 5" },
  { id: 11, dpd: "Banyumas", nama: "Slamet Sukoco", daerah: "Banyumas", dapil: "Dapil 6" },
  
  // Batang - 4 orang
  { id: 12, dpd: "Batang", nama: "Sidqon Hadi", daerah: "Batang", dapil: "Dapil 1" },
  { id: 13, dpd: "Batang", nama: "Tikto Wibowo", daerah: "Batang", dapil: "Dapil 2" },
  { id: 14, dpd: "Batang", nama: "Rizal Pramudiarta", daerah: "Batang", dapil: "Dapil 3" },
  { id: 15, dpd: "Batang", nama: "Murdiansyah", daerah: "Batang", dapil: "Dapil 4" },
  
  // Blora - 3 orang
  { id: 16, dpd: "Blora", nama: "Santoso Budi Susetyo, S.Sos", daerah: "Blora", dapil: "Dapil 1" },
  { id: 17, dpd: "Blora", nama: "Arifin Muhdiarto, S.T.", daerah: "Blora", dapil: "Dapil 2" },
  { id: 18, dpd: "Blora", nama: "Munatin", daerah: "Blora", dapil: "Dapil 4" },
  
  // Boyolali - 4 orang
  { id: 19, dpd: "Boyolali", nama: "Nur Arifin", daerah: "Boyolali", dapil: "Dapil 1" },
  { id: 20, dpd: "Boyolali", nama: "Wahyono, S.Pi.", daerah: "Boyolali", dapil: "Dapil 3" },
  { id: 21, dpd: "Boyolali", nama: "Atok Suyoto, S.P.", daerah: "Boyolali", dapil: "Dapil 4" },
  { id: 22, dpd: "Boyolali", nama: "H. Ali Hufroni, S.H., M.Si.", daerah: "Boyolali", dapil: "Dapil 5" },
  
  // Brebes - 4 orang
  { id: 23, dpd: "Brebes", nama: "Heri Agus Nurohman", daerah: "Brebes", dapil: "Dapil 1" },
  { id: 24, dpd: "Brebes", nama: "Arifin", daerah: "Brebes", dapil: "Dapil 2" },
  { id: 25, dpd: "Brebes", nama: "Tawid Andrianto", daerah: "Brebes", dapil: "Dapil 4" },
  { id: 26, dpd: "Brebes", nama: "Abdullah Syafaat", daerah: "Brebes", dapil: "Dapil 6" },
  
  // Cilacap - 5 orang
  { id: 27, dpd: "Cilacap", nama: "Dra. Wiwiek Yuning Prapti", daerah: "Cilacap", dapil: "Dapil 1" },
  { id: 28, dpd: "Cilacap", nama: "Rusmanto", daerah: "Cilacap", dapil: "Dapil 3" },
  { id: 29, dpd: "Cilacap", nama: "Supriyatno", daerah: "Cilacap", dapil: "Dapil 4" },
  { id: 30, dpd: "Cilacap", nama: "Nursitoaji", daerah: "Cilacap", dapil: "Dapil 5" },
  { id: 31, dpd: "Cilacap", nama: "Triyanto", daerah: "Cilacap", dapil: "Dapil 6" },
  
  // Demak - 1 orang
  { id: 32, dpd: "Demak", nama: "Eko Setyo Budi Utomo", daerah: "Demak", dapil: "Dapil 4" },
  
  // Grobogan - 3 orang
  { id: 33, dpd: "Grobogan", nama: "Ahmad Sidik, S. Pd., M. Pd.", daerah: "Grobogan", dapil: "Dapil 1" },
  { id: 34, dpd: "Grobogan", nama: "H. Ahmad Syarif, S.T", daerah: "Grobogan", dapil: "Dapil 3" },
  { id: 35, dpd: "Grobogan", nama: "Suranto, S. Pd., M. Si.", daerah: "Grobogan", dapil: "Dapil 4" },
  
  // Jepara - 2 orang
  { id: 36, dpd: "Jepara", nama: "H. Chairul Anwar, S.E", daerah: "Jepara", dapil: "Dapil 1" },
  { id: 37, dpd: "Jepara", nama: "H. Arofiq, S.T, M.T", daerah: "Jepara", dapil: "Dapil 5" },
  
  // Karanganyar - 5 orang
  { id: 38, dpd: "Karanganyar", nama: "Syirajudin Ahmad, A.Md", daerah: "Karanganyar", dapil: "Dapil 1" },
  { id: 39, dpd: "Karanganyar", nama: "Darwanto, S.E.", daerah: "Karanganyar", dapil: "Dapil 2" },
  { id: 40, dpd: "Karanganyar", nama: "Mustaqim, S.Pt.", daerah: "Karanganyar", dapil: "Dapil 3" },
  { id: 41, dpd: "Karanganyar", nama: "Sarjono, S.Sos.", daerah: "Karanganyar", dapil: "Dapil 4" },
  { id: 42, dpd: "Karanganyar", nama: "Ali Akbar, S.E.", daerah: "Karanganyar", dapil: "Dapil 5" },
  
  // Kebumen - 2 orang
  { id: 43, dpd: "Kebumen", nama: "Erwin Puji Oktiana", daerah: "Kebumen", dapil: "Dapil 4" },
  { id: 44, dpd: "Kebumen", nama: "Agus Suprianto", daerah: "Kebumen", dapil: "Dapil 5" },
  
  // Kendal - 4 orang
  { id: 45, dpd: "Kendal", nama: "H. Sulistyo Ari Wibowo, S.Hut.", daerah: "Kendal", dapil: "Dapil 1" },
  { id: 46, dpd: "Kendal", nama: "Sukron, S.Pd.I", daerah: "Kendal", dapil: "Dapil 4" },
  { id: 47, dpd: "Kendal", nama: "Dwi Margo Utomo, S.E.", daerah: "Kendal", dapil: "Dapil 5" },
  { id: 48, dpd: "Kendal", nama: "H. Rubiyanto, S.E.", daerah: "Kendal", dapil: "Dapil 6" },
  
  // Klaten - 6 orang
  { id: 49, dpd: "Klaten", nama: "Hudi Juwana", daerah: "Klaten", dapil: "Dapil 1" },
  { id: 50, dpd: "Klaten", nama: "Widodo, S.H., M.H.", daerah: "Klaten", dapil: "Dapil 2" },
  { id: 51, dpd: "Klaten", nama: "Budi Raharjo", daerah: "Klaten", dapil: "Dapil 2" },
  { id: 52, dpd: "Klaten", nama: "dr. Yudi B. Prabawa", daerah: "Klaten", dapil: "Dapil 3" },
  { id: 53, dpd: "Klaten", nama: "Agus Triwibowo", daerah: "Klaten", dapil: "Dapil 4" },
  { id: 54, dpd: "Klaten", nama: "Marjuki", daerah: "Klaten", dapil: "Dapil 5" },
  
  // Kudus - 4 orang
  { id: 55, dpd: "Kudus", nama: "Sayid Yunanta", daerah: "Kudus", dapil: "Dapil 1" },
  { id: 56, dpd: "Kudus", nama: "Ruston Harahap", daerah: "Kudus", dapil: "Dapil 2" },
  { id: 57, dpd: "Kudus", nama: "Rony Agus Santosa", daerah: "Kudus", dapil: "Dapil 3" },
  { id: 58, dpd: "Kudus", nama: "Umi Bariroh", daerah: "Kudus", dapil: "Dapil 4" },
  
  // Kab Magelang - 6 orang
  { id: 59, dpd: "Kab. Magelang", nama: "H Dalami Nursidiq", daerah: "Magelang", dapil: "Dapil 1" },
  { id: 60, dpd: "Kab. Magelang", nama: "Fiqi Ahmad", daerah: "Magelang", dapil: "Dapil 2" },
  { id: 61, dpd: "Kab. Magelang", nama: "M Edy Susilo", daerah: "Magelang", dapil: "Dapil 3" },
  { id: 62, dpd: "Kab. Magelang", nama: "M Nasofi", daerah: "Magelang", dapil: "Dapil 4" },
  { id: 63, dpd: "Kab. Magelang", nama: "Arifah Aprilliani", daerah: "Magelang", dapil: "Dapil 5" },
  { id: 64, dpd: "Kab. Magelang", nama: "Abdul Aziz", daerah: "Magelang", dapil: "Dapil 6" },
  
  // Pati - 5 orang
  { id: 65, dpd: "Pati", nama: "Wardjono", daerah: "Pati", dapil: "Dapil 1" },
  { id: 66, dpd: "Pati", nama: "Sadikin", daerah: "Pati", dapil: "Dapil 2" },
  { id: 67, dpd: "Pati", nama: "Narso", daerah: "Pati", dapil: "Dapil 3" },
  { id: 68, dpd: "Pati", nama: "Karmijan", daerah: "Pati", dapil: "Dapil 4" },
  { id: 69, dpd: "Pati", nama: "Sutrisno", daerah: "Pati", dapil: "Dapil 5" },
  
  // Kab Pekalongan - 2 orang
  { id: 70, dpd: "Kab. Pekalongan", nama: "Eko Pamuji", daerah: "Pekalongan", dapil: "Dapil 2" },
  { id: 71, dpd: "Kab. Pekalongan", nama: "Dinda Aniva Nutkhi", daerah: "Pekalongan", dapil: "Dapil 3" },
  
  // Pemalang - 5 orang
  { id: 72, dpd: "Pemalang", nama: "dr. Irma Suryani Widyastuti", daerah: "Pemalang", dapil: "Dapil 1" },
  { id: 73, dpd: "Pemalang", nama: "Solichin, S.Ag.", daerah: "Pemalang", dapil: "Dapil 2" },
  { id: 74, dpd: "Pemalang", nama: "Daliwan, S.Pd.", daerah: "Pemalang", dapil: "Dapil 3" },
  { id: 75, dpd: "Pemalang", nama: "Muhamad Akmal, S.Farm", daerah: "Pemalang", dapil: "Dapil 5" },
  { id: 76, dpd: "Pemalang", nama: "Rina Tyastuti", daerah: "Pemalang", dapil: "Dapil 6" },
  
  // Purbalingga - 7 orang
  { id: 77, dpd: "Purbalingga", nama: "Niken Hindrianingsih", daerah: "Purbalingga", dapil: "Dapil 1" },
  { id: 78, dpd: "Purbalingga", nama: "H. Aris Widiarso, S.H.", daerah: "Purbalingga", dapil: "Dapil 1" },
  { id: 79, dpd: "Purbalingga", nama: "Siti Sifa, S.Pd.", daerah: "Purbalingga", dapil: "Dapil 2" },
  { id: 80, dpd: "Purbalingga", nama: "Padang Kusumo, S.H.", daerah: "Purbalingga", dapil: "Dapil 2" },
  { id: 81, dpd: "Purbalingga", nama: "Didik Suprayogi, S.Pd.", daerah: "Purbalingga", dapil: "Dapil 3" },
  { id: 82, dpd: "Purbalingga", nama: "Sumarsih, S.I.P., M.Pd.", daerah: "Purbalingga", dapil: "Dapil 4" },
  { id: 83, dpd: "Purbalingga", nama: "Cahyo Susilo, A.Md., RO", daerah: "Purbalingga", dapil: "Dapil 5" },
  
  // Purworejo - 1 orang
  { id: 84, dpd: "Purworejo", nama: "Sumitro", daerah: "Purworejo", dapil: "Dapil 4" },
  
  // Rembang - 0 orang (tidak ada data)
  
  // Kab Semarang - 4 orang
  { id: 85, dpd: "Kab. Semarang", nama: "Musyarofah", daerah: "Semarang", dapil: "Dapil 1" },
  { id: 86, dpd: "Kab. Semarang", nama: "Nafis Munandar", daerah: "Semarang", dapil: "Dapil 2" },
  { id: 87, dpd: "Kab. Semarang", nama: "Muhammad Nurkholis", daerah: "Semarang", dapil: "Dapil 3" },
  { id: 88, dpd: "Kab. Semarang", nama: "Muhammad Jauhari Mahmud", daerah: "Semarang", dapil: "Dapil 4" },
  
  // Sragen - 5 orang
  { id: 89, dpd: "Sragen", nama: "Riris Purnawan", daerah: "Sragen", dapil: "Dapil 1" },
  { id: 90, dpd: "Sragen", nama: "Prihandoko", daerah: "Sragen", dapil: "Dapil 2" },
  { id: 91, dpd: "Sragen", nama: "Wawan Yudi Ernanto", daerah: "Sragen", dapil: "Dapil 4" },
  { id: 92, dpd: "Sragen", nama: "Agus Aji Kuncoro", daerah: "Sragen", dapil: "Dapil 5" },
  { id: 93, dpd: "Sragen", nama: "Anggoro Sutrisno", daerah: "Sragen", dapil: "Dapil 6" },
  
  // Sukoharjo - 5 orang
  { id: 94, dpd: "Sukoharjo", nama: "Widoyo", daerah: "Sukoharjo", dapil: "Dapil 1" },
  { id: 95, dpd: "Sukoharjo", nama: "Sigid Budi Raharjo, S.Si.", daerah: "Sukoharjo", dapil: "Dapil 2" },
  { id: 96, dpd: "Sukoharjo", nama: "Tito Setiyo Nugroho, S.T.", daerah: "Sukoharjo", dapil: "Dapil 3" },
  { id: 97, dpd: "Sukoharjo", nama: "Siti Zakiyatun Ni'mah", daerah: "Sukoharjo", dapil: "Dapil 4" },
  { id: 98, dpd: "Sukoharjo", nama: "Sumiyati, S.E.", daerah: "Sukoharjo", dapil: "Dapil 5" },
  
  // Kab Tegal - 4 orang
  { id: 99, dpd: "Kab. Tegal", nama: "Arip Budiono, S.I.P.", daerah: "Tegal", dapil: "Dapil 1" },
  { id: 100, dpd: "Kab. Tegal", nama: "H. Bakhrun, S.H., M.Kn.", daerah: "Tegal", dapil: "Dapil 3" },
  { id: 101, dpd: "Kab. Tegal", nama: "Nurul Fajrin, S.A.P.", daerah: "Tegal", dapil: "Dapil 4" },
  { id: 102, dpd: "Kab. Tegal", nama: "Sudirman, S.Pd.", daerah: "Tegal", dapil: "Dapil 6" },
  
  // Temanggung - 4 orang
  { id: 103, dpd: "Temanggung", nama: "Arif Noorhadi", daerah: "Temanggung", dapil: "Dapil 1" },
  { id: 104, dpd: "Temanggung", nama: "Eko Wahyu H.", daerah: "Temanggung", dapil: "Dapil 3" },
  { id: 105, dpd: "Temanggung", nama: "Elynawati", daerah: "Temanggung", dapil: "Dapil 4" },
  { id: 106, dpd: "Temanggung", nama: "Herlina Dwi P", daerah: "Temanggung", dapil: "Dapil 6" },
  
  // Wonogiri - 5 orang
  { id: 107, dpd: "Wonogiri", nama: "Wawan Arifianto", daerah: "Wonogiri", dapil: "Dapil 1" },
  { id: 108, dpd: "Wonogiri", nama: "Nyamik Saptati, S.Pd.", daerah: "Wonogiri", dapil: "Dapil 2" },
  { id: 109, dpd: "Wonogiri", nama: "Iwan Susilo, S.Pd.", daerah: "Wonogiri", dapil: "Dapil 3" },
  { id: 110, dpd: "Wonogiri", nama: "Krisyanto", daerah: "Wonogiri", dapil: "Dapil 4" },
  { id: 111, dpd: "Wonogiri", nama: "Joko Warsito", daerah: "Wonogiri", dapil: "Dapil 5" },
  
  // Wonosobo - 0 orang (tidak ada data)
  
  // Kota Magelang - 3 orang
  { id: 112, dpd: "Kota Magelang", nama: "Bustanul Arifin", daerah: "Kota Magelang", dapil: "Dapil 1" },
  { id: 113, dpd: "Kota Magelang", nama: "Imam Musaechoni", daerah: "Kota Magelang", dapil: "Dapil 2" },
  { id: 114, dpd: "Kota Magelang", nama: "Achmad Widodo", daerah: "Kota Magelang", dapil: "Dapil 3" },
  
  // Kota Pekalongan - 4 orang
  { id: 115, dpd: "Kota Pekalongan", nama: "Nashrullah", daerah: "Kota Pekalongan", dapil: "Dapil 1" },
  { id: 116, dpd: "Kota Pekalongan", nama: "Irawadi Setiawan, A.Md", daerah: "Kota Pekalongan", dapil: "Dapil 2" },
  { id: 117, dpd: "Kota Pekalongan", nama: "Mungzilin, S.H.I", daerah: "Kota Pekalongan", dapil: "Dapil 3" },
  { id: 118, dpd: "Kota Pekalongan", nama: "Ro'is Rahma Fathoni, L.c", daerah: "Kota Pekalongan", dapil: "Dapil 4" },
  
  // Kota Salatiga - 4 orang
  { id: 119, dpd: "Kota Salatiga", nama: "Heru Prasetyo", daerah: "Kota Salatiga", dapil: "Dapil 1" },
  { id: 120, dpd: "Kota Salatiga", nama: "Latif Nahari", daerah: "Kota Salatiga", dapil: "Dapil 2" },
  { id: 121, dpd: "Kota Salatiga", nama: "Nono Rohana", daerah: "Kota Salatiga", dapil: "Dapil 3" },
  { id: 122, dpd: "Kota Salatiga", nama: "Agus Warsito", daerah: "Kota Salatiga", dapil: "Dapil 4" },
  
  // Kota Semarang - 6 orang
  { id: 123, dpd: "Kota Semarang", nama: "Siti Roika", daerah: "Kota Semarang", dapil: "Dapil 1" },
  { id: 124, dpd: "Kota Semarang", nama: "Ali Umar Dani", daerah: "Kota Semarang", dapil: "Dapil 2" },
  { id: 125, dpd: "Kota Semarang", nama: "Dini Inayati", daerah: "Kota Semarang", dapil: "Dapil 3" },
  { id: 126, dpd: "Kota Semarang", nama: "Agus Riyanto Slamet", daerah: "Kota Semarang", dapil: "Dapil 4" },
  { id: 127, dpd: "Kota Semarang", nama: "Suharsono", daerah: "Kota Semarang", dapil: "Dapil 5" },
  { id: 128, dpd: "Kota Semarang", nama: "Joko Widodo", daerah: "Kota Semarang", dapil: "Dapil 6" },
  
  // Kota Surakarta - 7 orang
  { id: 129, dpd: "Kota Surakarta", nama: "Muhammad Nafi' Asrori", daerah: "Kota Surakarta", dapil: "Dapil 1" },
  { id: 130, dpd: "Kota Surakarta", nama: "Salim", daerah: "Kota Surakarta", dapil: "Dapil 1" },
  { id: 131, dpd: "Kota Surakarta", nama: "Widyastuti", daerah: "Kota Surakarta", dapil: "Dapil 2" },
  { id: 132, dpd: "Kota Surakarta", nama: "Daryono", daerah: "Kota Surakarta", dapil: "Dapil 3" },
  { id: 133, dpd: "Kota Surakarta", nama: "Sakidi", daerah: "Kota Surakarta", dapil: "Dapil 4" },
  { id: 134, dpd: "Kota Surakarta", nama: "Agus Widodo", daerah: "Kota Surakarta", dapil: "Dapil 5" },
  { id: 135, dpd: "Kota Surakarta", nama: "Sugeng Riyanto", daerah: "Kota Surakarta", dapil: "Dapil 5" },
  
  // Kota Tegal - 5 orang
  { id: 136, dpd: "Kota Tegal", nama: "H. Amiruddin, Lc.", daerah: "Kota Tegal", dapil: "Dapil 1" },
  { id: 137, dpd: "Kota Tegal", nama: "Muchamad Ali Mashuri", daerah: "Kota Tegal", dapil: "Dapil 1" },
  { id: 138, dpd: "Kota Tegal", nama: "H. Abdul Ghoni, SE.", daerah: "Kota Tegal", dapil: "Dapil 2" },
  { id: 139, dpd: "Kota Tegal", nama: "Zaenal Nurochman, A.Md", daerah: "Kota Tegal", dapil: "Dapil 3" },
  { id: 140, dpd: "Kota Tegal", nama: "Erni Ratnani, SE. MM.", daerah: "Kota Tegal", dapil: "Dapil 4" },
];

// Helper functions
export const getAllDPD = (): string[] => {
  const dpdSet = new Set(alegData.map(item => item.dpd));
  return Array.from(dpdSet).sort();
};

export const getAlegByDPD = (dpd: string): AnggotaLegislatif[] => {
  return alegData.filter(item => item.dpd.toLowerCase().includes(dpd.toLowerCase()));
};

export const searchAleg = (query: string): AnggotaLegislatif[] => {
  const lowerQuery = query.toLowerCase();
  return alegData.filter(item => 
    item.dpd.toLowerCase().includes(lowerQuery) ||
    item.nama.toLowerCase().includes(lowerQuery) ||
    item.daerah.toLowerCase().includes(lowerQuery) ||
    item.dapil.toLowerCase().includes(lowerQuery)
  );
};

export const getStatistikDPD = (): DPDStatistik[] => {
  const dpdMap = new Map<string, number>();
  
  alegData.forEach(item => {
    const count = dpdMap.get(item.dpd) || 0;
    dpdMap.set(item.dpd, count + 1);
  });
  
  return Array.from(dpdMap.entries())
    .map(([dpd, jumlahAleg]) => ({ dpd, jumlahAleg }))
    .sort((a, b) => b.jumlahAleg - a.jumlahAleg);
};

export const getTopDPD = (limit: number = 10): DPDStatistik[] => {
  return getStatistikDPD().slice(0, limit);
};

export const getTotalAleg = (): number => {
  return alegData.length;
};

export const getTotalAlegPerempuan = (): number => {
  return alegPerempuanData.length;
};

export const getTotalAlegProvinsi = (): number => {
  return alegProvinsiData.length;
};

export const getTotalAlegDPRRI = (): number => {
  return alegDPRRIData.length;
};

export const searchAlegPerempuan = (query: string): AnggotaLegislatif[] => {
  const lowerQuery = query.toLowerCase();
  return alegPerempuanData.filter(item => 
    item.dpd.toLowerCase().includes(lowerQuery) ||
    item.nama.toLowerCase().includes(lowerQuery) ||
    item.daerah.toLowerCase().includes(lowerQuery) ||
    item.dapil.toLowerCase().includes(lowerQuery)
  );
};

export const searchAlegProvinsi = (query: string): AlegProvinsi[] => {
  const lowerQuery = query.toLowerCase();
  return alegProvinsiData.filter(item => 
    item.nama.toLowerCase().includes(lowerQuery) ||
    item.daerah.toLowerCase().includes(lowerQuery) ||
    item.dapil.toLowerCase().includes(lowerQuery) ||
    item.wilayah.toLowerCase().includes(lowerQuery)
  );
};

export const searchAlegDPRRI = (query: string): AlegDPRRI[] => {
  const lowerQuery = query.toLowerCase();
  return alegDPRRIData.filter(item => 
    item.nama.toLowerCase().includes(lowerQuery) ||
    item.dapil.toLowerCase().includes(lowerQuery) ||
    item.wilayah.toLowerCase().includes(lowerQuery)
  );
};
