//Immediately Invoked Function Expressions (IIFE)
// (Write function)(for execution call) and always use semi colon (;) for stop the function
//global scope ke pollution ko hatane ke liye iife ka use krte hai

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//simple IIFE
(() => {
    console.log(`DB CONNECTED TWO`);
    
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`); 
})('Ishan')