/** @format */
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Github } from '../../images/github.svg';

function Footer() {
	return (
		<>
			<div className='relative '>
				<div className='mt-52 px-14 py-10  footer-border text-white w-full'>
					<div className='flex justify-between	'>
						<h1 className='font-extrabold text-black'>My Logo</h1>
						<Link to='#'>
							<Github className='	fill-black hover:fill-gray-300		 cursor-pointer	w-8' />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
