let str="hacker space"
console.log(str);

console.log(str[1]);
console.log(str.length)

//Allow -ve indexing so we use at()

let an=str.at(-1)
console.log(an)

//Repeat 10
let student='me nhi padhunga'
console.log(student.repeat(10))

//replace(old val,new val)
let str2="we are developers"
let rs=str2.replace('developers','sde')
console.log(rs)

//replaceall(oldvalue,newvalue)-> use to repeted word

let str3="keshav is very good student and also good in study and also good in coding"
console.log(str3.replaceAll('good','bad'))

//slice
let st6='pushpendra'
console.log(st6.slice(0,5))

//split->use to change in array
let st7='apple,mango,orange'
console.log(st7.split(','))

//uppercase lowercase
let st8='KESHAV'
console.log(st8.toLowerCase())
let st9='keshva'
console.log(st8.toUpperCase())
//match-includes

//template litrels
let fname='Mr'
let mname='keshav'
let lname='mehra'
console.log(`my name ${fname} 
    and ${mname} and ${lname}`)


