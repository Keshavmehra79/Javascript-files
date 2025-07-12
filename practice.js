function signdata(){
    let obj={
        name:document.querySelector('#name').value,
        email:document.querySelector('#email').value,
        contact:document.querySelector('#contact').value,
        password:document.querySelector("#password").value

    }
    if(obj.name==""){
        alert("Please Enter your Name")
        document.querySelector('#name').focus()
        return false
    }
    else if(obj.email==""){
        alert("Please Enter your Email")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(obj.email.includes('@'))){
        alert("Please Enter your valid Email")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(obj.email.includes('@gmail.com') || obj.email.includes('@yahoo.com'))){
        alert("Please Enter your Correct Email")
        document.querySelector('#email').focus()
        return false
    }
    else if(obj.contact==""){
        alert("Please Enter your  Contact")
        document.querySelector('#contact').focus()
        return false
    }
    else if(obj.contact.length!=10){
        alert("Please Enter your 10 digit contact")
        document.querySelector('#contact').focus()
        return false
    }
    else if(obj.password==""){
        alert("Please make your valid Password")
        document.querySelector('#password').focus()
        return false
    }
    else if(!(obj.password.match(/[@#$%^&*]/))){
        alert("Please make your Strong Password")
        document.querySelector('#password').focus()
        return false
    }
    localStorage.setItem('Data',JSON.stringify(obj))
}

let fetched=JSON.parse(localStorage.getItem('Data'))
console.log(fetched);

function loginCheck(){
    let obj2={
        email:document.querySelector("#logemail").value,
        password:document.querySelector("#lpass").value
    }
    if(obj2.email!=fetched.email || obj2.password!=fetched.password){
        alert("User not found")
        return false
    }
}


