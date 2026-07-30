//////////////////Event bubbling
// let div=document.querySelector("div")

// div.addEventListener("click",(event)=>{
//     console.log("div.......")
// })

// let btn=document.querySelector("button")

// btn.addEventListener("click",()=>{
//     console.log("Button.....")
// })


/////////////Events capturing.........

// let div=document.querySelector("div");
// div.addEventListener("click",()=>{
//     console.log("Div")
// },true)
// let btn=document.querySelector("button")
// btn.addEventListener("click",()=>{
//     console.log("Button")
// },true)

//////////stop propagation

// let div=document.querySelector("div")

// div.addEventListener("click",(event)=>{
//     console.log("div.......")
// })

// let btn=document.querySelector("button")

// btn.addEventListener("click",(event)=>{
//         event.stopPropagation();
//     console.log("Button.....")
// })
///////////immediatpropagtion
// let btn=document.querySelector("button")

// btn.addEventListener("click",(event)=>{
//     event.stopImmediatePropagation();
//     console.log("Button.....")
// })

// btn.addEventListener("click",(event)=>{
//     console.log("Button2")
// })


///////////Event delegation
let parent=document.getElementById("parent")
parent.addEventListener("click",(event)=>{
   if(event.target.classList.contains("btn")){
    alert(`You clicked ${event.target.innerText}`)
   }
})


//////////////////////////////////

///////////Hello guys i am working today.........
////////////I am also working todya............