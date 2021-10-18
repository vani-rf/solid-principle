class Machine {
  type = "bmw";

  constructor() {}

  start() {
    console.log(`mechine ${this.type} is starting`);
  }

  stop() {
    console.log(`mechine ${this.type} is stops`);
  }
}

class Car {
  start() {
    // instance class yang di butuhkan di dalm class yang membutuhkan
    const m = new Machine();
    m.start();
  }
}

const c = new Car();
c.start();

// problem :
// 1. banyak instance
// 2. tidak dinamis
// 3. hight complexity