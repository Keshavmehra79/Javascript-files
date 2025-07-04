function validate(){
    let name=document.querySelector('#name').value
    let city=document.querySelector('#city').value
    let contact=document.querySelector('#contact').value
    let age=document.querySelector('#age').value
    
    

    if(name==""){
        alert("Please Enter your name")
        document.querySelector('#name').focus()
        return false
    }
    else if(city==""){
        alert("Please Enter your city")
        document.querySelector('#city').focus()
        return false
    }
    else if(contact==""){
        alert("please enter your contact")
        document.querySelector('#contact').focus()
        return false
    }
    else if(contact.length>10 || contact.length<10){
         alert("please enter 10 digits contact")
        document.querySelector('#contact').focus()
        return false
    }
    else if(isNaN(contact)){
        alert("Please enter valid contact")
        document.querySelector('#contact').focus()
        return false
    }
    else if(age.length>3 || age==""){
        alert("Please enter your valid age")
        document.querySelector('#age').focus()
        return false
    }
    else if(isNaN(age)){
        alert("Please enter valid age")
        document.querySelector('#age').focus()
        return false
    }

}