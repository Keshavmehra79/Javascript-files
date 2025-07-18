async function demo() {
    let api=await fetch("https://jsonplaceholder.typicode.com/users")    
    let r=await api.json()

    let savedata=r.map((e)=>`
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.email}</td>
    </tr>
    `).join(" ")
    let table=document.querySelector('#savedata')
    table.innerHTML=savedata
}
demo()