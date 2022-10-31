/** @format */
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Edit, Lock, NonHeart, Heart } from '../../components/Icon/Icon';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { doc, updateDoc, increment } from 'firebase/firestore';

function Project({ project }) {
	const userInfo = useSelector(({ user }) => user.uid);
	const router = useRouter();
	const [isError, setIsError] = useState(false);
	const [isClick, setIsClick] = useState(false);
	const { projectId, info, teamInfo, uid, isLock } = project;

	useEffect(() => {
		const washingtonRef = doc(db, 'cities', 'DC');
	}, []);

	return (
		<>
			<div key={projectId} uid={uid} className='group relative'>
				{userInfo == uid && (
					<button
						onClick={() => router.push(`/introduce/${projectId}`)}
						className='absolute font-semibold p-1 right-2 top-2 cursor-pointer text-green-700 rounded-full main-hover z-20'
					>
						<Edit />
					</button>
				)}
				{userInfo == uid && isLock && (
					<div className='absolute font-semibold p-1 left-2 top-2 cursor-pointer text-green-700 rounded-full z-20'>
						<Lock />
					</div>
				)}
				<Link href='/project/[intro]' as={`/project/${projectId}`}>
					<a target={`/project/${projectId}`}>
						<div className=' aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
							{info?.project_info.logo_image ? (
								isError ? (
									<div className=' flex justify-center items-center w-full aspect-video object-cover object-center group-hover:opacity-75'>
										<p className=' h-4 inline-block font-extrabold group-hover:opacity-75'>
											{info?.project_info.name}
										</p>
									</div>
								) : (
									<img
										onError={(event) => setIsError(true)}
										src={info?.project_info.logo_image}
										className='w-full aspect-video object-cover object-center group-hover:opacity-75'
									/>
								)
							) : (
								<div className=' flex justify-center items-center w-full aspect-video object-cover object-center group-hover:opacity-75'>
									<p className=' h-4 inline-block font-extrabold group-hover:opacity-75'>
										{info?.project_info.name}
									</p>
								</div>
							)}
						</div>
					</a>
				</Link>
				<div className=' mt-4 flex justify-between items-center	'>
					<h3 className=' text-lg font-bold text-gray-700'>
						{info?.project_info.name}
					</h3>
					<div className=' text-sm  text-gray-900 font-medium border-2 border-green-700'>
						{info?.project_info.genre}
					</div>
				</div>
				<div className='flex justify-between'>
					<p>{teamInfo?.intro.name}</p>
					{isClick ? (
						<button onClick={() => setIsClick(false)}>
							<Heart />
						</button>
					) : (
						<button
							onClick={(e) => {
								setIsClick(true);
							}}
						>
							<NonHeart />
						</button>
					)}
				</div>
			</div>
		</>
	);
}

export default Project;
