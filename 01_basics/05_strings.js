const name = "hitman"
const repoCount = 50

// console.log(name + repoCount + " Value "); // donot use such writings

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //best practice

const gameNew = new String('hitman-hc-comon')

// console.log(gameNew[0]);
// console.log(gameNew.__proto__);

// console.log(gameNew.length);
// console.log(gameNew.toUpperCase());
// console.log(gameNew.charAt(2));
// console.log(gameNew.indexOf('t'));


const newString = gameNew.substring(0, 4)  //no -ve allowed
// console.log(newString);


const anotherString = gameNew.slice(-8, 4)  //-ve allowed
// console.log(anotherString);


const newStringOne = "  hitesh  "
// console.log(newStringOne);

// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'));

console.log(gameNew.split('-'));

//need to do practice
// do it own