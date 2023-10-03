import Car from "./ch01.js";

class ElectricCar extends Car {
  constructor(modelName, modelColor, type, price, batteryCapacity) {
    super(modelName, modelColor, type, price);
    this.batteryCapacity = batteryCapacity;
    this.model = modelName;
    this.color = modelColor;
  }

  setBatteryCapacity(batteryCapacity) {
    this.batteryCapacity = batteryCapacity;
  }

  getCarInfo() {
    return `Model: ${this.model}, Color: ${this.color}, Type: ${this.type}, Price: $${this.price}, Battery Capacity: ${this.batteryCapacity}`;
  }
}

const electricCar = new ElectricCar("Tesla-model-S", "Red", "SUV", 120000, '100%');
console.log(electricCar.getCarInfo());

electricCar.setBatteryCapacity('90%');
console.log(electricCar.getCarInfo());

const electricCar2 = new ElectricCar("Tesla-model-X", "Blue", "Sedan", 150000, '10%');
console.log(electricCar2.getCarInfo());

electricCar2.setBatteryCapacity('70%');
console.log(electricCar2.getCarInfo());