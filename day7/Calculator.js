//Day 7 – Weekly Mini Project
/*
Challenge: Build a Simple Calculator.

Input: Two numbers and an operation (+, -, *, /)

Output: The result of the operation

Use: functions, conditionals, and console input (you can hardcode values if not using prompt)
*/

function calculate(num, num2, operation){
    if(operation=="+"){
        result = num + num2;
    }else if(operation =="-"){
        result = num - num2;
    }else if(operation =="*"){
        result = num * num2;
    }else{
                result = num / num2;

    }

    console.log("Result is: " + result);
}

let number1 = 5;
let operation = "*";
let number2 = 7;

calculate(number1,number2,operation);
