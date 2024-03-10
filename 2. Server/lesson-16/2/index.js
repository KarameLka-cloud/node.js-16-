import fs from "fs/promises";
import http from "http";

http
  .createServer((request, response) => {
    response.setHeader("Cache-Control", "no-cache");
    response.statusCode = 200;
    response.write("<b>Hello world</b>");
    response.end();
  })
  .listen(3000);
