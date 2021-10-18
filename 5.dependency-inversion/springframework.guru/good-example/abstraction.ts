export interface Switch {
  isOn(): boolean;
  press(): void;
}

export interface Switchable {
  turnOn(): void;
  turnOff(): void;
}
