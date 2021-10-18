import { LightBulb } from "./LightBulb";

export class ElectricPowerSwitch {
  lightBulb: LightBulb;
  on: boolean;

  constructor(lightBulb: LightBulb) {
    this.lightBulb = lightBulb;
    this.on = false;
  }

  isOn(): boolean {
    return this.on;
  }

  press() {
    const checkOn = this.isOn();
    if (checkOn) {
      this.lightBulb.turnOff();
      this.on = false;
    } else {
      this.lightBulb.turnOn();
      this.on = false;
    }
  }
}

/** 
 * pada kasus ini class electric swiff dapat berjalan dengan baik, 
 * tapi permasalahannya class elecric merupakan hight level class, dan class electrik swithc bergantung langsung 
 * pada class LightBulb, andaikan class lghtBulb diganti dengan ac atau kipas angin maka switch akan tidak bekerja.
 * jika class electrict switch ingin berfungsi maka dependency harus diganti ke class ac atau kipas angin.
 * */ 
