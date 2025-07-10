function store(){
    let name=document.querySelector('#name').value
    localStorage.setItem('Name',name)
     let age=document.querySelector('#age').value
    localStorage.setItem('age',age)
     let contact=document.querySelector('#contact').value
    localStorage.setItem('contact',contact)
     let email=document.querySelector('#email').value
    localStorage.setItem('email',email)
     let Password=document.querySelector('#password').value
    localStorage.setItem('Password',Password)

}

let a=localStorage.removeItem('age')
let b=localStorage.getItem('Name')
console.log(b);
localStorage.clear()
