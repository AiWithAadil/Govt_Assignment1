
let MagiciansName: string[] = ["Habra Cadabra", "Magic Mike", "Sorcerer Supreme"];

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
}
;
console.log("Original Magicians:");
console.log(MagiciansName); 

const greatMagicians: string[] = make_great(MagiciansName); 

console.log("\nModified Magicians:");
show_magicians(greatMagicians);

function show_magicians(magicians: string[]): void {
    for (let m of magicians) {
        console.log(m);
    };
};

