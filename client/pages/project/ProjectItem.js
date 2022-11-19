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
import LogOut from '../../components/Nav/Logout';

function Project({ project }) {
	const userInfo = useSelector(({ user }) => user.uid);
	const router = useRouter();
	const [isError, setIsError] = useState(false);
	const [isClick, setIsClick] = useState(false);
	const [showLikeList, setShowLikeList] = useState(false);
	const { projectId, info, teamInfo, uid, isLock } = project;
	const [like, SetLike] = useState();

	const liked = _.includes(like?.likeId, `${uid}`);

	const addLike = async () => {
		if (userInfo) {
			if (liked) return;
			setIsClick(true);
			const likeRef = doc(db, 'project', `${projectId}`);
			const data = await updateDoc(likeRef, {
				like: increment(1),
				likeId: arrayUnion(`${userInfo}`),
			});
		} else {
			if (confirm('로그인이 필요한 서비스 입니다. 로그인 하시겠습니까?')) {
				router.push('/login');
			}
		}
		{
			('');
		}
	};

	const subtractLike = async () => {
		if (userInfo) {
			setIsClick(false);
			const likeRef = doc(db, 'project', `${projectId}`);
			await updateDoc(likeRef, {
				like: increment(-1),
				likeId: arrayRemove(`${userInfo}`),
			});
		} else {
			if (confirm('로그인이 필요한 서비스 입니다. 로그인 하시겠습니까?')) {
				router.push('/login');
			}
		}
		{
			('');
		}
	};

	useEffect(() => {
		const unsub = onSnapshot(doc(db, 'project', `${projectId}`), (doc) => {
			SetLike(doc.data());
		});
	}, [isClick]);

	let likeList;

	function nFormatter(num) {
		if (num >= 1000000000) {
			return (likeList =
				(num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G');
		}
		if (num >= 1000000) {
			return (likeList = (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M');
		}
		if (num >= 1000) {
			return (likeList = (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K');
		}
		return (likeList = num);
	}

	nFormatter(like?.like);

	return (
		<>
			<div key={projectId} uid={uid} className=' relative'>
				{userInfo == uid && (
					<button
						onClick={() => router.push(`/introduce/${projectId}`)}
						className='absolute font-semibold p-1 right-2 top-2 cursor-pointer text-green-700 rounded-full group item-hover z-20'
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
									<div className=' flex justify-center items-center w-full aspect-video object-cover object-center hover:opacity-75 hover:scale-125 hover'>
										<p className=' h-4 inline-block font-extrabold hover:opacity-75'>
											{info?.project_info.name}
										</p>
									</div>
								) : (
									<img
										onError={(event) => setIsError(true)}
										src={info?.project_info.logo_image}
										className='w-full aspect-video object-cover object-center hover:opacity-75 hover:scale-125 hover'
									/>
								)
							) : (
								<div className=' flex justify-center items-center w-full aspect-video object-cover object-center hover:opacity-75 hover:scale-125 hover'>
									<p className=' h-4 inline-block font-extrabold '>
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
							<button
								onClick={() => {
									subtractLike();
								}}
							>
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
						{like?.like > 0 && (
							<p
								onMouseOver={() => setShowLikeList(true)}
								onMouseLeave={() => setShowLikeList(false)}
								className='ml-2 relative'
							>
								{likeList}
							</p>
						)}
						{showLikeList ? (
							<>
								<p className='absolute w-full text-center bg-slate-100 px-2 rounded-xl right-0 -bottom-5 text-green-700 font-semibold'>
									{like?.like?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
									명이 좋아합니다.
								</p>
							</>
						) : (
							''
						)}
					</div>
				</div>
			</div>
			{/* <LogOut /> */}
		</>
	);
}

export default Project;
