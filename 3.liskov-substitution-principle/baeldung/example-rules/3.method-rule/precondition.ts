/**
 * Example precondition
 */
export class Foo {
  // precondition: 0 < num <= 5
  public doStuff(num: number): void {
    if (num <= 0 || num > 5) {
      throw new Error("Input out of range 1-5");
    }
    // some logic here...
  }
}

class Bar extends Foo {
  // precondition: 0 < num <= 10
  public doStuff(num: number): void {
    if (num <= 0 || num > 10) {
      throw new Error("Input out of range 1-10");
    }
    // some logic here...
  }
}
