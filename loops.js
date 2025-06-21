// var n=1
// do{
//     console.log(n);
//     n++;
// }while(n<11);

//wap to print are table of n numbers

// var n=parseInt(prompt("Enter a number: "))
// var i=1
// do{
//     console.log(n*i);
//     i++;
    
// }while(i<11);

//wap to print micrpssoft 15 times
// var n=1
// while(n<16){
//     // console.log("Microsoft")
//     document.write("Microsoft","<br>")
//     n++;
// }
//wap to reverse table of n number using while loop
// var n=parseInt(prompt("enter a number: "))
// var i=10
// while(i>=1){
//     console.log(n*i)

//     i--
// }
//wap to print only odd numbers b/w 20 to 1
// n=20
// while(n>=1){
//     if(n%2!=0){
//         console.log(n)
//     }
//     n--

// }
///////////////FOR////////////
// for(let n=1;n<=10;n++){
//     console.log(n);
// }

// WAP
// var a =parseInt(prompt("Enter a number"))
// if(a>=1 && a<=10){
//     for(let n=1;n<=a;n++){
//         console.log(n)
//     }
// }
// else if(a>=11 && a<=20){
//     for(let n=20;n>=1;n--){
//         console.log(n)
//     }
// }
// else{
//     console.log("Invalid")
// }
//wap to print square of all even numbers between 20 to 1
// for(let n=20;n>=1;n--){
//     if(n%2==0){
//         console.log(n*n)
//         n--
//     }
// }

// for(let a=2; a<=3;a++){
//     for(let b=1;b<=10;b++){
//         console.log(a*b)
//     }
//..........................STAR PATTERN...................
// for(let a=1;a<=5;a++){
//     for(let b=1;b<=5;b++){
//         if(b<=a){
//         document.write("*",)
//     }
//     else{
//         document.write(" ",)
//     }
// }
//     document.write("<br>")

// }

////////////Q2
// let row=5
// let col=5
// for(let col=1;col<=5;col++){
//       document.write("*")

//    for(let row=1;row<=5;row++){
//     if(col==1 || col==5 ){
//         document.write("*")
//     }
   
//     else{
//         document.write(" ")
//     }    
  
       
// }
//     document.write("<br>")

// }
for(let r=1;r<=5;r++){
    for(let c=1;c<=5;c++){
        if(r==1 || r==5 || c==1 ||c==5){
            document.write("*")
        }
        else{
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br>")
}



