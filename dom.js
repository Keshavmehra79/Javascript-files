let a=document.getElementById('head1')
console.log(a);

// text change
a.textContent="Hy ,wellcome"

//change in html
let b=document.getElementById('head2')
b.innerHTML="<i> cloud </i>"

let c=document.getElementsByClassName('cls')
c[0].textContent = "change"

let d=document.getElementsByTagName('h4')
console.log(d)
d[0].textContent = "JS"

