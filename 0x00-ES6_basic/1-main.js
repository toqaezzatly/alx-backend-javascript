// Assuming the content of 1-main.js is as follows
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));  // Outputs: [false, true]
console.log(taskBlock(false)); // Outputs: [false, true]

