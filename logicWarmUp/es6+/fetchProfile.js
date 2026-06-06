const wait = (state) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log(state);
            resolve();
        },2000);
    });
}

async function waitDone() {
    await wait(`Logging in...`);
    await wait(`Fetching profile...`);
    await wait(`Fetching posts...`);
    console.log("DOne");
    
}

waitDone();