// Tetapan KVFC.
// mode: 'local'    = demo, data disimpan dalam peranti ini sahaja (untuk uji reka bentuk).
// mode: 'firebase' = sebenar, order dari telefon pembeli sampai ke telefon kaunter.
// Hanya 2 email ini boleh masuk bahagian staf (dan mesti log masuk dahulu). Guna huruf kecil.
window.KVFC_CONFIG = {
  mode: 'local',
  managerEmail: 'ichamambon@gmail.com',   // email manager (boleh ubah menu & harga)
  cashierEmail: 'helmi221008@gmail.com',   // email cashier (lihat order & jualan)
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    appId: ''
  }
};
