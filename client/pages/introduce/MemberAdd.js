/** @format */

import React, { useState } from 'react';

function MemberAdd({ el, idx, setInfo, info }) {
	const [imageSrc, setImageSrc] = useState('');

	const [memberData, setMemberData] = useState({
		name: '',
		role: '',
		description: '',
		gitub: '',
		image: '',
	});

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
			<label className='small-title essential'>팀원 ({idx + 1})</label>
			<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100  '>
				<div className='block xl:flex'>
					{/* <img
    className='w-full xl:w-1/2'
    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  /> */}
					<div className='w-full xl:w-1/2 group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500'>
						{
							<div className='preview'>
								{imageSrc ? (
									<img src={imageSrc} alt='preview-img' />
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
							type='file'
							className='block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-green-700
hover:file:bg-violet-100'
							onChange={(e) => {
								encodeFileToBase64(e.target.files[0]);
							}}
						/>
					</div>

					<div className='w-full mt-4 xl:ml-4 xl:mt-0'>
						<div className='flex '>
							<div className='w-1/2'>
								<label className='small-title mt-0 essential'>이름</label>
								<input
									onChange={(e) => {
										setInfo((prev) => {
											return {
												...prev,
												member: {
													...info.team_page.member,
													name: e.target.value,
												},
											};
										});
										console.log('idx', info.team_page.member);
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
									onChange={(e) => {
										setInfo((prev) => {
											return {
												...prev,
												member: {
													...info.team_page.member,
													role: e.target.value,
												},
											};
										});
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
							onChange={(e) => {
								setInfo((prev) => {
									return {
										...prev,
										member: {
											...info.team_page.member,
											description: e.target.value,
										},
									};
								});
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
							onChange={(e) => {
								setInfo((prev) => {
									return {
										...prev,
										member: {
											...info.team_page.member,
											github: e.target.value,
										},
									};
								});
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
