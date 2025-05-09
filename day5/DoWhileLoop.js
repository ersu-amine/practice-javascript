let number = 5;
do {
    if (number == 5) {
    console.log("Happy Friday");
    }else{
        console.log("Happy weekends");
    }

    number++;
    //continue and break statements are similar to Java
    if (number == 8) {
        break;
    }
} while (number < 10);

console.log("Out of the loop")