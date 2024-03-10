import fs from "fs/promises";

let readableStream = fs.createReadStream("readme.txt", "utf8");

readableStream.on("data", function (chunk) {
  console.log(chunk);
});
