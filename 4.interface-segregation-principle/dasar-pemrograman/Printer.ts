import { IPaper, IDigitalDocument } from "./Document";

export interface IScanner {
  scan(paper: IPaper): IDigitalDocument;
}

export class SimpleScanner implements IScanner {
  scan(paper: IPaper): IDigitalDocument {
    throw new Error("Method not implemented.");
  }
}

export interface IPrinter {
  print(document: IDigitalDocument): IPaper;
}

export class SimplePrinter implements IPrinter {
  print(document: IDigitalDocument): IPaper {
    throw new Error("Method not implemented.");
  }
}

// case jika ingin membuat class smartprinter maka apa yang harus dilakukan
// solution false
// menggabungakan interface lalu menimplementasikan pada simple scanner dan simple printer
export interface PrinterScanner extends IScanner, IPrinter {}

// solution true

export class SmartPrinter implements IPrinter, IScanner {
  print(document: IDigitalDocument): IPaper {
    throw new Error("Method not implemented.");
  }
  scan(paper: IPaper): IDigitalDocument {
    throw new Error("Method not implemented.");
  }
}
