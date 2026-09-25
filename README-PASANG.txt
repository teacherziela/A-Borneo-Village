A-BORNEO-VILLAGE — FINAL

Google Sheet yang digunakan:
ID: 1Qx0SHyoWckB7_Hss3gu_stpcVV1U9YFObr9xLEnhzWI

Struktur Sheet yang kod ini ikut TEPAT:
A = Tarikh Hantar
B = Nama Murid
C = Kelas
D = Masyarakat dikaji
E = Link Canva

LANGKAH:
1. Dalam repo A-Borneo-Village, gantikan index.html dengan fail ini.
2. Kekalkan fail video sedia ada bernama intro-borneo.mp4.mp4.
3. Buka Google Sheet > Extensions > Apps Script.
4. Padam kod lama dan paste Code.gs.
5. Deploy > New deployment > Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Deploy dan COPY URL yang berakhir dengan /exec.
9. Buka index.html, cari:
   const SCRIPT_URL = "TAMPAL_URL_APPS_SCRIPT_EXEC_DI_SINI";
   Gantikan teks itu dengan URL /exec tadi.
10. Commit. Tunggu GitHub Pages refresh.
11. Test satu penghantaran. Data sepatutnya masuk A:E.

PENTING:
- Tiada repo Kajian-Kes-Sejarah diperlukan untuk versi ini.
- Butang Hantar berada dalam halaman A-Borneo-Village yang sama.
- Fail ini tidak memaparkan Nota Cikgu atau Ruang Guru kepada murid.
