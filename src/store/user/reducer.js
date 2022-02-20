import {
	DELETE_USER,
	POST_USER_FAILURE,
	POST_USER_SUCCESS,
} from './actionTypes';

const initialState = {
	userDetails: {},
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_USER_SUCCESS:
			return {
				...state,
				userDetails: action.payload,
				error: '',
			};

		case POST_USER_FAILURE:
			return {
				...state,
				userDetails: {},
				error: action.payload,
			};

		case DELETE_USER:
			localStorage.clear();
			return {
				...state,
				userDetails: {},
				error: '',
			};
		default:
			return state;
	}
};

export default reducer;
