/** @format */
// import Main from '../Home/Main';
import { useRouter } from 'next/router';
import ProjectList from './ProjectList';
import SortGenre from './SortGenre';

function Projects() {
	const router = useRouter();

	console.log('router', router);
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
			<ProjectList />
		</div>
	);
}

export default Projects;
