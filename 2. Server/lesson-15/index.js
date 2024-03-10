import fs from "fs/promises";
import http from "http";

http
  .createServer((request, response) => {
    response.end("Hello, world!");
  })
  .listen(3000, function () {
    console.log("Сервер запущен");
  });
