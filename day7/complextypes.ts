interface Guitar {
    model: string,
    strings: number
}
function guitar(model: string, strings: number = 6): Guitar {
    return { model: model, strings: strings};
}
let guitars: Guitar[] = [];
guitars.push(guitar('Fender Stratocaster'));
guitars.push(guitar('Gibson Les Paul Anniversary'));
guitars.push(guitar('Fender Villager', 12));
guitars.push(guitar('Dreadnought 12 String Acoustic', 12));

// Remove any none six string guitars
guitars = guitars.filter((gtr) => gtr.strings === 6);
console.log(guitars);
// Show that we only have 6 string guitars.
guitars = guitars.filter((gtr) => gtr.strings > 4);
console.log(guitars);

// Reset the array with the missing guitars
guitars.push(guitar('Fender Villager', 12));
guitars.push(guitar('Dreadnought 12 String Acoustic', 12));

for (let i = guitars.length -1; i >= 0; i--) {
    if (guitars[i].strings !== 6) {
        guitars.splice(i, 1);
    }
}
console.log(guitars);

// Reset the array with the missing guitars
guitars.push(guitar('Fender Villager', 12));
guitars.push(guitar('Dreadnought 12 String Acoustic', 12));

guitars.splice(1, 0, guitar('Ibanez Jem 777'));
console.log(guitars);
