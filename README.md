[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/adeqaila/makefun-gta6-clipper-01-slot3/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/adeqaila/makefun-gta6-clipper-01-slot3/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# Windah Basudara Jadi ORANG PERTAMA Pakai Parasut di GTA VI! (GTA 6 Short)

Entry for the make.fun [gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01) bounty: clip GTA 6 for the most YouTube views.

## The clip

`clip.mp4` — 1080×1920 vertical Short, 29,06 detik, H.264 + AAC, 13,9 MB.
Sumber: Windah Basudara — "JASON DAN LUCIA DI FITNAH DEG DEGAN BANGET.... Grand
Theft Auto VI GAMEPLAY #4" (YouTube live `03qhcshfeMY`, 4,3 jt views), diunduh
dengan yt-dlp di sesi ini, dipotong dan di-render dengan ffmpeg di sesi ini.

Struktur klip:
- 0:00–0:04 — HOOK: Jason di atap menara satelit pas matahari terbenam, teks
  "ORANG PERTAMA / PAKAI PARASUT DI GTA VI!" + hitung mundur Windah ("Satu, dua")
- 0:04–0:09 — jump cut ke tepi atap → Jason lompat, freefall di atas Vice City
- 0:09–0:14 — parasut oranye kebuka, melayang di atas perumahan (momen utama)
- 0:14–0:17 — mendarat (face-plant lucu di halaman)
- 0:17–0:20 — "MAKE CLIPS / LIKE THIS WITH AI" (still parasut, senyap)
- 0:20–0:23 — "EARN REAL MONEY / ON MAKE.FUN" (still parasut, senyap)
- 0:23–0:26 — "MAKE.FUN / make.fun/bounty/gta6-clipper-01" (still parasut, senyap)
- 0:26–0:29 — replay parasut melayang lawan matahari terbenam + lower-third URL

Audio: audio asli stream (suara Windah + game) pada segmen aksi/replay; kartu
pitch tanpa suara. Semua teks pitch di dalam safe area vertikal (tengah-atas
dan bawah, jauh dari tombol YouTube).

## Upload

Judul + deskripsi siap upload ada di `UPLOAD.txt`. Video BELUM di-upload —
menunggu user melihat klipnya dan bilang gas/OK. Setelah publish sebagai Public
Short, isi URL aslinya ke `VIDEO.json` menggantikan placeholder. Deskripsi video
memuat baris wajib bounty + play code `makefun-rutabaga-shadow-fossil`.

## Program

`main.ts` (Node 22, stdlib-only, tanpa network) hanya menyalin `VIDEO.json` ke
`/output/VIDEO.json`, tempat gate membacanya. Dijalankan seperti grader:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Lihat `STRATEGY.md` untuk alasan kreatif pemilihan momen dan penilaian jujur peluang.
