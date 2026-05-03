const coding = ["js","ruby","java","python","cpp"]


//callback function have no name
coding.forEach( function (val){
    //console.log(val);
    
} )


//arrow function with callstack function no name
coding.forEach( (item) => {
   // console.log(item);
} )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, coding);
    
// } )

const myCoding=[{
    languageName:"javascript",
    languageFile:"js"
    },
    {
    languageName:"java",
    languageFile:"java"
    },
    {
    languageName:"python",
    languageFile:"py"
    }
]

myCoding.forEach(  (item) => {
    console.log(item.languageName);
})