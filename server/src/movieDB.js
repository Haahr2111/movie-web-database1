module.exports = (mongoose) => {

  const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    genre: String,
    release: Number,
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
  async function createReview(answer, id) {

    let NewReview = {
      answer: answer,
      score: 0
    };
    return await movieModel.findOneAndUpdate(
      { _id: id },
      { $push: { reviews: NewReview } }
    );
  }

  return {
    getMovies,
    getMovie,
    createMovie,
    createReview,
  }

}