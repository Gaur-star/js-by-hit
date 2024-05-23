// array

const myArr = [0, 5, 9, 4, 8, 9]
const myHeros = ["shaktiman", "natraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// arrays methods

//myArr.push(6)  //to add
//myArr.push(7)

//myArr.pop()  //to remove last one


//myArr.unshift(9)  // this will add in first
//myArr.shift()   // this will first add
//console.log(myArr);

//console.log(myArr.includes(9));  //if included
//console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);