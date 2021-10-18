/**
 * example Class Invariants rule (penetapan kondisi pada sebuah attribute)
 * */

abstract class Car {
  protected limit: number;

  // invariant: speed < limit;
  protected speed: number;

  // postcondition: speed < limit
  protected abstract accelerate(): void;

  // Other methods...
}

class HybridCar extends Car {
  // invariant: charge >= 0;
  private charge: number;

  // postcondition: speed < limit
  protected accelerate(): void {
    // Accelerate HybridCar ensuring speed < limit
  }

  // Other methods...
}
