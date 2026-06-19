"use strict";

const yargs = require("yargs");
const gecode = require("./geocode/geocode.js");

const argv = yargs
  .options({
    address: {
      describe: "Address to look for.",
      demand: true,
      alias: "a",
      string: true,
    },
  })
  .help()
  .alias("help", "-h").argv;

gecode.gecodedAddress(argv.address, (errorMessage, results) => {
  if (errorMessage !== undefined) {
    console.log(`${errorMessage}`);
  } else {
    console.log(JSON.stringify(results, null, 2));
  }
});
