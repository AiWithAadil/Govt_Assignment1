let personName: string = "\t \n adil shahid \n \t";

console.log("Original name with whitespace:");
console.log("'" + personName + "'");

let strippedName: string = personName.trim();

console.log("Stripped name:");
console.log("'" + strippedName + "'");
