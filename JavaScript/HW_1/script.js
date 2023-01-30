console.log("--Task 1--");

let x = 20,
  y = 58,
  z = 42;

console.log(`The sum of (x y z) is ${x + y + z}`);

console.log("--Task 2--");

const seconds = 60,
  minutes = 60,
  hours = 24,
  days = 365,
  myAge = 24;
let myAgeInSeconds = myAge * days * hours * minutes * seconds;
console.log(`My age in seconds is ${myAgeInSeconds}`);

console.log("--Task 3--");

let count = 42;
let userName = "42";

let stringCount1 = count + "";
let stringCount2 = toString(count);

let numberUserName1 = Number(userName);
let numberUserName2 = parseFloat(userName);

console.log(
  `Count to string first way (count + '') result: ${typeof stringCount2}`
);
console.log(
  `Count to string second way (toString(count)) result: ${typeof stringCount2}`
);
console.log(
  `UserName to number first way (Number(userName)) result: ${typeof numberUserName1}`
);
console.log(
  `UserName to number second way (parseFloat(userName)) result: ${typeof numberUserName2}`
);

console.log("--Task 4--");

let a = 1;
let b = 2;
let c = "белых медведей";
console.log("" + a + b + " " + c);

console.log("--Task 5--");

let wordA = "доступ",
  wordB = "морпех",
  wordC = "наледь",
  wordD = "попрек",
  wordE = "рубило",
  lengthWords =
    wordA.length + wordB.length + wordC.length + wordD.length + wordE.length;
console.log(`The length of words is ${lengthWords}`);

console.log("--Task 6--");

let variableFunc = function () {},
  boolean = true,
  nole = null;

console.log(`Variable: variableFunc have type: ${typeof variableFunc}`);
console.log(`Variable: boolean have type: ${typeof boolean}`);
console.log(`Variable: nole have type: ${typeof nole}`);

console.log("--Task 7--");

console.log("uncomet this task if it is");

// let uName = prompt('Ваше имя?')
// let uAge = prompt('Ваш возраст?')

// console.log(`Ваше имя: ${uName}`);
// console.log(`Ваш возраст: ${uAge}`);

console.log("--ADVANCED level--");
console.log("--Task 1--");

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
console.log(
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]
);

console.log("--NORMAL  level--");
console.log("--Task 1--");

let examleVarib1 = "true",
  examleVarib2 = false,
  examleVarib3 = 17,
  examleVarib4 = undefined,
  examleVarib5 = null;
console.log(
  typeof examleVarib1,
  typeof examleVarib2,
  typeof examleVarib3,
  typeof examleVarib4,
  typeof examleVarib5
);

console.log("--Task 2--");

let height = 15;
let width = 20;

height > width ? console.log(height) : console.log(width);

console.log("--Task 3--");

let i = 0;
do {
  i++;
  if (i % 3 == false) {
    console.log(i);
  }
} while (i < 20);

console.log("--Task 4--");

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);

console.log(`Should i go to work? ${shouldGoToWork}`);

console.log("--Task 5--");

console.log("uncomet this task if it is");

// let fbValue = prompt('Введите число', 15)
// if (fbValue % 3 == 0 && fbValue % 5 == 0) {
//     console.log('FizBuz')
// } else if (fbValue % 3 == 0) {
//     console.log('Fiz')
// } else {
//     console.log('Buz');
// }

console.log("--Task 6--");

console.log("uncomet this task if it is");

// let ageValue = prompt('Введите ваш возраст', 24)
// if (ageValue >= 16 && ageValue <= 18 ) {
//     console.log('Можешь выкурить сигаретку, только маме не говори')
// } else if (ageValue < 18) {
//     console.log('Пей колу')
// } else {
//     console.log('Попей пивка');
// }

console.log("--Task 7--");

console.log("uncomet this task if it is");

// let wSide;

// do {
//   wSide = prompt(
//     "В какую сторону света вы бы хотели отвравиться?"
//   ).toLowerCase();
// } while (
//   (wSide == "юг" ||
//     wSide == "север" ||
//     wSide == "запад" ||
//     wSide == "восток") === false
// );

// if (wSide == "юг") {
//   console.log("на юг пойдешь счастье найдешь");
// } else if (wSide == "север") {
//   console.log("на север пойдешь много денег найдешь");
// } else if (wSide == "запад") {
//   console.log("на запад пойдешь верного друга найдешь");
// } else {
//   console.log("на восток пойдешь разработчиком станешь");
// }

console.log("--ADVANCED level--");
console.log("--Task 1--");

let user = "дМиТрИй вОлКоВ".toLowerCase(),
  result = "Привет! ";
result += user[0].toUpperCase();
for (let i = 1; i < user.length; i++) {
  const prev = user[i - 1],
    curr = user[i];
  if (prev == " ") {
    result += curr.toUpperCase();
  } else {
    result += curr.toLowerCase();
  }
}
console.log(result);

console.log("--Task 2--");

let val = +prompt('Введите число'),
  minu = +prompt('Сколько отнять?'),
  plus = +prompt('Сколько прибваить?'),
  ink = +prompt('Сколько умножить?'),
  slsh = +prompt('На сколько разделить?');

  console.log(((((val - minu) + plus) * ink) / slsh));

console.log("--Task 3--");

let steps = 6,
  hash = "#";
i = 0;

do {
  console.log(hash);
  i++;
  hash += "#";
} while (steps > i);
