//array
//JavaScript arrays are resizable and can contain a mix of different data types.

const myArr = [0,1,2,3,4,5]
// console.log(myArr[1]);

const myArr2 = new Array(1,2,3,4)
const myHeroes = ["SINGH","AUJLA"]
//Array Method
// myArr.push(9)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)//add data on starting address
// myArr.shift()//remove data on starting address

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()//convert into string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B " ,myArr);


const myn2 = myArr.splice(1,3)//remove the element from array (myArr) and give the element according to given index also give element of last index 3
console.log("C " ,myArr);
console.log(myn2);


