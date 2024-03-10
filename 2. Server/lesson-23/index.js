import fs from "fs/promises";
import http from "http";

http
  .createServer(async (request, response) => {
    if (request.url != "/favicon.ico") {
      let text;
      let status;
      let path = "root" + request.url;

      try {
        if ((await fs.stat(path)).isDirectory()) {
          path += "index.html";
        }
        status = 200;
        text = await fs.readFile(path, "utf8");
      } catch {
        if ((await fs.stat(path)).isDirectory()) {
          path += "404.html";
        }
        status = 404;
        text = await fs.readFile(path, "utf8");
      }

      response.writeHead(status, { "Content-Type": "text/html" });
      response.write(text);
      response.end();
    }
  })
  .listen(3000);
