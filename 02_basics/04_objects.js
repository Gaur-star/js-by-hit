// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123tjtr"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hotman",
            lastname:"kata"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);   //user of ? to check whether varile ha value

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"a", 5:"b", 6:"c"}
const obj4 = {7:"a", 8:"b", 9:"c"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // another way of writting target and source
//evry value is gettin into first object var technically

const obj3 = {...obj1, ...obj2}    //mostly used methd called spread opration
// console.log(obj3);

//usually gets values from databases in arrays
// array of objects

const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

//ways to fetch data

users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));


// destructure and api
// destructure of object


const course = {
    course:"js in hindi",
    price:"999",
    courseInstructor:"hitman"
}

// to all value
// course.courseInstructor

//another way which mostly used
// const {courseInstructor} = course
const {courseInstructor: instructor} = course    //instructor is used for obj destructure

// console.log(courseInstructor);
console.log(instructor);


// const navbar = ({company}) => {          //method/ props used in react for obj destructure

// }

// navbar(company = "hitman")


// concept of api's

// {
//     "name": "hitman",             //keys are also strings
//     "coursename": "js in hindi",
//     "price": "free"
// }

//api's in array format

[
    {},
    {},
    {}
]


// use tools for format like json formatter