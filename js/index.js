// Iteration 1: Names and Input
let hacker1 = "Juan";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Jose";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let name = ``;
let newname = ``;
for (let i = 0; i < hacker1.length; i++) {
    name = hacker1.toUpperCase();
    newname += name[i] + ` `;
}
console.log(newname);

let revName = ``;
for (let i = 0; i < hacker1.length; i++) {
    revName += hacker1[hacker1.length -1 - i]
}
console.log(revName);