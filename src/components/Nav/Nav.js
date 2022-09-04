/** @format */
import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

function Nav() {
	const { pathname } = useLocation();
	let activeStyle = {
		textDecoration: 'underline',
	};
	let activeClassName = 'underline';

	console.log(pathname);
	return (
		<>
			<div className='relative z-50	'>
				<div className='px-14 py-6 bg-white text-black fixed top-0 w-full'>
					<div className='flex justify-between	'>
						<h1 className='font-extrabold'>
							{pathname == '/home' ? (
								<Link
									className='text-green-700'
									onClick={() => window.scrollTo(0, 0)}
									to='/home'
								>
									ForYourTeam
								</Link>
							) : (
								<Link onClick={() => window.scrollTo(0, 0)} to='/project'>
									My Logo
								</Link>
							)}
						</h1>
						<div className='flex'>
							<NavLink
								to='project'
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
								className='font-bold hover-link'
							>
								Project
							</NavLink>
							<NavLink
								to='/team'
								activeclassname='text-red'
								className={({ isActive }) =>
									isActive
										? `${activeClassName} + ml-8 font-bold hover-link`
										: 'ml-8 font-bold hover-link'
								}
							>
								Team
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Nav;
