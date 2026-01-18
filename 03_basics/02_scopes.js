var c=100
let a = 300
if(true){
    let a = 10
    const b = 20
    // let and const only inner value not globally such i use in for loop
    var c = 30
    console.log("INNER :", a);
    
}


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Ishan"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "Ishan"
    if(username === "Ishan"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ******************* interresting *********************

console.log(addone(5))
function addone(num) {
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

