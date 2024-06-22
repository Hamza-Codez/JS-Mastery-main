let i = 1;
while (i<=10) {
  i= i+2; 
  console.log(`Value of I is: ${i}`);
}
//With an array
let anArray = ["Flash","Aquaman","Robin"];
let arr = 0;
while (arr < anArray.length) {
  arr = arr + 1;
  console.log(`The new value is:${anArray[arr]}`);
}

//dowhile loop
let score = 11;
do {
  console.log(`The score is: ${score}`);
  score++;
} while (score <= 20);