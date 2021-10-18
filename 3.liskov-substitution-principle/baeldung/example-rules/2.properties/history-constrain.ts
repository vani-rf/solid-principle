/**
 * example History Constraint
 **/
export abstract class Book {
  // Allowed to be set once at the time of creation.
  // Value can only increment thereafter.
  // Value cannot be reset.
  protected minPage: number;

  constructor(minPage: number) {
    this.minPage = minPage;
  }

  // Other properties and methods...
}

export class MatematicBook extends Book {
  // perubahan ini telah melanggar prinsip, minPage harus tetap
  // ini akan merusak code client yang bergantung pada minPage
  reset() {
    this.minPage = 0;
  }
}
