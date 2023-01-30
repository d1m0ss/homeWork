// Task 1

function getSum(numb) {
  let sum = 0;
  for (let i = 1; i <= numb; i++) {
    sum += i;
  }
  console.log(sum);
}

// Task 2

function getCredit() {
  const persent = 0.17;
  const age = 5;
  let sum = 0;
  return (value) => {
    sum = value * (1 + persent * age);
    console.log(`Переплата по кредиту в ${value} составит: ${sum - value}`);
  };
}

let credit = getCredit();
credit(1000);

// Task 3

function trimString(string, prev, post) {
  let trimedString = "";
  if (post > string.length) {
    post = string.length;
  } else if (post < 0) {
    post = string.length + post;
  }
  for (let index = prev; index < post; index++) {
    trimedString += string[index];
  }
  console.log(`Обрезаная строк от ${prev} "${trimedString}" по ${post}`);
}

trimString("Dmirtiy volkov", 1, -1);

// Task 4

function getSumNumbers(number) {
  let sum = 0;
  let numstr = number.toString();
  for (let index = 0; index < numstr.length; index++) {
    sum += +numstr[index];
  }
  console.log(`Сумма чисел ${number} ровна: ${sum}`);
}
getSumNumbers(2021);

// Task 5

function getSum(a, b) {
  sum = 0;

  for (let index = a; index <= b; index++) {
    if (a === index) {
      sum = index;
    } else {
      sum += index;
    }
  }
  if (a === b) {
    console.log(a);
  } else if (b === 0) {
    console.log(a + b);
  } else {
    console.log(sum);
  }
}
getSum(-1, 2);

// Task 6

function fooboo(bool, fooFunc, booFunc) {
  bool === true ? fooFunc() : booFunc();
}

function foo() {
  console.log("foo");
}
function boo() {
  console.log("boo");
}
fooboo(true, foo, boo);

// Task 7

function triangle(a, b, c) {
  console.log(a + b > c && b + c > a && a + c > b ? true : false);
}
triangle(1, 3, 3);

// Task 8

function choko(n, m) {
  if (n * m <= 0) {
    console.log("Шоколоадка отсутствует! ШОК!!!");
  } else {
    console.log(`Для плитки шоколада ${n} на ${m} нужно ${n * m - 1} надлмов`);
  }
}
choko(3, 0);

// Task 9

function byMobile(cash) {
  const mobPrice = 999;
  const mobAcesories = 49;
  const tax = 9;
  let currenMoney = cash;
  const totalPrice =
    currenMoney / ((mobPrice + mobAcesories) * (1 + tax / 100));
  for (let i = 0; i < Math.floor(totalPrice); i++) {
      currenMoney = currenMoney - (mobPrice + mobAcesories) * (1 + tax / 100);
      console.log(`Вы купили телефон за ${mobPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'BYN' })} аксесуар к нему ${mobAcesories.toLocaleString('ru-RU', { style: 'currency', currency: 'BYN' })} плюс налог ${tax}% итого ${((mobPrice + mobAcesories) * (1 + tax / 100)).toLocaleString('ru-RU', { style: 'currency', currency: 'BYN' })} `);
      console.log(`Ваш баланс ${currenMoney.toLocaleString('ru-RU', { style: 'currency', currency: 'BYN' })}`);
  }
}
byMobile(15000);