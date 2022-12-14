/** @format */

import React from 'react';
import { Clipboard, CloseIcon } from './Icon/Icon';

function Alert({ setOnClose }) {
	return (
		<div className='z-40 fixed top-40 left-[50%] xl:-ml-[350px] -ml-[125px] w-1/2 bg-green-700 text-white rounded-lg h-auto flex items-center justify-between p-1'>
			<div className='p-2 border-2 border-white rounded-full'>
				<Clipboard />
			</div>
			<p className='font-semibold mt-0 text-center'>
				ð ì ì¥ ìë£! íë¡ì í¸ URLì´ í´ë¦½ë³´ëì ë³µì¬ëììµëë¤.
				<br />
				íë¡ì í¸ ì¬ì´í¸ë¥¼ ìê°íê³  ì¶ì ê³³ì ë§í¬ë¥¼ ë¶ì¬ë£ì´ ë³´ì¸ì!
			</p>
			<button onClick={() => setOnClose(false)}>
				<CloseIcon />
			</button>
		</div>
	);
}

export default Alert;
