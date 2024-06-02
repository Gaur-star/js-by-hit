// Functions And Parameters

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

function addTwoNumbers(number1, number2){       //number1, number2 are called parametres
    console.log(number1 + number2);
}
function addTwoNumbers(number1, number2){       //number1, number2 are called parametres
    // let result = number1 + number2;
    // return result
    // or this way
    return number1 + number2;
}

// addTwoNumbers(3, 4)           // 3,4 are argumnets passed
// addTwoNumbers(3, "4")          
// addTwoNumbers(3, "a")          
// addTwoNumbers(3, null)        

const result = addTwoNumbers(3, 5)

// console.log("Result :", result);


// function loginUserMessage(username){
//     return `${username} just logged in`
// }
function loginUserMessage(username = "sam"){
    if (username === undefined) {       //if(!username){}
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('hitman'));
// console.log(loginUserMessage(''));

// console.log(loginUserMessage());


// function calculateCartPrice(...num1){           // ... called rest operator alse spread operator diff place dirreft use
//     return num1
// }
function calculateCartPrice(val1, val2, ...num1){           // ... called rest operator alse spread operator diff place dirreft use
    return num1
}

// console.log(calculateCartPrice(200, 300, 400));


//for objects

const user = {
    username: "hitman",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//values can also be passed like this

handleObject({
    user: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 800, 500, 600]));