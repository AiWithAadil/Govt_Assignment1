var MagiciansName = ["Habra Cadabra", "Magic Mike", "Sorcerer Supreme"];
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("Great ".concat(magician));
    }
    return greatMagicians;
}
;
console.log("Original Magicians:");
console.log(MagiciansName);
var greatMagicians = make_great(MagiciansName);
console.log("\nModified Magicians:");
show_magicians(greatMagicians);
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var m = magicians_2[_i];
        console.log(m);
    }
    ;
}
;
