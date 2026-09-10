class User{
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername (){
         return `${this.userName.toUpperCase()}`
    }

}

const newUser = new User("mohan", "mohan@example.com", "123")

console.log(newUser.encryptPassword())
console.log(newUser.changeUsername())