function Check(num1, num2){
  let sum = num1 + num2;
  if(num1 === 100 || num2 === 100 || sum === 100){
  return true;
  }
  else{
  return false;
  }
}
console.log(Check(50,50));
////

const getFileExtension = (str) => {
  let ext = str.slice(str.lastIndexOf('.'))
  console.log(ext);
}
getFileExtension('hamhgd.mkv')
////

const given = (str) =>{
  
}

const formatedate = (date = new Date()) =>{
   const day = date.getDay() + 1 ;
   const months = date.getMonth() + 1 ;
   const years = date.getFullYear();
   return `${months}-${day}-${years}`
}
console.log(formatedate());

//// 
const addnew = (str) => {
  str.indexOf('New!') === 0 ? str : `${str}`
}
console.log(addnew('New! Offers'));
