class user{
  constructor(userName){
  this.userName = userName;
  }
  logMe(){
    console.log(`Username is ${this.userName}`);
  }
}

class Teacher extends user{
  constructor(userName, email, Password){
  super(userName)
  this.email = email;
  this.Password = Password;
  }
  addcourse(){
    console.log(`A new Course Was Added by ${this.userName}`);
  }
}
const Aslam = new Teacher('Aslam','ASlam@gmail.com','7685');
console.log(Aslam.addcourse());
console.log(Aslam instanceof Teacher);
console.log(Aslam instanceof user);