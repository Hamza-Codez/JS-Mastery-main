//Iterations

// for (let i = 1; i <= 6; i++) {
//   const element = i;
//   console.log(element);
// }

// for (let k = 1; k < 7; k++) {
//   const element = k;
//   if (element == 5) {
//   console.log("5 is the best Number!");
//   }
//   console.log(element);

// }
for (let i = 1; i <= 10; i++) {
  // console.log(`The value of outer loop is: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`The value of inner loop is: ${j} and outer loop is: ${i}`);
    // console.log(`i * j  = ${i*j}`);
  } 
}

//For arrays
let anArray = ["Harry Potter","Dumbledore","Harmaione"]
for (let index = 0; index < anArray.length; index++) {
  const element = anArray[index];
  console.log(element);
}

//Break and continue

for (let index = 1; index <= 20; index++) {
  const element = index;
  if (element == 5) {
    console.log("Detected 5");
    continue
  }
  console.log(`The value of i is :${index}`);
  
}