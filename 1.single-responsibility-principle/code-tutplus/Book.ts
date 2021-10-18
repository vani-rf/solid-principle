/**
 * Jika kita berpikir tentang aktor yang terlibat dalam operasi objek Buku, siapa mereka?
 * Kita dapat dengan mudah memikirkan dua aktor yang berbeda di sini:
 * Buku Manajemen (seperti pustakawan) dan Mekanisme Presentasi Data (seperti cara kita ingin menyampaikan
 * konten ke pengguna - layar, grafis UI, hanya-teks UI, mungkin pencetakan).
 * Berikut adalah dua aktor yang sangat berbeda.
 **/
export class Book {
  getTitle(): string {
    return "a great book";
  }

  getAUthor(): string {
    return "John Due";
  }

  turnPage() {
    // pointer to next page
  }

  printCurrentPage() {
    console.log("current page content");
  }
}
