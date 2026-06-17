"use strict";
// using callback
const judge = (grade) => {
  switch (grade) {
    case "A":
      return "Excellent";
      break;
    case "B":
      return "Good";
      break;
    case "C":
      return "Average";
      break;
    case "D":
      return "Poor";
      break;
    case "F":
      return "Fail";
      break;
    default:
      return "Invalid grade";
      break;
  }
};

const getGrade = (score, callback) => {
  let grade;

  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 40:
      grade = "D";
      break;
    case score >= 0:
      grade = "F";
      break;
    default:
      grade = "Invalid grade";
      break;
  }
  return callback(grade);
};

let result = getGrade(85, judge);
console.log(`You got a ${result} result`);
result = getGrade(95, judge);
console.log(`You got a ${result} result`);
result = getGrade(25, judge);
console.log(`You got a ${result} result`);

// exercise
const greet = (fullname = []) => {
  return `Hello, ${fullname.join(" ")}!`;
};

const greeter = (fullname, callback) => {
  return callback(fullname);
};

let greeting = greeter(["John", "Doe"], greet);
console.log(greeting);

console.log(greeter("Java,Script".split(","), greet));
