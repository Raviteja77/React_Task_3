import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuthors } from '../helpers/selectors';

function useAuthorsIdToGetName(authorsId) {
	const authorsList = useSelector(getAuthors);
	const [list] = useState(authorsList);
	const arrayOfAuthors = [];
	authorsId.forEach((authorId) =>
		list.forEach((authorsList) => {
			if (authorsList.id === authorId) {
				arrayOfAuthors.push(authorsList.name);
			}
		})
	);
	return arrayOfAuthors;
}

export default useAuthorsIdToGetName;
