export interface IDocument {
  getName(): string;
}

export interface IPaper extends IDocument {
  getText(): string;
}

export interface IDigitalDocument extends IDocument {
  getText(): string;
  getSize(): number;
}
