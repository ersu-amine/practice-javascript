//Operators: Understand arithmetic, comparison, and logical operators.

let priceApple = 4;
let priceOrange = 2;
let priceCoffee = 5;

const sum = priceApple + priceOrange + priceCoffee;

console.log("Price of apple is: " + priceApple);
console.log("Price of orange is: " + priceOrange);
console.log("Price of coffe is: " + priceCoffee);
console.log("Shopping total before taxes = " + sum + " dollars.") ;

//0.13 is 13% tax
console.log("Total with taxes = " + (sum + (sum * 0.13)));