let interval;
function start(){
   let second=0;
   let minute=0;
   let hours=0;
  interval=  setInterval(()=>{
    second++;
     document.getElementById("second").innerHTML=second
     document.getElementById("minute").innerHTML=minute
     document.getElementById("hours").innerHTML=hours
    if(second>=60){
        minute++;
        second=0;
    }
    else if(minute>=60){
        hours++;
        minute=0;
    }
   },1000)
}
function stop(){
    clearInterval(interval)
}