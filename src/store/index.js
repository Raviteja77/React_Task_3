import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user/reducer';
import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer';
import courseAuthorsReducer from './courseAuthor/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
	courseAuthor: courseAuthorsReducer,
});

const persistedState = localStorage.getItem('store')
	? JSON.parse(localStorage.getItem('store'))
	: {};

const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
	localStorage.setItem('store', JSON.stringify(store.getState()));
});

export default store;
