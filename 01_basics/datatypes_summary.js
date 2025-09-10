// Primitive data types

// 7 types : String, Number, Boolean, null, undefinded, symbol(to make something unique), BigInt(for large or scientific value types)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 1234567890987654345678n

console.log(typeof bigNumber);



// Reference (Non primitive)

// Array, Objects, Function

//Array
const heros = ["Ironman", "Doga"]

//object

let myObj = {
    name:"Ishan",
    age:22,
}

// function

const myFunction = function(){
    console.log("Hello World!");
    
}
console.log(typeof anotherId);


//null ka data types = object
// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(use in Primitive) isme copy deta h change krenge toh copy me change hoga , Heap(use in Non Primitive) ye refrenece deta h
//Stack
let myYoutubename = "Ishan Singh"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

//Heap

let userOne = {
    email:"user@google.com",
    upi:"user@ybl",
}

let userTwo = userOne
userTwo.email = "ishan@google.com"
console.log(userTwo.email);
console.log(userOne.email);

