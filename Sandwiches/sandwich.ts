function makesandwich(...topping:string[]): void {
    console.log("According to your topping");
    for (let top of topping){
        console.log(top)
    };
    console.log("ENJOY")
    
};

console.log("Sandwich 1:");
makesandwich("Ham", "Cheese", "Lettuce");

console.log("Sandwich 2:");
makesandwich("Turkey", "Tomato");

console.log("Sandwich 3:");
makesandwich("Peanut Butter", "Jelly", "Banana", "Honey");

