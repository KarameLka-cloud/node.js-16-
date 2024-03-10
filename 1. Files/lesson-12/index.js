import fs from "fs/promises";
import { constants } from "fs";

fs.access("test.txt", constants.F_OK)
  .then(() => {
    console.log("Файл есть");
  })
  .catch(() => {
    console.log("Файл не найден");
  });
