/** @format */

import React, { useEffect, useState } from 'react';
import {
	collection,
	addDoc,
	doc,
	setDoc,
	snapshotEqual,
} from 'firebase/firestore/lite';
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

function ImageHolder({
	state,
	setState,
	name,
	object,
	section,
	projectName,
	defaultImg,
}) {
	const userID = useSelector(({ user }) => user);
	const [imageSrc, setImageSrc] = useState();
	const [fileUrl, setFileUrl] = useState('');

	useEffect(() => {
		setImageSrc(defaultImg);
	}, [defaultImg]);

	console.log(imageSrc);
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
		console.log('실행됨');

		if (fileBlob != '') {
			try {
				const fileRef = ref(
					storage,
					`${userID.uid}/${projectName}/${uuidv4()}`
				);
				const uploadTask = await uploadBytes(fileRef, fileBlob).then(
					(snapshot) => {
						console.log('updtae');
					}
				);
				fileUrl = await getDownloadURL(fileRef);
				console.log(fileUrl);
			} catch (err) {
				console.log(err);
			}
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

	return (
		<>
			<div className=' flex group block mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500'>
				{
					<div
						className='w-4/5
					'
					>
						{imageSrc ? (
							<img className='preview' src={imageSrc} alt='preview-img' />
						) : (
							<>
								<label className='flex items-center space-x-3'>
									<span className='text-slate-900 group-hover:text-white text-sm font-semibold'>
										이미지 +
									</span>
								</label>
								<p className='text-slate-500 group-hover:text-white text-sm'>
									{section}
								</p>
							</>
						)}
					</div>
				}
				<input
					// value={de}
					type='file'
					accept='image/*'
					className='block text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-green-700
hover:file:bg-violet-100'
					onChange={(e) => {
						encodeFileToBase64(e.target.files[0]);
						projectName && ConvertUrl(e.target.files[0]);
					}}
				/>
			</div>
		</>
	);
}

export default ImageHolder;
