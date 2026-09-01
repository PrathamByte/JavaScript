const user = {
    userName: "mohan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User details from database");
        // console.log(`Username: ${this.userName}`);
        console.log(this);
        
            
    }

}
// console.log(user.userName);
// console.log(user.getUserDetails()); 
// console.log(this);

function User(userName, loginCount, isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
        
    }

    return this

}

const userOne = new User("mohan", 12, true)
const userTwo = new User("sohan", 11, false)
console.log(userOne.constructor);
console.log(userTwo);