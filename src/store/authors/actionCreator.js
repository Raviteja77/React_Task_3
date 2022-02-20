import {
	FETCH_AUTHORS_FAILURE,
	FETCH_AUTHORS_SUCCESS,
	SAVE_AUTHOR,
} from './actionTypes';

export const fetchAuthorsSuccess = (authors) => {
	return {
		type: FETCH_AUTHORS_SUCCESS,
		payload: authors,
	};
};

export const fetchAuthorsFailure = (error) => {
	return {
		type: FETCH_AUTHORS_FAILURE,
		payload: error,
	};
};

export const saveAuthor = (author) => {
	return {
		type: SAVE_AUTHOR,
		payload: author,
	};
};
