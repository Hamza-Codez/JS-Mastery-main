// let mysym = Symbol("My Giviven key")

let student = {
  Name: "Hamza",
  class: "Bs Cs",
  Semester: "3rd",
  Reg_no: "2022-ag_****",
//  [mysym]:"My Giviven key"
}
// console.log(student);   //method 1
// console.log(student["Semester"]);  //method 2


// // Object properties can be changed
// student.Name = "Ahmad";
// // But you can freez changes (So that no change occur anymore)
// Object.freeze(student);
// student.Name = "zia";
// console.log([student]); //The results are not applying any further change

function greeting(){
  console.log("Hello Mr", student.Name);
}
greeting();



