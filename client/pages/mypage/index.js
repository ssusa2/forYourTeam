/** @format */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '../firebase';
import {
	getDocs,
	query,
	where,
	collectionGroup,
	orderBy,
} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import ProjectList from '../project/ProjectList';

function Mypage() {
	const userInfo = useSelector(({ user }) => user);
	const [projects, setProjects] = useState([]);
	const [shallowProjects, setShallowProjects] = useState([]);
	const [lockProjects, setLockProjects] = useState([]);
	const router = useRouter();

	// 공개된 프로젝트
	useEffect(() => {
		const getProject = async () => {
			const project = query(
				collectionGroup(db, 'project'),
				where('uid', '==', `${userInfo.uid}`),
				where('shallowSaving', '==', false),
				where('isLock', '==', false)
			);
			const querySnapshot = await getDocs(project);
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
			}));
			setProjects(newData);
			querySnapshot.forEach((doc) => {
				// console.log(doc.id, ' => ', doc.data());
			});
		};
		// 임시저장 프로젝트
		const getShallowProject = async () => {
			const project = query(
				collectionGroup(db, 'project'),
				where('shallowSaving', '==', true),
				where('uid', '==', `${userInfo.uid}`),
				where('isLock', '==', false)
			);

			const querySnapshot = await getDocs(project);
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
			}));
			// console.log(newData);
			setShallowProjects(newData);
			querySnapshot.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data());
			});
		};

		// 비공개 프로젝트
		const getLockProject = async () => {
			const project = query(
				collectionGroup(db, 'project'),
				orderBy('joined', 'desc'),
				where('isLock', '==', true),
				where('uid', '==', `${userInfo.uid}`)
			);

			const querySnapshot = await getDocs(project);
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
			}));
			// console.log(newData);
			setLockProjects(newData);
			querySnapshot.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data());
			});
		};

		getProject();
		getShallowProject();
		getLockProject();
	}, [userInfo.uid]);

	return (
		<>
			<div className='my-container mx-auto max-w-6xl '>
				<div className='block mb-10 md:flex md:justify-between md:items-end'>
					<div className=' w-fit'>
						<h2 className='big-title'>
							{userInfo.displayName}님의 프로젝트 모음 📁
						</h2>
						<div className='flex font-semibold div-in-p'>
							<p>📡 공개({projects.length})</p>
							<p>📝 임시저장({shallowProjects.length})</p>
							<p>🔒 비공개({lockProjects.length})</p>
						</div>
					</div>
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
						className='w-full md:w-auto h-fit py-2 px-4 main-hover main-color font-bold rounded-full border-green-700 border-2'
					>
						+ 프로젝트 추가하기
					</button>
				</div>

				<div className='flex justify-between'>
					<div className='flex'>
						<h2 className='middle-title '>📡 공개중인 프로젝트</h2>{' '}
						<span className='font-bold text-lg pt-2 '>({projects.length})</span>
					</div>
				</div>
				<div className='mt-8  h-px bg-slate-300'></div>
				<ProjectList projects={projects} />
				{shallowProjects.length > 0 && (
					<>
						<div className='flex mt-16'>
							<h2 className='middle-title '>📝 임시저장된 프로젝트</h2>
							<span className='font-bold text-lg pt-2 '>
								{shallowProjects.length}
							</span>
						</div>
						<div className=' mt-8 h-px bg-slate-300'></div>

						<ProjectList projects={shallowProjects} />
					</>
				)}

				{lockProjects.length > 0 && (
					<>
						<div className='flex mt-16'>
							<h2 className='middle-title '>🔒 비공개된 프로젝트</h2>{' '}
							<span className='font-bold text-lg pt-2 '>
								({lockProjects.length})
							</span>
						</div>

						<div className=' mt-8 h-px bg-slate-300'></div>
						<ProjectList projects={lockProjects} />
					</>
				)}
			</div>
		</>
	);
}

export default Mypage;
