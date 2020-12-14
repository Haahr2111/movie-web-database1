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
      setData(data.msg);
    }
    getData();
  }, []); 

  return (
    <>
      <h1>MERN Movie App!</h1>
      <p>Data from server: {data}</p>
      
    <Router>
     <Movies path="/"></Movies>
     </Router>
    
    </>
  );
}

export default App;
