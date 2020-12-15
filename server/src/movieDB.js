module.exports = (mongoose) => {

  const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    genre: String,
    release: String,
    reviews: [{
      answer: String,
      score: Number
    }]
  });
  const movieModel = mongoose.model('movie', movieSchema);
  async function getMovies() {
    try {
      return await movieModel.find();
    } catch (error) {
      console.error("getMovie:", error.message);
      return {};
    }
  }

  async function getMovie(id) {
    try {
      return await movieModel.findById(id);
    } catch (error) {
      console.error("getMovie:", error.message);
      return {};
    }
  }
  async function createMovie(title, description, genre, release) {
    let movie = new movieModel({
      title: title,
      description: description,
      genre:genre,
      release: release
    });
    return movie.save();
  }
  async function createReview(answer, score, id) {

    let NewReview = {
      answer: answer,
      score: score
    };
    return await movieModel.findOneAndUpdate(
      { _id: id },
      { $push: { reviews: NewReview } }
    );
  }
  async function bootstrap(count = 5) {
    let l = (await getMovies()).length;
    console.log("Movie collection size:", l);

    // function getRandomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1) + min);
    // }

 const getTitle =['Star Wars', 'TinTin', 'Bjergkøbing Grandpix', 'Indiana Jones', 'Django', 'Lord of the rings']
    

    if (l === 0) {
      let promises = [];
      for (let i = 0; i < count; i++) {
        let newMovie = new movieModel
        (
          {
        title: getTitle[i],
        description:`Movie desc number ${i}`,
        genre:`Movie genre number ${i}`,
        release: `Movie release number ${i}`
      }
         );

        promises.push(newMovie.save());
      }
      return Promise.all(promises);
    }
  }


  return {
    getMovies,
    getMovie,
    createMovie,
    createReview,
    bootstrap
  }

}