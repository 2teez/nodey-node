"use strict";

const square = (x) => x * x;
console.log(square(9));

let user = {
  name: "java",
  age: 34,
  sayHi: () => {
    // console.log(arguments);
    console.log(`Hi, my name is ${user.name}. I'm ${user.age} years old.`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi, my name is ${this.name}. I'm ${this.age} years old.`);
  },
};

user.sayHi(/*1, 2, 3, 4*/);
user.sayHiAlt(1, 2, 3, 4);
