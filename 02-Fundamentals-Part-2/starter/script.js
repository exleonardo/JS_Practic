`use strict`;
const calcAverage = (first, second, third) => (first + second + third) / 3;
const dolphins = calcAverage(44, 23, 71);
const koalas = calcAverage(65, 54, 49);

console.log(dolphins, koalas);
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
