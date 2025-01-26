const { connectToDatabase } = require('../db/mongodb');
const axios = require('axios');
const fetchFromDatabase = async (collectionName, query) => {
    const database = await connectToDatabase();
    const collection = await database.collection(collectionName);
    return await collection.findOne(query);
};

const fetchFromAPI = async (url) => {
    const { data } = await axios.get(url);
    return data;
};

const saveToDatabase = async (collectionName, data) => {
    const database = await connectToDatabase();
    const collection = await database.collection(collectionName);
    await collection.insertOne(data);
};

module.exports = { fetchFromDatabase, fetchFromAPI, saveToDatabase };