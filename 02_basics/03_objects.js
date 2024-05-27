//  singleton

// object literals

// 1st method to create oj 
// object.create

// 2nd method
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitman",
    age: 18,
    [mySym]: "mykey1",
    "full name": "Hitman Das",  //when such frormat then calling through JsUser.email dont work
    location: "kolkat",
    email: "absc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saurday"] 
}

// mostly in arrays
// myarray = ["h", "i"]
// myArray[2] or [0] etc..

// console.log(JsUser.email);   //mostly use this method
// console.log(JsUser["email"]);    //use this if upper donot work
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);
// console.log(typeof JsUser[mySym]);

//object ffreeze

JsUser.email = "Hitman@ggmmail.com"
// Object.freeze(JsUser)
JsUser.email = "Hitman@kkhhyyrr.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);    // string interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());