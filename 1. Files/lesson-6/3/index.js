import fs from "fs";

fs.readFile("readme.txt", "utf8", function (err, data) {
  if (!err) {
    console.log(data);
  } else {
    console.log("Ошибка", err);
  }
});

console.log("!!!");
