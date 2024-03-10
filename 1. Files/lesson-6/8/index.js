import fs from "fs";

fs.readFile("num1.txt", "utf8", function (err, data1) {
  if (!err) {
    fs.readFile("num1.txt", "utf8", function (err, data2) {
      if (!err) {
        fs.readFile("num1.txt", "utf8", function (err, data3) {
          fs.writeFile("sum.txt", `${Number(data1) + Number(data2) + Number(data3)}`, function (err) {
            if (err) {
              console.log("Ошибка записи файла");
            }
          });
        });
      }
    });
  }
});
