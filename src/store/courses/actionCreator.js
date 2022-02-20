import {
	CREATE_COURSE,
	DELETE_COURSE,
	FETCH_COURSES_FAILURE,
	FETCH_COURSES_SUCCESS,
} from './actionTypes';

export const fetchCoursesSuccess = (courses) => {
	return {
		type: FETCH_COURSES_SUCCESS,
		payload: courses,
	};
};

export const fetchCoursesFailure = (error) => {
	return {
		type: FETCH_COURSES_FAILURE,
		payload: error,
	};
};

export const createCourse = (courses) => {
	return {
		type: CREATE_COURSE,
		payload: courses,
	};
};
export const deleteCourse = (courseId) => {
	return {
		type: DELETE_COURSE,
		payload: courseId,
	};
};
