import fs from "fs/promises";

let path = "../../../dir1/dir2/dir3/readme.txt";
let data = await fs.readFile(path, "utf8");

console.log(data);
