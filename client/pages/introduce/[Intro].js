/** @format */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db, storage } from '../firebase';
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
import { setSaving, setShallowSaving } from '../../src/store/modules/Saving';

function introduce() {
	const router = useRouter();
	const dispatch = useDispatch();
	const { Intro } = router.query;
	const shallowSaving = useSelector(({ Saving }) => Saving.ShallowSaving);
	const isLock = useSelector(({ Lock }) => Lock.Lock);
	const saving = useSelector(({ Saving }) => Saving.Saving);
	const userID = useSelector(({ user }) => user);

	// 미리보기
	const [previewOpen, setPreviewOpen] = useState(false);
	const [fileUrl, setFileUrl] = useState('');
	const [shallow, setShallow] = useState(false);
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
			// shallow && setShallow(false);
		} else {
			dispatch(setShallowSaving(true));
			dispatch(setSaving(false));
		}
	};

	console.log('saving', saving, 'shallowSaving', shallowSaving);

	// let shallowSaving = shallow;

	useEffect(() => {
		async function fetchData() {
			try {
				const post = await setDoc(doc(db, 'project', `${Intro}`), {
					uid: userID.uid,
					joined: serverTimestamp(), // 현재 날짜,시간
					projectId: Intro,
					info,
					teamInfo,
					shallowSaving,
					isLock,
					genre: info.project_info.genre,
				});
				// dispatch(setSaving(false));
				if (shallowSaving) {
					alert('임시 저장 완료!');
				} else {
					alert('저장완료!');
				}
				window.open(`/project/${projectId}`);
			} catch (err) {
				console.log(err);
			}
		}
		if (saving || shallowSaving) {
			fetchData();
		}
	}, [saving, shallowSaving]);

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
				// console.log(projectSnap.data().shallowSaving);
				// setShallow(projectSnap.data().shallowSaving);

				// 여기 부분이 문제인건가 아니면 처음엔 false였다가 true로 되는 것이 문제인건가
				dispatch(setShallowSaving(projectSnap.data().shallowSaving));
				dispatch(setSaving(projectSnap.data().Saving));
			} else {
				console.log('No such document!');
			}
		};
		getProject(Intro);
	}, [Intro]);

	let lastTouch = moment(lastUpdate?.toDate()).format('llll');

	const previewSetInfo = (e) => {
		addProjectIntro(e);
	};

	useEffect(() => {
		previewSetInfo();
	}, [previewOpen]);

	let projectId = Intro;

	return (
		<>
			<Form
				lastTouch={lastTouch}
				userID={userID.uid}
				Intro={Intro}
				info={info}
				setInfo={setInfo}
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
				addProjectIntro={addProjectIntro}
				previewOpen={previewOpen}
				setPreviewOpen={setPreviewOpen}
				checkLines={checkLines}
				projectId={projectId}
			/>
		</>
	);
}

export default introduce;
