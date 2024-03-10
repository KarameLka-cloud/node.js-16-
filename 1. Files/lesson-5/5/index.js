import fs from "fs";

let arr = ["num1.txt", "num2.txt", "num3.txt"];

function sum() {
  let sum = 0;
  for (let elem of arr) {
    sum += Number(fs.readFileSync(`${elem}`, "utf8"));
  }
  return sum;
}

console.log(sum());
