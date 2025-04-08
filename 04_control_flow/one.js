//if ifelse ifelseifelse
// 
// 
// //  if

// if (condition) {
    
// }

// if (true) {
    
// }

// if (false) {
    
// }

// if (2 == 2 ) {
    
// }

// const isUserloggedIn = true

// if (isUserloggedIn) {
    
// }

// 3!=2
//! = not

// <, >, <=, >=, ==, !=, ===, !==

// if (2 == "2") {
//     console.log("executed");
// }

// const isUserloggedIn = true
// const temperature = 41

// if (temperature === 41) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("executed");


//// ex of scope 

// const scope = 200

// if (scope > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

//// ex of short hand notation or implesant scope

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test");  //dont use such way of writting

//// nested loop 

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");    
// }else if (balance < 900) {
//     console.log("less than 900");  
// } else {
//     console.log("less then 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}