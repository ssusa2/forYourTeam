/** @format */
import React, { useState } from 'react';

function CoreAdd({ handleFormChange, el, idx, core, setCore }) {
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
			<h3 className='small-title '>프로젝트 주요 기능({idx + 1})</h3>
			<p>프로젝트의 주요 기능을 설명해주세요.</p>
			<section
				key={idx}
				className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 '
			>
				<label className='small-title mt-0 essential'>소제목</label>
				<input
					name='subheading'
					onChange={(event) => handleFormChange(idx, event, core, setCore)}
					type='text'
					multiple='multiple'
					className='base-form
'
				/>

				<label className='small-title essential'>제목</label>
				<input
					name='title'
					onChange={(event) => handleFormChange(idx, event, core, setCore)}
					type='text'
					multiple='multiple'
					className='base-form
'
				/>

				<label className='small-title essential'>소개</label>
				<input
					onChange={(event) => handleFormChange(idx, event, core, setCore)}
					name='description'
					type='text'
					multiple='multiple'
					className='base-form
'
				/>

				<label className='small-title essential'>
					주요 기능에 맞는 사진을 업로드해주세요.
				</label>
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
					name='image'
					className='block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-green-700
hover:file:bg-violet-100'
					onChange={(e) => {
						encodeFileToBase64(e.target.files[0]);
						handleFormChange(idx, e, core, setCore);
					}}
				/>
			</section>
		</>
	);
}

export default CoreAdd;
