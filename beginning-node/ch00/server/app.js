"use strict";

import http from "http";

const server = http.createServer((request, response) => {
  console.log("request starting...");

  response.write("Hello, Client!\n");
  response.end();
});

server.listen(3000);
console.log("Server running at http://127.0.0.1:3000");
