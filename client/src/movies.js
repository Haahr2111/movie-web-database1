import React from 'react';
import {Link} from "@reach/router";

function Movies(props){

  const movieData = props.movieData;

  const mapFunction = e => {
      return(
  <Link to={`/movie/${e._id}`} key={e._id}>
    <li>{e.name}</li>
  </Link>
  )
}
const list = movieData.map(mapFunction)



  return(
      <>
      <h3>Movies</h3>
    <ul>
      {list}
    </ul>
      
      
      </>
  )
}


export default Movies;
