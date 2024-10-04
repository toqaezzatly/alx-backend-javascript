export default class Airport {
  constructor(name, code) {
    // Set the name and code attributes, using the underscore naming convention
    this._name = name;
    this._code = code;
  }

  // Override the default string description
  toString() {
    return this._code;
  }
}
