/** @format */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { checkLines } from '../../util/utils';
import { db, storage } from '../firebase';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/router';
import Saving, {
	setSaving,
	setShallowSaving,
} from '../../src/store/modules/Saving';
import Form from './Form';
import Alert from '../../components/Alert';
import GuideModal from '../../components/Modal/GuideModal';

function introduce() {
	const dispatch = useDispatch();
	const router = useRouter();
	const userID = useSelector(({ user }) => user);
	const [isSaving, setIsSaving] = useState(null);
	const [isShallowSaving, setIsShallowSaving] = useState(null);
	// const shallowSaving = useSelector(({ Saving }) => Saving.ShallowSaving);
	const isLock = useSelector(({ Lock }) => Lock.Lock);
	// const saving = useSelector(({ Saving }) => Saving.Saving);
	const userInfo = useSelector(({ user }) => user.uid);

	const [fileUrl, setFileUrl] = useState('');
	const [previewOpen, setPreviewOpen] = useState(false);

	const [enabled, setEnabled] = useState(false);

	const [onClose, setOnClose] = useState(false);

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
			userInfo: {},
		},
	]);

	console.log('member', member);

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
		console.log(event);
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
			userInfo: {},
		};
		setMember([...member, newMember]);
	};

	const addProjectIntro = (e) => {
		console.log('???');
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

		if (e?.target.name == '??????') {
			console.log('??????');
			setIsSaving(true);
			setIsShallowSaving(false);
		} else if (e?.target.name === '????????????') {
			// ????????????
			console.log('????????????');
			setIsSaving(false);
			setIsShallowSaving(true);
		}
	};

	// console.log('saving', saving, 'shallowSaving', shallowSaving);

	let projectName = info?.project_info?.name;

	let projectId = uuidv4();
	// ?????? ???????????? ?????? ????????? ?????? ?????????.

	useEffect(() => {
		async function fetchData() {
			try {
				const post = await setDoc(doc(db, 'project', `${projectId}`), {
					uid: userInfo,
					joined: serverTimestamp(), // ?????? ??????,??????
					projectId,
					info,
					teamInfo,
					shallowSaving: isShallowSaving,
					saving: isSaving,
					isLock,
					genre: info.project_info.genre,
				});
				// dispatch(setSaving(false));
				if (isShallowSaving) {
					alert('???????????? ??????!');
				} else {
					setOnClose(true);
					// ??????????????? ????????? ???????????? ?????? ????????? 3??? ?????? ??? ?????? ????????????
					setTimeout(function () {
						window.open(`/project/${projectId}`);
					}, 3000);
				}
				// ?????? ????????? ??? ?????? ?????????
			} catch (err) {
				console.log(err);
			}
		}
		if (isSaving && !isShallowSaving) {
			fetchData('????????????');
		} else if (isShallowSaving && !isSaving) {
			fetchData('??????????????????');
		}
	}, [isSaving, isShallowSaving]);

	console.log(
		'index.js:',
		'isSaving',
		isSaving,
		'isShallowSaving',
		isShallowSaving
	);

	useEffect(() => {
		info.project_info.logo_image && dispatch(setShallowSaving(true));
	}, [info.project_info.logo_image]);

	const previewSetInfo = (e) => {
		addProjectIntro(e);
	};

	useEffect(() => {
		previewSetInfo();
	}, [previewOpen]);

	useEffect(() => {
		if (!userInfo) {
			alert('???????????? ????????? ????????? ?????????.');
			router.push('/login');
		}
	}, []);

	return (
		<>
			<GuideModal />
			{onClose && <Alert setOnClose={setOnClose} />}
			<Form
				enabled={enabled}
				setEnabled={setEnabled}
				info={info}
				userID={userID.uid}
				projectId={projectId}
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
				setOnClose={setOnClose}
			/>
		</>
	);
}

export default introduce;
