import { LightBulb } from "../bad-example/LightBulb";
import { ElectricPowerSwitch } from "./hight-level";
import { Fan } from "./low-level";

function testPress(): void {
  const switchableBulb = new LightBulb();
  const bublePoweSwitch = new ElectricPowerSwitch(switchableBulb);
  bublePoweSwitch.press();

  const switchableFan = new Fan();
  const fanPowerSwitch = new ElectricPowerSwitch(switchableFan);
  fanPowerSwitch.press();
}

testPress();
