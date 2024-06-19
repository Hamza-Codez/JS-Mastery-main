//Arreo functions
call = (myname) =>{
  console.log(myname);
}
call("Hamza");
//also can be executed as
plus = (n1, n2) => n1 + n2;
console.log(plus(34, 65)); 
//or
plus = (n1, n2) => (n1 + n2);
console.log(plus(34, 65)); 
//IIFE
(function c(name){
  console.log(`database connected`);
})();
((name) =>{
  console.log(name);
})("Hamza");