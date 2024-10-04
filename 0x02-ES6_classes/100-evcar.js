import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this._range = range; // Store the range attribute
  }

  get range() {
    return this._range; // Getter for range
  }

  // Override cloneCar method to return an instance of Car
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
