# STRATEGY — gta6-clipper-01 slot 3: "Orang Pertama Pakai Parasut"

## Momen yang dipilih

**Windah Basudara jadi orang pertama yang memakai parasut di GTA VI** —
live stream "JASON DAN LUCIA DI FITNAH DEG DEGAN BANGET.... Grand Theft Auto VI
GAMEPLAY #4" (YouTube `03qhcshfeMY`, 4,3 jt views), segmen 2:13:55–2:14:30
(65 detik yang diunduh). Satu rangkaian aksi berkesinambungan: Jason di atap
menara satelit pas matahari terbenam → hitung mundur "Satu, dua" → lompat →
freefall → parasut oranye kebuka di atas perumahan Vice City → mendarat.

Bukti dari caption otomatis stream (bahasa Indonesia):
- 2:13:16 "misteri parasut. Oke, gua akan jadi orang pertama yang memecahkan
  misteri parasut cuy ya"
- 2:13:59 "Oke siap ya. Gua lompat ya. Satu, dua."
- 2:14:30 "orang pertama yang pakai parasut"
- 2:14:39–2:14:51 "Let's go. GG. GG. GG. Gila, gua orang pertama yang pakai
  parasut loh. Bangga gue."

## Kenapa momen ini

1. **"Pertama di dunia" adalah hook yang menulis judulnya sendiri.** Klaim
   world-first (orang pertama yang pakai parasut di GTA VI) langsung terbaca
   dan langsung bikin orang penasaran — jauh lebih kuat dari "aksi keren" biasa.
   Slot 1 (trailer chase) dan slot 2 (montase trailer) tidak punya klaim ini.
2. **Visualnya indah dan terbaca dalam <1 detik.** Matahari terbenam oranye
   di atas air, parasut oranye besar di atas perumahan — kontras warna yang
   berhentiin scroll. Frame parasutnya sendiri sudah poster.
3. **Windah adalah streamer GTA terbesar di Indonesia.** Facecam-nya ada di
   tiap frame (reaksinya yang menjual momen), dan namanya di judul narik
   penonton Indonesia yang memang audiens Shorts ini. Slot 1–2 pakai footage
   trailer Rockstar (tanpa streamer); slot 3 pakai gameplay asli + personalitas.
4. **Satu momen, bukan montase.** Lompat → parasut → mendarat adalah satu
   aksi berkesinambungan, sesuai kit. Kandidat lain kalah: misi rawa "Doni
   dimakan babi" (1:44) cuma cutscene dialog (pembunuhan kipasnya tidak
   kelihatan di layar); kejar-kejaran perahu malam (3:12) terlalu gelap;
   cutscene ambulans (3:36) gelap dan cuma dialog; kejar-kejaran mobil di
   jembatan (0:48) terang tapi cuma nyetir biasa.

## Keputusan kreatif

- **Judul di layar sejak detik 0.** "ORANG PERTAMA / PAKAI PARASUT DI GTA VI!"
  di 4 detik pertama, di atas blur-fill — penonton langsung tahu kenapa harus
  nonton sampai lompatnya.
- **Jump cut untuk bunuh waktu mati.** Potongan pertama (v1, 43 dtk) punya 15
  detik Jason jalan di atap sebelum lompat + ending kamera ketutup daun palem.
  v2 (29,1 dtk) memotong 6 detik jalan di tengah (jump cut dari tengah atap ke
  tepi atap, satu scene yang sama) dan memotong ending semak — aksinya jadi:
  countdown (4 dtk) → tepi atap (5 dtk) → lompat/freefall (4 dtk) → parasut
  (4 dtk) → mendarat (2 dtk). v1 tersimpan di `work/clip-v1.mp4`, JANGAN upload.
- **Pitch 3 kartu, 3 detik tiap kartu** (format slot 1): "MAKE CLIPS / LIKE THIS
  WITH AI" → "EARN REAL MONEY / ON MAKE.FUN" → "MAKE.FUN /
  make.fun/bounty/gta6-clipper-01". Latar still parasut yang di-dim 55% supaya
  teks putih terbaca; kartu senyap supaya teksnya yang bicara.
