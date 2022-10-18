/** @format */

import React, { useEffect, useState } from 'react';
import { storage } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { setShallowSaving } from '../../src/store/modules/Saving';

function ImageHolder({
	state,
	setState,
	name,
	object,
	section,
	projectId,
	defaultImg,
}) {
	const dispatch = useDispatch();
	const userID = useSelector(({ user }) => user);
	const [imageSrc, setImageSrc] = useState();
	const [fileUrl, setFileUrl] = useState(null);

	useEffect(() => {
		setImageSrc(defaultImg);
	}, [defaultImg]);

	// useEffect(() => {
	// 	console.log(fileUrl == true);
	// 	fileUrl && dispatch(setShallowSaving(true));
	// 	console.log('fileUrl', fileUrl);

	// 	// !fileUrl &&
	// }, [fileUrl]);

	const encodeFileToBase64 = async (fileBlob) => {
		if (fileBlob.size > 3000000) {
			alert('파일 크기가 너무 큽니다.');
			return;
		} else {
			const reader = new FileReader();
			reader.readAsDataURL(fileBlob);
			ConvertUrl(fileBlob);
			return new Promise((resolve) => {
				reader.onload = () => {
					setImageSrc(reader.result);
					resolve();
				};
			});
			// ConvertUrl(fileBlob);
		}
	};

	const ConvertUrl = async (fileBlob) => {
		if (fileBlob != '') {
			try {
				const fileRef = ref(storage, `${userID.uid}/${projectId}/${uuidv4()}`);
				const uploadTask = await uploadBytes(fileRef, fileBlob).then(
					(snapshot) => {
						console.log('update');
					}
				);
				const url = await getDownloadURL(fileRef);
				setFileUrl(url);
			} catch (err) {
				console.log(err);
			}
		}
	};
	// fileUrl이 바뀌면 값이 반영되게 하도록
	useEffect(() => {
		setState((prev) => {
			return {
				...prev,
				[object]: {
					...state[object],
					[name]: fileUrl,
				},
			};
		});
		// dispatch(setShallowSaving(true));
		console.log('바ㅜ뀜');
	}, [fileUrl]);

	// console.log('fileUrl', fileUrl);

	return (
		<>
			<div className='mt-1 flex group block mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500'>
				{
					<div className='w-4/5'>
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
					type='file'
					accept='image/*'
					className='block text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-green-700
hover:file:bg-violet-100'
					onChange={(e) => encodeFileToBase64(e.target.files[0])}
				/>
			</div>
		</>
	);
}

export default ImageHolder;
