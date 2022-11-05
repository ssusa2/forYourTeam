/** @format */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import project1 from '../../image/project1.png';
import project2 from '../../image/project2.png';
import project3 from '../../image/project3.png';
import homeTeam from '../../image/homeTeam.png';
import { db } from '../firebase';
import { replaceBrTag } from '../../util/utils';
import { getDoc, doc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setAll } from '../../src/store/modules/projectInfo';
import HeadMeta from '../../components/Head/HeadMeta';

function Project({ PreviewInfo }) {
	const router = useRouter();
	const dispatch = useDispatch();
	const { Intro } = router.query;
	const [projects, setProjects] = useState({});
	const [projectInfo, setProjectInfo] = useState();

	let { info } = projects;

	if (PreviewInfo) {
		info = PreviewInfo;
	}

	const fetchProject = async (Intro) => {
		const projectRef = doc(db, 'project', `${Intro}`);
		const projectSnap = await getDoc(projectRef);

		if (projectSnap.exists()) {
			setProjects(projectSnap.data());
			// setProjectInfo(projectSnap.data().info.project_info);
		} else {
			console.log('No such document!');
		}
	};

	useEffect(() => {
		router.route == '/project/[Intro]' && fetchProject(Intro);
	}, [Intro]);

	useEffect(() => {
		dispatch(setAll(projects));
	}, [projects]);

	return (
		<>
			{/* <HeadMeta
				title={projectInfo?.name}
				description={projects.info?.project_page.description}
				url={projectInfo?.url}
				image={projectInfo?.logo_image}
				favicon={projectInfo?.favicon}
				author={projects?.teamInfo?.intro?.name}
			/> */}
			<div
				className={
					router.route == '/introduce'
						? 'mt-16 px-14 pt-40 xl:pt-60 mx-auto'
						: 'my-container max-w-6xl'
				}
			>
				{/* section1 */}
				<div className='section1'>
					<div>
						<h2 className='big-title readW'>{info?.project_page.slogun}</h2>
						{info?.project_page.image ? (
							<img
								className='mt-14 mb-8 rounded-xl w-full h-96 object-cover'
								src={info?.project_page.image}
							/>
						) : (
							info?.project_page.slogun && (
								<Image
									className='mt-3  mb-8 w-full object-fill'
									src={project1}
								/>
							)
						)}
					</div>
					<p
						className='xl:w-3/4 text-2xl font-bold'
						dangerouslySetInnerHTML={replaceBrTag(
							info?.project_page.description
						)}
					/>
				</div>
				{/* <Core core={info?.project_page.core} /> */}
				{/* section2 */}
				{info?.project_page.core?.map((el, idx) => {
					if (idx % 2 == 0) {
						return (
							el && (
								<div className=' section2 mt-44 '>
									<div className=' xl:flex justify-between left'>
										<div className='w-full	'>
											<span className='small-title'> {el.subheading}</span>
											<h3 className='middle-title'>{el.title}</h3>
											<p
												className=' mt-3 mb-3 sm:pr-0  text-lg xl:pr-10'
												dangerouslySetInnerHTML={replaceBrTag(el.description)}
											/>
										</div>
										{el.image ? (
											<img
												className='object-cover  w-full xl:w-3/5'
												src={el.image}
											/>
										) : (
											el.title && (
												<Image
													className='object-cover  w-full xl:w-3/5'
													src={project2}
												/>
											)
										)}
										{/* {el.title !== '' && (
											<Image
												className='object-cover  w-full xl:w-3/5'
												src={el.image || project2}
											/>
										)} */}
									</div>
								</div>
							)
						);
					} else if (idx % 2 == 1) {
						return (
							el && (
								<div className='section3 mt-44 '>
									<div className='flex flex-col-reverse xl:flex xl:flex-row	 xl:justify-between xl:rigth'>
										{el.image ? (
											<img
												className='object-cover  w-full xl:w-3/5'
												src={el.image}
											/>
										) : (
											el.title && (
												<Image
													className='object-cover  w-full xl:w-3/5'
													src={project3}
												/>
											)
										)}
										<div className='w-full'>
											<div className='text-end'>
												<span className='small-title'> {el.subheading}</span>
												<h3 className='middle-title'>{el.title}</h3>
												<p
													className='mt-3 mb-3 sm:pl-0  text-lg xl:pl-10'
													dangerouslySetInnerHTML={replaceBrTag(el.description)}
												/>
											</div>
										</div>
									</div>
								</div>
							)
						);
					}
				})}

				{/* section4 */}
				<div className='section4 mt-44 mb-44 '>
					{info?.project_page.image ? (
						<img
							className='mt-14 mb-8 rounded-xl w-full h-96 object-cover'
							src={info?.project_page.image}
						/>
					) : (
						info?.project_page.slogun && (
							<Image className='mt-4  xl:mt-36  mb-8 ' src={project1} />
						)
					)}
					<h2 className='mt-24 text-center leading-snug text-4xl font-extrabold'>
						{info?.project_page.slogun}
					</h2>
					{info?.project_info.url && (
						<div className='flex justify-center'>
							<a
								href={`${info?.project_info.url}`}
								target={`${info?.project_info.url}`}
							>
								<button
									type='button'
									className='w-full  mt-10 rounded-full border border-slate-300 px-4 py-2 text-xl	font-semibold	  text-gray shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 sm:ml-3 sm:w-auto sm:text-base	'
								>
									프로젝트 보러가기
								</button>
							</a>
						</div>
					)}
				</div>
				{/* section4 */}
				<div className='flex justify-end'>
					<h3 className='middle-title text-end mb-6	'>
						프로젝트를 만든 사람들이 궁금하다면?
					</h3>
				</div>
				{projects?.teamInfo?.intro?.image ? (
					<img
						className='mt-6 mb-6 rounded-xl w-full h-96 object-cover'
						src={projects?.teamInfo?.intro?.image}
					/>
				) : (
					<div className='w-full h-96 relative	'>
						<Image
							src={homeTeam}
							layout='fill'
							objectFit='cover'
							className='h-full drop-shadow-lg'
						/>
					</div>
				)}

				<div className='flex justify-end'>
					<button
						onClick={() => router.push(`/team/${Intro}`)}
						type='button'
						className='w-full  mt-14 rounded-full border border-slate-300 px-4 py-2 text-xl	font-semibold	  text-gray shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 sm:ml-3 sm:w-auto sm:text-base	'
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
