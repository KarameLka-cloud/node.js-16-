import fs from "fs";

fs.promises
  .readFile("num.txt", "utf8")
  .then((data) => {
    let sum = 0;
    for (let elem of data) {
      sum += Number(elem);
    }
    console.log(sum);
  })
  .catch((err) => {
    console.log("Ошибка чтения");
  });
