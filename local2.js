let ob={
    name:"ankit",
    contact:878979,
    city:"bhopal"
}

localStorage.setItem('userData',JSON.stringify(ob))

//get the data
let data=JSON.parse(localStorage.getItem('userData'))
console.log(data);
