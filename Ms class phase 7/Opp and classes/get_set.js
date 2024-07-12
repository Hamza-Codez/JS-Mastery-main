class User {
  constructor(email, password){
      this.email = email;
      this.password = password;
  }
  get password(){
     return this._password.toUpperCase();
  }
  set password(val){
    this._password = val.toUpperCase();
  }
}

const hamza = new User("Hamza@gmail.com", "FDFSGFS65")
console.log(hamza.password);