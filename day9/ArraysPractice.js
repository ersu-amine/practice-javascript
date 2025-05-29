//Day 9 - Arrays
//java arrays fixed size
//javascript arrays dynamic size like ArrayList

//an array containing drink types
const drink = ["tea","milk","coffee","juice"];

drink.push("water");

console.log(drink);

//can we put number into string array
drink.push(1);
console.log(drink);

//delete element
drink.pop(); //removes last element

drink.shift(); //removes first element
console.log(drink);

drink.splice(2,2); //removes elements within range, (beginning index, number of elements to be removed since the beginning index)

console.log(drink);
//lets add some sugar
drink.push("sugar");
