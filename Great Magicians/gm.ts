let MagiciansName: string[] = ["Habra Cadabra", "Magic Mike", "Sorcerer Supreme"];

function show_magicians(magicians: string[]): void {
    for (let m of magicians) {
        console.log(m);
    };
};

show_magicians(MagiciansName);

console.log("the Great");

//Function to add "the Great" to each magician's name

function make_great(great: string[]): void{
    for (let g of great) {
        console.log(`${g} the great`);
        
    };
};

make_great(MagiciansName);