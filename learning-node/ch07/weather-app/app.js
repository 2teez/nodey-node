"use strict";

import "dotenv/config";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .options({
    a: {
      describe: "Address to be searched",
      demand: true,
      alias: "address",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;

console.log(argv.address);
