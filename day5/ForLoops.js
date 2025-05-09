//print numbers from 1 to 10

//almost same as java
console.log("Numbers from 1 to 10.")
for(let i = 1; i<=10; i++){
    console.log(i)
}

//for each loop
console.log("Numbers in a list and their index")
const numbers = [5, 7, 29];

for (let index in numbers) {
  console.log(`Index: ${index}, number: ${numbers[index]}`);
}