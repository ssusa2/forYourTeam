/** @format */
import React from 'react';
import Link from 'next/router';
import { ReactComponent as Github } from '../../src/images/github.svg';

function Footer() {
	return (
		<>
			<div className='relative '>
				<div className='mt-52 px-14 py-10  footer-border  w-full'>
					<div className='flex justify-between	'>
						<h1 className='font-extrabold text-black'>
							{/* <Link onClick={() => window.scrollTo(0, 0)} href='/project'>
								My Logo
							</Link> */}
						</h1>
						{/* <Link href='/home'>
							깃허브
							<Github className='	fill-black hover:fill-gray-300		 cursor-pointer	w-8' />
						</Link> */}
						{/* <Github className='	fill-black hover:fill-gray-300		 cursor-pointer	w-8' /> */}
					</div>
					<span className='text-gray-400 '>
						@Made by <a href='/project'>ForMyTeam</a>
						{/* <Link
							href='/home'
							className=' transition duration-300 ease-in-out hover:text-green-800 font-bold	'
						>
							forYourTeam
						</Link> */}
					</span>
				</div>
			</div>
		</>
	);
}

// Link 만 쓰면 에러가 남
export default Footer;
