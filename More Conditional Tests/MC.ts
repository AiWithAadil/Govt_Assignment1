let book:string = "english";
let book2:string = "urdu";

console.log("Tests for equality and inequality with strings")
console.log(book == book2);
console.log(book != book2);


console.log("Tests using the lower case function");
console.log(book.toLowerCase() === "english");
console.log(book2.toLowerCase() != "urdu");

let num1: number = 5;
let num2: number = 10;

console.log("Equality test:");
console.log(num1 === num2);

console.log("Inequality test:");
console.log(num1 !== num2); 

console.log("Greater than test:");
console.log(num2 > num1); 

console.log("Less than test:");
console.log(num1 < num2); 

console.log("Greater than or equal to test:");
console.log(num2 >= num1);

console.log("Less than or equal to test:");
console.log(num1 <= num2);

let x: number = 5;
let y: number = 10;

console.log("AND operator test:");
console.log(x < 10 && y > 5);

console.log("OR operator test:");
console.log(x === 5 || y === 5);

let list: number[] = [1,2,3,4,5,6,7,8];
let number: number = 6;

console.log("Test whether an item is in a array");
console.log(list.includes(number));

console.log("Test whether an item is not in a array");
console.log(!list.includes(number));








