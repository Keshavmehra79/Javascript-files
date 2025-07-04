function func(){
    let name=document.querySelector('#name').value
    let rollno=document.querySelector('#Rollno').value
    let age=document.querySelector('#age').value
    let city=document.querySelector('#city').value
    let email=document.querySelector('#email').value
    
    let h=document.querySelectorAll('h1')
    h[0].textContent=name
    h[1].textContent=rollno
    h[2].textContent=age
    h[3].textContent=city
    h[4].textContent=email
    
    return false
}