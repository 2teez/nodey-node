"use strict";

import { appendFile } from "node:fs";

appendFile("greetings.txt", "Howdy, World!", (err) => {
  if (err) {
    console.error(err);
  }
});
