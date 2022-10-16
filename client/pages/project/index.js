/** @format */

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import SortGenre from './SortGenre';
import { db } from '../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { usePagination } from '../../hooks/usePagination';
import { set } from 'react-hook-form';

function Projects() {
	const [hasProjects, setHasProjects] = useState(false);
	const [btnActive, setBtnActive] = useState('');
	const userInfo = useSelector(({ user }) => user);
	const [target, setTarget] = useState(null);
	const Number = 12;
	const [GenreValue, setGenreValue] = useState(null);
	const { data, loading, loadingMore, noMore } = usePagination(
		'project',
		Number,
		target,
		GenreValue
	);

	console.log(data);
	useEffect(() => {
		setHasProjects(false);
		data.length == 0 && setHasProjects(true);
	}, [data]);

	const router = useRouter();

	const [genre, setGenre] = useState([]);

	// 장르 받아오는 거
	const fetchGenre = async (Intro) => {
		const genreRef = doc(db, 'genre', 'appStore');
		const genreSnap = await getDoc(genreRef);
		if (genreSnap.exists()) {
			setGenre(genreSnap.data());
		} else {
			console.log('No such document!');
		}
	};

	useEffect(() => {
		fetchGenre();
	}, []);

	let genre_options = [];
	let a = Object.entries(genre);

	for (let i = 0; i < a?.length; i++) {
		let op = {};
		op.value = a[i][0];
		op.id = a[i][1];
		op.label = a[i][0];
		genre_options.push(op);
	}

	return (
		<div className='my-container max-w-6xl '>
			<div>
				<h2 className='middle-title'>Projects</h2>
				<div className='sm:block xl:flex md:flex justify-between items-end'>
					<p className='my-3'>
						나의 프로젝트와 다른 프로젝트를 한 공간에.
						<br /> 여러분의 팀과 프로젝트를 소개해보세요.
					</p>
					<button
						onClick={() => {
							if (userInfo?.uid) {
								router.push('/introduce');
							} else {
								if (
									confirm('로그인이 필요한 서비스 입니다. 로그인 하시겠습니까?')
								) {
									router.push('/login');
								}
								{
									('');
								}
							}
						}}
						className='w-full sm:w-auto md:w-auto xl:w-auto px-4 h-[40px] main-hover main-color font-bold rounded-full border-green-700 border-2'
					>
						+ 프로젝트 추가하기
					</button>
				</div>
			</div>
			<div className='mb-8 mt-6 sm:mb-12 h-px bg-slate-300'></div>
			<div className='flex justify-between'>
				<p className='small-title mt-0'>보고싶은 장르를 선택하세요.</p>
				<button
					onClick={() => setGenreValue(null)}
					className='border-2 rounded-full px-1 py-1 border-green-700 main-hover hover:rotate-180'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='2'
						stroke='currentColor'
						className='w-5 h-5 hover:stroke-white'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
						/>
					</svg>
				</button>
			</div>
			<div className='overflow-x-scroll scrollbar-hide flex mt-3 '>
				<SortGenre
					genre={genre_options}
					btnActive={btnActive}
					setGenreValue={setGenreValue}
					setBtnActive={setBtnActive}
				/>
			</div>
			{hasProjects ? (
				<>
					<div className=' flex bg-slate-100 rounded-xl mt-16 sm:mt-24 h-[40vh] justify-center items-center	'>
						<h2 className='small-title main-color mt-0 mr-1 '>
							등록된 프로젝트가 없습니다
						</h2>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='2'
							stroke='currentColor'
							className='w-6 h-6 main-color'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
							/>
						</svg>
					</div>
				</>
			) : (
				<ProjectList projects={data} />
				// <ProjectList className='mb-16' projects={data} />
			)}
			<div ref={setTarget} />
			{noMore && <h2>더이상 불러올 프로젝트가 없어요</h2>}
		</div>
	);
}

export default Projects;
