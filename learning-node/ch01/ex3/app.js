"use strict";

import { appendFile } from "node:fs";
import { userInfo } from "node:os";
import { add } from "./notes.js";
import _ from "lodash";

//console.log("Result: ", add(2, 3));
console.log(_.isString(true));
console.log(_.isString("java"));
//
const filtered = _.uniq(["java", 1, "java", 2, 3, 2, 4, 3, 5]);
console.log(filtered);
