function analizeNumber(num) {
    if (num % 2 == 0) {
        console.log("This is a even number");
    } else {
        console.log("This is a odd number");
    }

    //positive or negative

    if(num > 0) {
        console.log("Positive");
    } else {
        console.log("negative");
    }

    //divisible By 5

    if (num % 5 == 0) {
        console.log("Divisible by 5");
    } else {
        console.log("not divisible by 5");
    }
}

const input = require("readline-sync").question("Enter a number: ");
analizeNumber(Number(input));

