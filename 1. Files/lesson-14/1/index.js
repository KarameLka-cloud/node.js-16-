import fs from "fs/promises";

let readableStream = fs.createReadStream("readme.txt", "utf8");
let writeableStream = fs.createWriteStream("writeme.txt");

readableStream.pipe(writeableStream);
