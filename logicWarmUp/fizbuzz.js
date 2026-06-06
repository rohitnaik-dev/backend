function fizzBuzz(num) {
    if (num % 3 == 0 ) {
        console.log("fizz");
    } else if(num % 5 == 0){
        console.log("buzz");
    } else {
        console.log("FizzBuzz");
    }
}

fizzBuzz(25);