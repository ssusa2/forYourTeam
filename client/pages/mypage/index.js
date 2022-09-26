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
				<div className='flex'>
					<h2 className='middle-title '>프로젝트</h2>{' '}
					<span className='font-bold text-lg pt-2 '>({projects.length})</span>
				</div>
				<ProjectList projects={projects} />
			</div>
		</>
	);
}

export default Mypage;
