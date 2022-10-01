/** @format */
import Project from '../../pages/project/[Intro]';
import Nav from '../Nav/Nav';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function PreviewModal({ setPreviewOpen }) {
	const Preview = useSelector(({ projectInfo }) => projectInfo);

	useEffect(() => {
		// console.log('PreviewModal', Preview);
	}, [Preview]);

	return (
		<>
			<div className='z-30 bg-slate-100 shadow-2xl overflow-y-scroll fixed w-3/5 rounded-xl h-screen top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]	'>
				<Nav Preview={Preview} />
				<Project Preview={Preview} />
			</div>
		</>
	);
}

export default PreviewModal;
