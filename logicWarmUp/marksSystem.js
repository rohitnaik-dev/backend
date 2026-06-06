// let marks = [70, 80, 70, 75, 76];

const readline = require("readline-sync");
const input = readline.question(`Enter the marks you got: `);

let marks = input.split(" ").map(Number);

const sum = marks.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);

const avg = (sum / marks.length);
console.log(avg);

function Grade(sum) {
    if (sum >= 90) {
        console.log(`Grade: A`);
    } else if (sum >= 80) {
        console.log(`Grade: B`);
    } else if (sum >= 70) {
        console.log(`Grade: C`);
    } else {
        console.log(`Grade: D`);
    }
}

Grade(avg);
