function sayMyName(){
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("A");
    console.log("N");
    
}

// sayMyName()

// function addTwONumber(num1,num2){
//     console.log(num1+num2);
// }
 
function addTwONumber(num1,num2){
    // let result= num1+num2
    // return result

    return num1+num2
}
 

const result = addTwONumber(3,5)

// console.log("Result :", result);

// function loginUserMessage(username = "sam"){
function loginUserMessage(username){
    // if(username === undefined){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Ishan"));
console.log(loginUserMessage("Ishan"));
