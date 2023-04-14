console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
console.log('10' === String(10));
console.log('10' === '' + 10);
console.log('10' === '' + 10);
console.log(Math.round(parseFloat('9.8')) === 10);
console.log('pyton'.includes('on'));
console.log('jargon'.includes('on'));
console.log('pyton'.endsWith('on'));
console.log('jargon'.endsWith('on'));
console.log(Math.random() * 101);
console.log(Math.random() * (101 - 51) + 51);

const r = Math.random()
console.log(r, r *  101);

console.log(Math.random() * 256);
console.log('JavaScript'.split(''));
console.log('JavaScript'[0]);

const random2 = Math.round(Math.random() * 'JavaScript'.length)
console.log('JavaScript'[random2]);

console.log(`1 \ 1 \ 1 \ 1 \ 1 \n
2 \ 1 \ 2 \ 4 \ 8 \n
3 \ 1 \ 3 \ 9 \ 27 \n 
4 \ 1 \ 4 \ 16 \ 64 \n
5 \ 1 \ 5 \ 25 \ 125`);

const t = 'You cannot end a sentence with because because because is a conjunction'
const start = t.indexOf('because')
const end = t.lastIndexOf('because') + 'because'.length
console.log(t.slice(start, end));
