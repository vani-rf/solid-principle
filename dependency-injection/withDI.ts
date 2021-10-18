// DI  bagaimana sebuah class saling ketergantungan, tanpa memperdulikan cara pembuatan class tersebut (class yang di depend)

interface IMachine {
  start(): void;
  stop(): void;
}

class MachineX implements IMachine{
  id: number;
  type = "bmw";

  constructor(type: string) {
    this.type = type;
  }

  start() {
    console.log(`mechine ${this.type} is starting`);
  }

  stop() {
    console.log(`mechine ${this.type} is stops`);
  }
}

class MachineY implements IMachine{
  type = "Y";

  constructor(type: string) {
    this.type = type;
  }

  start() {
    console.log(`mechine ${this.type} is starting`);
  }

  stop() {
    console.log(`mechine ${this.type} is stops`);
  }
}

class CarX {
  machine: IMachine;
  constructor(m: IMachine) {
    this.machine = m;
  }

  start() {
    // instance class yang di butuhkan di dalm class yang membutuhkan
    this.machine.start();
  }
}

const mx = new MachineX("lambo");
const my = new MachineY("lambo");

const cx = new CarX(my);
cx.start();

// problem :
// 1. banyak instance
// 2. tidak dinamis
// 3. hight complexity
