// setTimeout(()=> console.log("inside time"),2);

// let a=document.querySelector('#form')
// function demo(){
//     a.removeAttribute('style')
// }
// setTimeout(demo,3000)

            //setinterval

// setInterval(()=> console.log("Set"),2000)

// let count=0
// setInterval(()=>{
//     document.querySelector('#increse').innerHTML=count++
// },200)
setInterval(()=>{
    let time=new Date()
    let h1=time.toLocaleTimeString()
    document.querySelector('#time').innerHTML=h1

},1000)

// let c=0
// let st
// function strt(){
//     st=setInterval(()=>{
//         document.querySelector('#time').innerHTML=c++
//     },500)
// }
// function stp(){
//     clearInterval(st)
// }

//!!!!!!!!!!!!!!!!!!!!math.js
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));
// console.log(Math.cbrt(27));
// console.log(Math.PI);
// console.log(Math.max(2,54,32,56,86));
// console.log(Math.min(2,54,32,56,86));

// let pi=Math.PI
// console.log(Math.trunc(pi));
// console.log(Math.trunc((Math.random()*9)+1));



