import fs from "fs/promises";
import http from "http";

http
  .createServer(async (request, response) => {
    if (request.url != "/favicon.ico") {
      let data;
      let status;
      let type;

      if (request.url === "/") {
        data = await fs.readFile("page.html", "utf8");
        status = 200;
        type = "text/html";
      } else {
        status = 404;
        data = "Страница не найдена";
        type = "text/html";
      }

      response.writeHead(status, { "Content-Type": type });
      response.write(data);
      response.end();
    }
  })
  .listen(3000);
