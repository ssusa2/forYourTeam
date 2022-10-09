/** @format */

import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Project from '../../pages/project/[Intro]';
import Team from '../../pages/team/[Intro]';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function TestModal({ setPreviewOpen }) {
	const Preview = useSelector(({ projectInfo }) => projectInfo);

	useEffect(() => {
		// console.log('PreviewModal', Preview);
	}, [Preview]);
	const [open, setOpen] = useState(true);
	const [previewProject, setPreviewProject] = useState(true);

	const cancelButtonRef = useRef(null);

	console.log('Preview', Preview);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				initialFocus={cancelButtonRef}
				onClose={setPreviewOpen}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='-translate-y-[7%] flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all h-[70vh] overflow-y-scroll sm:my-8 sm:w-full sm:max-w-lg top-[10%] translate-y-[10%]'>
								<Nav
									Preview={Preview}
									previewProject={previewProject}
									setPreviewProject={setPreviewProject}
								/>
								{previewProject ? (
									<Project Preview={Preview} />
								) : (
									<Team Preview={Preview} />
								)}
								<Footer Preview={Preview} />
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
