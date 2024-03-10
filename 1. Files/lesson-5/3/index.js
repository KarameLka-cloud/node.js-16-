import fs from "fs";

let text = fs.readFileSync("readme.txt", "utf8");

setInterval(function () {
  console.log(text);
  let str = text + "!";
  fs.writeFileSync("readme.txt", `${str}`);
}, 5000);
