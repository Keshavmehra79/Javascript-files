//ques1
//     let sum=0
//     let arr=[]

//     let a=parseInt(prompt("Enter 1 number:"))
//     if(a%2!=0){
//         sum+=a
//     }
//     let b=parseInt(prompt("Enter 2 number:"))
//     if(b%2!=0){
//         sum+=b
//     }
//     let c=parseInt(prompt("Enter 3 number:"))
//     if(c%2!=0){
//         sum+=c
//     }
//     let d=parseInt(prompt("Enter 4 number:"))
//     if(d%2!=0){
//         sum+=d
//     }
//     let e=parseInt(prompt("Enter 5 number:"))
//     if(e%2!=0){
//         sum+=e
//     }
//     let f=parseInt(prompt("Enter 6 number:"))
//     if(f%2!=0){
//         sum+=f
//     }
//     let g=parseInt(prompt("Enter 7 number:"))
//     if(g%2!=0){
//         sum+=g
//     }
//     let h=parseInt(prompt("Enter 8 number:"))
//     if(h%2!=0){
//         sum+=h
//     }
//     let i=parseInt(prompt("Enter 9 number:"))
//     if(i%2!=0){
//         sum+=i
//     }
//     let j=parseInt(prompt("Enter 10 number:"))
//     if(j%2!=0){
//         sum+=j
//     }


// arr.push(sum)
// console.log(arr[0]);

//ques2
function form(){
    let name=document.querySelector('#name').value
    let age=document.querySelector('#age').value
    let city=document.querySelector('#city').value
    let password=document.querySelector('#password').value
    if(name==""){
        alert("Please Enter your name")
        document.querySelector('#name').focus()

        return false
    }
    else if(age==""){
        alert("Please enter your age")
        document.querySelector('#age').focus()
        return false
    }
    else if(age.length>3){
        alert("Please enter your valid age")
        document.querySelector('#age').focus()
        return false
    }
    else if(city==""){
        alert("Please enter your city")
        document.querySelector('#city').focus()
        return false
    }
     else if(password==""){
        alert("Please enter your password")
        document.querySelector('#password').focus()
        return false
    }
    else if(!(password.match(/[@#$%^&*]/))){
        alert("Please enter your correct password")
        document.querySelector('#password').focus()
        return false
    }

}

//ques3
// let a=parseInt(prompt('Enter number'))
// a+=5
// if(a>0){
//     console.log("Correct");
    
// }
// a-=5
// if(a>=0){
//     console.log("Correct")
// }

//Ques4

