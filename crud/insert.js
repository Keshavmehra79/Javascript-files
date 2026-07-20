async function insert() {
   let name=await document.getElementById("name").value
   let age=await  document.getElementById("age").value
   let city=await  document.getElementById("city").value
   let fees=await  document.getElementById("fees").value

       const response = await fetch('http://localhost:3000/student', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' // Tells the server you are sending JSON data
      },
      body: JSON.stringify({name,age,city,fees}) // Converts your JS object into a JSON string
    });


}

