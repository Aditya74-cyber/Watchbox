const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const movieRoutes = require('./routes/movies');
app.use('/api/movies', movieRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
