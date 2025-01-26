const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();
app.use(express.json());
app.use(cors());
const movieRouter = require('./routes/movies');

app.use('/', movieRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});