function sumofNume(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

let input = require("readline-sync").question("Enter a Number: ");
let result = sumofNume(Number(input));

console.log(result);
