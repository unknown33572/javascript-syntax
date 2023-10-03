class Car {
  constructor(modelName, modelColor, type, price) {
    this.modelName = modelName;
    this.modelColor = modelColor;
    this.type = type;
    this.price = price;
  }

  getCarInfo() {
    return `Model: ${this.modelName}, Color: ${this.modelColor}, Type: ${this.type}, Price: ${this.price}`;
  }
}

const car = new Car("BMW", "Black", "SUV", 100000);

console.log(car.getCarInfo());

const car2 = new Car("Audi", "White", "Sedan", 80000);

console.log(car2.getCarInfo());

export default Car;