import { test, describe, expect } from "vitest";
import mockFs from "mock-fs";
import { fsPromiseTest } from "../src";
import { beforeEach } from "vitest";
import { afterEach } from "vitest";

describe("Mocks the fs/promise readFile properly", () => {
  beforeEach(() => {
    mockFs.restore();
  });

  afterEach(()=>{
    mockFs.restore();
  });

  test("Reads the file", async () => {
    mockFs({
      "./path/to/fake/dir": {
          "file.js": "console.log('Hello World!')",
        },
    });

    await fsPromiseTest();
  });
});
