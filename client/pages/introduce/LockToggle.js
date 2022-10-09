/** @format */

import { useState } from 'react';
import { Lock, UnLock } from '../../components/Icon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { setLock } from '../../src/store/modules/Lock';

export default function Toggle() {
	const dispatch = useDispatch();
	const isLock = useSelector(({ Lock }) => Lock.Lock);

	const [enabled, setEnabled] = useState(false);

	return (
		<div className='my-6'>
			<div className='flex'>
				<span className='mr-3 text-sm font-medium text-gray-900'>
					{enabled ? <Lock /> : <UnLock />}
				</span>
				<label class='inline-flex relative items-center mr-5 cursor-pointer'>
					<input
						type='checkbox'
						className='sr-only peer'
						checked={enabled}
						readOnly
					/>
					<div
						onClick={() => {
							setEnabled(!enabled);
							dispatch(setLock(!enabled));
						}}
						className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
					></div>
				</label>
			</div>
		</div>
	);
}
