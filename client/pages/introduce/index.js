/** @format */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import MemberAdd from './MemberAdd';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import CoreAdd from './CoreAdd';
import ImageHolder from './ImageHolder';
import { ChromePicker } from 'react-color';
import { checkLines } from '../../util/utils';
import { db, storage } from '../firebase';
import SelectGenre from './SeletGenre';
import { handleClick } from './validForm';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { setAll } from '../../src/store/modules/projectInfo';
import TestModal from '../../components/Modal/TestModal';

function introduce() {
	const router = useRouter();
	const dispatch = useDispatch();
	const userID = useSelector(({ user }) => user);
	const [isSaving, setIsSaving] = useState(false);
	const [fileUrl, setFileUrl] = useState('');
	const userInfo = useSelector(({ user }) => user.uid);
	const [previewOpen, setPreviewOpen] = useState(false);
	const [isShallowSave, setIsShallowSave] = useState(false);

	const [info, setInfo] = useState({
		project_info: {
			name: '',
			logo: '',
			logo_image: '',
			url: '',
			genre: '',
			email: '',
			color: '',
			team_github: '',
			favicon: '',
		},
		project_page: {
			slogun: '',
			image: '',
			description: '',
		},
	});

	const [teamInfo, setTeamInfo] = useState({
		intro: {
			slogun: '',
			culture: '',
			image: '',
			name: '',
		},
	});

	const [member, setMember] = useState([
		{
			name: '',
			role: '',
			description: '',
			github: '',
			image: '',
		},
	]);

	const [core, setCore] = useState([
		{
			subheading: '',
			title: '',
			description: '',
			image: '',
		},
	]);

	const handleFormChange = async (index, event, state, setState, folder) => {
		let data = [...state];
		try {
			let fileUrl = '';
			if (event.target.type == 'file') {
				if (event.target.value != '') {
					const fileRef = ref(
						storage,
						`${userID.uid}/${projectName}/${folder}/${index}`
					);
					const uploadTask = await uploadBytes(fileRef, event.target.files[0]);
					fileUrl = await getDownloadURL(fileRef);
				}

				data[index][event.target.name] = fileUrl;
			} else {
				data[index][event.target.name] = event.target.value;
			}
			setState(data);
		} catch (err) {
			console.error(err);
		}
	};

	const addCore = (e) => {
		e.preventDefault();
		let newCore = {
			subheading: '',
			title: '',
			description: '',
			image: '',
			writable: true,
		};
		setCore([...core, { ...newCore }]);
	};

	const addMember = (e) => {
		e.preventDefault();
		let newMember = {
			name: '',
			role: '',
			description: '',
			github: '',
			image: '',
		};
		setMember([...member, newMember]);
	};

	const addProjectIntro = (e) => {
		console.log('이제됨');
		setInfo((prev) => {
			return {
				...prev,
				project_page: {
					...info.project_page,
					core,
				},
			};
		});
		setTeamInfo((prev) => {
			return {
				...prev,
				...teamInfo,
				member,
			};
		});

		if (e?.target.name == '저장') setIsSaving(true);
	};
	console.log('isSaving', isSaving);

	let projectName = info?.project_info?.name;

	useEffect(() => {
		async function fetchData() {
			try {
				const post = await setDoc(doc(db, 'project', `${projectName}`), {
					uid: userInfo,
					id: uuidv4(),
					joined: serverTimestamp(), // 현재 날짜,시간
					info,
					teamInfo,
					genre: info.project_info.genre,
					isShallowSave,
				});
				setIsSaving(false);
				if (isShallowSave) {
					alert('임시저장 완료!');
				} else {
					alert('저장완료!');
				}
				router.push(`/project/${projectName}`);
			} catch (err) {
				console.log(err);
			}
		}
		if (isSaving || isShallowSave) {
			fetchData();
			console.log('실행');
		}
	}, [isSaving, isShallowSave]);
	console.log('isShallowSave', isShallowSave);

	const previewSetInfo = (e) => {
		addProjectIntro(e);
		dispatch(setAll({ info, teamInfo }));
	};

	useEffect(() => {
		previewSetInfo(event);
	}, [previewOpen]);

	const inutRef = useRef([]);
	const regexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]/;
	const validEmail = info.project_info.email.match(regexp);
	const validColor = info.project_info.color;
	const validGenre = info.project_info.genre;
	const validName = info.project_info.name;
	const validLogo = info.project_info.logo;

	const [isValid, setIsValid] = useState(false);
	const handleClick = () => {
		if (!validName) {
			if (typeof window !== 'undefined') {
				alert('프로젝트 이름을 입력해주세요.');
			}
			// alert('프로젝트 이름을 입력해주세요.');
			inutRef.current?.[0]?.focus();
			setInfo((prev) => {
				return {
					...prev,
					project_info: {
						...info.project_info,
						name: '',
					},
				};
			});
		} else if (!validLogo) {
			if (typeof window !== 'undefined') {
				alert('프로젝트 로고를 입력해주세요.');
			}
			inutRef.current?.[1]?.focus();
			setInfo((prev) => {
				return {
					...prev,
					project_info: {
						...info.project_info,
						logo: '',
					},
				};
			});
		} else if (!validGenre) {
			if (typeof window !== 'undefined') {
				alert('프로젝트 장르를 입력해주세요.');
			}
			inutRef.current?.[2]?.focus();
			setInfo((prev) => {
				return {
					...prev,
					project_info: {
						...info.project_info,
						genre: '',
					},
				};
			});
		} else if (!validColor) {
			if (typeof window !== 'undefined') {
				alert('프로젝트 색상을 선택해주세요.');
			}
			inutRef.current?.[3].focus();
			setInfo((prev) => {
				return {
					...prev,
					project_info: {
						...info.project_info,
						color: '',
					},
				};
			});
		} else if (!validEmail) {
			if (info.project_info.email == '') {
				if (typeof window !== 'undefined') {
					alert('E-mail은 필수 입력값입니다.');
				}
			} else if (typeof window !== 'undefined') {
				alert('유효하지 않은 email 입니다.');
			}
			inutRef.current?.[4]?.focus();
			setInfo((prev) => {
				return {
					...prev,
					project_info: {
						...info.project_info,
						email: '',
					},
				};
			});
		}
		validName &&
			validLogo &&
			validGenre &&
			validColor &&
			validEmail &&
			setIsValid(true);
		setIsSaving(true);
	};

	console.log('isValid', isValid);

	return (
		<>
			<div className='my-container relative max-w-6xl			'>
				{previewOpen && <TestModal setPreviewOpen={setPreviewOpen} />}
				<h2 className='middle-title'>여러분의 프로젝트 정보를 입력해주세요.</h2>
				<div className='block lg:flex lg:justify-between'>
					<div>
						<p>
							프로젝트에 대한 정보를 입력해 여려분의 프로젝트 사이트에서도
							<br />
							프로젝트와 프로젝트 구성원을 소개해보세요.
						</p>
						<p className='my-3'>
							해당 프로젝트 정보는 아래 페이지 양식에 맞춰 보여집니다.
						</p>
						<Link href='/project/project-name'>
							<a target='_blank'>
								<button
									type='button'
									className='w-full rounded-full border border-slate-300 px-4 py-2 text-xl	font-semibold	  text-gray shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 sm:w-auto sm:text-base	'
								>
									소개페이지 양식 보기
								</button>
							</a>
						</Link>
					</div>
					<div className='text-end bg-slate-100 p-3 rounded-lg lg:mt-48 mt-3 xl:mt-0'>
						<strong>
							입력창 안에 있는 회색 글씨는 소개페이지 양식에 해당하는 구역를
							가리킵니다.
						</strong>
						<input
							disabled
							placeholder='project-name'
							className=' base-form font-medium my-2'
						/>
						<p className=''>
							소개페이지 양식과 대조하여 알맞는 project 정보를 작성해보세요.
						</p>
					</div>
				</div>
				<form className='relative'>
					<div className='mt-8 mb-16 h-px bg-slate-300'></div>
					<h3 className='middle-title'>Project 기본 정보</h3>
					<p>
						프로젝트의 이름과 기본 정보를 입력해주세요.
						<br />
						해당 정보는 페이지의 헤더와 푸터에서 사용됩니다.
					</p>
					<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 '>
						<div className='b-divide'>
							<label className='small-title mt-0 essential'>
								프로젝트의 이름을 입력해주세요.
							</label>
							<span className='font-normal text-slate-500	 '>
								url과 프로젝트를 소개하는 페이지에 사용됩니다. ex)
								/project/프로젝트 이름
							</span>
							<input
								ref={(el) => (inutRef.current[0] = el)}
								maxLength={30}
								placeholder='프로젝트의 이름을 입력해주세요.'
								onChange={(e) => {
									setInfo((prev) => {
										return {
											...prev,
											project_info: {
												...info.project_info,
												name: e.target.value,
											},
										};
									});
								}}
								type='favicon'
								multiple='multiple'
								className=' base-form  border-2'
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title essential'>
								프로젝트의 로고 혹은 이미지를 첨부해주세요.(택 1 )
							</label>
							<div className='block xl:flex xl:justify-between'>
								<div className='w-full block xl:w-2/6'>
									<p className='mt-3'>로고</p>
									<input
										ref={(el) => (inutRef.current[1] = el)}
										placeholder='로고'
										onChange={(e) => {
											setInfo((prev) => {
												return {
													...prev,
													project_info: {
														...info.project_info,
														logo: e.target.value,
													},
												};
											});
										}}
										type='text'
										// required
										className=' base-form '
									/>
								</div>
								<div className='block xl:w-1/2'>
									<p className='mt-3'>이미지</p>
									<ImageHolder
										projectName={info.project_info.name}
										state={info}
										setState={setInfo}
										name={'logo_image'}
										object={'project_info'}
										section={'project-logo-image'}
									/>
								</div>
							</div>
						</div>
						<div className='b-divide'>
							<label className='small-title  essential'>
								프로젝트 사이트의 파비콘를 첨부해주세요.(16px x 16px)
							</label>
							<div className='block xl:w-1/2'>
								<p>파비콘</p>
								<ImageHolder
									projectName={info.project_info.name}
									state={info}
									setState={setInfo}
									name={'favicon'}
									object={'project_info'}
									section={'project-favicon'}
								/>
							</div>
						</div>
						<div className='b-divide'>
							<label className='small-title essential'>
								프로젝트 웹 사이트의 주소를 입력해주세요.
							</label>
							<input
								placeholder='프로젝트 웹 사이트의 주소를 입력해주세요.'
								onChange={(e) => {
									setInfo((prev) => {
										return {
											...prev,
											project_info: {
												...info.project_info,
												url: e.target.value,
											},
										};
									});
								}}
								type='favicon'
								multiple='multiple'
								className=' base-form'
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title  essential'>
								프로젝트의 장르를 선택하세요.
							</label>
							<SelectGenre
								genreRef={inutRef}
								setInfo={setInfo}
								info={info}
								className=' base-form'
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title  essential'>
								프로젝트의 메인색상을 선택하세요.(#)
							</label>
							<div className='flex'>
								<input
									className='h-[40px]'
									type='color'
									value={info.project_info.color}
									// className=' base-form'
									onChange={(e) => {
										setInfo((prev) => {
											return {
												...prev,
												project_info: {
													...info.project_info,
													color: e.target.value,
												},
											};
										});
									}}
								/>
								<input
									value={info.project_info.color}
									className='base-form'
									ref={(el) => (inutRef.current[3] = el)}
									placeholder={
										info.project_info.color
											? `선택한 색상: ${info.project_info.color}`
											: '왼쪽에 색상 칩을 클릭해 색상을 선택하세요.'
									}
								/>

								{/* <ChromePicker
									defaultView={'hex'}
									style={{ width: '100%' }}
									color={info.project_info.color}
									onChange={(color) => handleColorChange(color.hex)}
								/> */}
							</div>
							{/* <input
								value={color}
								onChange={(e) => handleColorChange(e.target.value)}
							/> */}
							{/* <input
								placeholder='project-color'
								value={info.project_info.color}
								onChange={(e) => handleColorChange}
								type='text'
								multiple='multiple'
								className=' base-form'
							/> */}
						</div>
						<div className='b-divide'>
							<label className='small-title  essential'>
								프로젝트의 대표 E-mail를 입력해주세요.
							</label>
							<input
								ref={(el) => (inutRef.current[4] = el)}
								placeholder='프로젝트의 대표 E-mail를 입력해주세요.'
								onChange={(e) => {
									setInfo((prev) => {
										return {
											...prev,
											project_info: {
												...info.project_info,
												email: e.target.value,
											},
										};
									});
								}}
								type='email'
								multiple='multiple'
								className=' base-form'
							/>
						</div>
						<label className='small-title font-medium'>
							프로젝트 팀 레퍼지토리 주소를 입력해주세요.
						</label>
						<input
							placeholder='ex)https://github.com/ForMyTeam'
							onChange={(e) => {
								setInfo((prev) => {
									return {
										...prev,
										project_info: {
											...info.project_info,
											team_github: e.target.value,
										},
									};
								});
							}}
							type='text'
							multiple='multiple'
							className=' base-form'
						/>
					</section>
					{/*  */}
					<div className='my-16 sm:my-32 h-px bg-slate-300'></div>
					<h3 className='middle-title'>Project 소개 페이지</h3>
					<p>여러분의 프로젝트를 소개하는 페이지입니다.</p>
					<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 '>
						<div className='b-divide'>
							<label className='small-title mt-0 font-medium'>
								프로젝트의 슬로건을 1~2줄로 입력하세요.
							</label>
							<textarea
								maxLength={30}
								rows={2}
								onKeyUp={(e) => checkLines(e, 2)}
								placeholder='프로젝트의 슬로건을 1~2줄로 입력하세요.'
								onChange={(e) => {
									setInfo((prev) => {
										return {
											...prev,
											project_page: {
												...info.project_page,
												slogun: e.target.value,
											},
										};
									});
								}}
								type='text'
								multiple='multiple'
								className=' base-form'
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title font-medium'>
								프로젝트를 대표하는 사진을 업로드해주세요.
							</label>
							<ImageHolder
								projectName={info.project_info.name}
								state={info}
								setState={setInfo}
								name={'image'}
								object={'project_page'}
								section={'project-main-image'}
							/>
						</div>
						<label className='small-title font-medium'>
							프로젝트를 소개하는 글을 2~4줄 입력해주세요.
						</label>
						<textarea
							rows={4}
							onKeyUp={(e) => checkLines(e, 4)}
							placeholder='프로젝트를 소개하는 글을 2~4줄 입력해주세요.'
							onChange={(e) => {
								setInfo((prev) => {
									return {
										...prev,
										project_page: {
											...info.project_page,
											description: e.target.value,
										},
									};
								});
							}}
							type='text'
							multiple='multiple'
							className=' base-form'
						/>
					</section>
					{core.map((el, idx) => {
						return (
							<>
								<CoreAdd
									onChange={handleFormChange}
									el={el}
									idx={idx}
									key={idx}
									core={core}
									setCore={setCore}
									folder={'core'}
									handleFormChange={handleFormChange}
									section={'project-core-image'}
								/>
							</>
						);
					})}
					<div className='flex justify-end'>
						<button onClick={addCore} className='main-button'>
							기능 추가하기 +
						</button>
					</div>
					<div className='my-16 sm:my-32 h-px bg-slate-300'></div>
					<h3 className='middle-title'>Team 소개 페이지</h3>
					<p>프로젝트의 팀 문화와 팀원들을 소개하세요.</p>
					<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 '>
						<div className='b-divide'>
							<label className='small-title mt-0 font-medium'>
								팀 이름을 입력해주세요.
							</label>
							<input
								placeholder='팀 이름을 입력해주세요.'
								onChange={(e) => {
									setTeamInfo((prev) => {
										return {
											...prev,
											intro: {
												...teamInfo.intro,
												name: e.target.value,
											},
										};
									});
								}}
								type='text'
								multiple='multiple'
								className=' base-form'
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title mt-0 font-medium'>
								팀의 문화를 나타내는 슬로건를 입력하세요.
							</label>
							<textarea
								rows={2}
								onKeyUp={(e) => checkLines(e, 2)}
								placeholder='팀의 문화를 나타내는 슬로건를 입력하세요.'
								onChange={(e) => {
									setTeamInfo((prev) => {
										return {
											...prev,
											intro: {
												...teamInfo.intro,
												slogun: e.target.value,
											},
										};
									});
								}}
								type='text'
								multiple='multiple'
								className=' base-form'
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title font-medium'>
								팀의 문화를 설명하는 내용을 입력하세요.
							</label>
							<textarea
								rows={4}
								onKeyUp={(e) => checkLines(e, 4)}
								placeholder='팀의 문화를 설명하는 내용을 입력하세요.'
								onChange={(e) => {
									setTeamInfo((prev) => {
										return {
											...prev,
											intro: {
												...teamInfo.intro,
												culture: e.target.value,
											},
										};
									});
								}}
								type='text'
								multiple='multiple'
								className=' base-form'
							/>
						</div>
						<label className='small-title font-medium'>
							팀의 단체 사진이나 팀을 대표하는 사진을 업로드해주세요.
						</label>
						<ImageHolder
							projectName={info.project_info.name}
							state={teamInfo}
							setState={setTeamInfo}
							name={'image'}
							object={'intro'}
							section={'team-image'}
						/>
					</section>
					{/*  */}
					<h3 className='small-title '>팀원 소개</h3>
					<p>팀원를 소개해보세요.</p>
					{member.map((el, idx) => {
						return (
							<MemberAdd
								key={idx}
								el={el}
								idx={idx}
								member={member}
								setMember={setMember}
								folder={'team'}
								handleFormChange={handleFormChange}
								fileUrl={fileUrl}
								setFileUrl={setFileUrl}
								section={'team-member-image'}
							/>
						);
					})}
					<div className='flex justify-end '>
						<button onClick={addMember} className='main-button'>
							팀원 추가하기 +
						</button>
					</div>
					<div className='bg-white shadow-inner w-full flex justify-end fixed z-50 right-0 bottom-0'>
						<button
							onClick={() => {
								addProjectIntro();
								setIsShallowSave(true);
							}}
							type='button'
							className=' w-full my-6  rounded-lg border border-green-700 px-4 py-2 text-xl	font-semibold	  text-green-700 shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700  sm:w-auto sm:text-base	'
						>
							임시저장
						</button>
						<button
							onClick={() => {
								setPreviewOpen(true);
							}}
							type='button'
							className=' w-full my-6 rounded-lg border border-green-700 px-4 py-2 text-xl	font-semibold	  text-green-700 shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 sm:ml-3 sm:w-auto sm:text-base	'
						>
							미리보기
						</button>
						<button
							name='저장'
							onClick={(e) => {
								handleClick();
								isValid && addProjectIntro(e);
							}}
							type='button'
							className='w-full my-6 mr-16 bg-green-700 rounded-lg border border-green-700 px-4 py-2 text-xl	font-semibold	  text-white shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 hover:bg-green-800 text-white sm:ml-3 sm:w-auto sm:text-base	'
						>
							저장
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default introduce;
