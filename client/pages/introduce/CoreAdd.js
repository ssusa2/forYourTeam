/** @format */
import React, { useState, useEffect } from 'react';

function CoreAdd({
	handleFormChange,
	el,
	idx,
	core,
	setCore,
	section,
	folder,
	defaultImg,
	projectName,
}) {
	const [imageSrc, setImageSrc] = useState('');

	useEffect(() => {
		setImageSrc(el.image);
	}, [el]);

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
				<div className='b-divide'>
					<label className='small-title mt-0 essential'>소제목</label>
					<input
						value={el.subheading}
						placeholder='project-core-subtitle'
						name='subheading'
						onChange={(event) =>
							handleFormChange(idx, event, core, setCore, folder)
						}
						type='text'
						className='base-form
'
					/>
				</div>
				<div className='b-divide'>
					<label className='small-title essential'>제목</label>
					<input
						value={el.title}
						placeholder='project-core-title'
						name='title'
						onChange={(event) =>
							handleFormChange(idx, event, core, setCore, folder)
						}
						type='text'
						className='base-form
'
					/>
				</div>
				<div className='b-divide'>
					<label className='small-title essential'>소개</label>
					<input
						value={el.description}
						placeholder='project-core-description'
						onChange={(event) =>
							handleFormChange(idx, event, core, setCore, folder)
						}
						name='description'
						type='text'
						className='base-form
'
					/>
				</div>
				<label className='small-title essential'>
					주요 기능에 맞는 사진을 업로드해주세요.
				</label>
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
						type='file'
						name='image'
						accept='image/*'
						className='block text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-green-700
hover:file:bg-violet-100'
						onChange={(e) => {
							encodeFileToBase64(e.target.files[0]);
							handleFormChange(idx, e, core, setCore, folder);
						}}
					/>
				</div>
			</section>
		</>
	);
}

export default CoreAdd;
