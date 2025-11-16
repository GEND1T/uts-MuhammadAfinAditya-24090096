"# uts-MuhammadAfinAditya-24090096" 
# Proyek UTS Pemrograman Web - [uts-MuhammadAfinAditya-24090096]

Proyek ini adalah submission untuk Ujian Tengah Semester mata kuliah Pemrograman Web. Proyek ini terdiri dari halaman Login, Dashboard, dan manajemen data Produk.

---

### 1. Identitas Mahasiswa

* **Nama:** `[Muhammad Afin Aditya]`
* **NIM:** `[24090096]`

---

### 2. Link Penting

* **Link GitHub Repository:**
    `[https://github.com/[UsernameGitHubAnda]/[NamaRepoAnda]](https://github.com/GEND1T/uts-MuhammadAfinAditya-24090096)`

* **Link GitHub Pages (Aplikasi Online):**
    `[https://[UsernameGitHubAnda].github.io/[NamaRepoAnda]/](https://gend1t.github.io/uts-MuhammadAfinAditya-24090096/)`

---

### 3. Deskripsi Singkat Project

Proyek ini mensimulasikan alur autentikasi dan dashboard admin sederhana dengan fungsionalitas sebagai berikut:

* **Halaman Login (`index.html`)**
    * Berisi form login dengan validasi Email (sebagai username) dan Password (sebagai NIM).
    * Email dan Password divalidasi menggunakan JavaScript.
    * Jika login berhasil, pengguna akan diarahkan ke halaman Dashboard.

* **Halaman Dashboard (`dashboard.html`)**
    * Menampilkan ringkasan data (Total Produk, Total Penjualan, Total Revenue).
    * Data diambil dari objek *dummy* di JavaScript.
    * Terdapat navigasi sidebar untuk berpindah halaman.
    * Memiliki tombol "Lihat Data Produk" yang mengarah ke halaman Produk.

* **Halaman Produk (`products.html`)**
    * Menampilkan daftar produk dalam bentuk tabel (No, Nama, Harga, Stok, Aksi).
    * Data produk di-*render* secara dinamis dari *array of objects* di JavaScript.
    * Memiliki aksi "Edit" (menampilkan alert) dan "Hapus" (menghapus baris dari tabel) yang memanipulasi DOM.
