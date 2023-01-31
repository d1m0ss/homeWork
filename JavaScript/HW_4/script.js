// #### Task 1 💻

const user0 = {
  name: "Antonio",
  age: 21,
};

delete user0.age;
delete user0.name;
console.log(user0);

// #### Task 2 🖥

let user1 = {
  name: "Stas",
  age: 19,
};

console.log("name" in user1);
// console.log(user1.hasOwnProperty("name"));

// #### Task 4 🖥

const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
let color = colors["ru pum pu ru rum"];
console.log(color.red, color.blue);

// #### Task 5 🖥

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey: 664,
  alexandra: 199,
};

let salariesArr = Object.values(salaries),
  salariesSum = 0;

salariesSum = salariesArr.reduce((a, b) => a + b, 0);
let salariesMid = salariesSum / salariesArr.length;
console.log(salariesMid);

// #### Task 6 🖥

// let user = {};
// user.name = prompt("Введте имя");
// user.password = prompt("Введте пароль");
// let isUser = {};
// isUser.name = prompt("Подтвердите имя");
// isUser.password = prompt("Подтвердите пароль");
// if (user.name === isUser.name && user.password === isUser.password) {
//     console.log(`Добро пожаловать ${user.name}`);
// } else {
//     console.log('Не добро пожаловать. Переделывай');
// }

// ### ADVANCED level

// #### Task 1 👨‍🏫

let score = "2:5".split(":");
let textScore = [
  "Ноль",
  "Один",
  "Два",
  "Три",
  "Четыре",
  "Пять",
  "Шесть",
  "Семь",
  "Восемь",
  "Девять",
];
let bols = ["мячь", "мяча", "мячей"],
  bol1,
  bol2;

if (score[0] === "1") {
  bol1 = bols[0];
} else if (score[0] === "2" || score[0] === "3" || score[0] === "4") {
  bol1 = bols[1];
} else {
  bol1 = bols[2];
}
if (score[1] === "1") {
  bol2 = bols[0];
} else if (score[1] === "2" || score[1] === "3" || score[1] === "4") {
  bol2 = bols[1];
} else {
  bol2 = bols[2];
}
console.log(
  `Команда A : ${textScore[score[0]]} ${bol1}. Команда Б : ${
    textScore[score[1]]
  } ${bol2}`
);

// #### Task 2 🖥

let student1 = {
  name: "Polina",
  age: 27,
};

let student2 = {
  name: "Polina",
  age: 27,
};

console.log(JSON.stringify(student1) === JSON.stringify(student2));

// ### NORMAL level

// #### Task 1 🖥

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

fibonacci.forEach((val) => console.log(val));
fibonacci.forEach(function (val) {
  console.log(val);
});

// #### Task 2 🖥

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
let members1 = users.map((val, indx) => "member " + (indx + 1) + ": " + val);
let members2 = users.map(function (val, index) {
  return "Member " + (index + 1) + ": " + val;
});
console.log(members1);
console.log(members2);

// #### Task 3 🖥

const numbers = [7, -4, 32, -90, 54, 32, -21];
let filteredNums1 = numbers.filter((val) => val >= 0);
console.log(filteredNums1);
let filteredNums2 = numbers.filter(function (val) {
  return val >= 0;
});
console.log(filteredNums2);

// #### Task 4 🖥

const fibonacciSum = fibonacci.reduce((accum, val) => (accum += val), 0);
console.log(fibonacciSum);
const fibonacciSum1 = fibonacci.reduce(function (accum, val) {
  return (accum += val);
}, 0);
console.log(fibonacciSum1);

// #### Task 5 🖥

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const findNumber = numbers1.find((val) => val % 2 === 0);
console.log(findNumber);
const findNumber1 = numbers1.find(function (val) {
  return val % 2 === 0;
});
console.log(findNumber1);

// ### ADVANCED level

// #### Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

const testCopment = "This website is for losers LOL!";
const antiTroll = (string) => {
  const vowels = ["A", "E", "I", "O", "U", "Y"];
  let filteredComet;
  let comentArr = [];
  let leter = "";
  for (let i = 0; i < string.length; i++) {
    comentArr.push(string[i]);
  }
  filteredComet = comentArr.filter((val) => {
    for (let i = 0; i < vowels.length; i++) {
      if (val == vowels[i].toLowerCase()) {
        return val
      }
    }
  });
  console.log(filteredComet);
};

antiTroll(testCopment);
