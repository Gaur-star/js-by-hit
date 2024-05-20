// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 44533353533333333358n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["sam", "nemi","desi"]

let myObj = {
    name:"hite",
    age:4,
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof bigNumber);

//https://262.ecma-international.org/5.1/#sec-11.4.3