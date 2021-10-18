### definition

> Sebuah class sebaiknya hanya memiliki **satu alasan** untuk perubahan.

### Peserta

> entitas yang menetukan **perubahan tanggung jawab** pada class

example:

| Modul                                                    | Peserta                               |
| -------------------------------------------------------- | ------------------------------------- |
| Module Persistance                                       | DBA dan arsitek perangkat lunak       |
| Module Pelaporan                                         | Juru rulis, akuntan, dan operasi      |
| Modul Perhitungan Pembayaran untuk Sistem Penggajian     | Pengacara, manajer, dan akuntan       |
| Modul Pencarian Buku untuk Sistem Manajemen Perpustakaan | Pustakawan dan/atau klien itu sendiri |

### Aktor

> Jadi responsibility adalah sebuah keluarga fungsi yang melayani satu aktor tertentu. (Robert C. Martin)

Dalam arti dari pemikiran ini, aktor menjadi sumber perubahan untuk keluarga fungsi yang melayani mereka. Ketika kebutuhan mereka berubah, keluarga fungsi yang spesifik juga harus berubah untuk mengakomodasi kebutuhan mereka.

> Aktor untuk responsibility adalah satu-satunya sumber perubahan untuk responsibility itu. (Robert C. Martin)

### Perimbangan saat mendesain

Kita bisa beralasan dengan langkah demi langkah:

1. Nilai utama yang tinggi mengarah pada waktu ke nilai sekunder yang tinggi.
2. Nilai sekunder berarti kebutuhan pengguna.
3. Kebutuhan pengguna berarti kebutuhan para aktor.
4. Kebutuhan para aktor menentukan kebutuhan perubahan aktor tersebut.
5. Kebutuhan perubahan aktor mendefinisikan responsibiliti kita.

Jadi ketika kita merancang perangkat lunak kita, kita harus:

1. Temukan dan definisikan para aktor.
2. Identifikasi responsibiliti yang melayani aktor tersebut.
3. Kelompokkan fungsi dan class kita sehingga masing-masing hanya memiliki satu tanggung jawab yang dialokasikan.

tergantung presepsi mungkin suatu class sudah sesuai `SRP`, tapi jika dilihat dari sudut pandang aktor berbeda bisa menjadi masalah maka itu bisa melanggar `SRP`

contoh :

```js
class Book {

    function getTitle() {
        return "A Great Book";
    }

    function getAuthor() {
        return "John Doe";
    }

    function turnPage() {
        // pointer to next page
    }

    function getCurrentPage() {
        return "current page content";
    }

    function getLocation() {
        // returns the position in the library
        // ie. shelf number & room number
    }

}
```

dalam menentukan aktor kita harus menggunakan perspektif bisni, jika informasi lokasi tidak diperdulikan oleh
pengguna manajemen lokasi hanya dilakuakn oleh pustakawan maka kode di atas bisa melanggar `SRP`. maka code diaatas dirubah menjadi :

```js
class Book {

    function getTitle() {
        return "A Great Book";
    }

    function getAuthor() {
        return "John Doe";
    }

    function turnPage() {
        // pointer to next page
    }

    function getCurrentPage() {
        return "current page content";
    }

}

class BookLocator {

    function locate(Book $book) {
        // returns the position in the library
        // ie. shelf number & room number
        $libraryMap->findBookBy($book->getTitle(), $book->getAuthor());
    }

}
```

### source

[SOLID: Part 1 - The Single Responsibility Principle](https://code.tutsplus.com/id/tutorials/solid-part-1-the-single-responsibility-principle--net-36074)
