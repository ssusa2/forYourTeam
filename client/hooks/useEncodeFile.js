/** @format */
import { useState } from 'react';

const useEncodeFile = (fileBlob) => {
	console.log('fileBlob', fileBlob);
	const [imageSrc, setImageSrc] = useState('');

	const encodeFileToBase64 = (fileBlob) => {
		const reader = new FileReader();

		reader.readAsDataURL(fileBlob);

		return new Promise((resolve) => {
			reader.onload = () => {
				setImageSrc(reader.result);
				resolve();
			};
		});
	};

	return imageSrc;
};

export default useEncodeFile;
