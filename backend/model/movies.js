const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: String,
  genre: String,
  inWatchlist: { type: Boolean, default: false },
});

module.exports = mongoose.model('Movie', MovieSchema);
