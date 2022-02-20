import axios from 'axios';
import {
	PostUserSuccess,
	PostUserFailure,
	DeleteUserRequest,
} from './store/user/actionCreator';
import {
	fetchCoursesSuccess,
	fetchCoursesFailure,
	deleteCourse,
	createCourse,
} from './store/courses/actionCreator';

import { fetchAuthorsSuccess, saveAuthor } from './store/authors/actionCreator';
import {
	deleteAllAuthors,
	deleteCourseAuthor,
	saveCourseAuthor,
} from './store/courseAuthor/actionCreator';

export const PostUsers = (postLoginDetails) => {
	return (dispatch) => {
		axios
			.post('http://localhost:3000/login', {
				email: postLoginDetails.email,
				password: postLoginDetails.password,
			})
			.then((response) => {
				dispatch(PostUserSuccess(response.data));
			})
			.catch((error) => {
				dispatch(PostUserFailure(error.message));
				alert('Please check the details again');
			});
	};
};

export const DeleteUser = () => {
	return (dispatch) => {
		dispatch(DeleteUserRequest());
	};
};

export const saveCourseInAllCourses = (courses) => {
	return (dispatch) => {
		// const store = JSON.parse(localStorage.getItem('store'));
		// const coursesList = store.courses.courses;
		// coursesList.result.push(courses);
		dispatch(createCourse(courses));
	};
};

export const deleteCourseFromAllCourses = (courseId) => {
	return (dispatch) => {
		// const store = JSON.parse(localStorage.getItem('store'));
		// const courses = store['courses'];
		// const remainingCourses = courses.courses.result.filter(
		// 	(course) => course.id !== courseId
		// );
		dispatch(deleteCourse(courseId));
	};
};

export const saveAuthorInAllAuthors = (authors) => {
	return (dispatch) => {
		dispatch(saveAuthor(authors));
	};
};

export const saveAuthorInCourseAuthor = (author) => {
	return (dispatch) => {
		dispatch(saveCourseAuthor(author));
	};
};

export const removeAuthorInCourseAuthors = (author) => {
	return (dispatch) => {
		dispatch(deleteCourseAuthor(author));
	};
};

export const removeAllAuthorsInCourseAuthors = () => {
	return (dispatch) => {
		dispatch(deleteAllAuthors());
	};
};

export const fetchCoursesAndAuthors = () => {
	const authors = axios.get('http://localhost:3000/authors/all');
	const courses = axios.get('http://localhost:3000/courses/all');
	return (dispatch) => {
		Promise.all([courses, authors])
			.then((response) => {
				dispatch(fetchCoursesSuccess(response[0].data.result));
				dispatch(fetchAuthorsSuccess(response[1].data.result));
			})
			.catch((error) => {
				dispatch(fetchCoursesFailure(error));
			});
	};
};
