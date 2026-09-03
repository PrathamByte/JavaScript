function SetUserName(username){

    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password){

    SetUserName.call(this, username);


    this.email = email
    this.password = password
}

const newuser = new createUser("mohan", "mohan@example.com", "123")
console.log(newuser);
