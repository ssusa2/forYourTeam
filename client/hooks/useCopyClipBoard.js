/** @format */

import { useState } from 'react';

const useCopyClipBoard = () => {
	const [isCopy, setIsCopy] = useState(false);

	const onCopy = async (text) => {
		console.log('클립보드', text);
		try {
			await navigator.clipboard.writeText(text);
			setIsCopy(true);

			return true;
		} catch (error) {
			console.error(error);
			setIsCopy(false);

			return false;
		}
	};

	return [isCopy, onCopy];
};

export default useCopyClipBoard;
