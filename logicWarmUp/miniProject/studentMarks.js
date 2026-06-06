let marks = [78 ,79, 80, 85, 90];

let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];    
}
console.log(total);

const avg = () => {
    console.log(`${total /marks.length}`);
}



const highestMarks = () => {
    let Hmarks = marks[0];
    for ( let j = 0; j < marks.length; j++){
        if(marks[j] >  Hmarks){
            Hmarks = marks[j];
            
        }
    }
    return Hmarks;
}

console.log(highestMarks());


// function highMarks(){
//     for (let mark of marks )
// }