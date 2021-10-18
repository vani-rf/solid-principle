/**
 * Misalkan dalam sebuah projek aplikasi,
 * Tim ditugasi untuk menulis struktur modelnya,
 * sedangkan Baker ditugasi untuk menulis sebuah data access provider.
 * Karena belum pernah belajar ini sebelumnya,
 * jadinya struktur model dan data access providernya digabungkan jadi satu class.
 * Karena jadi satu class,
 * otomatis class tersebut bisa saja mengalami perubahan karena perubahan struktur data modelnya dan perubahan mekanisme akses datanya.
 * Sehingga, Tim dan Baker berpeluang menciptakan konflik dalam version control karena bisa saja ia mengubah baris yang sama dalam satu file.
 * Maka dari itu, setiap class atau fungsi haruslah mempunyai satu tanggung jawab saja.
 */

export class BookChapter {
  constructor(title: string, content: string) {}
}

export class Book {
  constructor(public issn: string, author: string, chapters: BookChapter[]) {}

  saveBook() {
    // saving book to database
  }
}

/**
 * Ketika ada 2 perubahan sekaligus, baik perubahan struktur data dan mekanisme menyimpan datanya, 
 * Tim dan Baker akan mengubah file yang sama, sehingga bisa saja terjadi konflik kalau misalkan sama-sama mengubah di baris yang sama. 
 * Secara semantik pula, mana ada class yang harusnya cuma merepresentasikan struktur data bisa melakukan mekanisme penyimpanan data?
 */