let myName = "Hamza"
let repo = 18;
// console.log(myName + repo);
// no this is not the appropriate way to get the value
// you should do as follows
// console.log(`My name is ${myName} and My repositories on Github are ${repo}`);

//let we see another method to declare a string variable

// console.log(yourName);
// console.log(yourName[0]);
// console.log(yourName.__proto__);
// console.log(yourName.length);
// console.log(yourName.toUpperCase());
// console.log(yourName.charAt(6));
// console.log(yourName.indexOf("j"));
// console.log(yourSalary.toString());
// const yourName = new String('UnKnown until you tell me what is your name...');
// let yourSalary = new Number(868);
// let x = yourName.substring(0, 30);
// let y = yourName.slice(0, 4);
// console.log(x);
// console.log(y);
// const ques = new String('           UnKnown until you tell me what is your name         ');
// console.log(ques.trim());
// let url = "https://Hamza.com/hamza20%bhatti"
// console.log(url.replace('20%','-' ));
// console.log(url.includes('hamza'));

const paragraph = "I think Ruth's dog is cuter than your dog! ";
// const repl = /Dog/gi;
// console.log(paragraph.replaceAll(repl, 'Cat'));

// let l = paragraph.split(' ');
// console.log(l[3]);
const str = 'The quick brown fox jumps over the lazy dog.';

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);