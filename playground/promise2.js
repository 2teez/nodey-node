"use strict";

// promise variable
let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey! it works!");
    reject("unable to resolve the issues.");
  }, 2500);
})
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((errMessage) => {
    console.log(`Err: ${errMessage}`);
  });

// using promise to add two number
//
const addNumber = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("The values must be numbers");
      }
    }, 1500);
  });
};

addNumber(5, 7)
  .then((result) => {
    console.log(`Result: ${result}`);
    return addNumber(result, 33);
  })
  .then((result) => {
    console.log(`Result: ${result}`);
  })
  .catch((errMsg) => {
    console.log(errMsg);
  });
