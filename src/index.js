import fsp from "fs/promises";

export async function fsPromiseTest() {
  const file = await fsp.readFile("./path/to/fake/dir/file.js", "utf-8");
  console.log("------ FILE CONTENTS ------");
  console.log(file);
  console.log("---------------------------");
}