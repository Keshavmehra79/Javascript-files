function validate(){
    let name=document.querySelector('#name').value
    let city=document.querySelector('#city').value
let contact=document.querySelector('#contact').value
    let age=document.querySelector('#age').value
    let email=document.querySelector('#email').value
    let password=document.querySelector('#password').value
    if(name==""){
        alert("Please Enter your name")
        document.querySelector('#name').focus()
        return false
    }
    else if(city==""){
        alert("Please enter your city")
        document.querySelector('#city').focus()
        return false
    }
    else if(contact==""){
        alert("Please Enter your contact")
        document.querySelector('#contact').focus()
        return false
    }
      else if(isNaN(contact)){
         alert("Please Enter your valid  mobile number")
        document.querySelector('#contact').focus()
        return false
    }
    else if(contact.length>10 || contact.length<10){
        alert("Please Enter your 10 digits mobile number")
        document.querySelector('#contact').focus()
        return false
    }
  
       else if(isNaN(age)){
        alert("Please Enter your valid age")
        document.querySelector('#age').focus()
        return false
    }
    else if(age=='' || age.length>3){
             alert("Please Enter your Age in 2 or 3 digit")
        document.querySelector('#age').focus()
        return false
    }
    else if(email==""){
        alert("Enter your Email")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(email.includes('@'))){
        alert("Enter your Email with @")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(email.includes('gmail.com') || email.includes('yahoo.com'))){
        alert("Enter your valid Email")
        document.querySelector('#email').focus()
        return false
    }
    else if(password==""){
        alert("Please enter your password")
        document.querySelector('#password').focus()
        return false
    }
    else if(!(password.match(/['#%^~&*!@']/))){
        alert("Wrong Password!Please enter your correct password")
        document.querySelector('#password').focus()
        return false
    }

 
}