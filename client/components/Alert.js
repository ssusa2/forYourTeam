/** @format */

import React from 'react';
import { Clipboard, CloseIcon } from './Icon/Icon';

function Alert({ onClose, setOnClose }) {
	return (
		<div className='z-40 fixed top-30 left-[50%] xl:-ml-[350px] -ml-[125px] w-1/2 bg-green-700 text-white rounded-lg h-auto flex items-center justify-between p-1'>
			<div className='p-2 border-2 border-white rounded-full'>
				<Clipboard />
			</div>
			<p className='font-semibold mt-0 text-center'>
				프로젝트 URL이 클립보드에 복사되었습니다.
				<br />
				프로젝트 사이트를 소개하고 싶은 곳에 링크를 붙여넣어 보세요!
			</p>
			<button onClick={() => setOnClose(false)}>
				<CloseIcon />
			</button>
		</div>
	);
}

export default Alert;
