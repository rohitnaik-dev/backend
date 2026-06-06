// *
// * *
// * * *
// * * * *
// * * * * *

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
    
// }

//     *        ← 4 spaces, 1 star
//    * *       ← 3 spaces, 2 stars
//   * * *      ← 2 spaces, 3 stars
//  * * * *     ← 1 space,  4 stars
// * * * * *    ← 0 spaces, 5 stars
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) row += " ";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row);
    
}