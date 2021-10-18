import { Switchable, Switch } from './abstraction';

export class ElectricPowerSwitch implements Switch {
    client: Switchable;
    on: boolean;
  
    constructor(client: Switchable) {
      this.client = client;
      this.on = false;
    }
  
    isOn(): boolean {
      return this.on;
    }
  
    press() {
      const checkOn = this.isOn();
      if (checkOn) {
        this.client.turnOff();
        this.on = false;
      } else {
        this.client.turnOn();
        this.on = false;
      }
    }
  }