const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

router.post('/', async (req, res) => {
  const newMovie = new Movie(req.body);
  const saved = await newMovie.save();
  res.json(saved);
});

router.patch('/:id/watchlist', async (req, res) => {
  const { inWatchlist } = req.body;
  const movie = await Movie.findByIdAndUpdate(req.params.id, { inWatchlist }, { new: true });
  res.json(movie);
});

module.exports = router;
