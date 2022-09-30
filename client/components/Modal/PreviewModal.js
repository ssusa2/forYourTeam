/** @format */
import Project from '../../pages/project/[Intro]';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function PreviewModal({ setPreviewOpen }) {
	const Preview = useSelector(({ projectInfo }) => projectInfo);

	useEffect(() => {
		// console.log('PreviewModal', Preview);
	}, [Preview]);

	return (
		<div className='z-30 bg-slate-100 shadow-2xl fixed w-3/5 rounded-lg h-screen top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]	'>
			<div>
				<h2>미리보기</h2>
				<button
					onClick={(e) => setPreviewOpen(false)}
					className='rounded-full bg-green-700 text-white w-[20px] h-[20px]'
				>
					x
				</button>
			</div>
			<Project Preview={Preview} />
		</div>
	);
}

export default PreviewModal;
