const arrow = document.getElementById("arrow");
const head = document.getElementById("head");

function fireArrow(){

    arrow.style.transform = "translateX(1000px)";

    setTimeout(()=>{
        head.classList.add("cut");
    },1000);  
}

let promise=new Promise(function(resolve,reject){
    let goodDeveloper=false;
    if(goodDeveloper){
        resolve("Like rajesh sir classes")
    }
    else{
        reject("You not attend classes")
    }

})
console.log(promise)

promise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

