/** @format */

import React, { useState } from 'react';

function ImageHolder({ state, setState, name, object }) {
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

	return (
		<>
			{
				<div>
					{imageSrc ? (
						<img className='preview' src={imageSrc} alt='preview-img' />
					) : (
						<></>
					)}
				</div>
			}
			<input
				type='file'
				className='block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-green-700
hover:file:bg-violet-100'
				onChange={(e) => {
					encodeFileToBase64(e.target.files[0]);
					setState((prev) => {
						return {
							...prev,
							[object]: {
								...state[object],
								[name]: e.target.value,
							},
						};
					});
				}}
			/>
		</>
	);
}

export default ImageHolder;
