export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Using ES6 arrow function syntax
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood); // Use this directly
    return this.sanFranciscoNeighborhoods; // Return the updated list
  };
}
