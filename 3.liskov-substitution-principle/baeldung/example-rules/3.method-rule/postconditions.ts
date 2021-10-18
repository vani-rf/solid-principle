/**
 * Example postcondition
 */

export abstract class Car {
  protected speed: number;

  // postcondition: speed must reduce
  protected abstract brake(): void;

  // Other methods...
}

export class HybridCar extends Car {
  // Some properties and other methods...

  // postcondition: speed must reduce
  // postcondition: charge must increase
  protected brake(): void {
    // Apply HybridCar brake
  }
}
