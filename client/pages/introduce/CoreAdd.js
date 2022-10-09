/** @format */
import React, { useState, useEffect } from 'react';
import { checkLines } from '../../util/utils';
import handleFormChange from '../../util/handle';
import { handleToggle } from '../../src/util/accordion';
import { useSelector, useDispatch } from 'react-redux';
import { Arrow } from '../../components/Icon/Icon';

function CoreAdd({
	el,
	idx,
	core,
	setCore,
	section,
	folder,
	projectName,
	userID,
}) {
	const [imageSrc, setImageSrc] = useState('');
	const saving = useSelector(({ Saving }) => Saving.Saving);
	const shallowSaving = useSelector(({ Saving }) => Saving.ShallowSaving);
	const [showCore, setShowCore] = useState(true);
	useEffect(() => {
		setImageSrc(el.image);
	}, [el]);
	const dispatch = useDispatch();

	const encodeFileToBase64 = (fileBlob) => {
		if (fileBlob.size > 3000000) {
			alert('파일 크기가 너무 큽니다.');
			return;
		} else {
			const reader = new FileReader();

			reader.readAsDataURL(fileBlob);

			return new Promise((resolve) => {
				reader.onload = () => {
					setImageSrc(reader.result);
					resolve();
				};
			});
		}
	};

	return (
		<>
			<section
				key={idx}
				className='mb-8 mt-2 p-4 rounded-lg font-semibold bg-slate-100 '
			>
				<div className=' flex justify-between'>
					{!showCore && (
						<label className='small-title mt-0 font-medium'>
							프로젝트 주요 기능({idx + 1})
						</label>
					)}
					<button
						onClick={(e) => {
							handleToggle(e, showCore, setShowCore);
						}}
						className='absolute right-4 cursor-pointer hover:main-hover rounded-full p-1'
					>
						<Arrow showInfo={showCore} />
					</button>
				</div>

				{showCore && (
					<>
						<div className='b-divide'>
							<label className='small-title essential mt-0 '>소제목</label>
							<input
								value={el.subheading || ''}
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
							<label className='small-title essential essential'>제목</label>
							<input
								value={el.title || ''}
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
							<label className='small-title essential '>소개</label>
							<textarea
								rows={5}
								onKeyUp={(e) => checkLines(e, 5)}
								value={el.description || ''}
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
						<div className='flex mt-3 items-center'>
							<label className='small-title mt-0 essential '>
								주요 기능에 맞는 사진을 업로드해주세요.
							</label>
							<span className='font-norma text-sm text-slate-500	 '>
								(3MB 이하)
							</span>
						</div>
						<div className='mt-1 flex group block mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500'>
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
									encodeFileToBase64(e.target.files[0]) &&
										handleFormChange(
											idx,
											e,
											core,
											setCore,
											folder,
											projectName,
											userID
										);
								}}
							/>
						</div>
					</>
				)}
			</section>
		</>
	);
}

export default CoreAdd;
