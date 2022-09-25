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
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { setColor, setLogo, setAll } from '../../src/store/modules/projectInfo';

function Mypage() {
	const userInfo = useSelector(({ user }) => user);
	const route = useRouter();

	useEffect(() => {
		const fetchUsers = async () => {
			const projectRef = await getDocs(collection(db, 'project'));
			const newData = projectRef.docs.map((doc) => ({
				...doc.data(),
			}));
			// const q = query(projectRef, where('uid', '==', `${userInfo.uid}`));
			console.log(newData);
			// 	const projectSnap = await getDoc(projectRef);
			// 	// console.log(Intro);
			// 	// const data = projectSnap.data();
			// 	if (projectSnap.exists()) {
			// 		// console.log('Document data:', projectSnap.data());
			// 		setProjects(projectSnap.data());
			// 		setProjectInfo(projectSnap.data().info.project_info);
			// 	} else {
			// 		console.log('No such document!');
			// 	}
		};
		fetchUsers();
		console.log('q');
	}, []);

	return (
		<>
			<div className='my-container mx-auto'></div>
		</>
	);
}

export default Mypage;
