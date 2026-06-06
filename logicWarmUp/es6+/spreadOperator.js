const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [
    ...arr1,
    ...arr2
];

console.log(arr3);

const data = {
    name: "Rohit",
}

const city = {
    place: "Karwar"
}

const addCity ={
    ...data,
    ...city
}

console.log(addCity);
