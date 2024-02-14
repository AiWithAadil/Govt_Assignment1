var NAME = "shahid";
console.log(NAME);
var lowercaseName = NAME.toLowerCase();
console.log(lowercaseName);
var uppercaseName = NAME.toUpperCase();
console.log(uppercaseName);
var titleCaseName = NAME.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(titleCaseName);
