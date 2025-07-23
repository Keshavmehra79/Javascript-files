setTimeout(()=> console.log("inside timeout"),3000)


 let frm=document.querySelector('#frm')

//  function showfrm(){
//     frm.removeAttribute('style')
//  }
//  setTimeout(showfrm,3000)

 //setInterval

//  setInterval(()=> console.log("Last class"),2000)
// let count=0
// setInterval(()=>{
//     document.querySelector('#show').innerHTML=++count
// },2000) 

// setInterval(()=>{
//     let date=new Date()
//     let time=date.toLocaleTimeString()
//     document.querySelector('#time').innerHTML=time
// },1000)

let c=0
let st

function startt(){
   st= setInterval(()=>{
        document.querySelector('#time').innerHTML=c++
    },500)
}

 function stopp(){
    clearInterval(st)
 }