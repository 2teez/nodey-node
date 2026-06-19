"use strict";

const yargs = require("yargs");
//import { hideBin } from "yargs/helpers"; // for ES MOdule in js

const argv = yargs
  .command("address", "Address to locate", {
    describe: "Address to locate",
    demand: true,
    alias: "a",
  })
  .help().argv;
console.log(JSON.stringify(argv, null, 2));
