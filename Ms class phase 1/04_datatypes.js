/* There are two major types of datatypes
1: Primitive datatypes
2: Non-Primitive datatypes
Among primitive datatypes there are 7 types:
1: String
2: Boolean
3: Number
4: BigInt
5: Symbol
6: Null 
7: Undefined
Among non-primitive datatypes there are 3 types:
1: Array
2: Object
3: Functions
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

