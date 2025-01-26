const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || "mongodb://localhost:27017/";
const client = new MongoClient(uri);

let database;

async function connectToDatabase() {
    try {
        if (!database) {
            await client.connect();
            console.log("Connected to MongoDB!");
            database = client.db("primeflix");
        }
        return database;
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
}

module.exports = {
    connectToDatabase,
};
