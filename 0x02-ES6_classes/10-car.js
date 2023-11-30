const CarSymbol = Symbol('CarSymbol');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = new Car();
    Object.getOwnPropertyNames(this).forEach((prop) => {
      clonedCar[prop] = this[prop];
    });
    return clonedCar;
  }

  [CarSymbol]() {
    return {
      brand: this._brand,
      motor: this._motor,
      color: this._color,
    };
  }
}
