//we can use an array of strings or Object as given
// ["","",""]
// [{},{},{}]
// we will observe it in usage of ForOf loops

let arr = [1, 2, 3, 4, 5, 7, 8]
for (const num of arr) {
  // console.log(num);
}

const greeting = "Hello world!"
for (const greet of greeting) {
  // console.log(`Char of Greeting is: ${greet}`);
}

// Maps

const map = new Map()
map.set('Pak','Pakistan')
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
  game1: 'NFS',
  game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
  
}

//This will give an output  (This is not itteratible)
//because this structure of for of loop is not applicable for objects