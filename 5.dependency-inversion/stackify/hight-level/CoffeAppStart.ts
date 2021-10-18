import { PremiumCoffeeMachine } from "../low-level/PremiumCoffeeMachine";
import { CoffeeApp } from "./CoffeeApp";

const premiumMachine = new PremiumCoffeeMachine();
const app = new CoffeeApp(premiumMachine);

app.prepareCofee();
