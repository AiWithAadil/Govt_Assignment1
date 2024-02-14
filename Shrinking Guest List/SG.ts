let guest: string[] = ["ayesha","nazia","bisma","uroob"]

console.log(`${guest[2]} "can't make it to dinner."`)

let changeguest = "alisha";
guest[2] = changeguest;

guest.unshift('manal');

const middleguest:number = Math.floor(guest.length / 2);
 guest.splice(middleguest, 0, 'sara');

guest.push("sara")


for (let g = 0; g < guest.length; g++){
    console.log(`"hi,${guest[g]},Good news! We found a bigger dinner table. Plz come"`);
}

console.log("i can invite only two people for dinner.")


for (let a = 2; a < guest.length; a++){
    console.log(`"sorry ${guest[a]} you can’t invite them to dinner."`);
}

console.log(`Hi ${guest[0]}, you're still invited to dinner.`);
console.log(`Hi ${guest[1]}, you're still invited to dinner.`);

guest.splice(0, guest.length);

console.log(guest);

