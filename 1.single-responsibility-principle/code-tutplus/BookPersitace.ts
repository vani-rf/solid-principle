/**
 * class ini mempunya 2 tanggung jawab
 * Sekali lagi kita bisa mengidentifikasi dari aktor, function save melayani aktor pesistance
 * sedangkan fungsi lainnya melayani manajemen data buku, sehingga jika mlakukan perubahan pada fungsi
 * simpan maka juga memodifikasi dalam class yang sama ajdi sebaiknya funsi save di pisah tersendiri
 */

export class Book {
  getTitle(): string {
    return "a great book";
  }

  getAuthor(): string {
    return "John Due";
  }

  turnPage() {
    // pointer to next page
  }

  printCurrentPage() {
    console.log("current page content");
  }

  //   save() {
  //     console.log("save data to database");
  //   }
}

// dengan pemisahan ini ketika mengubah fungsi menyimpan tidak mempengaruhi kode pada class book
export class SimpleFilePersistence {
  save(book: Book) {
    console.log(`save ${book.getTitle()} with author ${book.getAuthor()}`);
  }
}
