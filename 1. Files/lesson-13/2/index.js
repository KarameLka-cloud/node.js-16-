import fs from "fs/promises";

let writeableStream = fs.createWriteStream("readme.txt");

for (let i = 1; i <= 1000000; i++) {
  writeableStream.write(`${i}\n`);
}

writeableStream.end();
