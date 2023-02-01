// #### Task 1 🖥

const colors = ["red", "green", "blue"];
console.log(colors.length);

// #### Task 2 🖥

const animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]);

//  #### Task 3 🖥

const numbers = [5, 43, 63, 23, 90];
const slicedNums = numbers.slice(numbers.length);
console.log(slicedNums);
for (let i = numbers.length; i > 0; i--) {
  numbers.pop();
}
console.log(numbers);

// #### Task 4 🖥

const students = ["Polina", "Dasha", "Masha"];
students.pop();
students.shift();
students.push("Borya");
students.unshift("Andrey");
console.log(students);

// #### Task 5 🖥

const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
for (const item of cats) {
  console.log(item);
}

// #### Task 6** 🖥

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let combindNumbers = [];
for (let i = 0; i < evenNumbers.length; i++) {
  combindNumbers.push(oddNumbers[i]);
  combindNumbers.push(evenNumbers[i]);
}
console.log(combindNumbers, ".indexOf(8):", combindNumbers.indexOf(8));

// #### Task 7** 🖥

const binary = [0, 0, 0, 0];
let stringBinary = "";
for (let i = 0; i < binary.length; i++) {
  if (!(i === binary.length - 1)) {
    stringBinary += binary[i] + "1";
  } else {
    stringBinary += binary[i];
  }
}
console.log(stringBinary);

// ### ADVANCED level

// #### Task 1** 👨‍🏫
let word = "Доход";
const isPolydrom = (string) => {
  let prevString = string.slice(0, Math.floor(string.length / 2)).toLowerCase(),
    postString = string
      .slice(Math.ceil(string.length / 2))
      .split("")
      .reverse()
      .join("")
      .toLowerCase();
  return prevString === postString;
};
console.log(isPolydrom(word));

// #### Task 2 👨‍🏫

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];
let matrixSum = 0;
let matrixCount = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let a = 0; a < matrix[i].length; a++) {
    matrixSum += matrix[i][a];
    matrixCount++;
  }
}
console.log(matrixSum / matrixCount);

// #### Task 3** 👨‍🏫

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
const posNumbers = mixedNumbers.filter((val) => val >= 0).sort((a, b) => a - b);
const negNumbers = mixedNumbers.filter((val) => val < 0).sort((a, b) => b - a);
console.log(posNumbers, negNumbers);

// #### Task 4** 👨‍🏫

const rundomSqrNumbersArray = (range = 5) => {
  let randomNumsArr = [];
  if (range > 10) {
    range = 10;
  } else if (range < 5) {
    range = 5;
  }
  for (let i = 0; i < range; i++) {
    randomNumsArr.push(Math.round(Math.random() * 10));
  }
  let sqrArray = randomNumsArr.map((val) => Math.pow(val, 3));
  console.log(randomNumsArr, sqrArray);
};
rundomSqrNumbersArray()
