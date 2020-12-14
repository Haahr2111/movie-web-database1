module.exports = (mongoose) => {

  
    const moviesSchema = new mongoose.Schema({
      name: String,
      content: String,
      genre: String,
      released: Number, 
      reviews: [{
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
  
    async function createMovie(name, content, genre, released) {
      let movie = new movieModel({
        name: name,
        content: content,
        genre: genre,
      released: released 
      });
      return movie.save();
    }
  
    async function bootstrap(count = 5) {
      let l = (await getMovies()).length;
      console.log("Movie collection size:", l);
  
      if (l === 0) {
        let promises = [];
        for (let i = 0; i < count; i++) {
          let newMovie = new movieModel(
            {
            name: `Movie number ${i}`,
            content: `Movie description for ${i}`,
            genre: `Movie genre for ${i}`,
            released: `Movie release for ${i}`,
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
      bootstrap
    }
  }