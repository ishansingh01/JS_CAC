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


//null ka data types = object