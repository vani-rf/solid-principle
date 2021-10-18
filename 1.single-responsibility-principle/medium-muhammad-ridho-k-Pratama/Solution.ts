/** class model representation */
export class BookChapter {
  constructor(public title: string, public content: string) {}
}

export class Book {
  constructor(public issn: string, public author: string, public chapters: BookChapter[]) {}
}

/** data access provider */
interface BookRepository {
  save(book: Book): void;
}

export class BookRepositoryImpl implements BookRepository {
  save(book: Book): void {
    // save book to database
  }
}
