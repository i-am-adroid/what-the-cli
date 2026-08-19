#!/usr/bin/env node

const args = process.argv.slice(2);

const commands = {
  help() {
    console.log(`what-the-cli\n\nUsage:\n  what-the-cli <command>\n\nCommands:\n  hello   Say hello\n  about   Explain what this project is\n  help    Show this help message`);
  },

  hello() {
    console.log("Hello from what-the-cli 👋");
  },

  about() {
    console.log("what-the-cli is a small CLI playground for experimenting with command-line tools.");
  },
};

const command = args[0] || "help";

if (commands[command]) {
  commands[command]();
} else {
  console.error(`Unknown command: ${command}`);
  console.error("Run 'what-the-cli help' to see available commands.");
  process.exitCode = 1;
}
