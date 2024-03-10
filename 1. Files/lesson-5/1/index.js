import fs from "fs";

let num1 = Number(fs.readFileSync("num1.txt", "utf8"));
let num2 = Number(fs.readFileSync("num2.txt", "utf8"));

console.log(num1 + num2);
