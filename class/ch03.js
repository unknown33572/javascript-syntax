class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`시동을 걸었습니다.`);
  }

  stop() {
    console.log(`시동을 끕니다.`);
  }
}

const myVehicle = new Vehicle("Tesla", "Model S", 2021);
console.log(myVehicle);
export default Vehicle;