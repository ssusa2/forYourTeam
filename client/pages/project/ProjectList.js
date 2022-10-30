/** @format */
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Project } from './Project';
import { Edit, Lock, NonHeart, Heart } from '../../components/Icon/Icon';

function ProjectList({ projects }) {
	// const userInfo = useSelector(({ user }) => user.uid);
	const router = useRouter();
	const [isError, setIsError] = useState(false);
	const [isClick, setIsClick] = useState(false);

	const handleLike = () => {
		setIsClick(!isClick);
	};

	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl py-8 sm:py-8  lg:max-w-7xl'>
					<h2 className='sr-only'>Products</h2>
					<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
						{projects.map((project) => {
							// const { uid, info, teamInfo, isLock, projectId } = project;
							// console.log(info?.project_info.logo_image);
							return (
								<Project project={project} />
								// 	<div key={projectId} uid={uid} className='group relative'>
								// 		{userInfo == uid && (
								// 			<button
								// 				onClick={() => router.push(`/introduce/${projectId}`)}
								// 				className='absolute font-semibold p-1 right-2 top-2 cursor-pointer text-green-700 rounded-full main-hover z-20'
								// 			>
								// 				<Edit />
								// 			</button>
								// 		)}
								// 		{userInfo == uid && isLock && (
								// 			<div className='absolute font-semibold p-1 left-2 top-2 cursor-pointer text-green-700 rounded-full z-20'>
								// 				<Lock />
								// 			</div>
								// 		)}
								// 		<Link href='/project/[intro]' as={`/project/${projectId}`}>
								// 			<a target={`/project/${projectId}`}>
								// 				<div className=' aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
								// 					{info?.project_info.logo_image ? (
								// 						isError ? (
								// 							<div className=' flex justify-center items-center w-full aspect-video object-cover object-center group-hover:opacity-75'>
								// 								<p className=' h-4 inline-block font-extrabold group-hover:opacity-75'>
								// 									{info?.project_info.name}
								// 								</p>
								// 							</div>
								// 						) : (
								// 							<img
								// 								onError={(event) => setIsError(true)}
								// 								src={info?.project_info.logo_image}
								// 								className='w-full aspect-video object-cover object-center group-hover:opacity-75'
								// 							/>
								// 						)
								// 					) : (
								// 						<div className=' flex justify-center items-center w-full aspect-video object-cover object-center group-hover:opacity-75'>
								// 							<p className=' h-4 inline-block font-extrabold group-hover:opacity-75'>
								// 								{info?.project_info.name}
								// 							</p>
								// 						</div>
								// 					)}
								// 				</div>
								// 			</a>
								// 		</Link>

								// 		<div className=' mt-4 flex justify-between items-center	'>
								// 			<h3 className=' text-lg font-bold text-gray-700'>
								// 				{info?.project_info.name}
								// 			</h3>
								// 			<div className=' text-sm  text-gray-900 font-medium border-2 border-green-700'>
								// 				{info?.project_info.genre}
								// 			</div>
								// 		</div>
								// 		<div className='flex justify-between'>
								// 			<p>{teamInfo?.intro.name}</p>
								// 			{isClick ? (
								// 				<Heart onClick={() => setIsClick(false)} />
								// 			) : (
								// 				<NonHeart
								// 					onClick={() => {
								// 						handleLike();
								// 						console.log('isClick');
								// 					}}
								// 				/>
								// 			)}
								// 		</div>
								// 	</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectList;
