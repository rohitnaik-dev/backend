let users = [
    { id: 1, name:"Rohit", email:"rohit@test.com"},
    { id: 2, name:"Raj", email:"raj@test.com"},
    { id: 3, name:"Sagar", email:"sagar@test.com"},
];

function getAllUsers() {
    return users;
}

function getUserById(id){
    return user = users.find(u => u.id === id)
}

function createUser(user) {
    const newUser = {
        id: users.length + 1,
        ...user
    };

    users.push(newUser);
    return newUser;
}

function updateUser(id, data) {
    const user = users.find(user => user.id === id);

    if (!user) {
        console.log(`Not a User`);
    }

    Object.assign(user, data)
}


console.log(getAllUsers());

console.log(getUserById(2));
