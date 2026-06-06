const user = {
    name: "Rohit",
    age: 24,
    place: "Karwar"
};

const { name, age, place} = user;

const UpdatedUser = {
    ...user,
    age: 25
}


