//[{},{},{}]
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello world"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    
}

const map = new Map()
map.set('IN', "India")
map.set('USA',"United State of America")
map.set('FN', "Franch")
// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    'game1':"NFS",
    'game2':"spiderman"
}
// for (const obj of myObj) {
//     // console.log(obj);
//     // object are not iteration
    
// }
