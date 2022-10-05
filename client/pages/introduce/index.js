/** @format */
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { checkLines } from '../../util/utils';
import { db, storage } from '../firebase';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { setAll } from '../../src/store/modules/projectInfo';
import Form from './Form';

function introduce() {
	const router = useRouter();
	const dispatch = useDispatch();
	const userID = useSelector(({ user }) => user);
	const userInfo = useSelector(({ user }) => user.uid);
	const [fileUrl, setFileUrl] = useState('');
	const [isSaving, setIsSaving] = useState(false);
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
			gender: '',
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
					router.push('/project');
				}
				window.open(`/project/${projectName}`); // 새창 띄우는 건 이게 나은듯
			} catch (err) {
				console.log(err);
			}
		}
		if (isSaving || isShallowSave) {
			fetchData();
		}
	}, [isSaving, isShallowSave]);

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
	const handleClick = (e) => {
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
			(setIsValid(true), addProjectIntro(e));

		setIsValid(true);
	};

	console.log('info', teamInfo);

	return (
		<>
			<Form
				info={info}
				setInfo={setInfo}
				inutRef={inutRef}
				core={core}
				setCore={setCore}
				addCore={addCore}
				teamInfo={teamInfo}
				setTeamInfo={setTeamInfo}
				member={member}
				setMember={setMember}
				addMember={addMember}
				fileUrl={fileUrl}
				setFileUrl={setFileUrl}
				handleFormChange={handleFormChange}
				handleClick={handleClick}
				isValid={isValid}
				addProjectIntro={addProjectIntro}
				previewOpen={previewOpen}
				setPreviewOpen={setPreviewOpen}
				setIsShallowSave={setIsShallowSave}
				checkLines={checkLines}
			/>
		</>
	);
}

export default introduce;
