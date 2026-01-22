// Data DPC (Kecamatan) dan DPRA (Kelurahan/Desa) PKS Jawa Tengah
// Diambil dari file Excel Data Center DPRA Wilayah Jawa Tengah

export interface Pengurus {
  nama: string;
  noHp: string;
  alamat: string;
}

export interface DPRA {
  kode: string;
  nama: string;
  statusPendataan: "Kosong" | "Sebagian Terisi" | "Terisi Penuh";
  ketua: Pengurus;
  sekretaris: Pengurus;
  bendahara: Pengurus;
}

export interface DPC {
  kode: string;
  nama: string;
  koordinat: string;
  dpd: string;
  dpraList: DPRA[];
}

export interface DPD {
  kode: string;
  nama: string;
  dpcList: DPC[];
}

// Helper function to get status badge color
export function getStatusColor(status: string): string {
  switch (status) {
    case "Terisi Penuh":
      return "bg-green-100 text-green-800 border-green-200";
    case "Sebagian Terisi":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Kosong":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
}

// Helper function to format phone number for WhatsApp link
export function formatWhatsAppLink(phone: string): string {
  if (!phone || phone === "-" || phone === "0" || phone === "O") return "";
  // Remove non-numeric characters except +
  let cleaned = phone.replace(/[^\d+]/g, "");
  // Ensure it starts with country code
  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.substring(1);
  } else if (!cleaned.startsWith("62") && !cleaned.startsWith("+62")) {
    cleaned = "62" + cleaned;
  }
  cleaned = cleaned.replace("+", "");
  return `https://wa.me/${cleaned}`;
}

// Helper function to generate Google Maps link from koordinat
export function generateMapsLink(koordinat: string, namaLokasi: string): string {
  if (!koordinat) {
    // If no coordinates, search by name
    return `https://www.google.com/maps/search/${encodeURIComponent(namaLokasi + ", Jawa Tengah, Indonesia")}`;
  }
  
  // Parse DMS coordinates like "7°32′21″S 108°46′47″E"
  const dmsPattern = /(\d+)°(\d+)′([\d.]+)″([NS])\s+(\d+)°(\d+)′([\d.]+)″([EW])/;
  const match = koordinat.match(dmsPattern);
  
  if (match) {
    const latDeg = parseFloat(match[1]);
    const latMin = parseFloat(match[2]);
    const latSec = parseFloat(match[3]);
    const latDir = match[4];
    
    const lonDeg = parseFloat(match[5]);
    const lonMin = parseFloat(match[6]);
    const lonSec = parseFloat(match[7]);
    const lonDir = match[8];
    
    let lat = latDeg + latMin / 60 + latSec / 3600;
    let lon = lonDeg + lonMin / 60 + lonSec / 3600;
    
    if (latDir === "S") lat = -lat;
    if (lonDir === "W") lon = -lon;
    
    return `https://www.google.com/maps?q=${lat},${lon}`;
  }
  
  // Fallback to search by name
  return `https://www.google.com/maps/search/${encodeURIComponent(namaLokasi + ", Jawa Tengah, Indonesia")}`;
}

