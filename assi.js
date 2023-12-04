const arr = [20,33,44,22,84,54,67,98];
console.log("");


const result = arr.filter((item)=> item%2===0);
console.log("2/Division")
console.log(result);
console.log("");
  
const result1 = arr.filter((item)=> item%5===0);
console.log("5/Division")
console.log(result1);
console.log("");


const result2 = arr.filter((item)=> item%3===0);
console.log("3/Division")
console.log(result2);
console.log("");


const result3 = arr.filter((item)=> item%7===0);
console.log("7/Division")
console.log(result3);
console.log("");


const result4 = arr.filter((item)=> item%9===0);
console.log("9/Division")
console.log(result4);
console.log("");

const value =arr.filter((item)=> item>40);
console.log(`40  upto value`)
console.log(value); 
console.log("")


const reduced = arr.reduce((acc,curr)=> acc+curr);
console.log(`Using Reduced Method :`);
console.log(`Total Array Value  -`+reduced);
console.log("")

console.log(`Using Map Method :`);
const add = arr.map((item)=> item+5)
console.log(`Addition of 5 :`);
console.log(add);

const add7 = arr.map((item)=> item+7);
console.log(`Addition of 7 :`);
console.log(add7)
 
const add3 = arr.map((item)=> item+3);
console.log(`Addition of 3 :`);
console.log(add3)
 
const add9 = arr.map((item)=> item+9);
console.log(`Addition of 9 :`);
console.log(add9);

const mult2 = arr.map((item)=> item*2);
console.log(`Multiplication of 2 :`);
 console.log(mult2);

 const mult5 = arr.map((item)=> item*5);
console.log(`Multiplication of 5 :`);
 console.log(mult5);

 console.log(`CUBE :`);
 const cube = arr .map((item)=> item*3);
 console.log(cube);
 

