require('dotenv').config();
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const TMDB_API_KEY = process.env.TMDB_API_KEY;


router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=fr-FR`)
 .then(response => response.json())
 .then(data => {
   res.json({ movies: data.results });
 })
    .catch(error => {
      console.error('Erreur TMDB :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des films' });
    });
});

module.exports = router;     