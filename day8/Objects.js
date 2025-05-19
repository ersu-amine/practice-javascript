//Create an object for coffee

const coffee = {//object is const but attributes are not
    //attributes are stated like json format
    type: "Latte",
    isSweet: true,
    isCreamy: true,
    sugar: 1,
    brewTemp: 90,
    price: 2.99,

    drink: function(){
        return "Careful it is hot."; //returning the string without mentioning the return type
    },

    addSugar: function(){
        console.log("Adding more sugar");
        this.sugar = this.sugar+1; //unable to use ++ like in Java, ++ has worked with loops but not here.
    }

}
//add more sugar to coffee
console.log(coffee.sugar);
coffee.addSugar();
console.log(coffee.sugar);

//drink hot coffee
console.log(coffee.drink());