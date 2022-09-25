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

	useEffect(() => {
		const fetchUsers = async (Intro) => {
			const projectRef = doc(db, 'project', `${Intro}`);
			const projectSnap = await getDoc(projectRef);
			console.log(Intro);
			// const data = projectSnap.data();
			if (projectSnap.exists()) {
				// console.log('Document data:', projectSnap.data());
				setProjectObj(projectSnap.data().info.project_info);
			} else {
				console.log('No such document!');
			}
			// };
		};
		fetchUsers(Intro);
	}, [Intro]);

	const { color, logo, logo_image } = projectColor;

	useEffect(() => {
		dispatch(setColor(projectObj?.color));
		dispatch(setLogo(projectObj?.logo));
	}, [projectObj]);

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
				});
			} else {
				setIsLoggedIn(false);
				router.push('/login');
			}
			setInit(true);
		});
	}, []);

	const refreshUser = () => {
		const user = authService.currentUser;
		setUserObj({
			displayName: user.displayName,
			uid: user.uid,
			updateProfile: (args) => user.updateProfile(args),
		});
	};

	// const activeColor = `text-\[\`${color}\]`;
	const activeColor = `text-[${color}]`;

	console.log(activeColor);
	const teamNumber = Intro;

	console.log('projectColor', projectColor);
	return (
		<>
			<div className='relative z-50	'>
				<div className=' w-full px-16 py-6 bg-white text-black fixed top-0 left-0 '>
					<div className='flex justify-between items-center	'>
						{!projectMenu ? (
							<Link onClick={() => window.scrollTo(0, 0)} href='/home'>
								<h1 className='cursor-pointer font-extrabold text-green-700'>
									ForMyTeam
								</h1>
							</Link>
						) : (
							<Link onClick={() => window.scrollTo(0, 0)} href='/project'>
								<Logo color={color}>{logo}</Logo>
							</Link>
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
							{isLoggedIn ? <LogOut /> : ''}
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
	color: ${({ color }) => color};
	cursor: pointer;
`;

const RightMenu = styled.h2`
	margin-right: 1.5rem;
	font-weight: 700;
	text-align: center;
	cursor: pointer;
	color: ${({ color }) => color};
`;

const NonActive = styled.h2`
	margin-right: 1.5rem;
	font-weight: 700;
	text-align: center;
	cursor: pointer;
`;
