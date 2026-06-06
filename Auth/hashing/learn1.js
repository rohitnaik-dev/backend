const bcrypt = require("bcrypt");

async function hashedDone(password) {

    const hashes = await bcrypt.hash(password, 10);
    console.log("Hashed: ", hashes);

    const compare =await bcrypt.compare(password, hashes)
    console.log("Matches: ", compare);
    
}

hashedDone("yes");