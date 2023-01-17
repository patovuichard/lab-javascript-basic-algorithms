// Iteration 1: Names and Input
let hacker1 = "Mariano";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Juan";
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

// 3.1

let name = ``;
let newname = ``;
for (let i = 0; i < hacker1.length; i++) {
    name = hacker1.toUpperCase();
    newname += name[i] + ` `;
}
console.log(newname);


// 3.2

let revName = ``;
for (let i = 0; i < hacker1.length; i++) {
    revName += hacker1[hacker1.length -1 - i]
}
console.log(revName);


// 3.3

let count = 0;
if (hacker1.length <= hacker2.length) {
    count = hacker1.length;
} else {
    count = hacker2.length;
}
// console.log(count);

for (let i = 0; i < count ; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log(`The driver's name goes first.`)
        break;
    }else if (hacker1[i] > hacker2[i]) {
        console.log(`Yo, the navigator goes first definitely.`)
        break;
    }else {
        console.log(`What?! You both have the same name?`);
    }
}
