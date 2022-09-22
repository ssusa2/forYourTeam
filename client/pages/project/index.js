/** @format */
// import Main from '../Home/Main';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import SortGenre from './SortGenre';
import { db } from '../firebase';

import { collection, getDocs } from 'firebase/firestore';

function Projects() {
	const [projects, setProjects] = useState([]);

	const router = useRouter();

	useEffect(() => {
		const fetchUsers = async () => {
			const projectRef = await getDocs(collection(db, 'project'));
			// const userSnap = await getDocs(usersCollectionRef);
			const newData = projectRef.docs.map((doc) => ({
				...doc.data(),
			}));
			setProjects(newData);
		};

		fetchUsers();
		// const getProjects = async () => {
		// 	const data = await getDocs(projectsCollectionRef);
		// 	setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		// };
		// getProjects();
	}, []);
	// console.log(data);
	console.log('projects', projects);
	const genre = [
		{
			id: 1,
			genre: 'Movie',
		},
		{
			id: 2,
			genre: 'TV',
		},
		{
			id: 3,
			genre: 'Book',
		},
		{
			id: 4,
			genre: 'Radio',
		},
	];
	return (
		<div className='my-container'>
			{/* {projects.map((project) => {
				return (
					<>
						<h1>name: {project.name}</h1>
					</>
				);
			})} */}
			{/* <div></div> */}
			<div>
				<h2 className='middle-title'>Projects</h2>
				<p className='my-3'>
					나의 프로젝트와 다른 프로젝트를 한 공간에.
					<br /> 나의 프로젝트와 다른 프로젝트를 한 공간에.
				</p>
			</div>
			<div className='mb-8 mt-6 sm:mb-12 h-px bg-slate-300'></div>
			<p className='small-title'>보고싶은 장르를 선택하세요.</p>
			<SortGenre genre={genre} />
			<ProjectList projects={projects} />
		</div>
	);
}

export default Projects;