// Data DPD (Kabupaten/Kota)
export const dpdList: DPD[] = [
  {
    kode: "33.01",
    nama: "KAB. CILACAP",
    dpcList: [
      {
        kode: "33.01.01",
        nama: "Kedungreja",
        koordinat: "7°32′21″S 108°46′47″E",
        dpd: "KAB. CILACAP",
        dpraList: [
          { kode: "33.01.01.2001", nama: "Bumireja", statusPendataan: "Kosong", ketua: { nama: "", noHp: "", alamat: "" }, sekretaris: { nama: "", noHp: "", alamat: "" }, bendahara: { nama: "", noHp: "", alamat: "" } },
          { kode: "33.01.01.2002", nama: "Ciklapa", statusPendataan: "Kosong", ketua: { nama: "", noHp: "", alamat: "" }, sekretaris: { nama: "", noHp: "", alamat: "" }, bendahara: { nama: "", noHp: "", alamat: "" } },
        ]
      },
      {
        kode: "33.01.02",
        nama: "Kesugihan",
        koordinat: "7°37′12″S 109°6′45″E",
        dpd: "KAB. CILACAP",
        dpraList: [
          { kode: "33.01.02.2001", nama: "Menganti", statusPendataan: "Terisi Penuh", ketua: { nama: "Subur Widadi", noHp: "085747073895", alamat: "Jl. Ternak II RT 02 RW 08 Desa Menganti" }, sekretaris: { nama: "Ari Asmoko", noHp: "085786131232", alamat: "Desa Menganti" }, bendahara: { nama: "Saryono", noHp: "088221377357", alamat: "Desa Menganti" } },
          { kode: "33.01.02.2002", nama: "Slarang", statusPendataan: "Sebagian Terisi", ketua: { nama: "Subagyo", noHp: "081542179210", alamat: "Jl. Masjid RT02 RW 14 Desa Slarang" }, sekretaris: { nama: "Oktafianto", noHp: "", alamat: "Desa Slarang" }, bendahara: { nama: "Semi Susilowati", noHp: "", alamat: "Desa Slarang" } },
          { kode: "33.01.02.2003", nama: "Kesugihan", statusPendataan: "Terisi Penuh", ketua: { nama: "Suripto", noHp: "087721286997", alamat: "Jl. Kemerdekaan Barat No. 09 RT 03 RW 03 Desa Kesugihan Induk" }, sekretaris: { nama: "Eni Sulastri", noHp: "0882008211508", alamat: "Desa Kesugihan Induk" }, bendahara: { nama: "Sugiyono", noHp: "081384771232", alamat: "Desa Kesugihan Induk" } },
          { kode: "33.01.02.2004", nama: "Kalisabuk", statusPendataan: "Sebagian Terisi", ketua: { nama: "Miswanto", noHp: "081327033775", alamat: "Jl. Protokol RT 03 RW 11 Desa Kalisabuk" }, sekretaris: { nama: "", noHp: "", alamat: "" }, bendahara: { nama: "", noHp: "", alamat: "" } },
          { kode: "33.01.02.2005", nama: "Karangkandri", statusPendataan: "Sebagian Terisi", ketua: { nama: "Tugino", noHp: "085876195170", alamat: "Jl. Belimbing RT 08 RW 04 Desa Karangkandri" }, sekretaris: { nama: "Lasirin", noHp: "083822292459", alamat: "Desa Karangkandri" }, bendahara: { nama: "Sunaryo", noHp: "", alamat: "Jl. Jeruk No. 74 RT 05 RW 05 Desa Karangkandri" } },
          { kode: "33.01.02.2006", nama: "Kuripan", statusPendataan: "Terisi Penuh", ketua: { nama: "Katam", noHp: "085876152872", alamat: "Jl. Diponegoro No. 37 RT 01 RW 07 Desa Kuripan Induk" }, sekretaris: { nama: "Fachtul Mubarok", noHp: "088232161232", alamat: "Desa Kuripan Induk" }, bendahara: { nama: "Toni", noHp: "085640781887", alamat: "Desa Kuripan Induk" } },
        ]
      },
      {
        kode: "33.01.07",
        nama: "Maos",
        koordinat: "",
        dpd: "KAB. CILACAP",
        dpraList: [
          { kode: "33.01.07.2001", nama: "Karangkemiri", statusPendataan: "Sebagian Terisi", ketua: { nama: "Sutikno", noHp: "085642236599", alamat: "Karangkemiri" }, sekretaris: { nama: "", noHp: "", alamat: "" }, bendahara: { nama: "", noHp: "", alamat: "" } },
          { kode: "33.01.07.2002", nama: "Karangrena", statusPendataan: "Sebagian Terisi", ketua: { nama: "Sadiman", noHp: "085642548368", alamat: "Karangrena" }, sekretaris: { nama: "", noHp: "", alamat: "" }, bendahara: { nama: "", noHp: "", alamat: "" } },
          { kode: "33.01.07.2003", nama: "Maos Kidul", statusPendataan: "Sebagian Terisi", ketua: { nama: "Mahidin", noHp: "0895-3522-65942", alamat: "Maos Kidul" }, sekretaris: { nama: "", noHp: "", alamat: "" }, bendahara: { nama: "", noHp: "", alamat: "" } },
        ]
      },
      {
        kode: "33.01.17",
        nama: "Sampang",
        koordinat: "",
        dpd: "KAB. CILACAP",
        dpraList: [
          { kode: "33.01.17.2001", nama: "Karangtengah", statusPendataan: "Terisi Penuh", ketua: { nama: "SARDI", noHp: "085729009809", alamat: "Jl. Bentasari 01/04" }, sekretaris: { nama: "JASMANTO", noHp: "085877062880", alamat: "Jl. Melati No. 22 RT 02/10" }, bendahara: { nama: "KARSUN", noHp: "081527616005", alamat: "Jl. Mawar 03/11" } },
          { kode: "33.01.17.2002", nama: "Brani", statusPendataan: "Sebagian Terisi", ketua: { nama: "IMAM SIDIQ N.", noHp: "081212211307", alamat: "Jl. Gerilya 04/01" }, sekretaris: { nama: "SURYANTO", noHp: "08814164845", alamat: "" }, bendahara: { nama: "TURYAN", noHp: "08989993756", alamat: "" } },
          { kode: "33.01.17.2003", nama: "Sampang", statusPendataan: "Sebagian Terisi", ketua: { nama: "KUAT SYARIF HIDAYAH", noHp: "087739258499", alamat: "Jl. Tugu Barat 04/01" }, sekretaris: { nama: "UTANG SURYANA", noHp: "0895634469734", alamat: "" }, bendahara: { nama: "TUGIYANTI", noHp: "", alamat: "" } },
        ]
      },
      {
        kode: "33.01.21",
        nama: "Cilacap Selatan",
        koordinat: "",
        dpd: "KAB. CILACAP",
        dpraList: [
          { kode: "33.01.21.1001", nama: "Sidakaya", statusPendataan: "Terisi Penuh", ketua: { nama: "Suparno", noHp: "085780606124", alamat: "Jl. Kenanga RT 03/02 Sidakaya" }, sekretaris: { nama: "Panca Puspita Ningrum", noHp: "082221868486", alamat: "Jl. Kenanga RT 03/02 Sidakaya" }, bendahara: { nama: "Puji Sri Rahayu", noHp: "085780606124", alamat: "Jl. Kenanga RT 03/02 Sidakaya" } },
          { kode: "33.01.21.1002", nama: "Cilacap", statusPendataan: "Terisi Penuh", ketua: { nama: "Bambang Indaryanto", noHp: "081327119288", alamat: "Jl. Kebon Jati RT 04/07 Cilacap, Cilsel" }, sekretaris: { nama: "Musdiyono", noHp: "0882-2674-3993", alamat: "Jl. Blanak, Cilacap" }, bendahara: { nama: "Dedy", noHp: "0813-2445-2220", alamat: "Jl. Kebon Jati RT 04/07 Cilacap" } },
          { kode: "33.01.21.1003", nama: "Tambakreja", statusPendataan: "Terisi Penuh", ketua: { nama: "Medi Kusworo", noHp: "0823-2206-4507", alamat: "Jl. Kokosan RT 02/14 Tambakreja, Cilsel" }, sekretaris: { nama: "Agus Sutrisno", noHp: "0895406071144", alamat: "Jl. Nangka RT 06/11 Tambakreja" }, bendahara: { nama: "Murwanto", noHp: "0857-4114-9137", alamat: "Jl. Duwet RT 05/11 Tambakreja" } },
        ]
      },
      {
        kode: "33.01.22",
        nama: "Cilacap Tengah",
        koordinat: "",
        dpd: "KAB. CILACAP",
        dpraList: [
          { kode: "33.01.22.1001", nama: "Lomanis", statusPendataan: "Terisi Penuh", ketua: { nama: "H. Tasiman", noHp: "085743038480", alamat: "Jl. Thamrin RT 02/01 Lomanis" }, sekretaris: { nama: "Agus Wahyono", noHp: "081252432229", alamat: "Jl. Thamrin RT 02/01 Lomanis" }, bendahara: { nama: "Agus Setiawan", noHp: "08976829145", alamat: "Jl. Thamrin RT 04/01 Lomanis" } },
          { kode: "33.01.22.1002", nama: "Gunungsimping", statusPendataan: "Terisi Penuh", ketua: { nama: "Slamet Riyadi", noHp: "0881027724257", alamat: "Jl. Dr. Rajiman RT 01/07 Gunungsimping" }, sekretaris: { nama: "Okta Sumarningsih", noHp: "089521000577", alamat: "Jl. Dr. Sutomo RT 04/04 Gunungsimping" }, bendahara: { nama: "Suseno", noHp: "085879758879", alamat: "Jl. Dr. Rajiman RT 04/07" } },
        ]
      },
      {
        kode: "33.01.23",
        nama: "Cilacap Utara",
        koordinat: "",
        dpd: "KAB. CILACAP",
        dpraList: [
          { kode: "33.01.23.1001", nama: "Mertasinga", statusPendataan: "Terisi Penuh", ketua: { nama: "Asril", noHp: "081327260727", alamat: "Jl. Ganggeng Timur RT 05/09 Mertasinga" }, sekretaris: { nama: "Alfin Irsyad Albani", noHp: "0882006828260", alamat: "Jl. Komodo RT 04/01 Mertasinga" }, bendahara: { nama: "Yudi Rudiono Kurniawan", noHp: "085647912101", alamat: "Jl. Komodo RT 01/12 Mertasinga" } },
          { kode: "33.01.23.1002", nama: "Gumilir", statusPendataan: "Terisi Penuh", ketua: { nama: "Eko Sri Wibowo", noHp: "087835119907", alamat: "Perum Griya Jembar Lestari RT 03/20 Gumilir" }, sekretaris: { nama: "Rasam Achmad Subekti", noHp: "085642290515", alamat: "Jl. Seto RT 04/17 Gumilir" }, bendahara: { nama: "Tri Purnomo", noHp: "085872065640", alamat: "Jl. Dr. Cipto Gumilir" } },
        ]
      },
    ]
  },
  {
    kode: "33.02",
    nama: "KAB. BANYUMAS",
    dpcList: [
      {
        kode: "33.02.01",
        nama: "Lumbir",
        koordinat: "7°26′40.23679″S 108°57′30.87785″E",
        dpd: "KAB. BANYUMAS",
        dpraList: [
          { kode: "33.02.01.2001", nama: "Cirahab", statusPendataan: "Sebagian Terisi", ketua: { nama: "JAKAM", noHp: "087888701880", alamat: "RT/ RW 05/02 Desa CIRAHAB Kec. LUMBIR" }, sekretaris: { nama: "NUR SAKIM", noHp: "", alamat: "RT/ RW 01/03 Desa CIRAHAB Kec. LUMBIR" }, bendahara: { nama: "", noHp: "", alamat: "" } },
          { kode: "33.02.01.2002", nama: "Canduk", statusPendataan: "Sebagian Terisi", ketua: { nama: "TOHIRIN", noHp: "", alamat: "Desa CANDUK Kec. LUMBIR" }, sekretaris: { nama: "ROHADI", noHp: "", alamat: "Desa CANDUK Kec. LUMBIR" }, bendahara: { nama: "", noHp: "", alamat: "" } },
          { kode: "33.02.01.2003", nama: "Parungkamal", statusPendataan: "Sebagian Terisi", ketua: { nama: "HARUN", noHp: "", alamat: "Desa PARUNGKAMAL Kec. LUMBIR" }, sekretaris: { nama: "SOLOHIN", noHp: "081327666", alamat: "RT/ RW 01/03 Desa PARUNGKAMAL Kec. LUMBIR" }, bendahara: { nama: "", noHp: "", alamat: "" } },
        ]
      },
      {
        kode: "33.02.02",
        nama: "Wangon",
        koordinat: "",
        dpd: "KAB. BANYUMAS",
        dpraList: [
          { kode: "33.02.02.2001", nama: "Randegan", statusPendataan: "Sebagian Terisi", ketua: { nama: "EDI SUSANTO", noHp: "085642619541", alamat: "Desa RANDEGAN Kec. WANGON" }, sekretaris: { nama: "GAYUH SUBAGYO", noHp: "", alamat: "Desa RANDEGAN Kec. WANGON" }, bendahara: { nama: "", noHp: "", alamat: "" } },
          { kode: "33.02.02.2002", nama: "Rawaheng", statusPendataan: "Sebagian Terisi", ketua: { nama: "WARDOYO", noHp: "085600142164", alamat: "Desa RAWAHENG Kec. WANGON" }, sekretaris: { nama: "RIYANTO", noHp: "", alamat: "Desa RAWAHENG Kec. WANGON" }, bendahara: { nama: "", noHp: "", alamat: "" } },
        ]
      },
    ]
  },
  {
    kode: "33.29",
    nama: "KAB. BREBES",
    dpcList: [
      {
        kode: "33.29.01",
        nama: "Salem",
        koordinat: "",
        dpd: "KAB. BREBES",
        dpraList: [
          { kode: "33.29.01.2001", nama: "Bentar", statusPendataan: "Sebagian Terisi", ketua: { nama: "Tohirin", noHp: "085726571270", alamat: "Bentar" }, sekretaris: { nama: "Manto", noHp: "085799910234", alamat: "Bentar" }, bendahara: { nama: "Darjo", noHp: "", alamat: "Bentar" } },
        ]
      },
      {
        kode: "33.29.02",
        nama: "Bantarkawung",
        koordinat: "",
        dpd: "KAB. BREBES",
        dpraList: [
          { kode: "33.29.02.2001", nama: "Banjarsari", statusPendataan: "Terisi Penuh", ketua: { nama: "Wawan Setiawan", noHp: "085869197973", alamat: "Banjarsari" }, sekretaris: { nama: "Ma'arif", noHp: "083837296850", alamat: "Dk. Prapatan" }, bendahara: { nama: "Mayadik", noHp: "83838428377", alamat: "Dk. Prapatan" } },
          { kode: "33.29.02.2002", nama: "Bangbayang", statusPendataan: "Terisi Penuh", ketua: { nama: "Romli", noHp: "085326133920", alamat: "Bangbayang" }, sekretaris: { nama: "Suharyanto", noHp: "83193912316", alamat: "Dk. Cilembu" }, bendahara: { nama: "Carsinah", noHp: "", alamat: "Bangbayang" } },
        ]
      },
      {
        kode: "33.29.11",
        nama: "Kersana",
        koordinat: "",
        dpd: "KAB. BREBES",
        dpraList: [
          { kode: "33.29.11.2001", nama: "Ciampel", statusPendataan: "Terisi Penuh", ketua: { nama: "SLAMET", noHp: "85691718921", alamat: "DESA CIAMPEL" }, sekretaris: { nama: "WIGNYO", noHp: "", alamat: "DESA CIAMPEL" }, bendahara: { nama: "", noHp: "", alamat: "" } },
          { kode: "33.29.11.2002", nama: "Cigedog", statusPendataan: "Terisi Penuh", ketua: { nama: "KRISTONO", noHp: "85228500276", alamat: "DESA CIGEDOG" }, sekretaris: { nama: "RUBIYANTO", noHp: "82328260904", alamat: "DESA CIGEDOG" }, bendahara: { nama: "SLAMET", noHp: "", alamat: "DESA CIGEDOG" } },
        ]
      },
    ]
  },
  {
    kode: "33.74",
    nama: "KOTA SEMARANG",
    dpcList: [
      {
        kode: "33.74.01",
        nama: "Mijen",
        koordinat: "",
        dpd: "KOTA SEMARANG",
        dpraList: [
          { kode: "33.74.01.1001", nama: "Cangkiran", statusPendataan: "Sebagian Terisi", ketua: { nama: "Ahmad Sofyan", noHp: "081325678901", alamat: "Cangkiran" }, sekretaris: { nama: "", noHp: "", alamat: "" }, bendahara: { nama: "", noHp: "", alamat: "" } },
        ]
      },
      {
        kode: "33.74.02",
        nama: "Gunungpati",
        koordinat: "",
        dpd: "KOTA SEMARANG",
        dpraList: [
          { kode: "33.74.02.1001", nama: "Gunungpati", statusPendataan: "Sebagian Terisi", ketua: { nama: "Budi Santoso", noHp: "082134567890", alamat: "Gunungpati" }, sekretaris: { nama: "", noHp: "", alamat: "" }, bendahara: { nama: "", noHp: "", alamat: "" } },
        ]
      },
    ]
  },
];

