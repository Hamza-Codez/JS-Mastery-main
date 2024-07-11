class user{
  constructor(Username, email, passwaord){
  this.Username = Username;
  this.email = email;
  this.passwaord = passwaord;
  }
  encrptPassword(){
    return `${this.passwaord}kamalia`
  }
  UPeerCaseUN(){
    return this.Username.toUpperCase()
  }
}

const Student = new user('Hamza','Hamza-codez@gmail.com', 1234);
console.log(Student.encrptPassword());
console.log(Student.UPeerCaseUN());

//Behind the scence summary (Using Without class an constructor)

function Asmla (Username, email, passwaord){
  this.Username = Username;
  this.email = email;
  this.passwaord = passwaord;

  Asmla.prototype.Encyptpass = function(){
    return `${this.passwaord}Failsabad`
  }
  Asmla.prototype.Upercase = function(){
    return this.Username.toUpperCase();
  }
  
}
const newStudent = new Asmla('Hamza','Hamza-codez@gmail.com', 1234);
console.log(newStudent.Encyptpass());
console.log(newStudent.Upercase());
