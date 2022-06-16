const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = (key) => {
    if (key === "\u0003") {
      process.exit();
    } else if (key === "w") {
      console.log("Move: up");
    } else if (key === "s") {
      console.log("Move: down");
    } else if (key === "a") {
      console.log("Move: left");
    } else if (key === "d") {
      console.log("Move: right");
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
