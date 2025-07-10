let btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    let a=document.body
   if(btn.textContent=='Dark'){
    a.classList.add('main')
    btn.textContent='Light'
   }
    else if(btn.textContent=='Light'){
    a.classList.remove('main')
        btn.textContent='Dark'
    }
    // else{
    // a.classList.remove('main')
    //     btn.textContent='Dark'
    // }


})