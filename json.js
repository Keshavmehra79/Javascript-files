async function fet() {
    let res=await fetch('http://localhost:3000/userdata')
    let data=await res.json()
    let st=data.map((item)=>`
    <tr>
    <td>${item.id}</td>   
    <td>${item.name}</td>  
    <td>${item.contact}</td> 
    <td>${item.city}</td> 
    <td>${item.age}</td>
    <td><button onclick="mydelete('${item.id}')"> Delete </button> </td>
    </tr>
    `).join(" ")  
    document.querySelector('#storedata').innerHTML=st
    
}
fet()

function mydelete(id){
fetch(`http://localhost:3000/userdata/${id}`,{
    method:"DELETE"
}).then((e)=>alert('Deleted....'))
}
function postdata(){
    let frmdata={
        name:document.querySelector('#name').value,
        age:document.querySelector('#age').value,
        contact:document.querySelector('#contact').value,
        city:document.querySelector('#city').value,
    }
    fetch('http://localhost:3000/userdata',{
        method:"POST",
        headers:{
            'Content-type' :'application/json'
        },
        body:JSON.stringify(frmdata)
    })
}