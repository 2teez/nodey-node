"use strict";

import { appendFile } from "node:fs";
import { userInfo } from "node:os";

const user = userInfo();

appendFile("greeting.txt", `Hello, ${user.username}!`, (err) => {
  if (err) throw err;
});
