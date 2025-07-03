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



//  let input=document.querySelectorAll('input').values
//     let allh=document.querySelectorAll('h1')
//     allh[0].textContent=input[0]
//     allh[1].textContent=input[1]
//     allh[2].textContent=input[2]
//     allh[3].textContent=input[3]
//     allh[4].textContent=input[4]
    
    return false
}