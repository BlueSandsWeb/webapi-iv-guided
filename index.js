require("dotenv").config();

const server = require("./api/server.js");

// Ports have to be dynamic for hosting provider
const port = process.env.PORT || 4000; // local will run 4000, but when hosted, the host picks port and will dynamically read

// grabbing greeting from the .env file to show how you can grab more than just the port
const greeting = process.env.GREETING;

server.listen(port, () => {
  console.log(
    `\n*** ${greeting} Server Running on http://localhost:${port} ***\n`
  );
});

// node lives in a process.
//
