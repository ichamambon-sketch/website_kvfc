# KVFC — projek website (belum dilancarkan)

Fail:
- `index.html`  — website penuh (menu, order, panel kaunter, muzik, animasi)
- `config.js`   — tetapan (mod demo atau Firebase)
- `firestore.rules` — peraturan keselamatan pangkalan data

## 1. Cuba dahulu (mod demo)
Buka `index.html` dalam pelayar. Semuanya berfungsi, tetapi data disimpan dalam peranti itu sahaja.
Butang "Staf" meminta log masuk. Dalam mod demo, masukkan salah satu email di `config.js` (kata laluan apa-apa; hanya untuk ujian).

## 2. Bila nak lancarkan (order sebenar)
1. Buat projek percuma di https://console.firebase.google.com
2. Buka **Authentication** > Sign-in method > hidupkan **Email/Password**. Tambah tepat 2 pengguna: email manager dan email cashier.
3. Buka **Firestore Database** > Create database.
4. Dalam **Project settings** > Your apps > Web (</>), salin `apiKey`, `authDomain`, `projectId`, `appId` ke dalam `config.js`.
5. Dalam `config.js` tukar `mode` kepada `'firebase'` dan isi `managerEmail` dan `cashierEmail`.
6. Dalam Firestore > Rules, tampal isi `firestore.rules` (tukar `ichamambon@gmail.com` dan `helmi221008@gmail.com` kepada 2 email staf, huruf kecil) kemudian Publish.
7. Letak ketiga-tiga fail di tempat hosting anda (contoh Firebase Hosting, Netlify, atau GitHub Pages).
8. Log masuk sebagai manager untuk urus menu. Hanya 2 email itu boleh masuk bahagian staf.

Pembeli tak perlu akaun. Hanya manager dan cashier log masuk.

## Jalankan dari terminal
1. Ekstrak zip, kemudian dalam File Explorer klik kanan folder `kvfc-project` > **Open in Terminal**.
2. Taip `.\mula.bat` dan tekan Enter (atau `npm start` jika Node.js dipasang).
3. Buka http://localhost:8000 dalam pelayar. Tekan Ctrl+C dalam terminal untuk berhenti.
