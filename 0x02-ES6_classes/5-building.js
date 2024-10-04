export default class Building {
  constructor(sqft) {
    if (!this.Building && !this.evacuationWarningMessage) {
      throw new Error('Building is an abstract class and cannot be instantiated directly.');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Square feet must be a number');
    }
    this._sqft = value;
  }
}
