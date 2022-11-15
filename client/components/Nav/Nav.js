/** @format */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LogOut from './Logout';
import { useSelector, useDispatch } from 'react-redux';
import user, { setUserName, setUserId } from '../../src/store/modules/user';
import { setColor, setLogo } from '../../src/store/modules/projectInfo';
import { FirebaseAuth } from '../../pages/firebase';
import { db } from '../../pages/firebase';
import { collection, getDoc, doc } from 'firebase/firestore';
import styled from 'styled-components';
import HeadMeta from '../Head/HeadMeta';

function Nav({ Preview, setPreviewProject, previewProject, PreviewInfo }) {
	const router = useRouter();
	const { route } = router;
	const { pathname } = router;
	const { Intro } = router.query;

	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userObj, setUserObj] = useState(null);
	const [projectObj, setProjectObj] = useState();
	const dispatch = useDispatch();
	const project = useSelector(({ projectInfo }) => projectInfo);

	let projectMenu = '';
	if (route == '/project/[Intro]') {
		projectMenu = true;
	} else if (route == '/team/[Intro]') {
		projectMenu = true;
	} else {
		projectMenu = false;
	}

	const { info, teamInfo } = project;

	let isProjectPage = pathname == '/project/[Intro]';
	let isTeamPage = pathname == '/team/[Intro]';

	useEffect(() => {
		FirebaseAuth.onAuthStateChanged((user) => {
			console.log(user);
			if (user) {
				setIsLoggedIn(true);
				dispatch(setUserName(user.displayName));
				dispatch(setUserId(user.uid));
				setUserObj({
					displayName: user.displayName,
					uid: user.uid,
					updateProfile: (args) => user.updateProfile(args),
				});
			} else {
				setIsLoggedIn(false);
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
			{projectMenu ? (
				''
			) : (
				<HeadMeta
					title={info?.project_info?.name}
					description={info?.project_page.description}
					// url={info?.project_info.url}
					image={info?.project_info.logo_image}
					favicon={info?.project_info.favicon}
					author={teamInfo?.intro?.name}
				/>
			)}

			{/* Preview mode START */}
			{PreviewInfo?.project_info.name !== undefined ? (
				<div className='relative z-50 '>
					<div className=' w-full shadow  px-16 py-6 bg-white text-black fixed top-0 left-0 '>
						<div className='flex justify-between items-center	'>
							<Link onClick={() => window.scrollTo(0, 0)} href='/project'>
								<Logo color={PreviewInfo?.project_info.color}>
									{PreviewInfo?.project_info?.logo}
								</Logo>
							</Link>
							{/* Right Menu */}
							<div className='flex items-center'>
								<RightMenu
									onClick={() => setPreviewProject(true)}
									color={
										previewProject ? PreviewInfo?.project_info.color : 'black'
									}
								>
									Project
								</RightMenu>

								<RightMenu
									onClick={() => setPreviewProject(false)}
									color={
										previewProject ? 'black' : PreviewInfo?.project_info.color
									}
								>
									Team
								</RightMenu>
							</div>
						</div>
					</div>
				</div>
			) : (
				//  Preview mode END
				// Nav mode
				<div className='relative z-50 '>
					<div className='w-full  shadow  px-16 py-6 bg-white text-black fixed top-0 left-0'>
						<div className='flex justify-between items-center max-w-6xl mx-auto'>
							{!projectMenu ? (
								<Link onClick={() => window.scrollTo(0, 0)} href='/home'>
									<h1 className='cursor-pointer font-extrabold text-xl text-green-700'>
										ForMyTeam
									</h1>
								</Link>
							) : (
								<>
									<Link
										onClick={() => window.scrollTo(0, 0)}
										href={`/project/${Intro}`}
									>
										<Logo color={info?.project_info.color}>
											{info?.project_info.logo}
										</Logo>
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
												<RightMenu color={info?.project_info.color}>
													Project
												</RightMenu>
											) : (
												<RightMenu>Project</RightMenu>
											)}
										</Link>
										{/* Team 소개 페이지에 들어왔을때 */}
										<Link href={`/team/${teamNumber}`}>
											{route == '/team/[Intro]' ? (
												<RightMenu color={info?.project_info.color}>
													Team
												</RightMenu>
											) : (
												// <RightMenu color={color}>Team</RightMenu>
												<RightMenu>Team</RightMenu>
											)}
										</Link>
									</>
								) : (
									''
								)}
								{/*  */}
								{/* 지금은 항상 로그인 되어있으면! 근데 프로젝트 페이지 내부에서는 안보이게 */}
								{isProjectPage == isTeamPage ? (
									isLoggedIn ? (
										<LogOut name={userObj?.displayName} />
									) : (
										<Link href='/login'>
											<a className='hover:bg-green-800 cursor-pointer px-4 py-1 font-bold rounded-lg bg-green-700  text-white'>
												로그인
											</a>
										</Link>
									)
								) : (
									''
								)}
							</div>
						</div>
					</div>
				</div>
			)}
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
	:first-child {
		margin-right: 1.5rem;
	}
	font-weight: 700;
	text-align: center;
	cursor: pointer;
	color: ${({ color }) => color};
`;
