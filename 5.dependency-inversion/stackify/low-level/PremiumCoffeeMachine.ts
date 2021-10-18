import { CoffeeMachine } from "../abstarction/CofeeMachine";
import { ExpressoMachine } from "../abstarction/ExpressoMachine";

export class PremiumCoffeeMachine implements CoffeeMachine, ExpressoMachine {
  brewFilterCoffee(): void {
    console.log("brew basic coffee with premium machine");
  }
  
  brewExpresso(): void {
    console.log("brew expresso with premium machine");
  }

  addCoffeeBean() {
    console.log("bean added");
  }
}
