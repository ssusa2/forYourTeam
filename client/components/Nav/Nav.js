/** @format */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import path from 'path';

function Nav() {
	const [projectNumber, setProjectNumber] = useState(null);
	const { pathname } = useRouter();
	const { route } = useRouter();
	let activeStyle = {
		textDecoration: 'underline green',
		color: 'green',
	};
	let activeClassName = 'underline';

	const router = useRouter();
	const { query } = router;

	const teamNumber = query.Intro;

	return (
		<>
			<div className='relative z-50	'>
				<div className=' w-full px-16 py-6 bg-white text-black fixed top-0 left-0 '>
					<div className='flex justify-between	'>
						{pathname == '/home' || '/projects' ? (
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
						<div className='flex'>
							{/* projects */}
							{pathname == '/home' && (
								<Link href='/project'>
									<h2 className='font-bold hover-link '>Projects</h2>
								</Link>
							)}

							{pathname == '/project' && (
								<Link href='/project'>
									<h2 className='font-bold hover-link '>Projects</h2>
								</Link>
							)}

							{route == '/project/[Intro]' ? (
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
										<h2 className=' ml-8 font-bold hover-link '>Team</h2>
									</Link>
								</>
							) : (
								''
							)}
							{route == '/team/[Intro]' ? (
								<>
									<Link href={`/project/${teamNumber}`}>
										<h2 className='font-bold hover-link '>Project</h2>
									</Link>
									<Link href={`/team/${teamNumber}`}>
										<h2
											className={
												route == '/team/[Intro]'
													? `${activeClassName} + ml-8 font-bold hover-link`
													: 'ml-8 font-bold hover-link'
											}
										>
											Team
										</h2>
									</Link>
								</>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Nav;
