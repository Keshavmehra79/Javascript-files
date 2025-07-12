function storedata(){
    let userdata={
        name:document.querySelector('#name').value,
        contact:document.querySelector('#contact').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#password').value,
    }
    if(userdata.name==""){
        alert("please Enter your name")
        document.querySelector('#name').focus()
        return false
    }
    else if(userdata.contact==""){
        alert("please Enter your Contact")
        document.querySelector('#contact').focus()
        return false
    }
    else if(userdata.contact.length!=10){
        alert("Please enter your valid contact")
        document.querySelector('#contact').focus()
        return false

    }
    else if(userdata.email==""){
        alert("Please Enter Your Email")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(userdata.email.includes('@'))){
        alert("Please Enter Valid Email")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(userdata.email.includes('@gmail.com')|| userdata.email.includes('@yahoo.com')) ){
        alert("Please Enter Corrrect Email")
        document.querySelector('#email').focus()
        return false
    }
    else if(userdata.password==""){
        alert("Please make your Password")
        document.querySelector('#password').focus()
        return false
    }
    else if(!(userdata.password.match(/[@#$%^&*]/))){
        alert("Please make your strong Password (include special symbol)")
        document.querySelector('#password').focus()
        return false
    }
    localStorage.setItem('signdata',JSON.stringify(userdata))
}
let storedataa=JSON.parse(localStorage.getItem('signdata'))
console.log(storedataa);

function logindata(){
    let logind={
        email:document.querySelector('#loginemail').value,
        password:document.querySelector('#loginpass').value
    }
    if(storedataa.email!=logind.email || storedataa.password!=logind.password){
        alert("User Not found")
        return false
    }
}