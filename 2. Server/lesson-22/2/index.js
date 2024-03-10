import fs from "fs/promises";
import http from "http";

http
  .createServer(async (request, response) => {
    let data;
    let type;

    if (request.url === "/page.html") {
      data = await fs.readFile("page.html", "utf8");
      type = "text/html";
    }

    response.writeHead(200, { "Content-Type": type });
    response.write(data);
    response.end();
  })
  .listen(3000);
