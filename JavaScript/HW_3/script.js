let people = [
  { name: "Alex", bill: 3000 },
  { name: "Ivan", bill: 2000 },
  { name: "Vadim", bill: 1000 },
  { name: "Vova", bill: 300 },
];

// 1) Увеличить зарплату в 3 раза

let tripleBill = people.map((val) => val.bill * 3);
console.log(tripleBill);

// 2) Прибавить к зарплате 10%

let persentBill = people.map((val) => Math.floor(val.bill * 1.1));
console.log(persentBill);

// 3) Уменьшить зарплату в 3 раза

let reduseBill = people.map((val) => Math.floor(val.bill / 3));
console.log(reduseBill);

// 4) Суммировать уровни зарплат

let sumBill = people.reduce((a, b) => a + b.bill, 0);
console.log(sumBill);

// 5) Найти всех людей с зарплатой меньше 500

let fiteredBill = people.filter((val) => val.bill < 500);
console.log(fiteredBill);

// 6) Найти человека с именем Vadim

let fiteredVadim = people.filter((val) => val.name === "Vadim");
console.log(fiteredVadim);

// 7) Найти человека с зарплатой больше 3000

let bigBill = people.filter((val) => val.bill >= 3000);
console.log(bigBill);

let people2 = [
  { name: "Alex", bill: 3000 },
  { name: "Ivan", bill: 2000 },
  { name: "Vadim", bill: 1000 },
  { name: "Vova", bill: 300 },
];

// 8) Совместить два массива people2 и people

let concPeoples = people.concat(people2);
console.log(concPeoples);

// 9)Найти человека с именем Alex

let findAlex = concPeoples.find((val) => val.name === "Alex");
console.log(findAlex);

// 10)Найти человека с зарплатой 1000

let findBill = concPeoples.find((val) => val.bill === 1000);
console.log(findBill);

// 11)Найти человека с именем Vadim

let findVadim = concPeoples.find((val) => val.name === "Vadim");
console.log(findVadim);

// 12)Найти человека с зарплатой 300

let threHundredBill = concPeoples.findIndex((val) => val.bill === 300);
console.log(threHundredBill);

// 13)Найти человека с именем Yura

let findYura = concPeoples.findIndex((val) => val.name === "Yura");
console.log(findYura < 0 ? "Нету Юры" : "Есть Юра");

// 14) Добавить 6 элементов в массив(Hard code не принимается)
concPeoples.map((val) => concPeoples.push(val));
console.log(concPeoples);

// 15) Убрать все элементы в массиве

let slisedArray = concPeoples.slice(concPeoples.length);
console.log(slisedArray);

// 16) Убрать все элементы в массиве

concPeoples.forEach((val) => {
  concPeoples.pop();
  concPeoples.pop();
  concPeoples.pop();
  concPeoples.pop();
});
console.log(concPeoples);

// 17) Добавить 2 элемента и удалить 2 элемента

concPeoples.unshift(people[0], people[1]);
console.log(concPeoples);
concPeoples.map((val) => {
  concPeoples.shift();
  concPeoples.shift();
});
console.log(concPeoples);

// 18)Проверить, есть ли в массиве человек с именем Юра (двумя методами)

concPeoples = people.concat(people2);
concPeoples.push({ name: "Yura", bill: 2500 });
let haveYura = concPeoples.some((val) => val.name === "Yura");
console.log(haveYura);
haveYura = concPeoples.every((val) => val.name === "Yura");
console.log(haveYura);

let numbers = [3, 25, 63, 51, 4321, 42];

// 19) Отсортировать Массив по возрастанию

numbers.sort((a, b) => a - b);
console.log(numbers);

// 20) Отсортировать Массив по убыванию

// numbers.reverse();
numbers.sort((a, b) => b - a);
console.log(numbers);
