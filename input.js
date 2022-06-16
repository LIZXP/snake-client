const { MoveUp, MoveDown, MoveLeft, MoveRight, Msg } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = (key) => {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === MoveUp) {
      connection.write("Move: up");
    }
    if (key === MoveDown) {
      connection.write("Move: down");
    }
    if (key === MoveLeft) {
      connection.write("Move: left");
    }
    if (key === MoveRight) {
      connection.write("Move: right");
    }
    if (key === Msg) {
      connection.write("Say: Nice");
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
