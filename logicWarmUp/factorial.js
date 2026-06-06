function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}

let input = require("readline-sync").question("Enter a Number : ");
let result = factorial(Number(input));

console.log(result);
