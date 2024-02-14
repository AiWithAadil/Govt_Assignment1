let places: string[] = ["New yourk", "Europe", "Canada", "Japan"];

console.log(places);

console.log([...places].sort());

console.log(places);

console.log([...places].reverse());

console.log(places);

console.log( [...places].reverse(),"order has changed.");
console.log([places], "back to its original order.");

places.sort();
console.log([places],"order has been changed.");

places.reverse();
console.log([places],"order has been changed.");