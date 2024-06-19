let obj = {};                 //non singlenton

let objee = new Object();        //singlenton

objee.name = "Haroon";
objee.class = "BS IT(b)"
objee.iSlogin = false;
// console.log(objee);

let regularUser = new Object(
  {Name: "Jameel",
   Addres:{
   StreetLoc:"25th avenue, Harward st 7 Lagecy load midtown field, House no B#23",
   City:"London",
   Province:"Western Union",
   Country:"United Kingdom"
   },
   Email: "www.jameelfarooqi@google.com"
  }
);
// console.log(regularUser.Addres);

//obj concatination

let obj1 = {1:"a", 2:"b"};
let obj2 = {3:"c", 4:"d"};
let c = Object.assign(obj1, obj2);
let d = Object.assign({}, obj1, obj2); //{} is target & obj1 & obj2 is source
//C and D will give the same output but second one is professional way

//PREFERRED TO USE IS SPREAD as was in array

let f = {...obj1,...obj2};  //Most easy
console.log(f);
console.log(Object.keys(regularUser));  //very usefull the output will give a sting values key array
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));
console.log(regularUser.hasOwnProperty("Addres"));