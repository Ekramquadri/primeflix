const express = require('express');
const axios = require('axios');
const router = express.Router();
const path = 'https://api.themoviedb.org/3/'

router.get('/fetchTrending', async (req, res) => {
    try {
        const { data } = await axios.get(`${path}trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${req.query.page}`);
        res.json(data);
    } catch (error) {
        res.status(500);
    }
});
router.get('/fetchMovies', async (req, res) => {
    try {
        const { genreforURL, page } = req.query;
        const { data } = await axios.get(`${path}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
        res.json(data);
    } catch (error) {
        res.status(500);
    }
});

router.get('/fetchSeries', async (req, res) => {
    try {
        const { genreforURL, page } = req.query;
        const { data } = await axios.get(`${path}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
        res.json(data);
    } catch (error) {
        res.status(500);
    }
});

router.get('/fetchGenres', async (req, res) => {
    try {
        const { type } = req.query;
        const { data } = await axios.get(`${path}genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        res.send(data);
    } catch (error) {
        res.status(500);
    }
});

router.get('/fetchData', async (req, res) => {
    try {
        const { media_type, id } = req.query;
        const { data } = await axios.get(`${path}${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        res.send(data);
    } catch (error) {
        res.status(500);
    }
});

router.get('/fetchVideo', async (req, res) => {
    try {
        const { media_type, id } = req.query;
        const { data } = await axios.get(`${path}${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        res.send(data);
    } catch (error) {
        res.status(500);
    }
});

router.get('/fetchCredits', async (req, res) => {
    try {
        const { media_type, id } = req.query;
        const response = await axios.get(`${path}${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        res.send(response.data);
    } catch (error) {
        res.status(500);
    }
});

router.get('/fetchSearch', async (req, res) => {
    try {
        const { type, searchText, page } = req.query;
        const { data } = await axios.get(`${path}search/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
        res.json(data);
    } catch (error) {
        res.status(500);
    }
});
module.exports = router;