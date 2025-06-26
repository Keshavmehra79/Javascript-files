// let ob= {
//     name:"Qasim",
//     contact:1234,
//     city:"Bhopal"
// }
// console.log(ob)
// console.log(ob.name)
// console.log(ob.city)


//take i/p from user
// let ob1= {
//     namE:prompt("Enter your name"),
//     contact:parseInt(prompt("Enter contact")),
//     city:prompt("Enter city")
// }
// console.log(ob1)

// let emp={
//     emp_name:"keshav",
//     emp_contact:[1234,45678],
//     emp_add:["Ashoka","danish"],
//     emp_arr:[1,2,3,4]
// }
// console.log(emp.emp_contact[0],emp.emp_contact[1],
//     emp.emp_add[0],emp.emp_add[1])
// emp.emp_arr.push(1)
// console.log(emp.emp_arr)

//override
// emp.emp_name="diksha"
// console.log(emp)

// for(let k in emp){
//     console.log(k,":",emp[k]);
// }


//wap print only one key of top
let obj={
naMe:"keshav",
city:"bhopal",
no:1234
}

for(let vl in obj){
    if(obj[vl]=="keshav")
    document.write(vl)
}


