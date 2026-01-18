//this keyword only used in object not in function
const user = {
    username : "Ishan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Ishan"
//     console.log(this.username);
    
// }

// chai()


//arrow function
// const chai = () => {
//     let username = "Ishan"
//     console.log(this);   
//     console.log(this.username);   
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//implicite return
// const addTwo = (num1, num2) =>  num1+num2
// const addTwo = (num1, num2) => ( num1+num2)
const addTwo = (num1, num2) => ({username: "Ishan"})
console.log(addTwo(3, 4));

// const myArray = [2,5,3,7,8]

// myArray.forEach()