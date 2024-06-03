const user = {
    username: "hitman",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "hitmam"
//     console.log(this);
// }

// chai()


// const chai  = function () {
//     let username = "hitmam"
//     console.log(this.username);
// }

const chai  = () => {
    let username = "hitmam"
    console.log(this);
}

// chai()

// arrow function basic structure

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) => num1 + num2;

// without parenthesis and return called/means implicit return

// const addTwo = (num1, num2) => ( num1 + num2 );

// obj return way
const addTwo = (num1, num2) =>  ({ username: "Hitman" });

console.log(addTwo(3, 2))

// more comming like

// const myArray = [2, 5, 6, 8]

// myArray.forEach()