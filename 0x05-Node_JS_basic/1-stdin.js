#!/usr/bin/env node

// Import necessary modules
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt user for their name and handle their input
const askName = () => new Promise((resolve) => {
  rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    resolve(name);
  });
});

// Main function
const main = async () => {
  try {
    process.stdout.write('Welcome to Holberton School, what is your name?\n');

    process.stdin.on('readable', () => {
      const chunk = process.stdin.read();
      if (chunk !== null) {
        process.stdout.write(`Your name is: ${chunk}`);
      }
    });

    process.stdin.on('end', () => {
      process.stdout.write('This important software is now closing\n');
    });
  } finally {
    rl.close(); // Close the readline interface
  }
};

// Run the main function
main();
