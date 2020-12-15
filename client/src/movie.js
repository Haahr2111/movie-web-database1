import React from "react";
import {Link, useParams} from "@reach/router";
import AddReview from "./AddReview";

function Movie(props) {

    const params = useParams()
    const id = params.id;
    const movie = props.getMovie(id);

    if (movie===undefined) return null 

    const reviewList= movie.reviews.map(e=> {return (
        <>
        <li key={e._id}><p>{e.answer}</p>
        <p>Score: {e.score}</p>
        </li>
        </>
        )
    })

   console.log(movie)

    return (
<>
<h3>{movie.name}</h3>
      <p>{movie.content}</p>
    <p><b>Answers</b></p>
    <ul>{reviewList}</ul>
     <AddReview id={id} addreview={props.addreview}></AddReview>
      <Link to="/">Back</Link>
</>
    )
}

export default Movie