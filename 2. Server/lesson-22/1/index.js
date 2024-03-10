import fs from "fs/promises";
import http from "http";

http
  .createServer(async (request, response) => {
    if (request.url != "/favicon.ico") {
      let data;
      let type;

      if (request.url === "/page.html") {
        data = await fs.readFile("page.html", "utf8");
        type = "text/html";
      }

      if (request.url === "/image.png") {
        data = await fs.readFile("image.png");
        type = "image/png";
      }

      if (request.url === "/style.css") {
        data = await fs.readFile("style.css", "utf8");
        type = "text/css";
      }

      response.writeHead(200, { "Content-Type": type });
      response.write(data);
      response.end();
    }
  })
  .listen(3000);
