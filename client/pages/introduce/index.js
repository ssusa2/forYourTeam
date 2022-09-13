/** @format */
import React, { useState, useEffect } from 'react';
import MemberAdd from './MemberAdd';
import { useRouter } from 'next/router';
import Link from 'next/link';

function introduce() {
	const [info, setInfo] = useState({
		project_info: {
			logo: '',
			url: '',
			genre: '',
			email: '',
			color: '',
			team_github: '',
			headcount: '',
		},
		project_page: {
			intro: {
				slogun: '',
				image: '',
				description: '',
			},
			service: {
				subheading: '',
				title: '',
				description: '',
				image: '',
			},
		},
		team_page: {
			intro: {
				slogun: '',
				culture: '',
				image: '',
			},
			member: [],
		},
	});

	const [memberData, setMemberData] = useState({
		name: '',
		role: '',
		description: '',
		gitub: '',
		image: '',
	});
	console.log('team_page', info);
	const core = [1, 2];
	let Member = info.project_info.headcount || 1;

	const z = info?.project_info?.headcount;
	const [head, setHead] = useState(1);
	console.log('z', z);
	console.log('head', head);

	// const person = [1, 2, 3, 4];

	const check = [1, 2, 3, 4, 5, 6];
	const [todo, setTodo] = useState([{ name: '' }]);
	let [inputValue, setInputValue] = useState('');
	let [newTodo, setNewTodo] = useState({ name: '' });

	const inputChg = (e) => {
		setInputValue(e.target.value);
	};

	//inputValue가 변하면, 그때 newTodo값을 바꿔주자
	useEffect(() => setNewTodo({ name: inputValue }), [inputValue]);
	useEffect(() => {
		setHead(z);
	}, [z]);

	const onSubmit = (e) => {
		e.preventDefault();
		setTodo([...todo, newTodo]);
		setInputValue('');
	};

	const todosMap = todo.map((todoItem, i) => <p key={i}>{todoItem.name}</p>);

	console.log(todo);

	return (
		<>
			<div className='my-container'>
				<div className='parent'>
					name: {todosMap}
					<form onSubmit={onSubmit}>
						<input value={inputValue} onChange={inputChg}></input>
						<button>저장</button>
					</form>
				</div>

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
									className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
								/>
							</div>
							<div className='block w-1/2'>
								<p>이미지</p>
								<input
									type='file'
									className='block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-green-700
hover:file:bg-violet-100'
								/>
							</div>
						</div>
						<label className='small-title  essential'>
							프로젝트 웹 사이트의 주소를 입력해주세요.
						</label>
						<input
							onChange={(e) => {
								setInfo((prev) => {
									return {
										project_info: { ...info.project_info, url: e.target.value },
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
							className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
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
							className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
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
							className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
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
							className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
						/>
						<label className='small-title essential'>
							프로젝트 팀원 수를 선택해주세요.
						</label>

						<div className='flex justify-between w-1/2'>
							<div>
								<input
									onChange={(e) => {
										setInfo((prev) => {
											return {
												...prev,
												project_info: {
													...info.project_info,
													headcount: e.target.value,
												},
											};
										});
									}}
									name='number'
									type='radio'
									value='1'
									class='appearance-none rounded-full checked:bg-blue-500 '
								/>
								1
							</div>
							<div>
								<input
									onChange={(e) => {
										setInfo((prev) => {
											return {
												...prev,
												project_info: {
													...info.project_info,
													headcount: e.target.value,
												},
											};
										});
									}}
									name='number'
									type='radio'
									value='2'
									class='appearance-none rounded-full checked:bg-blue-500 '
								/>
								2
							</div>
							<div>
								<input
									onChange={(e) => {
										setInfo((prev) => {
											return {
												...prev,
												project_info: {
													...info.project_info,
													headcount: e.target.value,
												},
											};
										});
									}}
									name='number'
									type='radio'
									value='3'
									class='appearance-none rounded-full checked:bg-blue-500 '
								/>
								3
							</div>
							<div>
								<input
									onChange={(e) => {
										setInfo((prev) => {
											return {
												...prev,
												project_info: {
													...info.project_info,
													headcount: e.target.value,
												},
											};
										});
									}}
									name='number'
									type='radio'
									value='4'
									class='appearance-none rounded-full checked:bg-blue-500 '
								/>
								4
							</div>
							<div>
								<input
									onChange={(e) => {
										setInfo((prev) => {
											return {
												...prev,
												project_info: {
													...info.project_info,
													headcount: e.target.value,
												},
											};
										});
									}}
									name='number'
									type='radio'
									value='5'
									class='appearance-none rounded-full checked:bg-blue-500 '
								/>
								5
							</div>
							<div>
								<input
									onChange={(e) => {
										setInfo((prev) => {
											return {
												...prev,
												project_info: {
													...info.project_info,
													headcount: e.target.value,
												},
											};
										});
									}}
									name='number'
									type='radio'
									value='6'
									class='appearance-none rounded-full checked:bg-blue-500 '
								/>
								6
							</div>
						</div>
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
							className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
						/>

						<label className='small-title essential'>
							프로젝트를 대표하는 사진을 업로드해주세요.
						</label>
						<input
							onChange={(e) => {
								setInfo((prev) => {
									return {
										...prev,
										project_page: {
											...info.project_page,
											image: e.target.value,
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
							className=' mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
						/>
					</section>
					{core.map((el, idx) => {
						return (
							<>
								<h3 className='small-title '>프로젝트 주요 기능({idx + 1})</h3>
								<p>프로젝트의 주요 기능을 설명해주세요.</p>
								<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 '>
									<label className='small-title mt-0 essential'>소제목</label>
									<input
										onChange={(e) => {
											setInfo((prev) => {
												return {
													...prev,
													service: {
														...info.project_page.service,
														subheading: e.target.value,
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

									<label className='small-title essential'>제목</label>
									<input
										onChange={(e) => {
											setInfo((prev) => {
												return {
													...prev,
													service: {
														...info.project_page.service,
														title: e.target.value,
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

									<label className='small-title essential'>소개</label>
									<input
										onChange={(e) => {
											setInfo((prev) => {
												return {
													...prev,
													service: {
														...info.project_page.service,
														description: e.target.value,
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

									<label className='small-title essential'>
										주요 기능에 맞는 사진을 업로드해주세요.
									</label>
									<input
										onChange={(e) => {
											setInfo((prev) => {
												return {
													...prev,
													service: {
														...info.project_page.service,
														image: e.target.value,
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
								</section>
							</>
						);
					})}
					<div className='my-16 sm:my-32 h-px bg-slate-300'></div>
					<h3 className='middle-title'>Team 소개 페이지</h3>
					<p>프로젝트의 팀 문화와 팀원들을 소개하세요.</p>
					<section className='mb-4 mt-4 p-4 rounded-lg font-semibold bg-slate-100 '>
						<label className='small-title mt-0 essential'>
							프로젝트의 문화를 대표하는 슬로건을 입력하세요.
						</label>
						<input
							onChange={(e) => {
								setInfo((prev) => {
									return {
										...prev,
										intro: {
											...info.team_page.intro,
											slogun: e.target.value,
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

						<label className='small-title essential'>
							프로젝트의 문화를 설명하는 내용을 입력하세요.
						</label>
						<input
							onChange={(e) => {
								setInfo((prev) => {
									return {
										...prev,
										intro: {
											...info.team_page.intro,
											culture: e.target.value,
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

						<label className='small-title essential'>
							팀의 단체 사진이나 팀을 대표하는 사진을 업로드해주세요.
						</label>
						<input
							onChange={(e) => {
								setInfo((prev) => {
									return {
										...prev,
										intro: {
											...info.team_page.intro,
											image: e.target.value,
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
					</section>

					<h3 className='small-title '>팀원 소개</h3>
					<p>팀원를 소개해보세요.</p>
					{Array(Number(head || 1))
						.fill(1)
						.map((el, idx) => {
							return (
								<MemberAdd el={el} idx={idx} info={info} setInfo={setInfo} />
							);
						})}
					<div className='flex justify-end'>
						<button
							type='button'
							className='w-full  mt-14 rounded-lg border border-green-700 px-4 py-2 text-xl	font-semibold	  text-green-700 shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 sm:ml-3 sm:w-auto sm:text-base	'
						>
							임시저장
						</button>
						<button
							type='button'
							className='w-full  mt-14 bg-green-700 rounded-lg border border-green-700 px-4 py-2 text-xl	font-semibold	  text-white shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 hover:bg-green-800 text-white sm:ml-3 sm:w-auto sm:text-base	'
						>
							프로젝트 소개하기
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default introduce;
