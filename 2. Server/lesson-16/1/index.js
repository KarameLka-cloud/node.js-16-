import fs from "fs/promises";
import http from "http";

http
  .createServer((request, response) => {
    response.statusCode = 404;
    response.write("Page not found");
    response.end();
  })
  .listen(3000, function () {
    console.log("Сервер запущен");
  });
