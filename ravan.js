// const arrow = document.querySelector("body > div:first-of-type img:first-child");
// const head=document.querySelector("body > div:#ravan img:first-child ")

// function fireArrow(){
//     arrow.style.transform = "translateX(1000px)";
// }

// function firehead(){
//     head.style.transform="translateX(200px)"
// }
// function fire(){
//     setTimeout(fireArrow,1000);
//     setTimeout(firehead,1000)
    
// }

const arrow = document.getElementById("arrow");
const head = document.getElementById("head");

function fireArrow(){

    arrow.style.transform = "translateX(1000px)";

    setTimeout(()=>{
        head.classList.add("cut");
    },1000);   // arrow ko head tak pahunchne me jitna time lage
}
