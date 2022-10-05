/** @format */

import Image from 'next/image';
import ErrorImg from '../image/404.png';

function Custom404() {
	return (
		<>
			<div className='my-container max-w-6xl center'>
				<h1 className='big-title mb-10 main-color'>Not Found 404</h1>
				<div className='flex justify-center'>
					<Image src={ErrorImg} width={700} height={500} />
				</div>
			</div>
		</>
	);
}

export default Custom404;
