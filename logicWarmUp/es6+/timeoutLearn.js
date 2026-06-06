const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
                console.log(`John`);
                resolve();
        }, 2000)
        
    });
}

async function getUser() {
    await getUserData();
    console.log(`User: John`);
}

getUser();