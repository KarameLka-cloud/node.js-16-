import fs from "fs";

function increment() {
  let number = Number(fs.readFileSync("number.txt", "utf8"));
  number += 1;
  fs.writeFileSync("number.txt", `${number}`);
  console.log(number);
}

increment();
