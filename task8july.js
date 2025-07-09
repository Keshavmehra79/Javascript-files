let btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    if(btn=='dark'){
    let a=document.body
    a.classList.toggle('main')
    btn.textContent="light"
}

    else{
         let b=document.body
    b.classList.toggle('sec')
    btn.textContent='dark'
    }

})