import fs from "fs";

fs.promises.readFile("num.txt", "utf8").then((data) => {
  let arrNum = data.split(",");
  for (let i = 1; i <= arrNum.length; i++) {
    return fs.promises.writeFile(`num${i}.txt`, `${arrNum[i]}`);
  }
});
