let date=new Date()
console.log(date);
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth()+1);
console.log(date.getFullYear());
console.log(date.getDay()+1);
console.log(date.getFullYear());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

let a=['sun','mon','tue','wed','thurs','fri','sat']
let b=date.getDay()
console.log(a[b])

let c=['jan','feb','mar','apr','may','jun','july','Aug','Sep','oct','nov','Dec']
console.log(c[date.getMonth()])



