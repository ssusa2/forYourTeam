/** @format */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import {
	getDocs,
	query,
	where,
	collectionGroup,
	orderBy,
} from 'firebase/firestore';
import { db } from '../firebase';
import { checkLines } from '../../util/utils';
import handleFormChange from '../../util/handle';
import Image from 'next/image';
import female from '../../image/female.png';
import male from '../../image/male.png';
import { Arrow } from '../../components/Icon/Icon';
import { handleToggle } from '../../src/util/accordion';

function MemberAdd({
	el,
	idx,
	member,
	setMember,
	section,
	folder,
	defaultImg,
	projectName,
	userID,
}) {
	const [showMember, setShowMember] = useState(true);
	const [memberName, setMemberName] = useState(null);
	const [hasMember, setHasMember] = useState(false);
	const [memberInfo, setMemberInfo] = useState('');
	const nameRef = useRef();

	const [imageSrc, setImageSrc] = useState('');
	useEffect(() => {
		setImageSrc(el.image);
	}, [el]);

	useEffect(() => {
		const getUserList = async () => {
			const project = query(
				collectionGroup(db, 'users'),
				where('email', '==', `${memberName}`)
			);

			const querySnapshot = await getDocs(project);
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
			}));
			setMemberInfo(newData[0]);
			// newData.name;
			newData[0]?.name ? setHasMember(true) : setHasMember(false);
		};

		getUserList(memberName);
		console.log(memberInfo);
	}, [memberName]);

	console.log('nameRef', nameRef);

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
			<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 relative  '>
				<div className=' flex justify-between'>
					{!showMember && (
						<label className='small-title mt-0 font-medium'>
							팀원 ({idx + 1}){' '}
						</label>
					)}
					<button
						onClick={(e) => {
							handleToggle(e, showMember, setShowMember);
						}}
						className='absolute right-4 cursor-pointer hover:main-hover rounded-full p-1'
					>
						<Arrow showInfo={showMember} />
					</button>
				</div>

				{showMember && (
					<>
						<div className='block xl:flex'>
							<div className=' w-full  xl:w-1/2 group block mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500'>
								{
									<div>
										{imageSrc ? (
											<img
												className='preview'
												src={imageSrc}
												alt='preview-img'
											/>
										) : (
											<>
												<label className='flex items-center space-x-3'>
													<span className='text-slate-900 group-hover:text-white text-sm font-semibold'>
														New Team member +
													</span>
												</label>
												<p className='text-slate-500 group-hover:text-white text-sm'>
													{section}
												</p>
												<span className='font-norma text-sm text-slate-500	 '>
													(3MB 이하)
												</span>
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
										console.log(e);
										encodeFileToBase64(e.target.files[0]) &&
											handleFormChange(
												idx,
												e,
												member,
												setMember,
												folder,
												projectName,
												userID
											);
									}}
								/>
								<div className='w-full '>
									<label className='small-title mt-0 essential'>
										기본이미지
									</label>{' '}
									<div className='flex'>
										<label className='relative w-[100px] h-[100px] mr-3 cursor-pointer '>
											<input
												onChange={(e) => {
													handleFormChange(idx, e, member, setMember, folder);
													setImageSrc(male.src);
												}}
												type='radio'
												name='gender'
												value='male'
											/>
											<Image
												src={male}
												layout='fill'
												objectFit='cover'
												className='w-1/2 rounded-full'
											/>
										</label>

										<label className='w-[100px] h-[100px] relative cursor-pointer'>
											<input
												onChange={(e) => {
													handleFormChange(idx, e, member, setMember, folder);
													setImageSrc(female.src);
												}}
												type='radio'
												name='gender'
												value='female'
											/>
											<Image
												src={female}
												layout='fill'
												objectFit='cover'
												className='w-1/2 rounded-full'
											/>
										</label>
									</div>
								</div>
							</div>

							<div className='w-full mt-4 xl:ml-4 xl:mt-0'>
								<div className='flex justify-between b-divide '>
									<div className='w-1/2'>
										<label className='small-title mt-0 essential'>
											이름({idx + 1})
										</label>
										<input
											ref={nameRef}
											value={el.name}
											placeholder='이름'
											name='name'
											maxLength={30}
											onChange={(e) => {
												handleFormChange(idx, e, member, setMember, folder);
												setMemberName(e.target.value);
											}}
											type='text'
											multiple='multiple'
											className=' mt-1 block w-5/6	 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
										/>

										{hasMember ? (
											<>
												<strong className='text-black underline'>
													{memberInfo?.name}
												</strong>
												님이 맞나요?
												<span
													className='ml-3'
													onClick={() =>
														(nameRef.current.value = memberInfo?.name)
													}
												>
													등록하기
												</span>
											</>
										) : (
											<span className='font-normal text-slate-500	 '>
												이메일 주소를 입력해서 팀원을 찾아보세요.
											</span>
										)}
									</div>
									<div className='w-1/2'>
										<label className='small-title mt-0 essential'>
											직책({idx + 1})
										</label>{' '}
										<input
											maxLength={30}
											value={el.role}
											placeholder='직책'
											name='role'
											onChange={(e) => {
												handleFormChange(idx, e, member, setMember, folder);
											}}
											type='text'
											multiple='multiple'
											className=' mt-1 block w-5/6 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
										/>
									</div>
								</div>
								<div className='b-divide'>
									<label className='small-title essential'>
										소개말({idx + 1})
									</label>{' '}
									<textarea
										maxLength={160}
										rows={4}
										onKeyUp={(e) => checkLines(e, 4)}
										value={el.description}
										placeholder='팀원을 소개하는 말을 작성해보세요. 최소 3줄 이상 적어주세요.'
										name='description'
										onChange={(e) => {
											handleFormChange(idx, e, member, setMember, folder);
										}}
										multiple='multiple'
										className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
									/>
								</div>
								<label className='small-title essential'>
									Github({idx + 1})
								</label>
								<input
									value={el.github}
									placeholder='ex)https://github.com/ForMyTeam'
									name='github'
									onChange={(e) => {
										handleFormChange(
											idx,
											e,
											member,
											setMember,
											folder,
											projectName,
											userID
										);
									}}
									type='url'
									multiple='multiple'
									className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
								/>
							</div>
						</div>
					</>
				)}
			</section>
		</>
	);
}
export default MemberAdd;
