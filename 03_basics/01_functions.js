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
// console.log(loginUserMessage("Ishan"));


function calculateCartPrice(val1, val2, ...nums1){
    //... is rest operator
    return nums1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "Ishan",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username:"Aujla",
    price:"❤️"
})

const myNewArray=[200,300,400,100]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300,1000]));
