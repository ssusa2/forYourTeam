/** @format */

import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { First, Project, Core, Member, Teams } from './ModalContent';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function GuideModal() {
	let arr = [<First />, <Project />, <Core />, <Teams />, <Member />];

	const [open, setOpen] = useState(true);

	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				initialFocus={cancelButtonRef}
				onClose={setOpen}
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
							<Dialog.Panel className='p-4 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all h-[70vh] overflow-y-scroll sm:my-8 sm:w-full sm:max-w-lg top-[10%] translate-y-[10%]'>
								<Swiper
									slidesPerView={1}
									spaceBetween={0}
									breakpoints={{
										640: {
											slidesPerView: 1,
										},
										768: {
											slidesPerView: 1,
										},
										1024: {
											slidesPerView: 1,
										},
									}}
									pagination={{
										clickable: true,
									}}
									modules={[Autoplay, Pagination]}
									className='mySwiper '
								>
									{arr.map((el) => (
										<>
											<SwiperSlide className='mb-5 w-full'>{el}</SwiperSlide>
										</>
									))}
								</Swiper>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
