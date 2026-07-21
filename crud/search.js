async function mySearch(){
   let age= document.getElementById("mysearch").value
   let res=await fetch(`http://localhost:3000/student/?age=${age}`)
   let data=await res.json();
   let ans=`<h1>Mydata....</h1>`;
   data.map((key)=>(
    ans+=`<h6>${key.name}</h6>
    <h6>${key.age}</h6>
    <h6>${key.city}</h6>
    <h6>${key.fees}</h6>
    `
   ))

   document.getElementById("demo1").innerHTML=ans
    }

