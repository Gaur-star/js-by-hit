let score = "33"  // if 33abc or null or undifined or string

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 =>true; 0 => false
// "" => false;
// "Hi" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********** Operations *************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);
// console.log();

let str1 = "hello"
let str2 = 'hite'

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

//console.log(1+3-6*6/5);  //never write like this, use ()

//some wrong wrting methods

// console.log(+true);
// console.log(true+);
// console.log(+"");
// operation precedence
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
//gameCounter++;
++gameCounter;
console.log(gameCounter);

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//