// 1
const base = window.prompt("Eneter BASE of triangle:");
const height = window.prompt("Eneter HEIGHT of triangle:");

window.alert(`
Enter base: ${base}
Enter height: ${height}
The area of the triangle is: ${base * height * 0.5}
`
);

// 2
const a = window.prompt("Enter side 1:");
const b = window.prompt("Enter side 2:");
const c = window.prompt("Enter side 3:");
const result = Number(a) + Number(b) + Number(c)

window.alert(`
Enter side a: ${a}
Enter side b:  ${b}
Enter side c:  ${c}
The perimeter of the triangle is  ${result}`
);

// 3
const length = window.prompt('Enter length:')
const width = window.prompt('Enter width:')
const perimeter = 2 * (Number(length) + Number(width))

window.alert(`
length: ${length}
width: ${width}
perimeter: ${perimeter}
`)

// 4
const radius = window.prompt('Enter radius:')
const pi = 3.14
const area = pi * (radius ** 2)
const circumference = 2 * pi * radius

window.alert(`
radius ${radius}
area ${area}
circumference ${circumference}
`)

// 9
const hours = window.prompt('Enter hours')
const ratePerHour = window.prompt('Enter rate per hour')
const weeklyEarning = hours * ratePerHour

window.alert(`
Enter hours: ${hours}
Enter rate per hour:  ${ratePerHour}
Your weekly earning is  ${weeklyEarning}
`)

// 10
const userName = "Nana";
const result1 = userName.length > 7 ? "your name is long" : "your name is short"
console.log(result1);

// 11
const firstName = 'Nananana'
const lastName = 'Serova'

const result2 = firstName.length > lastName.length
? `Your first name, ${firstName} is longer than your family name, ${lastName}`
: `Your family name, ${firstName} is longer than your first name, ${lastName}`

console.log(result2);

// 12
let myAge = 250;
let yourAge = 25;

console.log(`
I am ${myAge - yourAge} years older than you.
`);

// 13
const userBirthYear = window.prompt("Enter birth year. Format XXXX (1984, 2000...)");
const fullYear = new Date().getFullYear();

if (userBirthYear.length === 4) {
  const userAge = fullYear - Number(userBirthYear);
  const result3 =
    userAge > 18
      ? `You are ${userAge}. You are old enough to drive`
      : `You are ${userAge}. You will be allowed to drive after ${
          18 - userAge
        } years.`;

  console.log(result3);
}

// 14
const userLived = window.prompt("Enter number of years you live");

window.alert(`
You lived ${(60 * 60 * 24 * 365) * userLived} seconds
`);

// 15
function correctDate(v) {
   return v > 9 ? v : `0${v}`
}

const currentDay = correctDate(new Date().getDay())
const currentYear = new Date().getFullYear()
const currentMonth = correctDate(new Date().getMonth())
const currentMins = correctDate(new Date().getMinutes())
const currentHours = correctDate(new Date().getHours())

// YYYY-MM-DD HH:mm
console.log(`
${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMins}
`);
// DD-MM-YYYY HH:mm
console.log(`
${currentDay}-${currentMonth}-${currentYear} ${currentHours}:${currentMins}
`);
// DD/MM/YYYY HH:mm
console.log(`
${currentDay}/${currentMonth}/${currentYear} ${currentHours}:${currentMins}
`);
