import { CoffeeMachine } from "../abstarction/CofeeMachine";

export class CoffeeApp {
  private coffeeManchine: CoffeeMachine;

  constructor(coffeeManchine: CoffeeMachine) {
    this.coffeeManchine = coffeeManchine;
  }

  prepareCofee() {
    this.coffeeManchine.brewFilterCoffee();
    console.log("coffee is already");
  }
}
