import fs from "fs/promises";
import http from "http";

http
  .createServer((request, response) => {
    let date = new Date();
    response.setHeader("Cache-Control", "no-cache");
    response.statusCode = 200;
    response.write(`<b>${date}</b>`);
    response.end();
  })
  .listen(3000);
