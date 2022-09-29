/** @format */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LogOut from './Logout';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setUserId } from '../../src/store/modules/user';
import { setColor, setLogo } from '../../src/store/modules/projectInfo';
import { FirebaseAuth } from '../../pages/firebase';
import { db } from '../../pages/firebase';
import { collection, getDoc, doc } from 'firebase/firestore';
import styled from 'styled-components';

function Nav() {
	const { route } = useRouter();
	const router = useRouter();
	const { Intro } = router.query;

	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userObj, setUserObj] = useState(null);
	const [projectObj, setProjectObj] = useState();
	const dispatch = useDispatch();
	const projectColor = useSelector(({ projectInfo }) => projectInfo);

	let projectMenu = '';
	if (route == '/project/[Intro]') {
		projectMenu = true;
	} else if (route == '/team/[Intro]') {
		projectMenu = true;
	} else {
		projectMenu = false;
	}

	console.log(route);
	useEffect(() => {
		const fetchUsers = async (Intro) => {
			const projectRef = doc(db, 'project', `${Intro}`);
			const projectSnap = await getDoc(projectRef);
			// console.log(Intro);
			// const data = projectSnap.data();
			if (projectSnap.exists()) {
				// console.log('Document data:', projectSnap.data());
				setProjectObj(projectSnap.data().info.project_info);
				// console.log(projectSnap.data().info.project_info);
			} else {
				console.log('No such document!');
			}
			// };
		};
		if (route === '/project/[Intro]') {
			console.log('tq');
			fetchUsers(Intro);
		}
	}, [route]);

	console.log(route);
	const { color, logo, logo_image } = projectColor;

	useEffect(() => {
		route == '/project/[Intro]' && dispatch(setColor(projectObj?.color));
		dispatch(setLogo(projectObj?.logo));
	}, []);

	console.log(projectObj?.logo);

	useEffect(() => {
		FirebaseAuth.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(true);
				// router.push('/home');
				dispatch(setUserName(user.displayName));
				dispatch(setUserId(user.uid));
				setUserObj({
					displayName: user.displayName,
					uid: user.uid,
					updateProfile: (args) => user.updateProfile(args),
					// router.push('/home');
				});
				// router.push('/home');
			} else {
				setIsLoggedIn(false);

				// router.push('/login');
			}
			setInit(true);
		});
	}, [isLoggedIn]);

	const refreshUser = () => {
		const user = authService.currentUser;
		setUserObj({
			displayName: user.displayName,
			uid: user.uid,
			updateProfile: (args) => user.updateProfile(args),
		});
	};

	const teamNumber = Intro;

	return (
		<>
			<div className='relative z-50	'>
				<div className=' w-full px-16 py-6 bg-white text-black fixed top-0 left-0 '>
					<div className='flex justify-between items-center	'>
						{!projectMenu ? (
							<Link onClick={() => window.scrollTo(0, 0)} href='/home'>
								<h1 className='cursor-pointer font-extrabold text-xl text-green-700'>
									ForMyTeam
								</h1>
							</Link>
						) : (
							<>
								<Link onClick={() => window.scrollTo(0, 0)} href='/project'>
									<Logo color={color}>{logo}</Logo>
								</Link>
							</>
						)}

						{/* Right Menu */}
						<div className='flex items-center'>
							{!projectMenu && (
								<Link href='/project'>
									<h2 className='mr-6 font-bold hover-link '>Projects</h2>
								</Link>
							)}
							{/* Project 소개 페이지에 들어왔을때 */}
							{projectMenu ? (
								<>
									<Link href={`/project/${teamNumber}`}>
										{route == '/project/[Intro]' ? (
											<RightMenu color={color}>Project</RightMenu>
										) : (
											<RightMenu>Project</RightMenu>
										)}
									</Link>
									<Link href={`/team/${teamNumber}`}>
										{route == '/team/[Intro]' ? (
											<RightMenu color={color}>Team</RightMenu>
										) : (
											// <RightMenu color={color}>Team</RightMenu>
											<RightMenu>Team</RightMenu>
										)}
									</Link>
								</>
							) : (
								''
							)}
							{isLoggedIn ? (
								<LogOut name={userObj?.displayName} />
							) : (
								<Link href='/login'>
									<a className='hover:bg-green-800 cursor-pointer px-4 py-1 font-bold rounded-lg bg-green-700  text-white'>
										로그인
									</a>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Nav;

const Logo = styled.h1`
	font-weight: 800;
	font-size: 1.25rem;
	line-height: 1.75rem;
	color: ${({ color }) => color};
	cursor: pointer;
`;

const RightMenu = styled.h2`
	margin-right: 1.5rem;
	font-weight: 700;
	text-align: center;
	cursor: pointer;
	color: ${({ color }) => color};
	/* text-decoration: ${({ color }) => color} underline; */
`;

const NonActive = styled.h2`
	margin-right: 1.5rem;
	font-weight: 700;
	text-align: center;
	cursor: pointer;
`;