// Get all DPC list flat
export function getAllDPC(): DPC[] {
  return dpdList.flatMap(dpd => dpd.dpcList);
}

// Get all DPRA list flat
export function getAllDPRA(): DPRA[] {
  return dpdList.flatMap(dpd => dpd.dpcList.flatMap(dpc => dpc.dpraList));
}

// Get DPC by kode
export function getDPCByKode(kode: string): DPC | undefined {
  return getAllDPC().find(dpc => dpc.kode === kode);
}

// Get DPRA by kode
export function getDPRAByKode(kode: string): DPRA | undefined {
  return getAllDPRA().find(dpra => dpra.kode === kode);
}

// Get DPD list
export function getDPDList(): string[] {
  return dpdList.map(dpd => dpd.nama);
}

// Get DPC list by DPD
export function getDPCByDPD(dpdNama: string): DPC[] {
  const dpd = dpdList.find(d => d.nama === dpdNama);
  return dpd ? dpd.dpcList : [];
}

// Search DPC/DPRA by name
export function searchByName(query: string): { dpc: DPC[]; dpra: DPRA[] } {
  const lowerQuery = query.toLowerCase();
  
  const dpc = getAllDPC().filter(d => 
    d.nama.toLowerCase().includes(lowerQuery) ||
    d.dpd.toLowerCase().includes(lowerQuery)
  );
  
  const dpra = getAllDPRA().filter(d => 
    d.nama.toLowerCase().includes(lowerQuery) ||
    d.ketua.nama.toLowerCase().includes(lowerQuery) ||
    d.sekretaris.nama.toLowerCase().includes(lowerQuery) ||
    d.bendahara.nama.toLowerCase().includes(lowerQuery)
  );
  
  return { dpc, dpra };
}

// Get statistics
export function getStatistics() {
  const allDPRA = getAllDPRA();
  const totalDPD = dpdList.length;
  const totalDPC = getAllDPC().length;
  const totalDPRA = allDPRA.length;
  
  const terisiPenuh = allDPRA.filter(d => d.statusPendataan === "Terisi Penuh").length;
  const sebagianTerisi = allDPRA.filter(d => d.statusPendataan === "Sebagian Terisi").length;
  const kosong = allDPRA.filter(d => d.statusPendataan === "Kosong").length;
  
  return {
    totalDPD,
    totalDPC,
    totalDPRA,
    terisiPenuh,
    sebagianTerisi,
    kosong,
    persentaseTerisi: ((terisiPenuh + sebagianTerisi) / totalDPRA * 100).toFixed(1),
  };
}
