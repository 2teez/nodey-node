"use strict";

// promise variable
let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("Hey! it works!");
    reject("unable to resolve the issues.");
  }, 2500);
})
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((errMessage) => {
    console.log(`Err: ${errMessage}`);
  });
