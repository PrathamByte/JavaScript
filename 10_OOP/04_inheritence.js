class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

}

class Admin extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course was Added by ${(this.username)}`);
        
    }
}

const aUSer = new Admin("Sohan", "sohan@example.com", "1232")
aUSer.addCourse()