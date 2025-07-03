// let h=document.querySelector('h1')
// h.style.color="red"

// let h1=document.querySelector('#hi') //for id ->#
// h1.textContent="byy"

// let h2=document.querySelector('.hy')  // for class->.

// h2.textContent="mehra"


// let ul=document.querySelectorAll('li')
// ul[2].style.color="red" 


//////////////////task1
let ul=document.querySelectorAll('li')
for(let vl in ul){
    console.log(vl)  
    if(vl%2!=0){
        ul[vl].style.color="yellow"
    }
}

///////////////task2
let count=0
function counter(a){
    let h1=document.getElementById('task')
    
    if(a=='+'){

        count++
        h1.textContent=count
    }
    else{

        if(count>0){
            count--
        h1.textContent=count
}
    }
}





