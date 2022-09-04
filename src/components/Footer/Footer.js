/** @format */
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Github } from '../../images/github.svg';

function Footer() {
	return (
		<>
			<div className='relative '>
				<div className='mt-52 px-14 py-10  footer-border  w-full'>
					<div className='flex justify-between	'>
						<h1 className='font-extrabold text-black'>
							<Link onClick={() => window.scrollTo(0, 0)} to='/project'>
								My Logo
							</Link>
						</h1>
						<Link to='#'>
							<Github className='	fill-black hover:fill-gray-300		 cursor-pointer	w-8' />
						</Link>
					</div>
					<span className='text-gray-400 '>
						@Made by{' '}
						<Link
							to='/home'
							className=' transition duration-300 ease-in-out hover:text-green-800 font-bold	'
						>
							forYourTeam
						</Link>
					</span>
				</div>
			</div>
		</>
	);
}

export default Footer;
