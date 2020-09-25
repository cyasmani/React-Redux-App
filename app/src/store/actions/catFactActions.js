import axios from "axios"

export const FETCH_FACTS = "FETCH_FACTS";
export const FETCH_FACTS_SUCCESS = "FETCH_FACTS_SUCCESS";
export const FETCH_FACTS_ERROR = "FETCH_FACTS_ERROR";

export const fetchFacts = () => {

    return(dispatch) => {
        dispatch({type: FETCH_FACTS});
        axios.get("https://cat-fact.herokuapp.com/facts")
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_FACTS_SUCCESS, payload: response.data.all})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_FACTS_ERROR})
        } )
    }
}