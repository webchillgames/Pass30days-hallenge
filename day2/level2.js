// 1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');
// 2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
// 3
console.log('10' === String(10));
console.log('10' === '' + 10);
// 4
console.log(Math.round(parseFloat('9.8')) === 10);
// 5
console.log('pyton'.includes('on'));
console.log('jargon'.includes('on'));
console.log('pyton'.endsWith('on'));
console.log('jargon'.endsWith('on'));
// 6
console.log('I hope this course is not full of jargon'.includes('jargon'));
// 7
console.log(Math.random() * 101);
// 8
console.log(Math.random() * (101 - 51) + 51);
// 9
console.log(Math.random() * 256);
// 10
const random = Math.round(Math.random() * 'JavaScript'.length)
console.log('JavaScript'[random]);
// 11
console.log(`1 \ 1 \ 1 \ 1 \ 1 \n
2 \ 1 \ 2 \ 4 \ 8 \n
3 \ 1 \ 3 \ 9 \ 27 \n 
4 \ 1 \ 4 \ 16 \ 64 \n
5 \ 1 \ 5 \ 25 \ 125`);
// 12
const t = 'You cannot end a sentence with because because because is a conjunction'
const start = t.indexOf('because')
const end = t.lastIndexOf('because') + 'because'.length
console.log(t.slice(start, end));
