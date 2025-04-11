const myObject = {
    js:'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java"]

for (const key in object) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States Of America")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in object) {    ////// no o/p becz of no iteration
//    console.log(key);
// }