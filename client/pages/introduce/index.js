/** @format */
import React, { useState, useEffect } from 'react';
import MemberAdd from './MemberAdd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CoreAdd from './CoreAdd';
import ImageHolder from './ImageHolder';
import useSave from '../../hooks/useSave';

function introduce() {
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
	const [base, setBase] = useState({});

	const [info, setInfo] = useState({
		project_info: {
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
		},
	});

	const [member, setMember] = useState([
		{
			name: '',
			role: '',
			description: '',
			gitub: '',
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

	const handleFormChange = (index, event, state, setState) => {
		let data = [...state];
		data[index][event.target.name] = event.target.value;
		setState(data);
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
			gitub: '',
			image: '',
		};
		setMember([...member, newMember]);
	};

	const addProjectIntro = () => {
		console.log('시작');
		setInfo((prev) => {
			return {
				...prev,
				project_page: {
					...info.project_page,
					core,
				},
			};
		});
		console.log('core 붙힘');
		setTeamInfo((prev) => {
			return {
				...prev,
				...teamInfo,
				member,
			};
		});
	};

	// console.log('teaminfo', teamInfo);
	// console.log('teaminfo', teamInfo.member?.name);
	// console.log(teamInfo.member?.map((el) => console.log(el.name)));
	// console.log('info', info);

	useEffect(() => {
		useSave(info, teamInfo);
	}, [teamInfo]);
	// console.log('team', teamInfo);
	return (
		<>
			<div className='my-container'>
				<h2 className='middle-title'>여러분의 프로젝트 정보를 입력해주세요.</h2>
				<p>
					프로젝트에 대한 정보를 입력해 여려분의 프로젝트 사이트에서도
					<br />
					프로젝트와 프로젝트 구성원을 소개해보세요.
				</p>
				<p className='my-3'>
					해당 프로젝트 정보는 아래 페이지 양식에 맞춰 보여집니다.
				</p>
				<Link href='/project/1'>
					<a target='_blank'>
						<button
							type='button'
							className='w-full rounded-full border border-slate-300 px-4 py-2 text-xl	font-semibold	  text-gray shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 sm:w-auto sm:text-base	'
						>
							소개페이지 양식 보기
						</button>
					</a>
				</Link>
				<form>
					<div className='mt-8 mb-16 h-px bg-slate-300'></div>

					<h3 className='middle-title'>Project 기본 정보</h3>
					<p>
						프로젝트의 이름과 기본 정보를 입력해주세요.
						<br />
						해당 정보는 페이지의 헤더와 푸터에서 사용됩니다.
					</p>
					<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 '>
						<label className='small-title mt-0 essential'>
							프로젝트의 로고를 입력하거나 이미지를 첨부해주세요.(120px x 40px)
						</label>
						<div className='flex justify-between'>
							<div className='block w-2/6'>
								<p>로고</p>
								<input
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
							<div className='block w-1/2'>
								<p>이미지</p>
								<ImageHolder
									state={info}
									setState={setInfo}
									name={'logo_image'}
									object={'project_info'}
								/>
							</div>
						</div>

						<label className='small-title mt-0 essential'>
							프로젝트 사이트의 파비콘를 첨부해주세요.(16px x 16px)
						</label>
						<div className='flex justify-between'>
							<div className='block w-1/2'>
								<p>파비콘</p>
								<ImageHolder
									state={info}
									setState={setInfo}
									name={'favicon'}
									object={'project_info'}
								/>
							</div>
						</div>
						<label className='small-title essential'>
							프로젝트 웹 사이트의 주소를 입력해주세요.
						</label>
						<input
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
						<label className='small-title  essential'>
							프로젝트의 장르를 입력해주세요.
						</label>
						<input
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
						<label className='small-title  essential'>
							프로젝트의 메인색상을 입력해주세요.(#)
						</label>
						<input
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
						<label className='small-title  essential'>
							프로젝트의 대표 E-mail를 입력해주세요.
						</label>
						<input
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
						<label className='small-title essential'>
							프로젝트 팀 레퍼지토리 주소를 입력해주세요.
						</label>
						<input
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
					<div className='my-16 sm:my-32 h-px bg-slate-300'></div>
					<h3 className='middle-title'>Project 소개 페이지</h3>
					<p>여러분의 프로젝트를 소개하는 페이지입니다.</p>
					<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 '>
						<label className='small-title mt-0 essential'>
							프로젝트의 슬로건을 1~2줄로 입력하세요.
						</label>
						<input
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

						<label className='small-title essential'>
							프로젝트를 대표하는 사진을 업로드해주세요.
						</label>
						<ImageHolder
							state={info}
							setState={setInfo}
							name={'image'}
							object={'project_page'}
						/>

						<label className='small-title essential'>
							프로젝트를 대표하는 사진에 알맞는 소개를 2~4줄 입력해주세요.
						</label>
						<input
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
									handleFormChange={handleFormChange}
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
						<label className='small-title mt-0 essential'>
							프로젝트의 문화를 대표하는 슬로건을 입력하세요.
						</label>
						<input
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

						<label className='small-title essential'>
							프로젝트의 문화를 설명하는 내용을 입력하세요.
						</label>
						<input
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

						<label className='small-title essential'>
							팀의 단체 사진이나 팀을 대표하는 사진을 업로드해주세요.
						</label>
						<input
							onChange={(e) => {
								setTeamInfo((prev) => {
									return {
										...prev,
										intro: {
											...teamInfo.intro,
											image: e.target.value,
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
								handleFormChange={handleFormChange}
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
					<div className='flex justify-end'>
						<button
							type='button'
							className='w-full  mt-14 rounded-lg border border-green-700 px-4 py-2 text-xl	font-semibold	  text-green-700 shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 sm:ml-3 sm:w-auto sm:text-base	'
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
