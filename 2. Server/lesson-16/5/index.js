import fs from "fs/promises";
import http from "http";

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Language": "ru",
    });
    response.write(`${i}`);
    response.end();
  })
  .listen(3000);
