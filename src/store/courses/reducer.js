import {
	CREATE_COURSE,
	DELETE_COURSE,
	FETCH_COURSES_FAILURE,
	FETCH_COURSES_SUCCESS,
} from './actionTypes';

const initialState = {
	courses: [],
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COURSES_SUCCESS:
			return {
				...state,
				courses: action.payload,
				error: '',
			};

		case FETCH_COURSES_FAILURE:
			return {
				...state,
				courses: [],
				error: action.payload,
			};

		case CREATE_COURSE:
			return {
				...state,
				courses: [...state.courses, action.payload],
				error: '',
			};

		case DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter((course) => course.id !== action.payload),
				error: '',
			};

		default:
			return state;
	}
};

export default reducer;
