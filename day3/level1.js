// 1
const firstName = "Nana";
const lastName = "Serova";
const country = "Russia";
const city = "Moscow";
const age = 27;
const isMarried = true;
const year = new Date().getFullYear();

console.log(
  "firstName:",
  typeof firstName,
  "lastName:",
  typeof lastName,
  "country:",
  typeof country,
  "city:",
  typeof city,
  "age:",
  typeof age,
  "isMarried:",
  typeof isMarried,
  "year:",
  typeof year
);

// 2
console.log('10' === 10);

// 3
console.log(parseInt('9.8') === 10);

// 4
console.log(4 >= 3, 4 > 3, 5 <= 6);
console.log(2 >= 3, 2 > 3, 4 <= 3);

// 5

4 > 3 === true;
4 >= 3 === true;
4 < 3 === false;
4 <= 3 === false;
(4 == 4) === true;
(4 === 4) === true;
(4 != 4) === false;
(4 !== 4) === false;
(4 != "4") === false;
(4 == "4") === true;
(4 === "4") === false;
"python".length > "jargon".length === false;

console.log(
  4 > 3 === true,
  4 >= 3 === true,
  4 < 3 === false,
  4 <= 3 === false,
  (4 == 4) === true,
  (4 === 4) === true,
  (4 != 4) === false,
  (4 !== 4) === false,
  (4 != "4") === false,
  (4 == "4") === true,
  (4 === "4") === false,
  "python".length > "jargon".length === false
);

// 6

4 > 3 && 10 < 12 === true,
  4 > 3 && 10 > 12 === false,
  4 > 3 || 10 < 12 === true,
  4 > 3 || 10 > 12 === true,
  !(4 > 3) === false,
  !(4 < 3) === true,
  !false === true,
  !(4 > 3 && 10 < 12) === false,
  !(4 > 3 && 10 > 12) === true,
  !(4 === "4") === true,
  !"dragon".includes("on") === false,
  !"python".endsWith("on") === false;

console.log(
  4 > 3 && 10 < 12 === true,
  4 > 3 && 10 > 12 === false,
  4 > 3 || 10 < 12 === true,
  4 > 3 || 10 > 12 === true,
  !(4 > 3) === false,
  !(4 < 3) === true,
  !false === true,
  !(4 > 3 && 10 < 12) === false,
  !(4 > 3 && 10 > 12) === true,
  !(4 === "4") === true,
  !"dragon".includes("on") === false,
  !"python".endsWith("on") === false
);

// 7
console.log('What is the year today?', new Date().getFullYear());
console.log('What is the month today as a number?', new Date().getMonth() + 1);
console.log('What is the date today?', new Date().getDate())
console.log('What is the day today as a number?', new Date().getDay())
console.log('What is the hours now?', new Date().getHours())
console.log('What is the minutes now?', new Date().getMinutes())
console.log('Find out the numbers of seconds elapsed from January 1, 1970 to now.', new Date().getTime())