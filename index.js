const prompt = require("prompt-sync")();

// Practice Set 2
// Q1
let age = prompt("Enter your age : ");
age = Number.parseInt(age);

if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20");
} else {
  console.log("Your age doesn't lies between 10 and 20");
}

// Q2
let age1 = prompt("What is your age : ");
age1 = Number.parseInt(age1);

switch (age1) {
  case "12":
    console.log("Your age is 12.");
    break;
  case "13":
    console.log("Your age is 13.");
    break;
  case "14":
    console.log("Your age is 14.");
    break;
  case "15":
    console.log("Your age is 15.");
    break;
  default:
    console.log("Your age is not special.");
    break;
}

// Q3
let num = prompt("Enter the number : ");
num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0)
  console.log("The number is divisible by both 2 and 3");
else if (num % 2 == 0) console.log("The number is divisible by 2");
else if (num % 3 == 0) console.log("The number is divisible by 3");
else console.log("The number is not divisible by 2 and 3");

// Q4
let num1 = prompt("Enter the number : ");
num1 = Number.parseInt(num1);

if (num1 % 2 == 0 || num1 % 3 == 0)
  console.log("The number is divisible either by 2 or 3");
else console.log("The number is neither divisible by 2 nor by 3");

// Q5
let age2 = prompt("Enter your age : ");
age2 = Number.parseInt(age2);

age2 >= 18 ? console.log("You can drive") : console.log("You can not drive");

// Practice Set 3
// Q1
let marks = {
  Anil: 85,
  Anirudh: 95,
  Monalisa: 14,
  Samarth: 90,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " : " +
      marks[Object.keys(marks)[i]],
  );
}

// Q2
for (let key in marks) {
  console.log("The marks of " + key + " : " + marks[key]);
}

// Q3
let cn = prompt("Enter the correct number : ");
let i;
while (i != cn) {
  i = prompt("Enter a number : ");
}
console.log("You have entered a correct number");

// Q4
const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 4;
};

console.log(mean(4, 5, 6, 7, 8));
