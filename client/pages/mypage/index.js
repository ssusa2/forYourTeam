/** @format */
import { useState, useEffect } from 'react';
import { FirebaseAuth, FirebaseInstance } from '../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { db } from '../firebase';
import {
	collection,
	addDoc,
	getDocs,
	doc,
	query,
	where,
	getString,
	collectionGroup,
} from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { setColor, setLogo, setAll } from '../../src/store/modules/projectInfo';
import ProjectList from '../project/ProjectList';

function Mypage() {
	const userInfo = useSelector(({ user }) => user.uid);
	const route = useRouter();
	const [projects, setProjects] = useState([]);

	console.log('mypage', userInfo);

	useEffect(() => {
		const fetchUsers = async () => {
			const project = query(
				collectionGroup(db, 'project'),
				where('uid', '==', `${userInfo}`)
			);
			const querySnapshot = await getDocs(project);

			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
			}));
			// console.log(newData);
			setProjects(newData);
			querySnapshot.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data());
			});
		};

		fetchUsers();
	}, [userInfo]);

	console.log('asdadasdada', projects);
	return (
		<>
			<div className='my-container mx-auto'>
				<div className='flex justify-between'>
					<div className='flex'>
						<h2 className='middle-title '>프로젝트</h2>{' '}
						<span className='font-bold text-lg pt-2 '>({projects.length})</span>
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
						className='px-4 main-hover main-color font-bold rounded-full border-green-700 border-2'
					>
						+ 프로젝트 추가하기
					</button>
				</div>
				<ProjectList projects={projects} />
			</div>
		</>
	);
}

export default Mypage;
