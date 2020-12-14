module.exports = (movieDB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
   
   router.get('/', async (req, res) => {
    const movies = await movieDB.getMovies(); 
    res.json(movies);
  });

  router.get('/:id', async (req, res) => {
    const movie = await movieDB.getMovie(req.params.id);
    res.json(movie);
  });

  router.post('/movies', async (req, res) => {
    // TODO: Implement!
    const name = req.body.name;
    const content = req.body.content;
    const genre = req.body.genre;
    const released = req.body.released;

    movieDB.createQuestion(name, content, genre, released)
    res.json({msg: name + ' has been added'});
  });

  router.post('/', async (req, res) => {
    // TODO: Implement!
    res.json({msg: "Not implemented :("});
  });

  return router;
}
