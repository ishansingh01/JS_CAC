// Dates 


// let myDates = new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());
// console.log(typeof myDates);


// let myCreatedDate = new Date(2023,0,23)//month start at 0 in js
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023,0,23,5,6)
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("01-23-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);//give time in milisecond
// console.log(myCreatedDate.getTime());//convert into msec
console.log(Math.floor(Date.now()/1000));//convert into second



let date = new Date()
console.log(date.getMonth());
console.log(date.getDay());

console.log(date.toLocaleString('default',{
    weekday:"long",
}));


