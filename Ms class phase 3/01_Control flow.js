
function net(month){
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Febraury");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("Octuber");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
  console.log("Default");
    break;
}
}
net(5)
//Truthy falsy value
//falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy Values
// "0", 'false', "", [], {}, fuction(){}


//Using the condition statement of code you can check if an array or object has 0 elements

const anearray = [];
if (anearray.length === 0) {
  console.log("Array is Empty");
}else{
  console.log("Has some value");
}

const anobj = {};
if (Object.keys(anobj).length === 0) {
  console.log("Object is Empty");
} else {
  console.log("Obj has some value");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")