function fun(id){
    let id1=document.getElementById(id)   
    id1.style.color='white' 
}


let a=1
function fun2(){
    let b=document.querySelector('#btn')
    a++

    if(a%2==0){
        document.body.style.backgroundColor='black'
        b.textContent='light'
        b.style.color='white'

    }
    else{
        document.body.style.backgroundColor='white'
        b.textContent='dark'
        b.style.color='black'

    }

}


