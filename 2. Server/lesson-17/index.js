import fs from "fs/promises";
import http from "http";

let i = 100;

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(String(i === 0 ? "Счётчик закончился" : i--));
    response.end();
  })
  .listen(3000);
