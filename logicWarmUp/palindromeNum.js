function palNum(num) {
    let realNum =  num.toString(); 
    return realNum === num.toString().split('').reverse().join('');
}

let input = require("readline-sync").question("Check weather palindromeOrNot: ");
let result = palNum(Number(input));

console.log(result);
