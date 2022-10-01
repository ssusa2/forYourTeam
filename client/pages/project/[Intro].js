/** @format */
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Slide from './slide';
import { db } from '../firebase';
import { collection, getDoc, doc } from 'firebase/firestore';
import { useSelector, useDispatch, createSelector } from 'react-redux';
import { setColor, setLogo, setAll } from '../../src/store/modules/projectInfo';

function Project({ Preview }) {
	const router = useRouter();
	const dispatch = useDispatch();
	const { Intro } = router.query;
	// console.log('[Intro]', Preview);
	const [projects, setProjects] = useState({});
	const [projectInfo, setProjectInfo] = useState();

	const projectColor = useSelector(({ projectInfo }) => projectInfo);
	let { info } = projects;

	if (Preview) {
		info = Preview.info;
	}

	const fetchProject = async (Intro) => {
		const projectRef = doc(db, 'project', `${Intro}`);
		const projectSnap = await getDoc(projectRef);
		// console.log(Intro);
		// const data = projectSnap.data();
		if (projectSnap.exists()) {
			// console.log('Document data:', projectSnap.data());
			setProjects(projectSnap.data());
			setProjectInfo(projectSnap.data().info.project_info);
		} else {
			console.log('No such document!');
		}
	};

	const previewMode = () => {};

	useEffect(() => {
		router.route == '/project/[Intro]' && fetchProject(Intro);
		router.route == '/introduce' && previewMode();
	}, [Intro]);

	useEffect(() => {
		dispatch(setAll(projectInfo));
	}, [projects]);

	// const { intro } = projects?.teamInfo;
	// console.log(info?.project_page.imag);
	return (
		<>
			{/* <h1>Post: {id}</h1>
			<h1>Comment: {comment}</h1> */}
			<div
				className={
					router.route == '/introduce'
						? 'mt-16 px-14 pt-40 xl:pt-60 mx-auto'
						: 'my-container'
				}
			>
				{/* section1 */}
				<div className='section1'>
					<div>
						<h2 className='big-title readW '>{info?.project_page.slogun}</h2>
						<img
							className='mt-4  xl:mt-36  mb-8 '
							src={info?.project_page.image}
						/>
					</div>
					<p className='xl:w-3/4 text-2xl font-bold'>
						{info?.project_page.description}
					</p>
				</div>
				{/* section2 */}
				{info?.project_page.core?.[0] && (
					<div className=' section2 mt-44 '>
						<div className=' xl:flex justify-between left'>
							<div className='w-full	'>
								<span className='small-title'>
									{' '}
									{info?.project_page.core?.[0].title}
								</span>
								<h3 className='middle-title'>
									{info?.project_page.core?.[0].subheading}
								</h3>
								<p className=' mt-3 mb-3 sm:pr-0  text-xl xl:pr-20'>
									{info?.project_page.core?.[0].description}
								</p>
							</div>
							<img
								className='object-cover  w-full xl:w-3/5'
								src={info?.project_page.core?.[0].image}
							/>
						</div>
					</div>
				)}
				{/* section3 */}
				{info?.project_page.core?.[1] && (
					<div className='section3 mt-44 '>
						<div className='flex flex-col-reverse xl:flex xl:flex-row	 xl:justify-between xl:rigth'>
							<img
								className='object-cover w-full xl:w-3/5'
								src={info?.project_page.core?.[1].image}
							/>
							<div className='text-end'>
								<span className='small-title'>
									{' '}
									{info?.project_page.core?.[1].title}
								</span>
								<h3 className='middle-title'>
									{info?.project_page.core?.[1].subheading}
									{/* <br /> 따뜻한 동네를 만들어요. */}
								</h3>
								<p className='mt-3 mb-3 sm:pl-0  text-xl xl:pl-20 '>
									{info?.project_page.core?.[1].description}
								</p>
							</div>
						</div>
					</div>
				)}

				{/* section4 */}
				<div className='section4 mt-44 mb-44 '>
					<img
						className='object-cover w-full mt-14 mb-8 rounded-xl '
						src={info?.project_page.image}
					/>
					<h2 className='mt-24 text-center leading-snug text-4xl font-extrabold'>
						{info?.project_page.slogun}
					</h2>
					<div className='flex justify-center'>
						<a
							href={`${info?.project_info.url}`}
							target={`${info?.project_info.url}`}
						>
							<button type='button' className='mt-10 gray-button'>
								프로젝트 보러가기
							</button>
						</a>
					</div>
				</div>
				{/* section4 */}
				<div className='flex justify-end'>
					<h3 className='middle-title text-end	'>
						프로젝트를 만든 사람들이 궁금하다면?
					</h3>
				</div>
				<div className='flex justify-end'>
					<button
						onClick={() => router.push(`/team/${Intro}`)}
						type='button'
						className='mt-8 gray-button'
					>
						팀원 소개 보러가기
					</button>
				</div>
				{/* <Slide /> */}
			</div>
		</>
	);
}

export default Project;
