/** @format */
import { ArrowUp } from './Icon/Icon';

function ScrollToTop() {
	return (
		<>
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
		</>
	);
}

export default ScrollToTop;
