import { Switchable } from "./abstraction";

export class Lightfan implements Switchable {
  public turnOn(): void {
    console.log("LightBulb: Bulb turned on...");
  }

  public turnOff(): void {
    console.log("LightBulb: Bulb turned off...");
  }
}

export class Fan implements Switchable {
  public turnOn(): void {
    console.log("Fan: fan turned on...");
  }

  public turnOff(): void {
    console.log("Fan: fan turned off...");
  }
}
