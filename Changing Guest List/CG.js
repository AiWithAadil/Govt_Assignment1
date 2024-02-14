var guest = ["ayesha", "nazia", "bisma", "uroob"];
console.log("".concat(guest[2], " \"can't make it to dinner.\""));
var changeguest = "alisha";
guest[2] = changeguest;
for (var g = 0; g < guest.length; g++) {
    console.log("\"hi,".concat(guest[g], ",I would like to invite you to dinner. Plz come\""));
}
