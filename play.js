const connect = require("./client");
const setupInput = require("./input");

console.log("Copnnecting ...");

setupInput(connect());
