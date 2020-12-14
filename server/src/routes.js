module.exports = () => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  
  /**Get movies */
  router.get('/movies', async (req, res) => {
    const movies = await DB.getMovies(); 
    res.json(movies);
  });

  /**Get a movie by id*/
  router.get('/movies/:id', async (req, res) => {
    const movie = await DB.getMovie(req.params.id);
    res.json(movie);
  });

  return router;
}
