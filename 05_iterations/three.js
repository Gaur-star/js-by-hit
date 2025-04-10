//// for of loop

// ["", "",""]

//[{}, {}, {}]

const  arr = [1, 2, 4, 5, 6 ]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"

for (const gre of greetings) {
    // console.log(`Each char is ${gre}`);
}

////  Maps     /// no repetition in maps, mostly unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key, value] of map) {      ///////[]values inside this is  called destructre of array
    // console.log(key, ':-', value);
}


const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'

}

// for (const [key, value] of object) {
//     console.log(key, ':-', value);
// }