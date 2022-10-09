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
import { setSaving, setShallowSaving } from '../../src/store/modules/Saving';
import Form from './Form';
import useCopyClipBoard from '../../hooks/useCopyClipBoard';
import Toggle from './LockToggle';

function introduce() {
	const router = useRouter();
	const { asPath } = useRouter();
	const dispatch = useDispatch();
	const userID = useSelector(({ user }) => user);
	const userInfo = useSelector(({ user }) => user.uid);
	const [fileUrl, setFileUrl] = useState('');
	const [isSaving, setIsSaving] = useState(false);
	const [previewOpen, setPreviewOpen] = useState(false);
	const saving = useSelector(({ Saving }) => Saving.Saving);
	const shallowSaving = useSelector(({ Saving }) => Saving.ShallowSaving);
	const [isCopy, onCopy] = useCopyClipBoard();
	const isLock = useSelector(({ Lock }) => Lock.Lock);
	console.log('isLock', isLock);
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
		};
		setCore([...core, [newCore]]);
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
		console.log('123');
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

		if (e?.target.name == '저장') {
			dispatch(setSaving(true));
			dispatch(setShallowSaving(false));
		}
	};

	let projectName = info?.project_info?.name;

	useEffect(() => {
		async function fetchData() {
			console.log('234');
			try {
				const post = await setDoc(doc(db, 'project', `${projectName}`), {
					uid: userInfo,
					id: uuidv4(),
					joined: serverTimestamp(), // 현재 날짜,시간
					info,
					teamInfo,
					genre: info.project_info.genre,
					shallowSaving,
					isLock,
				});
				dispatch(setSaving(false));
				if (shallowSaving) {
					alert('임시저장 완료!');
				} else {
					alert('저장완료!');

					// router.push('/project');
				}
				window.open(`/project/${projectName}`); // 새창 띄우는 건 이게 나은듯
			} catch (err) {
				console.log(err);
			}
		}
		if (saving || shallowSaving) {
			fetchData();
		}
	}, [saving, shallowSaving]);

	const previewSetInfo = (e) => {
		addProjectIntro(e);
		dispatch(setAll({ info, teamInfo }));
	};

	useEffect(() => {
		previewSetInfo(event);
	}, [previewOpen]);

	const [enabled, setEnabled] = useState(false);
	console.log('adadasdasd', teamInfo.member);

	return (
		<>
			<Form
				enabled={enabled}
				setEnabled={setEnabled}
				info={info}
				userID={userID.uid}
				projectName={projectName}
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
			/>
		</>
	);
}

export default introduce;
