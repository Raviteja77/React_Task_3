import React from 'react';
import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { constantVariables } from '../../../../constants';
import { Link } from 'react-router-dom';
import { convertMinsToHrsMins } from '../../../../helpers/pipeDuration';
import useAuthorsIdToGetName from '../../../../customHooks/useAuthorsIdToGetName';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteCourseFromAllCourses } from '../../../../services';

library.add(faPencil, faTrash);

function CourseCard({ value }) {
	const dispatch = useDispatch();
	return (
		<section className='course'>
			<div className='row'>
				<div className='col-8'>
					<h3>{value.title}</h3>
					<p>{value.description}</p>
				</div>
				<div className='col-4'>
					<div className='authors'>
						<strong>Authors</strong>:
						{useAuthorsIdToGetName(value.authors).join(', ')}
					</div>
					<div>
						<strong>Duration</strong>: {convertMinsToHrsMins(value.duration)}
					</div>
					<div>
						<strong>Created</strong>: {value.creationDate}
					</div>
					<div className='course_buttons'>
						<Link to={`/courses/${value.id}`}>
							<Button
								buttonText={constantVariables.SHOW_COURSE}
								className='btn btn-outline-success'
							/>
						</Link>
						<Button iconName={faPencil} className='btn btn-outline-info' />
						<Button
							iconName={faTrash}
							className='btn btn-outline-danger'
							clickHandler={() =>
								dispatch(deleteCourseFromAllCourses(value.id))
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CourseCard;
