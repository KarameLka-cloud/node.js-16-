import fs from "fs/promises";
import http from "http";

http
  .createServer((request, response) => {
    if (request.url != "/favicon.ico") {
      console.log(request.url);
      console.log(request.method);
      console.log(request.headers);

      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("text");
      response.end();
    }
  })
  .listen(3000);
