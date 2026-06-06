let balance = 1000;

function deposit(amt) {
    if (amt > 0) {
        balance += amt;
        console.log(`Depositrd amount is ${amt}`);
    } else {
        console.log(`Enter a valid number`);
    }
}

function withdraw(amt) {
    if (amt <= 0) {
        console.log(`Enter a balance you want to withdraw`);
    } else if (amt > balance) {
        console.log(`Insufficient balance, cannot be overdrafted`);
        
    } else {
        balance -= amt;
        console.log(`The amount withdrawn is ${amt}`);
    }
}

function checkbalance() {
    console.log(`You curent balance is ${balance}`);
}

checkbalance();
deposit(500);
withdraw(100);
checkbalance();

withdraw(1500);
checkbalance();