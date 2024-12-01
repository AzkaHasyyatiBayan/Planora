**Planora: Task Management System**

Planora adalah aplikasi sistem manajemen tugas yang dirancang untuk membantu pengguna dalam mengelola dan memprioritaskan tugas berdasarkan dua kriteria utama: urgensi dan kepentingan. Aplikasi ini mengimplementasikan Matriks Eisenhower untuk mengklasifikasikan tugas-tugas dan menentukan prioritas berdasarkan tingkat kepentingan dan urgensi masing-masing tugas. Fitur utama dari aplikasi ini adalah kemampuan untuk menambahkan, mengedit, dan memprioritaskan tugas secara efisien.

*A. Fitur Utama*
  1. Matriks Eisenhower: Mengklasifikasikan tugas ke dalam empat kuadran berdasarkan tingkat urgensi dan kepentingan. 
     - Kuadran 1: Penting dan Mendesak
     - Kuadran 2: Penting tapi Tidak Mendesak
     - Kuadran 3: Tidak Penting tapi Mendesak
     - Kuadran 4: Tidak Penting dan Tidak Mendesak
  2.  Prioritas Tugas: Mengurutkan tugas berdasarkan prioritas dengan menggabungkan nilai urgensi dan kepentingan.
  3.  Algoritma KNN: Menyusun dan memprioritaskan tugas berdasarkan kedekatannya dengan tugas yang sudah ada menggunakan algoritma K-Nearest Neighbor (KNN) dengan Euclidean Distance.
  4. Tugas Dinamis: Pengguna dapat menambah, mengedit, dan menghapus tugas dengan mudah melalui antarmuka aplikasi yang intuitif.
  5. Tampilan Responsif: Aplikasi dirancang agar dapat diakses dengan nyaman di berbagai perangkat, baik desktop maupun mobile.

*B. Implementasi Matriks Eisenhower*
   Aplikasi Planora menggunakan Matriks Eisenhower untuk mengklasifikasikan tugas berdasarkan dua dimensi utama: urgensi dan kepentingan. Setiap tugas yang ditambahkan oleh pengguna akan dipetakan ke dalam salah satu kuadran berikut:
  1. Penting dan Mendesak: Tugas yang harus segera diselesaikan.
  2. Penting tapi Tidak Mendesak: Tugas yang perlu direncanakan dan dikerjakan kemudian.
  3. Tidak Penting tapi Mendesak: Tugas yang bisa didelegasikan oleh orang lain (Sangat tidak rekomendasikan, kerjakan semua tugas anda sendiri, ini hanya untuk penjelasan saja).
  4. Tidak Penting dan Tidak Mendesak: Tugas yang bisa ditunda.

Dengan menggunakan Matriks Eisenhower, pengguna dapat melihat dengan jelas tugas mana yang harus diprioritaskan, menghindari stres akibat tugas yang tidak penting, dan memastikan waktu digunakan dengan efektif.

*C. Pendekatan Algoritma KNN dan Euclidean Distance*
Sebagai bagian dari sistem manajemen tugas ini, algoritma K-Nearest Neighbor (KNN) digunakan untuk memprioritaskan tugas-tugas berdasarkan kedekatannya dengan tugas lain yang telah diberikan nilai urgensi dan kepentingan. Euclidean Distance dihitung untuk menentukan seberapa mirip tugas baru dengan tugas yang ada, dan ini digunakan untuk menyusun tugas dalam urutan prioritas.

*D. Implementasi KNN dan Euclidean Distance*
   1. Euclidean Distance: Menghitung jarak antara dua titik dalam ruang dimensi dua (urgensi dan kepentingan). Jarak ini digunakan untuk mengklasifikasikan dan memprioritaskan tugas.
   2. KNN: Algoritma ini mengelompokkan tugas-tugas berdasarkan kedekatannya dengan tugas lain, memastikan bahwa tugas yang lebih mirip dengan tugas prioritas akan mendapatkan prioritas yang lebih tinggi.
Contoh implementasi Euclidean Distance dalam kode:

```javascript
function hitungJarak(urgensi1, kepentingan1, urgensi2, kepentingan2) {
  return Math.sqrt(Math.pow(urgensi2 - urgensi1, 2) + Math.pow(kepentingan2 - kepentingan1, 2));
}
```
Dengan pendekatan ini, tugas yang lebih mirip dengan tugas penting yang sudah ada akan diprioritaskan untuk dikerjakan terlebih dahulu.

*E. Profil Tim: Implementasi Sistem Matriks Eisenhower dan KNN*
Aplikasi **Planora** ini dikembangkan sebagai bagian dari tugas akhir untuk mata kuliah **Aljabar Linear**, dengan tujuan untuk memanfaatkan konsep-konsep matematika dan algoritma terutama "Matriks" dalam manajemen tugas. Matriks Eisenhower dan KNN dengan Euclidean Distance diimplementasikan untuk memberikan pengalaman pengguna yang efisien dalam mengelola dan memprioritaskan tugas-tugas yang ada. Aplikasi ini dikembangkan oleh kelompok 6, yang terdiri dari 3 anggota, yaitu:
  1. Anggota 1: Azka Hasyyati Bayan dengan NPM 237006057 dari kelas C.
  2. Anggota 2: Rafli Putra Nursya'bani dengan NPM 237006083 dari kelas C.
  3. Anggota 3: Dimas Setiawan dengan NOM 237006090 dari kelas C.

*F. Cara Menjalankan Aplikasi*
  1. Clone repository ini ke komputer lokal:
   ```bash
   git clone https://github.com/AzkaHasyyatiBayan/Planora.git
   ```
  2. Masuk ke direktori project:
   ```bash
   cd Planora
   ```
  3. Install dependencies:
   ```bash
   npm install
   ```
  4. Jalankan aplikasi secara lokal:
   ```bash
   npm run dev
   ```
  5. Buka browser dan akses aplikasi pada `http://localhost:3000`.

*G. Teknologi yang Digunakan*
   1. Frontend: Vue.js, Vite.
   2. Backend: Tidak ada (aplikasi ini adalah aplikasi frontend saja).
   3. Algoritma: Matriks Eisenhower, K-Nearest Neighbor (KNN), Euclidean Distance.
   4. Penyimpanan: Tidak ada penyimpanan lokal, data tugas hanya ada di sesi pengguna.
