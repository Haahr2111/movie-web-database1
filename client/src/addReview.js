import React, {useState} from "react";

function AddReview(props) {
    const [answer, setAnswer] = useState('')
    
	



	return (
		<>
		<h3>Add an review</h3>
			<form>
				<label htmlFor="form_answer">Write review</label>
				<input onChange={event => setAnswer(event.target.value)} type="text" id="form_answer" name="form_answer"/>
				<button type="button" onClick={(event) => props.addReview(props.id, answer)}>
					Submit
				</button>
			</form>
		</>
	);
}

export default AddReview;