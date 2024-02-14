let guest: string[] = ["ayesha","nazia","bisma","uroob"]

console.log(`${guest[2]} "can't make it to dinner."`)

let changeguest = "alisha";
guest[2] = changeguest;


for (let g = 0; g < guest.length; g++){
    console.log(`"hi,${guest[g]},I would like to invite you to dinner. Plz come"`);
}