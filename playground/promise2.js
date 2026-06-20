"use strict";

// promise variable
let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey! it works!");
  }, 2500);
}).then((message) => {
  console.log(`Success: ${message}`);
});
