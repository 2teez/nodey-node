"use strict";

import yargs, { demand } from "yargs";
import { hideBin } from "yargs/helpers";

const args = yargs(hideBin(process.argv))
  .options({
    address: {
      describe: "Address looking for.",
      demand: true,
      alias: "a",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;
