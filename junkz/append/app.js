"use strict";

import { appendFile } from "node:fs";

appendFile("greetings.txt", "Hello, World!", (err) => {
  if (err) {
    console.error(err);
  }
});
