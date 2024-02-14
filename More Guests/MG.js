var guest = ["ayesha", "nazia", "bisma", "uroob"];
console.log("".concat(guest[2], " \"can't make it to dinner.\""));
var changeguest = "alisha";
guest[2] = changeguest;
guest.unshift('manal');
var middleguest = Math.floor(guest.length / 2);
guest.splice(middleguest, 0, 'sara');
guest.push("sara");
for (var g = 0; g < guest.length; g++) {
    console.log("\"hi,".concat(guest[g], ",Good news! We found a bigger dinner table. Plz come\""));
}
