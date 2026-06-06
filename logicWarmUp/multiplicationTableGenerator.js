function multipleTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

let input = require("readline-sync").question("Enter a Number : ");
multipleTable(Number(input));