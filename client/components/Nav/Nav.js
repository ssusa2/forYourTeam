/** @format */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LogOut from './Logout';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setUserId } from '../../src/store/modules/user';
import { FirebaseAuth } from '../../pages/firebase';

function Nav() {
	const { pathname } = useRouter();
	const { route } = useRouter();
	const router = useRouter();
	const { query } = router;
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userObj, setUserObj] = useState(null);
	const dispatch = useDispatch();

	let projectMenu = '';
	if (route == '/project/[Intro]') {
		projectMenu = true;
	} else if (route == '/team/[Intro]') {
		projectMenu = true;
	} else {
		projectMenu = false;
	}

	let teamRoute = useEffect(() => {
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

	let activeStyle = {
		textDecoration: 'underline green',
		color: 'green',
	};
	let activeClassName = 'underline';

	const teamNumber = query.Intro;

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
								<h1 className='cursor-pointer font-extrabold '>My Logo</h1>
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
										<h2
											className={
												route == '/project/[Intro]'
													? `${activeClassName} + font-bold hover-link`
													: 'font-bold hover-link'
											}
										>
											Project
										</h2>
									</Link>
									<Link href={`/team/${teamNumber}`}>
										<h2
											className={
												route == '/project/[Intro]'
													? `${activeClassName} + font-bold hover-link`
													: 'font-bold hover-link'
											}
										>
											Team
										</h2>
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
