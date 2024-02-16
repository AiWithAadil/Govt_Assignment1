const favoritePizzas: string[] = ["pepperoni", "fagita", "cheese"];

console.log("Printing pizza names:");
for (const pizza of favoritePizzas) {
    console.log(pizza);
}

console.log("Printing sentences about each pizza:");
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");
