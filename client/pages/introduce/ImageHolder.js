/** @format */

import React, { useEffect, useState } from 'react';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore/lite';
import { db, storage, storageRef } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
	ref,
	uploadBytes,
	uploadBytesResumable,
	uploadString,
	getDownloadURL,
} from 'firebase/storage';

function ImageHolder({ state, setState, name, object }) {
	const userID = useSelector(({ user }) => user);
	const [imageSrc, setImageSrc] = useState('');
	const [fileUrl, setFileUrl] = useState('');

	const encodeFileToBase64 = async (fileBlob) => {
		const reader = new FileReader();
		reader.readAsDataURL(fileBlob);

		return new Promise((resolve) => {
			reader.onload = () => {
				setImageSrc(reader.result);
				resolve();
			};
		});
	};

	const ConvertUrl = async (fileBlob) => {
		const metadata = {
			contentType: 'image/jpeg',
		};

		if (fileBlob != '') {
			const fileRef = ref(storage, `${userID.uid}/${uuidv4()}`);
			const uploadTask = await uploadBytes(fileRef, fileBlob, 'data_url');
			fileUrl = await getDownloadURL(fileRef);
			console.log(fileUrl);
		}
		setState((prev) => {
			return {
				...prev,
				[object]: {
					...state[object],
					[name]: fileUrl,
				},
			};
		});
	};

	useEffect(() => {
		// console.log(await response.ref.getDownloadURL());
	}, [imageSrc]);

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
				accept='image/*'
				className='block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-green-700
hover:file:bg-violet-100'
				onChange={(e) => {
					encodeFileToBase64(e.target.files[0]);
					ConvertUrl(e);
				}}
			/>
		</>
	);
}

export default ImageHolder;
