const myNums = [1,2,3,4,5,6,7,8,9,10]

// const myTotal = myNums.reduce((acc,currVal)=>{
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     return acc + currVal
// }, 3)

const myTotal = myNums.reduce((acc,currVal) => acc+currVal,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const amount = shoppingCart.reduce((acc,item) => item.price+acc,0)
console.log(amount);

