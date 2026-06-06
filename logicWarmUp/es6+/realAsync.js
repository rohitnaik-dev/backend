const comesAfter = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
                console.log(`Login success`);
                resolve();
        }, 3000);
    });
}

async function show() {
    console.log(`Logging in...`);
    await comesAfter();    
}

show();