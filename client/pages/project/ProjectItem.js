/** @format */
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Edit, Lock, NonHeart, Heart } from '../../components/Icon/Icon';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
	doc,
	updateDoc,
	arrayUnion,
	arrayRemove,
	increment,
	onSnapshot,
} from 'firebase/firestore';
import _ from 'underscore';

function Project({ project }) {
	const userInfo = useSelector(({ user }) => user.uid);
	const router = useRouter();
	const [isError, setIsError] = useState(false);
	const [isClick, setIsClick] = useState(false);
	const { projectId, info, teamInfo, uid, isLock } = project;
	const [like, SetLike] = useState();

	const liked = _.includes(like?.likeId, `${uid}`);

	const addLike = async () => {
		if (liked) return;
		setIsClick(true);
		const likeRef = doc(db, 'project', `${projectId}`);
		const data = await updateDoc(likeRef, {
			like: increment(1),
			likeId: arrayUnion(`${userInfo}`),
		});
	};

	const subtractLike = async () => {
		setIsClick(false);
		const likeRef = doc(db, 'project', `${projectId}`);
		await updateDoc(likeRef, {
			like: increment(-1),
			likeId: arrayRemove(`${userInfo}`),
		});
	};

	console.log('asdfasdfsdfs', _.includes(like?.likeId, `${uid}`));
	console.log('uid', userInfo);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, 'project', `${projectId}`), (doc) => {
			console.log('Current data: ', doc.data());
			SetLike(doc.data());
		});
	}, [isClick]);

	let likeList;
	const likeCount = (likeNumber) => {
		let result;
		if (likeNumber >= 1000) {
			result =
				likeNumber
					?.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
					.split(',', 1) + 'k';

			return (likeList = result);
		} else {
			return (likeList = likeNumber);
		}
	};

	likeCount(like?.like);

	console.log(likeCount(like?.like));

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
					<div className='flex'>
						{_.includes(like?.likeId, `${userInfo}`) ? (
							<button onClick={() => subtractLike()}>
								<Heart />
							</button>
						) : (
							<button
								onClick={() => {
									addLike();
								}}
							>
								<NonHeart />
							</button>
						)}
						{like?.like > 0 && <p className='ml-2'>{likeList}</p>}
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;
