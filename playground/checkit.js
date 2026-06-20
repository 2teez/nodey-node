"use strict";
const fibo = (n) => {
  if (n < 2) {
    return 1;
  }
  return fibo(n - 2) + fibo(n - 1);
};
console.time("timer");
setTimeout(() => {
  console.log("Hello...");
}, 1000);
console.timeEnd("timer");
fibo(44);
