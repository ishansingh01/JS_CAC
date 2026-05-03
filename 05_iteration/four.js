const object = {
    js:"java script",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
//for in use krenge

for (const key in object) {
    //console.log(object[key]);
    //console.log(`${key} shortcut for ${object[key]}`);
    
}

const program = ['js', 'cpp', 'rb', 'swift', 'py']
for (const key in program) {
   // console.log(key);//print index
   //console.log(program[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA',"United State of America")
map.set('FN', "Franch")
for (const key in map) {
   // console.log(key); //no result and no error
}