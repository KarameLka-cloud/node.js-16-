import fs from "fs";

for (let i = 1; i <= 10; i++) {
  fs.writeFile(`readme${i}.txt`, `text${i}`, function (err) {
    console.log(err);
  });
}
