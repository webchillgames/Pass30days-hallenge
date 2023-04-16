// 1
console.log(
  "Love is the best thing in this world. Some found their love and some are still looking for their love.".match(
    /love/gi
  ).length
);
// 2
console.log(
  "You cannot end a sentence with because because because is a conjunction".match(
    /because/
  ).length
);
// 3
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const clearedSentence = sentence
  .match(/[\w\s]/gi)
  .join("")
  .split(" ");

const words = {};

clearedSentence.forEach((v) => {
  let i = 0;

  clearedSentence.forEach((j) => {
    if (j === v) {
      i++;
    }
  });

  if (!words.hasOwnProperty(v)) {
    words[v] = i;
  }
});

let top = 0;
let topWord;

for (let key in words) {
  if (words[key] > top) {
    top = words[key];
    topWord = key;
  }
}

console.log("the most frequent word is: ", topWord);

// 4
const sentence2 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const money = sentence2.match(/\d+\s/gi);
const result = money.reduce((a, c) => Number(a) + Number(c), 0);
