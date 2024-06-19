const Marvel_heros = ["Ironman", "Spiderman", "Thor", "Black Panther"]
const dc_heroes = ["Batman", "Superman", "Flash", "Wonderwoman", "Aquaman"]

console.log(Marvel_heros.concat(dc_heroes));              //concat
const newHeros = [...Marvel_heros, ...dc_heroes];
console.log(newHeros);                                        //spreadout

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hamza"))
console.log(Array.from("Hamza"))
console.log(Array.from({name: "Hamza"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));