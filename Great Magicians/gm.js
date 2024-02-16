var MagiciansName = ["Habra Cadabra", "Magic Mike", "Sorcerer Supreme"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var m = magicians_1[_i];
        console.log(m);
    }
    ;
}
;
show_magicians(MagiciansName);
console.log("the Great");
//Function to add "the Great" to each magician's name
function make_great(great) {
    for (var _i = 0, great_1 = great; _i < great_1.length; _i++) {
        var g = great_1[_i];
        console.log("".concat(g, " the great"));
    }
    ;
}
;
make_great(MagiciansName);
