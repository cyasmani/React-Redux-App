import {
    FETCH_FACTS,
    FETCH_FACTS_SUCCESS,
    FETCH_FACTS_ERROR
} from '../actions/index'

const initialState = {
    facts: [{
        "_id": "599f87db9a11040c4a16343f",
        "text": "The goddess of love, beauty, and fertility in Norse mythology, Freyja was the first cat lady. She is depicted in stories as riding a chariot that was drawn by cats.",
        "type": "cat",
        "user": {
        "_id": "5a9ac18c7478810ea6c06381",
        "name": {
        "first": "Alex",
        "last": "Wohlbruck"
        }
        },
        "upvotes": 7,
        "userUpvoted": null
        },
        {
        "_id": "5b1b411d841d9700146158d9",
        "text": "The Egyptian Mau’s name is derived from the Middle Egyptian word mjw, which means cat. But contrary to its name, it’s unclear whether the modern Egyptian Mau actually originated in Egypt.",
        "type": "cat",
        "user": {
        "_id": "5a9ac18c7478810ea6c06381",
        "name": {
        "first": "Alex",
        "last": "Wohlbruck"
        }
        },
        "upvotes": 7,
        "userUpvoted": null
        },],
    loadingFacts: true

}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FACTS:
            return {
                ...state,
                loadingFacts: true
            }
        case FETCH_FACTS_ERROR:
            return {
                ...state,
                loadingFacts: false
            }
        case FETCH_FACTS_SUCCESS:
            return {
                ...state,
                facts: action.payload,
                loadingFacts: false
            }
        default:
            return state;
    }

}