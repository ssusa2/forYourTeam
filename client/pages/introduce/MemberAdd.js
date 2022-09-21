/** @format */

/** @format */

import React, { useEffect, useState } from 'react';
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

function MemberAdd({
	el,
	idx,
	// handleFormChange,
	member,
	setMember,
	fileUrl,
	setFileUrl,
}) {
	console.log('fileUrl:::', fileUrl);
	const [imageSrc, setImageSrc] = useState('');
	const userID = useSelector(({ user }) => user);

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
	const handleFormChange = async (index, event, state, setState, imageUrl) => {
		let data = [...state];
		try {
			if (event.target.type == 'file') {
				const metadata = {
					contentType: 'image/jpeg',
				};

				if (event.target.value != '') {
					const fileRef = ref(storage, `${userID.uid}/team/${index}`);
					const uploadTask = await uploadBytes(
						fileRef,
						event.target.value,
						metadata
					);

					setFileUrl(await getDownloadURL(fileRef));
					console.log(fileUrl);
				}
				console.log(fileUrl);
				data[index][event.target.name] = imageUrl;
			} else {
				data[index][event.target.name] = event.target.value;
			}
			setState(data);
		} catch (err) {
			console.error(err);
		}
	};
	// const ConvertUrl = async (fileBlob) => {
	// 	const metadata = {
	// 		contentType: 'image/jpeg',
	// 	};

	// 	if (fileBlob != '') {
	// 		const fileRef = ref(storage, `${userID.uid}/team/${idx}`);
	// 		const uploadTask = await uploadBytes(fileRef, fileBlob, metadata);
	// 		fileUrl = await getDownloadURL(fileRef);
	// 		console.log(fileUrl);
	// 	}
	// };

	return (
		<>
			<label className='small-title essential'>팀원 ({idx + 1})</label>
			<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100  '>
				<div className='block xl:flex'>
					<div className=' w-full  xl:w-1/2 group block mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500'>
						{
							<div>
								{imageSrc ? (
									<img className='preview' src={imageSrc} alt='preview-img' />
								) : (
									<>
										<label className='flex items-center space-x-3'>
											<span className='text-slate-900 group-hover:text-white text-sm font-semibold'>
												New Team member +
											</span>
										</label>
										<p className='text-slate-500 group-hover:text-white text-sm'>
											버튼을 눌러 프로젝트에 참여한 팀원을 소개해보세요.
										</p>
									</>
								)}
							</div>
						}
						<input
							name='image'
							type='file'
							className='block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-green-700
hover:file:bg-violet-100'
							onChange={(e) => {
								handleFormChange(idx, e, member, setMember, fileUrl);
								console.log('qwe');
								encodeFileToBase64(e.target.files[0]);
								// ConvertUrl(e);
							}}
						/>
					</div>

					<div className='w-full mt-4 xl:ml-4 xl:mt-0'>
						<div className='flex '>
							<div className='w-1/2'>
								<label className='small-title mt-0 essential'>이름</label>
								<input
									name='name'
									// onChange={(e) => {
									// 	setMember({ name: e.target.value });
									// }}
									onChange={(e) => {
										handleFormChange(idx, e, member, setMember);
									}}
									type='text'
									multiple='multiple'
									className=' mt-1 block w-5/6 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
'
								/>
							</div>
							<div className='w-1/2'>
								<label className='small-title mt-0 essential'>직책</label>{' '}
								<input
									name='role'
									onChange={(e) => {
										handleFormChange(idx, e, member, setMember);
									}}
									type='text'
									multiple='multiple'
									className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
'
								/>
							</div>
						</div>
						<label className='small-title essential'>소개말</label>{' '}
						<textarea
							name='description'
							onChange={(e) => {
								handleFormChange(idx, e, member, setMember);
							}}
							multiple='multiple'
							className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
'
						/>
						<label className='small-title essential'>Github</label>{' '}
						<input
							name='github'
							onChange={(e) => {
								handleFormChange(idx, e, member, setMember);
							}}
							type='url'
							multiple='multiple'
							className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
'
						/>
					</div>
				</div>
			</section>
		</>
	);
}
export default MemberAdd;
