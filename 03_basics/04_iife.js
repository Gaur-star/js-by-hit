// Immediately Invoked Function Expressions (IIFE)

//  normal form
// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()

// iife form
(function chai(){
    console.log(`DB CONNECTED`);
})();

// ()()  first fir function and second for exwcution 

// same above things in arrow func

(() => {
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Hitman')