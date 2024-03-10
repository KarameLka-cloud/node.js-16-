import fs from "fs";

let arrFiles = ["num1.txt", "num2.txt", "num3.txt", "num4.txt", "num5.txt"];
let arrPromises = [];

for (let promise of arrFiles) {
  arrPromises.push(fs.promises.readFile(promise, "utf8"));
}

Promise.all(arrPromises).then((data) => {
  fs.promises.writeFile("res.txt", data.join("")).catch((err) => {
    console.log("Что-то пошло не так");
  });
});
