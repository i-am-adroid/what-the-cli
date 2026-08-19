#!/usr/bin/env node

const args = process.argv.slice(2);
const { commands, printHelp } = require("./commands");

const command = args[0] || "help";
const commandArgs = args.slice(1);

if (command === "help") {
  printHelp();
} else if (commands[command]) {
  commands[command](commandArgs);
} else {
  console.error(`Unknown command: ${command}`);
  console.error("Run 'what-the-cli help' to see available commands.");
  process.exitCode = 1;
}
