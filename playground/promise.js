"use strict";

const counter = (num) => {
  console.log(num);
};

new Promise((resolve, reject) => {
  resolve("Start Counting...");
})
  .then((result) => {
    console.log(result);
    counter("one.");
  })
  .then((result) => {
    counter("two..");
  })
  .then((result) => {
    counter("three...");
  })
  .catch((result) => {
    console.log(result);
  });
