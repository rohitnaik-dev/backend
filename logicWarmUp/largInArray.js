// let arr = [3, 7, 2, 9, 5];

// let smallest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i]; 
//     }
// }

// console.log(smallest);

// let arr = [1, 2, 3, 4];
// let count  = 1;

// for (let i = 1; i < arr.length; i++) {
//      count += arr[i];
// }
// console.log(count);

let arr = [1, 2, 3, 4, 6]
let count = 0;
for (let i = 1; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
        count++;
        
    }
}

console.log(count);
