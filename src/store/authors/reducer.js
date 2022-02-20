import {
	FETCH_AUTHORS_FAILURE,
	FETCH_AUTHORS_SUCCESS,
	SAVE_AUTHOR,
} from './actionTypes';

const initialState = {
	authors: [],
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_AUTHORS_SUCCESS:
			return {
				...state,
				authors: action.payload,
				error: '',
			};

		case FETCH_AUTHORS_FAILURE:
			return {
				...state,
				authors: [],
				error: action.payload,
			};

		case SAVE_AUTHOR:
			return {
				...state,
				authors: [...state.authors, action.payload],
				error: '',
			};

		default:
			return state;
	}
};

export default reducer;
