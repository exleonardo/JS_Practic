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
