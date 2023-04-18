// 1
function correctDate(v) {
  return v > 9 ? v : `0${v}`;
}

const currentDay = correctDate(new Date().getDay());
const currentYear = new Date().getFullYear();
const currentMonth = correctDate(new Date().getMonth());
const currentMins = correctDate(new Date().getMinutes());
const currentHours = correctDate(new Date().getHours());

// console.log(`
// ${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMins}
// `);

// 5
// console.log(`
//     y = 2x - 2
//     x = 0
//     y = 2 * 0 - 2
//     y = -2
//     y-intercept: 0, -2
// `);

// console.log(`
//     y = 2x - 2
//     y = 0
//     0 = 2x - 2
//     2 = 2x
//     2 / 2 = x
//     1 = x
//     x-intercept: 1, 0
// `);

const slop1 = 2 / 1;

// console.log(`
//     slope: slop1
// `);

// 6
// point (2, 2) and point(6,10)
const y2 = 10;
const y1 = 2;
const x1 = 6;
const x2 = 2;
const slop2 = (y2 - y1) / (x2 - x1);
// console.log(slop2);

// 7
// console.log(slop1 > slop2);

// 8
function findY() {
  const a = 1;
  const b = 6;
  const c = 9;
  const D = b ** 2 - 4 * a * c
  const x1 = (-b + Math.sqrt(D)) / (2 * a)
  const x2 = (-b - Math.sqrt(D)) / (2 * a)
  const y = x1 ** 2 + 6 * x2 + 9
  console.log(y);
}

findY();
