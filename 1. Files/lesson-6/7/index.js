import fs from "fs";

fs.readFile("num.txt", "utf8", function (err, data) {
  if (!err) {
    let value = data ** 2;
    fs.writeFile("num.txt", `${value}`, function (err) {
      if (err) {
        console.log("Ошибка записи файла");
      }
    });
  } else {
    console.log("Ошибка чтения файла");
  }
});