- **Replay hook di akhir** (3 detik parasut melayang lawan matahari terbenam,
  lower-third URL) supaya video berakhir di aksi, bukan di kartu statis.
- **Blur-fill, bukan center-crop.** Tidak ada yang terpotong dari frame 16:9
  (termasuk facecam Windah di kanan-bawah dan minimap di kiri-bawah).
- **Audio asli stream** pada segmen aksi/replay (suara Windah + game); kartu
  pitch senyap.

## Judul & deskripsi

Lihat `UPLOAD.txt`. Judul: "Windah Basudara Jadi ORANG PERTAMA Pakai Parasut di
GTA VI! 🪂 #GTA6 #Shorts". Deskripsi memuat baris wajib bounty kata-per-kata +
play code `makefun-rutabaga-shadow-fossil` + tagar #GTA6 #GTAVI #Shorts #ViceCity
#Leonida.

## Verifikasi (di sesi ini)

- `clip.mp4`: 1080×1920, 30 fps, H.264 + AAC, 29,06 dtk (<60 dtk = Short),
  13.855.449 byte, sha256
  `87ffdefe4c0024ac743e59d25dd2efc2b321ae05fc2795caec7f9d79a7b7a9ff`.
- 10 frame cek (detik 2 / 4,5 / 5 / 9 / 12 / 15 / 17 / 20 / 23 / 27): semua teks
  terbaca, di safe area (tengah-atas dan bawah, jauh dari tombol YouTube
  kanan-bawah), tidak ada yang terpotong. Judul hilang setelah detik 4 (sesuai
  desain). Jump cut di detik 4 bersih (satu scene, satu lokasi).
- `main.ts` diverifikasi: dengan URL Shorts dummy yang valid, `MAKEFUN_BOT_DIR=work/main-test MAKEFUN_OUTPUT_DIR=work/main-test/out node main.ts` → exit 0, `out/VIDEO.json` byte-identical. Dengan placeholder `REPLACE_ME` di `VIDEO.json` asli, main.ts BENAR menolak (exit 1, "must be a YouTube Shorts link") — itu perilaku yang diinginkan, URL asli diisi setelah upload.
- Baris deskripsi wajib diverifikasi kata-per-kata sama dengan yang diminta kit
  (lihat UPLOAD.txt).
- Sumber footage: `work/seg-av.mp4` (65,03 dtk, 1920×1080 60 fps, H.264+AAC,
  41.508.039 byte), diunduh dengan yt-dlp di sesi ini dari channel Windah
  Basudara (URL stream langsung dari info.json; unduhan penuh 360p dibatalkan
  karena server YouTube ~110 KB/dtk — diganti targeted seek per segmen).
  Klip jadi buatan orang lain TIDAK dipakai.

## Penilaian jujur peluang

SEDANG. Ini klip terbaik dari tiga slot: momen world-first yang asli, visual
sunset yang kuat, dan nama Windah di judul — ketiganya tidak dimiliki slot 1
(1.114 views) dan slot 2 (133 views). Tapi metric-nya views nyata di YouTube
dan channel tanpa audiens: realistisnya puluhan–ratusan views organik dalam
~1,5 hari tersisa; tempat 11–20 ($14) mungkin kalau Shorts-nya keangkat
algoritma atau dipromosikan lewat X @qaila_ade; top 3 (butuh >3.500 views
ngalahin @tyrmeapart) butuh viral sungguhan. Deadline Senin 23 Nov 08:00 WIB —
upload SECEPATNYA setelah user gas, karena views menumpuk seiring waktu.

## Serah-terima

Klip + judul + deskripsi di atas **SIAP DI-UPLOAD** dan diserahkan ke parent
(user) untuk di-upload ke channel YouTube-nya sebagai video Public — sesuai
kit: "upload it or hand it to the person to upload". Saya TIDAK meng-upload
ke YouTube, TIDAK membuat repo GitHub, TIDAK submit. Setelah upload, parent
mengisi URL Shorts ke `VIDEO.json`, lalu repo + submit.
