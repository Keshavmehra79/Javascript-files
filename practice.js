let btn=document.querySelector('#btn')
btn.addEventListener('contextmenu',()=>{
    alert("Working!!!!!")
})

let btn10=document.querySelector('#btn10')
btn10.addEventListener('click', ()=> {
    let wr=document.querySelector('.wrap')
    wr.classList.add('demo')
    })

let btn2=document.querySelector('#btn2')
btn2.addEventListener('click',function () {
    let wr=document.querySelector('.wrap')
    wr.classList.remove('demo')
})

let btn3=document.querySelector('#btn3')
btn3.addEventListener('click',function () {
    let wr=document.querySelector('.wrap')
    wr.classList.toggle('demo')
})