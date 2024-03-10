import fs from "fs/promises";
import http from "http";

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("page not found");
    response.end();
  })
  .listen(3000);
