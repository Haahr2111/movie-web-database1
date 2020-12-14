import React, {useEffect, useState} from 'react';
import {Router} from "@reach/router";
import Movies from "./movies";
import Movie from "./movie";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState("No data :(");
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/movies`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []); 

  function getMovie(id) {
    const movie = data.find(element => element._id === id);
    return movie;
  }
  async function addMovie(name, content, genre, released){
    console.log(name, content);
    //create object
    const newMovie = {
      name: name,
      content: content,
      genre: genre,
      released: released
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

  

  
  
  return (
    <>
      <h1>MERN Movie App!</h1>
      <p> {data}</p>
      
    <Router>
     <Movies path="/" movieData={data} addMovie={addMovie}></Movies>
     <Movie path="/movie:id" getMovie={getMovie}></Movie>
     </Router>
    
    </>
  );
}

export default App;
