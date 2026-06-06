function multipleNum(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);        
    }
}

let input = require("readline-sync").question("give a number: ");
multipleNum(Number(input));