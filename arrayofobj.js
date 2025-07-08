let emp= [
    {name:"keshav",age:21,city:"bhopal",contact:1263636},
    {name:"naeem",age:22,city:"bareli",contact:8683648},
    {name:"arjun",age:31,city:"badi",contact:62676},
    {name:"lalit",age:67,city:"betul",contact:98767},
    {name:"aman",age:20,city:"nehru",contact:9765},
]
// let college= {
//     college:"tit"}
// emp.unshift(college)
// console.log(emp);
// let slice=emp.slice(2,3)
// console.log(slice)

// let newarray=emp.map((e)=> {return e}) //map function return each el of an array(iterable) & insert in(gives new array) new array
// console.log(newarray);
let newarray=emp.filter((e)=> {return e.age>20 && e.age<40})
console.log(newarray);


