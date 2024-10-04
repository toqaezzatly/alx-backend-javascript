export default class HolbertonClass {
  constructor(size, location) {
    // Set the size and location attributes, following the underscore naming convention
    this._size = size;
    this._location = location;
  }

  // Override the default behavior when the object is cast to a Number
  valueOf() {
    return this._size;
  }

  // Override the default behavior when the object is cast to a String
  toString() {
    return this._location;
  }
}
