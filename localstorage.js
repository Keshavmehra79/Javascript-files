function store(){
    let name=document.querySelector('#name').value
    localStorage.setItem('username',name)
       let age=document.querySelector('#age').value
    localStorage.setItem('age',age)
      
    let contact=document.querySelector('#contact').value
    localStorage.setItem('contact',contact)
    let email=document.querySelector('#email').value
    localStorage.setItem('email',email)
       let password=document.querySelector('#Password').value
    localStorage.setItem('password',password)

  
            
}

//   let a=localStorage.getItem('username')
//     console.log(a);

//     localStorage.removeItem('username')

   //  localStorage.clear()   