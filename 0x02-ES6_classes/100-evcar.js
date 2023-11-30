import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const { _brand, _motor, _color } = this;
    const newCar = new Car(_brand, _motor, _color);
    return newCar;
  }
}
