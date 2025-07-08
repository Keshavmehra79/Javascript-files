let emp=[
    {name:"keshav",age:22,city:"Bhopal",contact:66269},
    {name:"arjun",age:32,city:"sirabda",contact:989898},
    {name:"naeem",age:62,city:"maheshwar",contact:12233},
    {name:"abhi",age:52,city:"babai",contact:985545},
    {name:"banti",age:12,city:"bareli",contact:34567}
]
// let newobj={
//     name:"satyam"
// }
// emp.unshift(newobj)
// emp.shift(newobj)

// let slc=emp.slice(2,4)
// console.log(slc);

let newAray=emp.map((e)=> {
return e
})
console.log(newAray);
let filterarr=emp.filter((e)=> {return e.age>40})
console.log(filterarr);

