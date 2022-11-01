`use strict`;
const calcAverage = (first, second, third) => (first + second + third) / 3;
const dolphins = calcAverage(44, 23, 71);
const koalas = calcAverage(65, 54, 49);

console.log(dolphins, koalas);
// Функция среднего значения баллов двух команд
function averageTwoComand(dolphins1, koalas1) {
  const string = console.log(`${(dolphins1 + koalas1) / 2}`);
  return string;
}
const dolphins1 = averageTwoComand(dolphins, koalas);
const koalas1 = averageTwoComand(65, 54);

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
//------------------------------------------------------------------------------

//---------------- LECTURE: Function Declarations vs. Expressions --------------

function percentageOfWorld1(population) {
  return population / 79;
}
const kitai = percentageOfWorld1(1441);
const avstralia = percentageOfWorld1(257.4);
const india = percentageOfWorld1(1393);

console.log(`Процент населения страны китай от мирового ${kitai} `);
console.log(`Процент населения страны Австралия от мирового ${avstralia} `);
console.log(`Процент населения страны Индия от мирового ${india} `);

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

//-------------------------------------------------------------------------------------------------------
