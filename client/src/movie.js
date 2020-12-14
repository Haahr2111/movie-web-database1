import React from "react";
import {Link, useParams} from "@reach/router";


function Movie(props) {

  //  const params = useParams()
   // const id = params.id;
  //  const movie = props.getMovie(id);

//     if (question===undefined) return null 

//     const reviewList= movie.reviews.map(e=> {return (
//         <>
//         <li key={e._id}><p>{e.review}</p>
        
//         </li>
//         </>
//         )
//     })

//    console.log(movie)

    return (
<>
<h3>For specific movie</h3>
      <Link to="/">Back</Link>
</>
    )
}

export default Movie

