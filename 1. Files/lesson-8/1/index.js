import fs from "fs";

async function sum() {
  try {
    let num1 = await fs.promises.readFile("num1.txt", "utf8");
    let num2 = await fs.promises.readFile("num2.txt", "utf8");
    let sum = num1 + num2;
    await fs.promises.writeFile("sum.txt", sum);
  } catch (err) {
    console.log("Что-то пошло не так");
  }
}

sum();
