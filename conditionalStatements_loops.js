let temperature = 22;

if (temperature < 0) {
  console.log("it's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("it's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("it's mild.");
} else {
  console.log("it's warm.");
}

let tempcategory;

if (temperature < 0) {
  tempcategory = "freezing";
} else if (temperature >= 0 && temperature <= 15) {
  tempcategory = "cold";
} else if (temperature >= 16 && temperature <= 25) {
  tempcategory = "mild";
} else {
  tempcategory = "warm";
}

switch (tempcategory) {
  case "freezing":
    console.log("it's freezing!");
    break;
  case "cold":
    console.log("it's cold.");
    break;
  case "mild":
    console.log("it's mild.");
    break;
  case "warm":
    console.log("it's warm.");
    break;
}

let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("divisible by both.");
} else if (number % 2 === 0) {
  console.log("divisible by 2.");
} else if (number % 3 === 0) {
  console.log("divisible by 3.");
} else {
  console.log("not divisible by 2 or 3.");
}

let divisibilitytype = "";

if (number % 2 === 0) {
  divisibilitytype += "2";
}
if (number % 3 === 0) {
  divisibilitytype += "3";
}

switch (divisibilitytype) {
  case "23":
    console.log("divisible by both.");
    break;
  case "2":
    console.log("divisible by 2.");
    break;
  case "3":
    console.log("divisible by 3");
    break;
  default:
    console.log("not divisible by 2 or 3.");
    break;
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("sum of numbers from 1 to 100:", sum);

const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > largest) {
    largest = numbers2[i];
  }
}
console.log("largest number:", largest);

let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}

let evennum = 2;
while (evennum <= 20) {
  console.log(evennum);
  evennum += 2;
}

let whilesum = 0;
let whilecount = 1;
while (whilecount <= 100) {
  whilesum += whilecount;
  whilecount++;
}
console.log("sum of numbers from 1 to 100:", whilesum);

let multiple = 5;
while (multiple < 50) {
  console.log(multiple);
  multiple += 5;
}

let docount = 1;
do {
  console.log(docount);
  docount++;
} while (docount <= 10);

let dosum = 0;
let docounter = 1;
do {
  dosum += docounter;
  docounter++;
} while (docounter <= 100);
console.log("sum of numbers from 1 to 100:", dosum);

let userinput = 5;
do {
  console.log("please enter a number greater than 10");
  userinput = 15;
} while (userinput <= 10);

let secretnumber = 7;
let guess = 0;
do {
  console.log("guess a number between 1 and 10");
  guess = 7;
} while (guess !== secretnumber);