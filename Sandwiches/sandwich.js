function makesandwich() {
    var topping = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        topping[_i] = arguments[_i];
    }
    console.log("According to your topping");
    for (var _a = 0, topping_1 = topping; _a < topping_1.length; _a++) {
        var top_1 = topping_1[_a];
        console.log(top_1);
    }
    ;
    console.log("ENJOY");
}
;
console.log("Sandwich 1:");
makesandwich("Ham", "Cheese", "Lettuce");
console.log("Sandwich 2:");
makesandwich("Turkey", "Tomato");
console.log("Sandwich 3:");
makesandwich("Peanut Butter", "Jelly", "Banana", "Honey");
