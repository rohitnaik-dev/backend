let students = [
  { name: "Rohit", marks: 80 },
  { name: "Amit", marks: 65 }
];

students.push({
    name:"Samay",
    marks:95
});


let topper = students[0];
function findTopper(){
    for(student of students){
        if(student.marks > topper.marks){
            topper = student;
        }
    }
}

function printAll() {
    for(let student of students) {
        console.log(`${student.name} marks are ${student.marks}`);
    }
}

function filterAbove70() {
    for(let student of students) {
        if(student.marks > 70) {
            console.log(student);
            
        }
    }
}
console.log(students);
findTopper();
console.log(topper);
printAll();
filterAbove70();

