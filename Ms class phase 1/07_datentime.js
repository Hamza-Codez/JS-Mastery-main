"Use Strict";
// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());

// let mycurrentDate = new Date(2002, 1 , 13 , 5 , 40 );
// let mycurrentDate1 = new Date(2022, 7 , 17 , 7 , 53 );
// console.log(mycurrentDate1.toString());

 
// let createAdate = new Date("2-13-2002");
// console.log(createAdate.toString());

// let myTimestamp = Date.now();

// console.log(myTimestamp);
// console.log(createAdate.getTime());
// console.log(Math.floor(Date.now()/1000));


// let myDate = new Date();
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMonth());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());

let myDate = new Date(); //Very Useful thing
myDate.toLocaleString('default',{
  weekday: "long"
});
console.log(myDate);