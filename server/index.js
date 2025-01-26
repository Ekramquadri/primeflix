const express = require('express');
const { MongoClient } = require("mongodb");
const app = express();
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();
app.use(express.json());
app.use(cors());
const movieRouter = require('./routes/movies');

app.use('/', movieRouter);

async function main() {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error starting the application", error);
    }
}

main();