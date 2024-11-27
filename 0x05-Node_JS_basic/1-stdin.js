#!/usr/bin/env node

// Import necessary modules
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt user for their name and handle their input
const askName = () => {
  return new Promise((resolve) => {
    rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
      resolve(name);
    });
  });
};

// Main function
const main = async () => {
  try {
    const name = await askName(); // Await user input
    console.log(`Your name is: ${name}`);
  } finally {
    console.log('This important software is now closing');
    rl.close(); // Close the readline interface
  }
};

// Run the main function
main();
