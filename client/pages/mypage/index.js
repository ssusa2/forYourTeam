/** @format */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '../firebase';
import { getDocs, query, where, collectionGroup } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import ProjectList from '../project/ProjectList';

function Mypage() {
	const userInfo = useSelector(({ user }) => user.uid);
	const [projects, setProjects] = useState([]);
	const [shallowProjects, setShallowProjects] = useState([]);
	const router = useRouter();
	// isShallowSave

	useEffect(() => {
		const getProject = async () => {
			const project = query(
				collectionGroup(db, 'project'),
				where('uid', '==', `${userInfo}`),
				where('isShallowSave', '==', false)
			);

			const querySnapshot = await getDocs(project);
			console.log('querySnapshot', querySnapshot);
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
			}));
			// console.log(newData);
			setProjects(newData);
			querySnapshot.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data());
			});
		};

		const getShallowProject = async () => {
			const project = query(
				collectionGroup(db, 'project'),
				where('isShallowSave', '==', true),
				where('uid', '==', `${userInfo}`)
			);

			const querySnapshot = await getDocs(project);
			console.log(querySnapshot);
			console.log('querySnapshot', querySnapshot);
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
			}));
			// console.log(newData);
			setShallowProjects(newData);
			querySnapshot.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data());
			});
		};

		getProject();
		getShallowProject();
	}, [userInfo]);

	console.log('asdadasdada', shallowProjects);
	return (
		<>
			<div className='my-container mx-auto max-w-6xl '>
				<div className='flex justify-between'>
					<div className='flex'>
						<h2 className='middle-title '>My Project</h2>{' '}
						<span className='font-bold text-lg pt-2 '>({projects.length})</span>
					</div>
					<button
						onClick={() => {
							if (!userInfo?.uid) {
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
						className='px-4 main-hover main-color font-bold rounded-full border-green-700 border-2'
					>
						+ 프로젝트 추가하기
					</button>
				</div>
				<div className='mt-8  h-px bg-slate-300'></div>
				<ProjectList projects={projects} />
				<div className='flex mt-16'>
					<h2 className='middle-title '>임시저장된 프로젝트</h2>{' '}
					<span className='font-bold text-lg pt-2 '>
						({shallowProjects.length})
					</span>
				</div>

				<div className=' mt-8 h-px bg-slate-300'></div>
				<ProjectList projects={shallowProjects} />
			</div>
		</>
	);
}

export default Mypage;
