/** @format */
import { ArrowUp } from './Icon/Icon';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { throttle, debounce } from 'lodash';

function ScrollToTop() {
	const [scroll, setScroll] = useState(true);

	const DEFAULT_Y = 60;

	const updateScroll = useMemo(
		() =>
			throttle(() => {
				if (window.pageYOffset > DEFAULT_Y) setScroll(false);
				else setScroll(true);
			}, 500),
		[scroll]
	);

	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
	}, [scroll]);

	return (
		<>
			{!scroll && (
				<button
					onClick={() =>
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						})
					}
					className='z-50 fixed right-20 bottom-[100px] p-2 rounded-full bg-green-700  shadow-lg shadow-green-700/50 hover:bg-green-800'
				>
					<ArrowUp />
				</button>
			)}
		</>
	);
}

export default ScrollToTop;
