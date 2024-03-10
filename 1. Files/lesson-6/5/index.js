import fs from "fs";

fs.readFile("num1.txt", "utf8", function (err, data1) {
  if (!err) {
    fs.readFile("num2.txt", "utf8", function (err, data2) {
      if (!err) {
        fs.readFile("num3.txt", "utf8", function (err, data3) {
          if (!err) {
            console.log(data1 * data2 * data3);
          } else {
            console.log("Ошибка чтения файла num3");
          }
        });
      } else {
        console.log("Ошибка чтения файла num2");
      }
    });
  } else {
    console.log("Ошибка чтения файла num1");
  }
});
