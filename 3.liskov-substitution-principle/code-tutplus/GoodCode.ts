export interface IVehile {
  startEngine(): void;

  accelerate(): void;
}

export class Vehicle implements IVehile {
  startEngine() {
    console.log("start engine");
  }

  accelerate() {
    console.log("do accelerate");
  }
}

/**
 * pada class car fungsi startEngine di perbaharui dengan menambah fungsi engageIgnition
 * tanpa merusak tujuan asli dari fungsi startEngine
 */
export class Car extends Vehicle {
  startEngine() {
    this.engageIgnition();
    super.startEngine();
  }

  private engageIgnition() {
    // Ignition procedure
    console.log("engage ignition before startMachine");
  }
}

/**
 * pada class ElectricBus fungsi accelerate di perbaharui dengan menambah fungsi increaseVoltage dan connectIndividualEngines
 * walaupun tidak memanggil funsi accelerate pada super class,
 * fungsi accelerate tidak berubah tujuannya dan tetap berjalan sesuai fungsinya
 */
export class ElectricBus extends Vehicle {
  accelerate() {
    this.increaseVoltage();
    this.connectIndividualEngines();
  }

  private increaseVoltage() {
    // Electric logic
    console.log("upgrade accelerate with increate voltage");
  }

  private connectIndividualEngines() {
    // Connection logic
    console.log("upgrade accelerate with connect individual engine");
  }
}

export class Driver {
  go(v: IVehile) {
    v.accelerate();
    v.startEngine();
    console.log('--------------');
    
  }
}

const driver = new Driver();
const car = new Car();
const electicBus = new ElectricBus();
driver.go(car);
driver.go(electicBus);
