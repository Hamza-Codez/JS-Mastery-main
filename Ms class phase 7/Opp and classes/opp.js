const user = {
  userName: 'Hamza Ahmad',
  Is_Login: true,
  signed_Up: true,
  Login_count: 8,

  getUserDetails: function(){
    // console.log("Got User Details from database");
    console.log(`Username is :${this.userName}`);
  }
}
// console.log(user.userName);
// console.log(user.getUserDetails());

//------------------------------------------------------------

function Admin(Username, followers, Is_Login){
  this.Username = Username;
  this.followers = followers;
  this.Is_Login = Is_Login;

  return this
}

const UserOne =new Admin('Hitesh',12, true)
const UserTwo =new Admin('Hamza',16, false)
console.log(UserTwo);