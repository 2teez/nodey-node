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

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}.`);
  }
}

const dog = new Animal("dog", "woof");
dog.makeSound();

const snake = new Animal("snake", "hiss");
snake.makeSound();

Animal.prototype.walks = function (numberOfLegs = 4) {
  if (numberOfLegs === 0) {
    console.log(`${this.name} crawls.`);
  } else {
    console.log(`${this.name} walks on ${numberOfLegs} legs.`);
  }
};

dog.walks();
snake.walks(0);

const man = new Animal("man", "talks..");
man.walks(2);

class Employee {
  constructor(firstName, lastName, numberOfYears) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.numberOfYears = numberOfYears;
  }
}

const employee = new Employee("John", "Doe", 5);
const employee2 = new Employee("Jane", "Doe", 3);

const ama = [employee, employee2];

Employee.prototype.getEmployeeDetails = function () {
  return `${this.firstName} ${this.lastName} has been working for ${this.numberOfYears} years.`;
};

for (const employee of ama) {
  console.log(employee.getEmployeeDetails());
}

// using forEach
ama.forEach((employee) => console.log(employee.getEmployeeDetails()));
