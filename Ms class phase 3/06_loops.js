const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(mynum.filter((num) => {return num > 4}));

// look () => (num > 4) returns the requiredc filter value but () => {} gives an empty array (Explicit return) cuz { } braces start the scope and you must have to use the 'Return' in order to get your required filter value

// console.log(mynum.forEach((num) => {
//   if (num > 4){ 
//     (console.log(num))
//     }
// })); 

// const nexnum = [2, 8]
// nexnum.forEach( (num) => {
//   if (num > 4) {
//     nexnum.push(num)
//   }
// } )
// console.log(nexnum);


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
const userBooks = books.filter((bk) => (bk.genre === 'History'))
const afterpub = books.filter((gk) => (gk.publish >= 2000 && gk.genre === 'Science'))
console.log(afterpub);
// console.log(userBooks);