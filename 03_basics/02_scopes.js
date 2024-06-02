// 2 types global scope and block scope

// let a = 10
// const b = 20
// var c = 30

// values outside block r called global scope else called block scope
// var c = 300
var a = 300

if (true) {
    let a = 10
    const b = 20
    //var c = 30   // c = 30 same
    // console.log("INNER: ", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// console.log(a);
// console.log(b);
// console.log(c);


// scope levels

function one(){
    const username = "Hitman"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

one()

if (true) {
    const username ="hitman"
    if (username === "hitman") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++  interesting +++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}

// addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)

// abv ex is of mini hoisting