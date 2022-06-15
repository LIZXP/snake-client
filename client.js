const net = require("net");

const connect = function () {
  const config = {
    host: "localhost",
    port: 50541,
  };

  const conn = net.createConnection(config);

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("you are connected to the server.");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data.trim());
  });

  return conn;
};

module.exports = connect;
