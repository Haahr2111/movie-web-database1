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
    
  
    return {
      
    }
  }