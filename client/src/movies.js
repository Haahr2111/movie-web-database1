import React from 'react';
import {Link} from "@reach/router";


function Movies(props){

  const movieData = props.movieData;

  const mapFunction = element => {
    return (
      <Link to={`/movie/${element._id}`} key={element._id}>
        <li>{element.name}</li>
      </Link>
    );

  }
const list = movieData.map(mapFunction);

  if (!props.movies) {
    return <p>No data!</p>;
  }

  return(
     <>
        <h3>Movies</h3>
      <ul>
        {list}
      </ul>
        
        
        </>
    );
      
}


export default Movies;
