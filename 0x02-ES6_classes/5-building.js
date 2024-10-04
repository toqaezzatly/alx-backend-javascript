export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  // Getter for _sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for _sqft with type validation
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Square feet must be a number');
    }
    this._sqft = value;
  }
}
