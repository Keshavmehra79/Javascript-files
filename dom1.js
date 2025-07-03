function fun(){
    alert("Working!!!")
}

function changetext(){
    let head=document.getElementById('head')
    head.textContent="yes you are right"
}

function h1(){
    let a=document.getElementById('h1')
    a.textContent="Get lost"
    a.style.color="Red"
  
}
function hel(){
let a=document.getElementById('h1')
a.textContent='hello'   
a.style.color="blue" 
}

function red(){
    let a=document.getElementById('head1')
    a.textContent="Red"
    document.body.style.backgroundColor="red"


}
function green(){
    let a=document.getElementById('head1')
    a.textContent="green"
    document.body.style.backgroundColor="green"
}
function yellow(){
    let a=document.getElementById('head1')
    a.textContent="yellow"
    document.body.style.backgroundColor="yellow"

}

function color(a){
    let b=document.getElementById('head1')
    b.textContent=a
    document.body.style.backgroundColor=a

}


//////////////task///////////
 let count=0
function counter(a){
    let h1=document.getElementById('task')
    if(a=='+' ){
        count++
        h1.textContent=count
    }
    else{
        if(count>0){
            count--
        h1.textContent=count        
}
}
 if(count%2!=0){
    h1.style.color="red"
 }
 else {
    h1.style.color="black"
 }
}