function fun(){
    alert("You clicked inside the input box")
}

function para(){
let para=document.getElementById('para')
para.style.color="red"
}

function dbl(){
    let dbl=document.getElementById('para2')
    dbl.textContent="you double clicked me!"
}

function change(){
    let change=document.getElementById('img')
    change.src='img.jpg'
}
function chnageback(){
    let chnageback=document.getElementById('img')
    chnageback.src='nature way.jpg'
}

function color(a){
    document.body.style.backgroundColor=a
}

function btn(a){
   let h1=document.getElementById('head2')
   if(h1.textContent=='hello'){
    h1.textContent='goodbye'
    h1.style.color='green'
   }
   else{
    h1.textContent='hello'
    h1.style.color='blue'
   }
    }
