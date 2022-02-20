import {
	POST_USER_SUCCESS,
	POST_USER_FAILURE,
	DELETE_USER,
} from './actionTypes';

export const PostUserSuccess = (userData) => {
	return {
		type: POST_USER_SUCCESS,
		payload: userData,
	};
};

export const PostUserFailure = (error) => {
	return {
		type: POST_USER_FAILURE,
		payload: error,
	};
};

export const DeleteUserRequest = () => {
	return {
		type: DELETE_USER,
	};
};
