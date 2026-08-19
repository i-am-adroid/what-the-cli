const assert = require("node:assert/strict");
const { commands } = require("../src/commands");

assert.equal(typeof commands.hello, "function");
assert.equal(typeof commands.about, "function");
assert.equal(typeof commands.echo, "function");
assert.equal(typeof commands.version, "function");

console.log("what-the-cli: basic command tests passed");
