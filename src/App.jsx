import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import useLocalStorageToken from './customHooks/useLocalStorageToken';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';
import store from './store';
import { Provider } from 'react-redux';

function App() {
	const [path, setPath] = useState('');
	const token = useLocalStorageToken();
	useEffect(() => {
		// Updates path whenever there is a change in token
		setPath(token ? '/courses' : '/login');
	}, [token]);
	return (
		<div>
			<Provider store={store}>
				<Header />
				<Routes>
					<Route exact path='/' element={<Navigate replace to={path} />} />
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
					<Route element={<ProtectRoute />}>
						<Route path='/courses' element={<Courses />} />
						<Route path='/courses/:courseId' element={<CourseInfo />} />
						<Route path='/courses/add' element={<CreateCourse />} />
					</Route>
				</Routes>
			</Provider>
		</div>
	);
}
export default App;
