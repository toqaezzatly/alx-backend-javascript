#!/usr/bin/env node

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim(); // Trim whitespace and newline characters
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdout.write('This important software is now closing\n');
  process.stdin.end(); // End input processing
});

process.stdin.on('end', () => {
  process.exit(0); // Ensure the program exits cleanly
});
