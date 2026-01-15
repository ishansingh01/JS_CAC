// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ishan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  

const regularUser = {
    email:"ishan@gamil.com",
    fullname: {
        username:{
            firstname:"Ishan",
            lastname:"Singh"
        }
    }
}
// console.log(regularUser.fullname.username.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// Object.assign(target, source) modifies the target object itself and returns the same object reference.
const obj3={...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id:1,
        email:"singh@gmail.com"
    },
    {
        id:1,
        email:"singh@gmail.com"
    },
    {
        id:1,
        email:"singh@gmail.com"
    },
    {
        id:1,
        email:"singh@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//it returns in array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename:"js in hindi",
    price : "999",
    courseInstructor: "Ishan"
}

// course.courseInstructor

const {courseInstructor} = course

const {courseInstructor: instructor}=course
console.log(courseInstructor);
console.log(instructor);


{
    "coursename"; "js in hindi",
    "price" ; "999",
    "courseInstructor"; "Ishan"
}

[
    {},
    {},
    {}
]
// {"results":[{"gender":"female","name":{"title":"Ms","first":"Svitlana","last":"Yuhimenko"},"location":{"street":{"number":7097,"name":"Kagamlika"},"city":"Korosten","state":"Harkivska","country":"Ukraine","postcode":10988,"coordinates":{"latitude":"77.5039","longitude":"96.8760"},"timezone":{"offset":"-5:00","description":"Eastern Time (US & Canada), Bogota, Lima"}},"email":"svitlana.yuhimenko@example.com","login":{"uuid":"cfe3b67c-07c3-44d2-80f5-810f944bafe4","username":"greenleopard170","password":"vsegda","salt":"DXns2kXd","md5":"1dde6b699af7c1abfc0f4d4a2d9f8d4c","sha1":"18260d39f598847b2860deb2949b0871bf123a19","sha256":"5d4493632d3f8d347bfbf4c9114ef58126a9e716418f1c8dbe77f5e53c6d3e95"},"dob":{"date":"1946-02-25T15:15:51.475Z","age":79},"registered":{"date":"2021-04-29T20:25:44.644Z","age":4},"phone":"(068) H76-9825","cell":"(068) W28-1806","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/60.jpg","medium":"https://randomuser.me/api/portraits/med/women/60.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/60.jpg"},"nat":"UA"}],"info":{"seed":"1359198dd3a36ff1","results":1,"page":1,"version":"1.4"}}

