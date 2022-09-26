/** @format */
import React, { useState, useEffect } from 'react';
import MemberAdd from './MemberAdd';
import Router, { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import CoreAdd from './CoreAdd';
import ImageHolder from './ImageHolder';
import useSave from '../../hooks/useSave';
import { db, storage, storageRef } from '../firebase';
import {
	setDoc,
	addDoc,
	getDoc,
	doc,
	serverTimestamp,
	CollectionReference,
	collection,
} from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import {
	ref,
	uploadBytes,
	uploadBytesResumable,
	uploadString,
	getDownloadURL,
} from 'firebase/storage';
console.log(storage);

function introduce() {
	const { route } = useRouter();
	const router = useRouter();
	const { Intro } = router.query;
	const dispatch = useDispatch();
	const userID = useSelector(({ user }) => user);
	const userName = useSelector(({ user }) => user);
	const [imageSrc, setImageSrc] = useState('');
	const [isSaving, setIsSaving] = useState(false);
	const [fileUrl, setFileUrl] = useState('');
	const userInfo = useSelector(({ user }) => user.uid);
	const [project, setProject] = useState();

	// const user = useSelector((state) => state.name);

	// console.log('userName', userName);

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

	// const [folderName, setFolderName] = useState();

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

		const metadata = {
			contentType: 'image/jpeg',
		};

		try {
			let fileUrl = '';
			if (event.target.type == 'file') {
				if (event.target.value != '') {
					const fileRef = ref(storage, `${userID.uid}/${folder}/${index}`);
					const uploadTask = await uploadBytes(
						fileRef,
						event.target.files[0]
					).then((snapshot) => {
						// console.log('updtae');
					});

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
		};
		setCore([...core, newCore]);
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

	const addProjectIntro = () => {
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
		setIsSaving(true);
	};

	// console.log('isSaving', isSaving);
	let projectName = info.project_info.name;

	// const citiesRef = collection(db, 'cities');
	// await Promise.all([
	// 	addDoc(collection(citiesRef, 'SF', 'landmarks'), {
	// 		name: 'Golden Gate Bridge',
	// 		type: 'bridge',
	// 	}),
	useEffect(() => {
		// 생성 시
		async function fetchData() {
			try {
				const post = await setDoc(doc(db, 'project', `${projectName}`), {
					// user_id:
					uid: userInfo,
					id: uuidv4(),
					joined: serverTimestamp(), // 현재 날짜,시간
					info,
					teamInfo,
				});
				setIsSaving(false);
				alert('저장완료!');
				route.push(`/project/${projectName}`);
			} catch (err) {
				console.log(err);
			}
		}

		if (isSaving) {
			fetchData();
		}

		// 업데이트 시
		//1. 일단 받아오기

		// updateProject();
	}, [isSaving]);

	console.log(Intro);
	useEffect(() => {
		const fetchUsers = async (Intro) => {
			const projectRef = doc(db, 'project', `${Intro}`);
			const projectSnap = await getDoc(projectRef);
			// console.log(Intro);
			// const data = projectSnap.data();
			if (projectSnap.exists()) {
				console.log(projectSnap.data());
				// console.log('Document data:', projectSnap.data());
				// setProjects(projectSnap.data());
				// setProjectInfo(projectSnap.data().info.project_info);
			} else {
				console.log('No such document!');
			}
		};
		fetchUsers(Intro);
	}, [Intro]);

	console.log(project);

	// console.log('info', project);
	return (
		<>
			<div className='my-container'>
				<h2 className='middle-title'>여러분의 프로젝트 정보를 입력해주세요.</h2>
				<div
					// flex justify-between items-end
					className='
				block lg:flex lg:justify-between

				'
				>
					<div>
						<p>
							프로젝트에 대한 정보를 입력해 여려분의 프로젝트 사이트에서도
							<br />
							프로젝트와 프로젝트 구성원을 소개해보세요.
						</p>
						<p className='my-3'>
							해당 프로젝트 정보는 아래 페이지 양식에 맞춰 보여집니다.
						</p>
						<Link
							href='/project/project-info-1
'
						>
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
							placeholder='project-name'
							className=' base-form font-medium my-2
    '
						/>
						<p className=''>
							소개페이지 양식과 대조하여 알맞는 project 정보를 작성해보세요.
						</p>
					</div>
				</div>
				<form>
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
								placeholder='project-name'
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
								className=' base-form
    '
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title essential'>
								프로젝트의 로고를 입력하거나 이미지를 첨부해주세요.(120px x
								40px)
							</label>
							<div className='block xl:flex xl:justify-between'>
								<div className='w-full block xl:w-2/6'>
									<p className='mt-3'>로고</p>
									<input
										placeholder='project-logo'
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
										multiple='multiple'
										className=' base-form'
									/>
								</div>

								<div className='block xl:w-1/2'>
									<p className='mt-3'>이미지</p>
									<ImageHolder
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
								placeholder='project-url'
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
								className=' base-form
    '
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title  essential'>
								프로젝트의 장르를 입력해주세요.
							</label>
							<input
								placeholder='project-genre'
								onChange={(e) => {
									setInfo((prev) => {
										return {
											...prev,
											project_info: {
												...info.project_info,
												genre: e.target.value,
											},
										};
									});
								}}
								type='text'
								multiple='multiple'
								className=' base-form
    '
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title  essential'>
								프로젝트의 메인색상을 입력해주세요.(#)
							</label>
							<input
								placeholder='project-color'
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
								type='text'
								multiple='multiple'
								className=' base-form
    '
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title  essential'>
								프로젝트의 대표 E-mail를 입력해주세요.
							</label>
							<input
								placeholder='project-email'
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
								className=' base-form
    '
							/>
						</div>
						<label className='small-title essential'>
							프로젝트 팀 레퍼지토리 주소를 입력해주세요.
						</label>
						<input
							placeholder='project-git-
							repository
							'
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
							className=' base-form
    '
						/>
					</section>

					{/*  */}

					<div className='my-16 sm:my-32 h-px bg-slate-300'></div>
					<h3 className='middle-title'>Project 소개 페이지</h3>
					<p>여러분의 프로젝트를 소개하는 페이지입니다.</p>
					<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 '>
						<div className='b-divide'>
							<label className='small-title mt-0 essential'>
								프로젝트의 슬로건을 1~2줄로 입력하세요.
							</label>
							<input
								placeholder='project-slogun'
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
								className=' base-form
    '
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title essential'>
								프로젝트를 대표하는 사진을 업로드해주세요.
							</label>
							<ImageHolder
								state={info}
								setState={setInfo}
								name={'image'}
								object={'project_page'}
								section={'project-main-image'}
							/>
						</div>
						<label className='small-title essential'>
							프로젝트를 대표하는 사진에 알맞는 소개를 2~4줄 입력해주세요.
						</label>
						<input
							placeholder='project-introduce'
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
							className=' base-form
    '
						/>
					</section>
					{core.map((el, idx) => {
						return (
							<>
								<CoreAdd
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
							기능 추가하기
						</button>
					</div>
					<div className='my-16 sm:my-32 h-px bg-slate-300'></div>
					<h3 className='middle-title'>Team 소개 페이지</h3>
					<p>프로젝트의 팀 문화와 팀원들을 소개하세요.</p>
					<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 '>
						<div className='b-divide'>
							<label className='small-title mt-0 essential'>
								팀 이름을 입력해주세요.
							</label>
							<input
								placeholder='team-name'
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
								className=' base-form
    '
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title mt-0 essential'>
								프로젝트의 문화를 대표하는 슬로건을 입력하세요.
							</label>
							<input
								placeholder='team-slogun'
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
								className=' base-form
    '
							/>
						</div>
						<div className='b-divide'>
							<label className='small-title essential'>
								프로젝트의 문화를 설명하는 내용을 입력하세요.
							</label>
							<input
								placeholder='team-description'
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
								className=' base-form
    '
							/>
						</div>
						<label className='small-title essential'>
							팀의 단체 사진이나 팀을 대표하는 사진을 업로드해주세요.
						</label>
						<ImageHolder
							state={teamInfo}
							setState={setTeamInfo}
							name={'image'}
							object={'intro'}
							section={'team-image'}
						/>
					</section>

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
					<div className='flex justify-end'>
						<button
							onClick={addMember}
							// onClick={(e) => {
							// 	e.preventDefault();
							// 	setMemberData([...memberData, data]);
							// 	setTeamInfo((prev) => {
							// 		return {
							// 			...prev,
							// 			member: { ...memberData },
							// 		};
							// 	});
							// setInfo({ ...info, memberData });
							// setInfo((prev) => {
							// 	return {
							// 		...prev,
							// 		info: { memberData },
							// 	};
							// });
							// setHead(Number(head) + 1);
							// }}
							className='main-button'
						>
							팀원 추가하기
						</button>
					</div>
					<div className=' flex justify-end  '>
						<button
							type='button'
							className=' w-full  mt-14 rounded-lg border border-green-700 px-4 py-2 text-xl	font-semibold	  text-green-700 shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700  sm:w-auto sm:text-base	'
						>
							임시저장
						</button>
						<button
							onClick={addProjectIntro}
							type='button'
							className='w-full  mt-14 bg-green-700 rounded-lg border border-green-700 px-4 py-2 text-xl	font-semibold	  text-white shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 hover:bg-green-800 text-white sm:ml-3 sm:w-auto sm:text-base	'
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
