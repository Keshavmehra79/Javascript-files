async function myEdit() {
    let data=await JSON.parse(localStorage.getItem("student"))
    console.log(data)
    let showdata=`Enter name :<input type="text" id="name" value=${data.name}><br><br>
                Enter Age :<input type="text" id="age" value=${data.age}><br><br>
                Enter City :<input type="text" id="city" value=${data.city}><br><br>
                Enter Fees :<input type="text" id="fees" value=${data.fees}><br><br>
                <button onclick="finalEdit('${data.id}')">Edit</button>
    `
    document.getElementById("showdata").innerHTML=showdata
} 

myEdit()

 async function finalEdit(id) {
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let city=document.getElementById("city").value;
    let fees=document.getElementById("fees").value;
    let res=await fetch(`http://localhost:3000/student/${id}`,{
        method:"PUT",
        body:JSON.stringify({name:name,age:age,city:city,fees:fees})
    }).then((res)=>{
        window.location.href="display.html"
alert("Data updated")

    })
}