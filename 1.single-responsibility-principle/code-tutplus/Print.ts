export interface Printer {
  printPage(page: number): void;
}

// class ini hanya bertanggung jawab utuk print text
export class PlainTextPrinter implements Printer {
  printPage(page: number) {
    console.log(`print page ${page}`);
  }
}

// class ini hanya bertanggung jawab untuk print html
export class HtmlPrinter implements Printer {
  printPage(page: number) {
    console.log(`<div style="single-page">${page}</div>`);
  }
}
