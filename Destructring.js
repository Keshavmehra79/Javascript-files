
let [name,num,city]=["cybrom",18,"bhopal"]
console.log(num);

//spread operator
let ar1=["Goggle","Azure"]
let ar2=["amazon","flip"]
let ar3=[...ar1,...ar2,"ar3"]
ar3=[...ar3]
console.log(ar3)

//obj destructring
// let {name,contact,age}={
//     name:"keshav",
//     contact:77897,
//     age:22
// }
// console.log(name);
// console.log(contact);

//spread operator on obj
let ob={n:1,m:2}
let ob1={n1:1,m2:2}
let ob2={...ob,...ob1}
console.log(ob2);


