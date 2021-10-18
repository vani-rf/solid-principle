import { CoffeeMachine } from "../abstarction/CofeeMachine";

export class BasicCoffeeMachine implements CoffeeMachine {
  brewFilterCoffee(): void {
    console.log("brew coffee with basic machine");
  }

  addGroundCoffee(): void {
    console.log("coffee grounded");
  }
}
