const promise1 = new Promise(function(resolve, reject){
  //Do an Async Task
  //DB calls, Cryptography, network
  setTimeout(function(){
    // console.log('Async Have been completed successfully');
    resolve() 
  }, 1000)
})
promise1.then(function(){
  // console.log("Promise Consumed");
})

//-----------------------------------

new Promise(function(resolve, reject){
setTimeout(function(){
// console.log('Async 2 has completed');
resolve();
}, 1000)
}).then(function(){
  // console.log('Promise Two consumed');
})

//------------------------------------------

new Promise(function(resolve, reject){
setTimeout(function(){
  // console.log('Async 3 has been completed');
  resolve()
}, 1000)
}).then(function(){
  // console.log('Promise 3 has been consumed successfully');
})

//----------------------------------------

new Promise(function(resolve, reject){
setTimeout(function(){
resolve({user: 'Hamza Ahmad', email:'hamzacoder@gmail.com'});
}, 1000)
}).then(function(Admin){
// console.log(Admin);
})


//------------------------------------------
new Promise(function(resolve, reject){
  let error = false;
  if(!error){
    resolve({user: 'Hamza Ahmad', email:'hamzacoder@gmail.com'})
  }else{
    reject('ERROR : Something Went Wrong');
  }
// })
// .then(function(Ahmad){
// console.log(Ahmad);
// return Ahmad.user
// })
// .then(function(user){
// console.log(user);
// })
// .catch(function(error){
// console.log(error);
// })
// .finally(()=>{
// console.log('Finally: Promise  is either resloved or rejected');
})
//---------------------------------------

const promiseFive = new Promise(function(resolve, reject){
setTimeout(function(){
  let error = true;
  if(!error){
    resolve({user: 'TypeScript', email:'hamzacoder@gmail.com'})
  }else{
    reject('ERROR : Ts Went Wrong');
  }
 }, 1000)
})
async function promiseFivehndl(){
  try {
    const respond =  await promiseFive
    console.log(respond);
  } catch (error) {
    console.log(error);
  }
}

// promiseFivehndl();

//=-----------------------------------------
async function getAllUsers(){
  try {
    const resose = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =  await resose.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// getAllUsers();

//---------------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
  return response.json();
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>{console.log(error);})
