"use strict";

console.log("Starts Here!");

setTimeout(() => {
  console.log("Inside callback..");
}, 2000);

setTimeout(() => {
  console.log("Second setTimeout");
}, 0);

console.log("Finishing up...");
