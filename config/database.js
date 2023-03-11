const mongoose = require("mongoose");
const config = require("./config").getConfig();

// Mongo connection class
class Connection {
    constructor() {
        const url = config.MONGO_URL
        console.log(`Established new connection with url: ${url}`)
        this.connect(url).then(() => {
            console.log('Database connection established');
        }).catch((error) => {
            console.log(`mongodb error: ${error.message}`);
        });
    }

    async connect(url) {
        try {
            await mongoose.connect(url)
        }catch(error) {
            throw error;
        }
    }
}

module.exports =  new Connection();