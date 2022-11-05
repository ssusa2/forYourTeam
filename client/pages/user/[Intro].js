/** @format */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';
import { getDocs, query, where, collectionGroup } from 'firebase/firestore';
import ProjectList from '../project/ProjectList';
import _ from 'underscore';
import { Github } from '../../components/Icon/Icon';

function user() {
	const [userInfo, setUserInfo] = useState({});
	const [projects, setProjects] = useState([]);

	const router = useRouter();
	const { Intro } = router.query;

	useEffect(() => {
		const getUser = async (Intro) => {
			const projectRef = doc(db, 'users', `${Intro}`);
			const projectSnap = await getDoc(projectRef);

			if (projectSnap.exists()) {
				setUserInfo(projectSnap.data());
			} else {
				console.log('No such document!');
			}
		};

		const getProjects = async () => {
			const project = query(
				collectionGroup(db, 'project'),
				where('shallowSaving', '==', false),
				where('isLock', '==', false)
			);
			const querySnapshot = await getDocs(project);

			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
			}));
			setProjects(
				newData.filter(function (el) {
					return el.teamInfo.member?.[0]?.userInfo?.[6] == `${Intro}`;
				})
			);
		};
		getUser(Intro);
		getProjects(Intro);
	}, [Intro]);

	return (
		<>
			<div className='my-container max-w-6xl'>
				<div className='sm:block xl:flex md:flex justify-between items-end'>
					<div className='middle-title'>
						{userInfo?.name}님이 참여한 프로젝트
					</div>
					<a target='_blank' href={'3'}>
						<Github />
					</a>
				</div>
				<div className=' mt-8 h-px bg-slate-300'></div>
				<ProjectList projects={projects} />
			</div>
		</>
	);
}

export default user;
