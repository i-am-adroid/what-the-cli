const commands = {
  hello() {
    console.log("Hello from what-the-cli 👋");
  },

  about() {
    console.log("what-the-cli is a small CLI playground for experimenting with command-line tools.");
  },

  echo(args) {
    console.log(args.join(" "));
  },

  version() {
    console.log("what-the-cli v0.1.0");
  },
};

function printHelp() {
  console.log(`what-the-cli\n\nUsage:\n  what-the-cli <command> [arguments]\n\nCommands:\n  hello             Say hello\n  about             Explain the project\n  echo <text>       Print text back to the terminal\n  version           Show the current version\n  help              Show this help message`);
}

module.exports = { commands, printHelp };
