const descrpter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descrpter);

const user = {
    userName: "mohan",
    score: 233,
    isLoggedIn: true,

    userIntrest: ()=>{
        console.log("Gaming");
        
    }


}

console.log(Object.getOwnPropertyDescriptor(user, "userName"));

Object.defineProperty(user, 'userName', {
    writable:false,
    enumerable:false,
    configurable: true,
    
})

// console.log(Object.getOwnPropertyDescriptor(user, "userName"));

for (let [key,value] of Object.entries(user)) {

    if (typeof value !== 'function') {
        
        console.log(`${key} and  ${value}`);
    }

    
}
