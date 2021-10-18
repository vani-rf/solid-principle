## desciption

Ide umum prinsip ini sangat sederhana dan juga penting, yaitu :
modul tingkat tinggi yang menyediakan logika komplek, harus bisa digunakan kembali dengan mudah dan tidak terpengaruh olah modul tingkat rendah yang menyediakan fitur utilitas.
untuk mencapai hal itu perlu menggunakan modul abstraksi untuk memisahkan modul tingkat tinggi dengan modul tingkat rendah.

berdasakan ide ini robert c. martin mendefinisikan Dependency Inversion menjadi 2 bagian :

1. Modul tingkat tinggi tidak boleh bergantung pada modul tingkat rendah. Keduanya harus bergantung pada abstraksi
2. Abstraksi tidak bergantung pada detail, tapi detail bergantung pada abstraksi

pada akhirnya selain mengubah arah dependensi tapi juga membuat modul tingkat tinggi dan tingkat rendah bergantung pada abstraksi yang sama.

## ref article

[SOLID Design Principles Explained: Dependency Inversion Principle with Code Examples](https://stackify.com/dependency-inversion-principle/)
