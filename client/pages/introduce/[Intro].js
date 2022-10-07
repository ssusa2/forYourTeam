/** @format */
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { db, storageRef, storage } from '../firebase';
import moment from 'moment';
import 'moment/locale/ko';
import { checkLines, handleFormChange } from '../../util/utils';
import Form from './Form';
import {
	setDoc,
	deleteDoc,
	getDoc,
	doc,
	serverTimestamp,
	deleteObject,
	listAll,
	ref,
} from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { setAll } from '../../src/store/modules/projectInfo';
import { setSaving, setShallowSaving } from '../../src/store/modules/Saving';

function introduce() {
	const router = useRouter();
	const dispatch = useDispatch();
	const { Intro } = router.query;
	const userID = useSelector(({ user }) => user);
	const [fileUrl, setFileUrl] = useState('');
	const [isSaving, setIsSaving] = useState(false);
	const [isShallowSave, setIsShallowSave] = useState(false);
	const saving = useSelector(({ Saving }) => Saving.Saving);
	const shallowSaving = useSelector(({ Saving }) => Saving.ShallowSaving);

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

	// 코어 추가
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

	// 멤버 추가
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

	// 정보 다 합치기
	const addProjectIntro = (e) => {
		//정보 추가
		setInfo((prev) => {
			return {
				...prev,
				project_page: {
					...info.project_page,
					core,
				},
			};
		});
		// 팀 정보 추가
		setTeamInfo((prev) => {
			return {
				...prev,
				...teamInfo,
				member,
			};
		});

		if (e?.target.name == '저장') {
			dispatch(setSaving(true));
			dispatch(setShallowSaving(false));
		}
	};

	let projectName = info?.project_info?.name;

	useEffect(() => {
		// 생성 시
		async function fetchData() {
			console.log('1');
			try {
				const post = await setDoc(doc(db, 'project', `${projectName}`), {
					uid: userID.uid,
					joined: serverTimestamp(), // 현재 날짜,시간
					info,
					teamInfo,
					genre: info.project_info.genre,
					shallowSaving,
				});
				dispatch(setSaving(false));

				if (shallowSaving) {
					alert('임시저장 완료!');
				} else {
					alert('저장완료!');
				}
				router.push(`/project/${projectName}`);
			} catch (err) {
				console.log(err);
			}
		}
		if (saving || shallowSaving) {
			fetchData();
		}
	}, [saving, shallowSaving]);

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
	};

	// 여기서 부터는 업데이트에서만 있는 기능

	// 업데이트
	const [lastUpdate, setLastUpdate] = useState();

	useEffect(() => {
		const getProject = async (Intro) => {
			const projectRef = doc(db, 'project', `${Intro}`);
			const projectSnap = await getDoc(projectRef);
			if (projectSnap.exists()) {
				setInfo(projectSnap.data().info);
				setTeamInfo(projectSnap.data().teamInfo);
				setLastUpdate(projectSnap.data().joined);
				setCore(projectSnap.data().info.project_page.core);
				setMember(projectSnap.data().teamInfo.member);
				dispatch(setShallowSaving(projectSnap.data().shallowSaving));
				// console.log(projectSnap.data().teamInfo.member);
			} else {
				console.log('No such document!');
			}
		};
		getProject(Intro);
	}, [Intro]);

	let lastTouch = moment(lastUpdate?.toDate()).format('llll');
	console.log('shallowSaving', shallowSaving);
	console.log('saving', saving);

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
		console.log('path', path);
		const fileRef = ref(storage, path);
		console.log(fileRef);
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

	// 미리보기
	const [previewOpen, setPreviewOpen] = useState(false);

	const previewSetInfo = (e) => {
		addProjectIntro(e);
		dispatch(setAll({ info, teamInfo }));
	};

	useEffect(() => {
		previewSetInfo();
	}, [previewOpen]);

	return (
		<>
			<Form
				lastTouch={lastTouch}
				// deleteProject={deleteProject}
				userID={userID.uid}
				projectName={projectName}
				info={info}
				setInfo={setInfo}
				// inutRef={inutRef}
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
				checkLines={checkLines}
			/>
		</>
	);
}

export default introduce;
