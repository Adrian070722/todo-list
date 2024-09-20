const  { MongoClient } = require('mongodb');
const url = "mongodb: //localhost:27017";
const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        console.log("conectado a MongoDB");
    }  catch (err) {
        console.error(err);
    }
}

module.exports = ( connectDB, client );