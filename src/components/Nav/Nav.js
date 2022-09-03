/** @format */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
	let activeStyle = {
		textDecoration: 'underline',
	};
	let activeClassName = 'underline';

	return (
		<>
			<div className='relative z-50	'>
				<div className='px-14 py-6 bg-white text-black fixed top-0 w-full'>
					<div className='flex justify-between	'>
						<h1 className='font-extrabold'>My Logo</h1>
						<div className='flex'>
							{/* <NavLink
								to='/project'
								activeClassName='aaa'
								className='font-bold hover-link  '
							> */}
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
