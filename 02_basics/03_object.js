//Singleton
//Object.create

//object literals

const mySym=Symbol("key1");

const JsUser = {
    name:"Ishan",
    "Full name":"Ishan Singh",
    //mySym:"myKey1", give string datatype not right way 
    [mySym]:"mykey1",
    age:20,
    location:"Noida",
    email:"ishansingh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]
}
// console.log(JsUser.email) //not right way to retrieve value
// console.log(JsUser["email"])
// console.log(JsUser["Full name"]) 
// console.log(JsUser[mySym])

JsUser.email="ishan@google.com"
// Object.freeze(JsUser)
JsUser.email="ishan@microsoft.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");  
}
JsUser.greeting2=function(){
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


