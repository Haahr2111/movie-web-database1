import React, {useEffect, useState} from 'react';
import {Router} from "@reach/router";
import Movies from "./movies";
import Movie from "./movie";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
  const [postCount, setPostCount]=useState(0);

  function compare(a, b) {
    if (a.title > b.title) return 1;
    else return -1;
  }

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/Movies`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.sort(compare));
    }
    getData();
  }, [postCount]); 

  function getMovie(id) {
    const movie = data.find(element => element._id === id);
    return movie;
  }
  async function addMovie(title, description, genre, release){
    console.log(title, description, genre, release);
    setPostCount(postCount +1);
    //create object
    const newMovie = {
      title: title,
      description: description,
      genre:genre,
      release: release
    }  

    //define post url 
    const url = `${API_URL}/movies`;
    //use fetch
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    });
    const data = await response.json();
    console.log(data);
  
  }
   async function addReview(id, answer, score){
    setPostCount(postCount +1);
    console.log(answer);
    //create object
    const newReview = {
      id:id,
      answer: answer,
      score: score

    }  
    
    //define post url 
    const url = `${API_URL}/reviews`;
    //use fetch
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    });
    const data = await response.json();
    console.log(data);
  }

  
 
  return (
    <>
    <Router>
     
     <Movies path="/" movieData={data} addMovie={addMovie}></Movies>
     <Movie path="/movie/:id" getMovie={getMovie} addReview={addReview}></Movie>
     </Router>
    </>
  );
}

export default App;
