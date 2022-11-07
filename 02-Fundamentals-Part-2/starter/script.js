`use strict`;
const calcAverage = (first, second, third) => (first + second + third) / 3;
const dolphins = calcAverage(23, 34, 27);
const koalas = calcAverage(65, 54, 49);

console.log(dolphins, koalas);
// Функция среднего значения баллов двух команд
function averageTwoComand(dolphins1, koalas1) {
  const string = console.log(`${(dolphins1 + koalas1) / 2}`);
  return string;
}
const dolphins1 = averageTwoComand(dolphins, koalas);
// Функция 'checkWinner', которая принимает среднее значение очков каждой команды
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Дельфины победили победили со счетом ${dolphins}`);
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Коалы победили  со счетом ${koalas} против ${dolphins}`);
  } else {
    console.log(`Никакая команда не победила`);
  }
}
const winner = checkWinner(dolphins, koalas);

//----------------------- LECTURE: Functions -----------------------------------

function describeCountry(country, population, capitalCity) {
  const string = console.log(
    `В ${country} проживает ${population} миллионов человек , а её столица ${capitalCity} `
  );
  return string;
}
const string1 = describeCountry("Финляндия", 5, "Хельсинки");
const string2 = describeCountry("Germanu", 5, "pipiska");
const string3 = describeCountry("yaponia", 5, "iphone");

//---------------- LECTURE: Function Declarations vs. Expressions --------------

// function percentageOfWorld1(population) {
//   return population / 79;
// }
// const kitai = percentageOfWorld1(1441);
// const avstralia = percentageOfWorld1(257.4);
// const india = percentageOfWorld1(1393);

// console.log(`Процент населения страны китай от мирового ${kitai} `);
// console.log(`Процент населения страны Австралия от мирового ${avstralia} `);
// console.log(`Процент населения страны Индия от мирового ${india} `);

//----------------------------------------------------------------------
const percentageOfWorld2 = function (population) {
  return population / 79;
};
const russia = percentageOfWorld2(143.4);
const belarus = percentageOfWorld2(9.34);
const iran = percentageOfWorld2(85.03);

console.log(`Процент населения страны Россия от мирового ${russia} `);
console.log(`Процент населения страны Беларусь от мирового ${belarus} `);
console.log(`Процент населения страны Иран  от мирового ${iran} `);
//---------------  Arrow Functions -------------------------------------
const percentageOfWorld3 = (population) => population / 79;
const pacistan = 225.2;
const afganistan = 39.84;
const izrail = 9.364;

const resultPacistan = percentageOfWorld3(pacistan);
const resultAfganistan = percentageOfWorld3(afganistan);
const resultIzrail = percentageOfWorld3(izrail);

console.log(
  `Население Пакистана ${resultPacistan}, 
  Население Афганистана ${resultAfganistan}, 
  Население Израиля  ${resultIzrail}`
);
//--------- LECTURE: Functions Calling Other Functions ------------
function percentageOfWorld1(population) {
  return population / 79;
}
function describePopulation(country, population) {
  const pop = percentageOfWorld1(population);
  const string = console.log(`В ${country} проживает ${population}млн человек, 
что составляет около ${pop} населения мира`);
  return string;
}
describePopulation("Китае", 1441);
describePopulation("Великобритания", 67.33);
//--------------------------------------------------------------------------------------------------------

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  const string = console.log(s.repeat(n));
  return string;
}
repeatStr(6, "I");

//-------------------------------------LECTURE: Introduction to Arrays---------------------------------------------------
const countries = [143.4, 1441, 257.4, 1393];
if (countries.length == 4) {
  console.log(`массив имеет длинну ${countries.length} символов`);
} else {
  console.log(`массив не имеет длинну 4 `);
}

const percentages = [
  percentageOfWorld1(countries[0]),
  percentageOfWorld1(countries[1]),
  percentageOfWorld1(countries[2]),
];
console.log(percentages);
//----------------------------- LECTURE: Basic Array Operations (Methods) ----------------------------------------------

const neighbours = [`Russia`, `Germany`, `China`, `Yapon`];
neighbours.push("Utopia");
console.log(`Вывод массива neighbours ==> ${neighbours}`); // Add utopia

neighbours.pop(); // Delete utopia
console.log(`Удаление из массива Utopia ==>  ${neighbours}`);

// условие проверки массива на наличие страны
if (neighbours.includes(`Germany`)) {
  console.log(`Вы в европпе`);
} else {
  console.log(`Вероятно, вы не в центрально-европейской стране :D'`);
}
console.log(neighbours);
// Нахождение индекса страны в массиве и его замена
if (neighbours.includes(`Germany`)) {
  const indexCountry = neighbours.indexOf(`Germany`);
  console.log(`Индекс найденной страны  ==> ${indexCountry}`);
  neighbours[indexCountry] = `Germany_jopa`;
}
console.log(`Измененный массив ==> ${neighbours}`);
//------------- Coding Challenge #2 -------------------------

const calcTip = function (money) {
  if (money >= 50 && money <= 300) {
    const chai = money * 0.15;
    console.log(`Чаевые составляют $${chai} `);
    return chai;
  } else if (money >= 50 && money >= 300) {
    const chaiBig = money * 0.2;
    console.log(`Чаевые составляют $${chaiBig}`);
    return chaiBig;
  } else {
    console.log(`Расчет без чаевых ваша сумма $${money}`);
    return money;
  }
};
const totalCalc = calcTip(100);
console.log(totalCalc);

const bill = [125, 555, 44]; // массив значений чаевых
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]; // массив для записи расчета значений

// const totalTips = calcTip(bill[0]);
// const totalTips1 = calcTip(bill[1]);
// const totalTips2 = calcTip(bill[2]);

// tips.push([totalTips]); // добавление данных в массив
// tips.push([totalTips1]);
// tips.push([totalTips2]);

console.log(`массив tips принимает вид ==> ${tips}`);
// сумма чаевых плюс счет
const total = Number(bill[0]) + Number(tips[0]);
const total1 = Number(bill[1]) + Number(tips[1]);
const total2 = Number(bill[2]) + Number(tips[2]);
console.log(`счет плюс чаевые ${total} для первого значения. 
счет плюс чаевые ${total1} для второго значения.
счет плюс чаевые ${total2} для третьего значения.`);
//------------ LECTURE: Introduction to Objects ----------------

// const myCountry = {
//   country: "Russia",
//   capital: "Москва",
//   language: "Russian",
//   population: 143.4,
//   neighbours: [`Belarus`, `Ukraine`, `Polsha`],
// };
//------------- LECTURE: Dot vs. Bracket Notation ---------------
const myCountry = {
  country: "Russia",
  capital: "Москва",
  language: "Russian",
  population: 143.4,
  neighbours: [`Belarus`, `Ukraine`, `Polsha`],
};
myCountry.population = 145.4;
console.log(myCountry.population);
myCountry[`population`] = 143.4;
console.log(`В ${myCountry.country} ${myCountry.population} миллионов человек
${myCountry.neighbours.length} соседние страны и столица ${myCountry.capital}`);
