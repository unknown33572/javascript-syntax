import Vehicle from "./ch03.js";

class Car extends Vehicle {
  constructor(make, model, year, fuelType) {
    super(make, model, year); // 상위 클래스(Vehicle)의 생성자 호출
    this.fuelType = fuelType;
  }

  drive() {
    console.log(`차가 움직입니다.`);
  }

  // 상위 클래스(Vehicle)의 메서드를 재정의(오버라이딩)
  start() {
    super.start(); // 상위 클래스(Vehicle)의 start 메서드 호출
    console.log(`차량의 시동을 걸었습니다.`);
  }
}

// Car 클래스의 인스턴스 생성
const myCar = new Car("Toyota", "Camry", 2023, "Gasoline");

// Car 클래스의 메서드 호출
myCar.start(); // Car 클래스에서 재정의된 start 메서드 호출
myCar.drive(); // Car 클래스의 메서드 호출
myCar.stop(); // Vehicle 클래스의 메서드 호출