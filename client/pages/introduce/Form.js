/** @format */

import React, { useState, useEffect, useRef } from 'react';
import MemberAdd from './MemberAdd';
import Link from 'next/link';
import CoreAdd from './CoreAdd';
import ImageHolder from './ImageHolder';
import { useRouter } from 'next/router';
import { db, storage } from '../firebase';
import SelectGenre from './SeletGenre';
import { setSaving, setShallowSaving } from '../../src/store/modules/Saving';
import {
	ref,
	uploadBytes,
	listAll,
	getDownloadURL,
	deleteObject,
} from 'firebase/storage';

import {
	setDoc,
	deleteDoc,
	getDoc,
	doc,
	serverTimestamp,
} from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';

import TestModal from '../../components/Modal/TestModal';

function Form({
	//업데이트 시, 필요
	lastTouch,
	// deleteProject,
	userID,
	projectName,
	setPreviewOpen,
	previewOpen,
	info,
	setInfo,
	core,
	setCore,
	handleFormChange,
	addCore,
	teamInfo,
	setTeamInfo,
	member,
	setMember,
	addMember,
	fileUrl,
	setFileUrl,
	addProjectIntro,
	checkLines,
}) {
	const router = useRouter();
	const inutRef = useRef([]);
	const regexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]/;
	const validEmail = info.project_info.email.match(regexp);
	const validColor = info.project_info.color;
	const validGenre = info.project_info.genre;
	const validName = info.project_info.name;
	const validLogo = info.project_info.logo;

	const handleClick = (e) => {
		if (!validName) {
			if (typeof window !== 'undefined') {
				alert('프로젝트 이름을 입력해주세요.');
			}

			setInfo((prev) => {
				return {
					...prev,
					project_info: {
						...info.project_info,
						name: '',
					},
				};
			});
			inutRef.current?.[0]?.focus();
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
		}
		validName &&
			validLogo &&
			validGenre &&
			validColor &&
			validEmail &&
			addProjectIntro(e);
	};

	const dispatch = useDispatch();

	// console.log(projectRef);
	// 프로젝트 삭제
	const deleteProject = async (path) => {
		if (window.confirm(`정말 삭제하시겠습니까?⚠️`)) {
			alert('삭제가 완료되었습니다.');
			const projectRef = doc(db, 'project', `${projectName}`);
			await deleteDoc(projectRef);
			deleteStorageFolder(path);
			router.push('/project');
		} else {
			('');
		}
	};

	// 이미지 저장소 안에 있는 폴더 정보도 삭제
	const deleteStorageFolder = (path) => {
		const fileRef = ref(storage, path);
		listAll(fileRef)
			.then((res) => {
				res.items.forEach((itemRef) => {
					deleteFile(fileRef.fullPath, itemRef.name);
				});
				res.prefixes.forEach((folderRef) => {
					deleteStorageFolder(`gs://${folderRef.bucket}/${folderRef.fullPath}`);
				});
			})
			.catch((error) => {
				console.log('에러', error);
			});
	};

	console.log(`${userID}/${projectName}`);
	// 폴더 안애 있는 아이템 재귀삭제
	const deleteFile = (pathToFile, fileName) => {
		const itemRef = ref(storage, `${pathToFile}/${fileName}`);
		deleteObject(itemRef)
			.then((res) => {
				console.log('삭제', res);
			})
			.catch((error) => {
				console.log('안됨', error);
			});
	};

	return (
		<>
			<div className='my-container relative max-w-6xl'>
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
					<p className='font-semibold text-slate-700 text-sm'>
						마지막 수정날짜: {lastTouch}
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
								value={info.project_info.name || ''}
								// ref={(el) => console.log(el)}
								// ref={(el) => inutRef?.current[0] = el}
								// ref={(el) => inutRef?.current = el}
								// ref={inutRef}
								ref={(elem) => (inutRef.current[0] = elem)}
								// ref={(el) => inutRef.current?.[0]?.focus()}
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
										value={info.project_info.logo || ''}
										ref={(elem) => (inutRef.current[1] = elem)}
										// ref={(el) => (inutRef?.current[1] = el)}
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
										className=' base-form '
									/>
								</div>
								<div className='block xl:w-1/2'>
									<p className='mt-3'>이미지</p>
									<ImageHolder
										defaultImg={info.project_info.logo_image}
										projectName={info?.project_info.name}
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
									defaultImg={info.project_info.favicon}
									projectName={info?.project_info.name}
									state={info}
									setState={setInfo}
									name={'favicon'}
									object={'project_info'}
									section={'project-favicon'}
								/>
							</div>
						</div>
						<div className='b-divide'>
							<label className='small-title'>
								프로젝트 웹 사이트의 주소를 입력해주세요.
							</label>
							<span className='font-normal text-slate-500	 '>
								프로젝트 웹 사이트 url를 입력하면 ForMyTeam 페이지에 여러분의
								사이트로 이동하는 버튼이 생성됩니다.
							</span>
							<input
								value={info.project_info.url || ''}
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
									value={info?.project_info.color}
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
									value={info?.project_info.color}
									ref={(elem) => (inutRef.current[3] = elem)}
									className='base-form'
									// ref={(el) => (inutRef?.current[3] = el)}
									placeholder={
										info?.project_info.color
											? `선택한 색상: ${info.project_info.color}`
											: '왼쪽에 색상 칩을 클릭해 색상을 선택하세요.'
									}
								/>
							</div>
						</div>
						<div className='b-divide'>
							<label className='small-title  essential'>
								프로젝트의 대표 E-mail를 입력해주세요.
							</label>
							<input
								value={info.project_info.email || ''}
								ref={(elem) => (inutRef.current[4] = elem)}
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
								className=' base-form'
							/>
						</div>
						<label className='small-title font-medium'>
							프로젝트 팀 레퍼지토리 주소를 입력해주세요.
						</label>
						<input
							value={info.project_info.team_github || ''}
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
								value={info.project_page.slogun || ''}
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
								className=' base-form'
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title font-medium'>
								프로젝트를 대표하는 사진을 업로드해주세요.
							</label>
							<ImageHolder
								defaultImg={info.project_page.image}
								projectName={info?.project_info.name}
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
							value={info.project_page.description || ''}
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
					{core?.map((el, idx) => {
						return (
							<>
								<CoreAdd
									defaultImg={info.project_page.core?.image}
									el={el}
									idx={idx}
									key={idx}
									core={core}
									setCore={setCore}
									folder={'core'}
									projectName={projectName}
									userID={userID}
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
								maxLength={25}
								value={teamInfo.intro.name || ''}
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
								className=' base-form'
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title mt-0 font-medium'>
								팀의 문화를 나타내는 슬로건를 입력하세요.
							</label>
							<textarea
								value={teamInfo.intro.slogun || ''}
								rows={2}
								maxLength={60}
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
								className=' base-form'
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title font-medium'>
								팀의 문화를 설명하는 내용을 입력하세요.
							</label>
							<textarea
								value={teamInfo.intro.culture || ''}
								rows={4}
								maxLength={120}
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
								className=' base-form'
							/>
						</div>
						<label className='small-title font-medium'>
							팀의 단체 사진이나 팀을 대표하는 사진을 업로드해주세요.
						</label>
						<ImageHolder
							defaultImg={teamInfo.intro.image}
							projectName={info?.project_info.name}
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
					{member?.map((el, idx) => {
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
								projectName={projectName}
								userID={userID}
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
								dispatch(setShallowSaving(true));
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
						{router.route == '/introduce/[Intro]' && (
							<button
								onClick={() => deleteProject(`${userID}/${projectName}`)}
								type='button'
								className='w-full rounded-lg my-6 border border-red-700 px-4 py-2 text-xl	font-semibold	  text-white shadow-sm hover:bg-red-700 transition duration-300 ease-in-out hover:text-white text-red-700 sm:ml-3 sm:w-auto sm:text-base	'
							>
								삭제
							</button>
						)}
						<button
							name='저장'
							onClick={(e) => {
								handleClick(e);
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
export default Form;
