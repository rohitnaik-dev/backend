function printEven (num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

let input = require("readline-sync").question("Enter a Num: ");
printEven(Number(input));