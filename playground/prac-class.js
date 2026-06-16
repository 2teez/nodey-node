"use strict";

class Person {
  constructor(name = "Doe Joe", age = 1) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}

const person = new Person("java", "36");
person.greet();
