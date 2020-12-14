module.exports = (mongoose) => {

  
    const moviesSchema = new mongoose.Schema({
      name: String,
      content: String,
      review: [{
        text: String,
        score: Number
      }]
    });
  
    const movieModel = mongoose.model('movie', moviesSchema);
    
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
  
    return {
      getMovies,
      getMovie
    }
  }