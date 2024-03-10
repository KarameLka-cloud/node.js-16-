import fs from "fs";

try {
  let text = fs.readFileSync("readme.txt", "utf8");
  console.log(text);
} catch (err) {
  console.log("Ошибка" + err);
}
