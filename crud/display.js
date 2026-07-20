async function display(){
    let response=await fetch('http://localhost:3000/student')
    let Data=await response.json()
    console.log(Data)
    let ans=`<table border="1">
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
    <th>Fees</th>
    <th>Delete</th>
    </tr>
    `

    Data.map((key) => {
            ans += `
            <tr>
                <td>${key.name}</td>
                <td>${key.age}</td>
                <td>${key.city}</td>
                <td>${key.fees}</td>
                <td>
                <button onclick="deleteData('${key.id}')">Delete</button>
                </td>
            </tr>`;
        });

        document.getElementById("demo").innerHTML=ans
}

display()


async function deleteData(id) {
      const response = await fetch(`http://localhost:3000/student/${id}`, {
      method: 'DELETE' // Specifies the deletion action
      // Note: No headers or body are needed when deleting an entire resource
    }).then(()=>{
        alert("Data deleted")
    });    
}