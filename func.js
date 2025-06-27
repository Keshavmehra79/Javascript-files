// function demo(){
//     console.log("Inside the function")
// }

// demo()
// demo()

// demo()

//wap print a table of any number using func
// function table(){
//     let a=parseInt(prompt("Enter number"))
//     for(let i=1;i<=10;i++){
//         console.log(a*i)
//     }
// }
// table()

// function cloud(a){
// console.log(a*a*a)
// }
// cloud(10)
//wap TO CHECK NUMBER IS NEG OR POSTIVE USING FUNC TYP2
// function check(a){
//     if(a>0){
//         console.log("pos")
//     }
//     else if(a<0){
//         console.log("neg")
//     }
// }
// let b=parseInt(prompt("Enter number"))
// check(b)

//...........USER DEFINED FUNCTIONS............
//..............1)without argu & no return val
// function print(){
//     console.log("Wellcome in js")
// }
// print()
//..........2)with argu& no return val
// function print(a){
//  console.log(a);
 
// }
// print(8)

//.........3)with argu & with return val
// function demo(a,b){
//     return a+b ;
// }
// console.log(demo(2,3));

// function demo(a){
//   return a+a;
// }
// let b=demo(10)
// console.log(3.14*b*b);

//............4)without argu & with return val
// function demo(){ 
//   return "hello  i am keshav";
// }
// console.log(demo());

// function demo(){
//   let a=prompt("Enter Your name")
//   return a
// }
// console.log(demo())

//what is es6

//......ARROW FUNCTION
// let demo = (a,b) => {return a+b}
// console.log(demo(2,5));

// let ob= {
//   name:"Keshav",
//   age:45,
//   contact:36565,
//   city: function(){
//     alert("Bhoppal")
//   },
//   location: ()=> {return "India"}
// }

// ob.city()
// console.log(ob.location());





// wap to take three i/p from the user & print multiplication table using type 3  with argu and return
function table(a){
  t=[];
  for(let i=1;i<=10;i++){
    t.push(i*a)
  }
  return t;
}
let n1=parseInt(prompt("Enter first number"))
document.write(table(n1),"<br>")

let n2=parseInt(prompt("Enter sec number"))
document.write(table(n2),"<br>")

let n3=parseInt(prompt("Enter third number"))
document.write(table(n3),"<br>")








//wap to take radius from the user & print the area of circle using type4
// function area(){
//   let a=parseInt(prompt("Enter radius"))
//   return 3.14*a*a
// }
// console.log(area());
