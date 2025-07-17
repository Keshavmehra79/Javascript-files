console.log("this is main file");

// import module1 from "./module1.js";
// console.log(module1(10,20));

import demo from './module1.js' //default
console.log(demo(9,1));

import {add,sub} from './module2.js' //named 
import {add as sum,sub as s} from './module2.js' //named 

sum()
s()
