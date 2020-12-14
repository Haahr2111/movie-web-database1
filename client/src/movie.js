import React from "react";
import {Link, useParams} from "@reach/router";
import addReview from "./addReview";

function Movie(props) {

   const params = useParams()
   const id = params.id;
   const movie = props.getMovie(id);

    if (movie===undefined) return null 

    // const reviewList= movie.reviews.map(e=> {return (
    //     <>
    //     <li key={e._id}><p>{e.review}</p>
        
    //     </li>
    //     </>
    //     )
    // })

   console.log(movie)

    return (
<>
<h3>{movie.name}</h3>
    <p>released: {movie.released}</p>
    <p>Genre: {movie.genre}</p>
<p>description: {movie.content}</p>

{/* <ul>{reviewList}</ul> */}
{/* <addReview id={id} addAnswer={props.addAnswer}></addReview> */}
      <Link to="/">Back</Link>
</>
    )
}

export default Movie

