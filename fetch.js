//fetch()->get,post,delete,put,patch

//promise->
    //fullfill,pending,reject

//HTTP methods:
//      ->get,post,delete,put,patch

//->API=application programming interface
//   fetch()=> promise  => async await get->api->server(slow)
//JSON ->javascript object notation
//.json

//fetch()

//fetch("https://jsonplaceholder.typicode.com/comments")

async function demo() {
    let response=await fetch("https://jsonplaceholder.typicode.com/comments")
    
    let data=await response.json()
    
    let apidata=data.map((e)=>`
    <tr>
    <td> ${e.id} </td>
    <td> ${e.name} </td>
    <td> ${e.email} </td>
    </tr>
    `).join(" ")
    let savedata=document.querySelector('#savedata')
    savedata.innerHTML=apidata

    
    
}
demo()

