//functions need to be exported so they can be imported, exporting does not exist in Java AFAIK

//for a given number return its square
function getSquare(number){
    return number * number;
}

console.log("5 squared is " + getSquare(5));

//small function for printing quote of the day
function printQuote(){
    console.log(`“Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.” — Carl Jung`);
}

//call the function
printQuote();