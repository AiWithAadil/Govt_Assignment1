let NAME: string = "shahid";
 console.log(NAME);

let lowercaseName: string = NAME.toLowerCase();
 console.log(lowercaseName);

let uppercaseName: string = NAME.toUpperCase();
 console.log(uppercaseName);

let titleCaseName: string = NAME.replace(/\b\w/g, (char: string) => char.toUpperCase());
 console.log(titleCaseName);
