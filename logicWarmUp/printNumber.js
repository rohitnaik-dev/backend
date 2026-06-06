function printNum(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i); 
    }
}

let input = require("readline-sync").question("Print numbers till : ");
printNum(Number(input));