const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  //value after decimal like 100.00

const otherNumber = 123.8769

// console.log(otherNumber.toPrecision(3));  //to next /round off value

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //us standards
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++ Maths +++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));   //for absolute value
// console.log(Math.round(4.6));  // for round of to nearest
// console.log(Math.ceil(4.2));  //for upper value
// console.log(Math.floor(4.9));   // for lower value
// console.log(Math.min(4,5,7,9));
// console.log(Math.max(4,5,7,9));

console.log(Math.random())  //value btwn 0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)