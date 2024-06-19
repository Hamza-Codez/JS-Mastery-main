//Arrays
// const myArr = [1, 2, 5, 6, 8, 9, 3];
const myHeros = new Array("Kahlid", "Ali",  "Abubakr");
const myArr2 = new Array(1, 2, 5, 6, 8, 9, 3);
// console.log(myHeros);
// console.log(myArr[6]);
// console.log(myArr2[4]);

//Methods in array
const myArr3 = [1, 2, 5, 6, 8, 9];
// myArr3.push(4);
// myArr3.push(9);
// myArr3.pop();       //removes last element from arry no argument needed to pass
// console.log(myArr3);
// myArr3.unshift(0);
// myArr3.reverse();
// myArr3.shift();
// console.log(myArr3.includes(1));

// let strarr = myArr3.join();
// console.log(strarr);
// console.log(typeof(strarr));

//slice and splice

const myArry = [1, 2, 5, 6, 8, 9, 3];
console.log("A", myArry);

let sliceop = myArry.slice(0,4);
console.log("B", sliceop,"Check for change", myArry);

let spliceop = myArry.splice(0, 4);
console.log("C", spliceop , "Check for change", myArry );
