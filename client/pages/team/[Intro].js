/** @format */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import Members from './Members';
function teamHome() {
	let test = [
		{
			id: 1,
			name: '정수인',
			role: 'Front-End Developer',
			image:
				'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		},
		{
			id: 2,
			name: '윤명국',
			role: 'Back-End Developer',
			image:
				'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		},
		{
			id: 3,
			name: '김은지',
			role: 'Back-End Developer',
			image:
				'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
		},
		{
			id: 4,
			name: '전슬기',
			role: 'Front-End Developer',
			image:
				'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		},
	];
	const OneMember = test.length;
	console.log(OneMember);
	return (
		<>
			<div className='my-container'>
				<section>
					<h2 className='big-title'>오늘의집에서 일 한다는 것</h2>
					<p className='base-text w-full sm:w-4/5 '>
						오늘의집 팀은 최소한의 규칙으로 최대한의 자유를 보장하는 것을
						원칙으로 하는 만큼 우리 모두가 스스로의 생각과 행동에 대한 막중한
						책임감을 가지고 임합니다. 다음의 일곱가지는 이러한 원칙을 기반으로
						만들어진 오늘의집의 일하는 방식이며 근본적인 가치입니다.
					</p>
					<img
						className='w-full mt-8 mb-8 '
						src='https://team.daangn.com/static/911446d21fd1fb29d6d0ee024c140f54/483a6/2b095359-f3be-4d05-a6a1-31b2db875765_photo_03_%252816.9%2529.avif'
					/>
				</section>
				<section className='mt-40'>
					<span className='small-title'>우리 팀을 소개합니다.</span>
					<div className='  flex justify-between '>
						{test.length == 1 ? (
							<Members OneMember={OneMember} test={test[0]} />
						) : (
							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								breakpoints={{
									640: {
										slidesPerView: 1,
									},
									768: {
										slidesPerView: 1,
									},
									1024: {
										slidesPerView: 2,
									},
								}}
								pagination={{
									clickable: true,
								}}
								modules={[Autoplay, Pagination]}
								className='mySwiper'
							>
								{test.map((el) => (
									<SwiperSlide className='mb-32'>
										<Members test={el} OneMember={OneMember} />
									</SwiperSlide>
								))}
							</Swiper>
						)}
					</div>
				</section>
				<div className='section4 mt-44 mb-44 '>
					<img
						className='mt-14 mb-8 rounded-xl '
						src='https://team.daangn.com/static/911446d21fd1fb29d6d0ee024c140f54/483a6/2b095359-f3be-4d05-a6a1-31b2db875765_photo_03_%252816.9%2529.avif'
					/>
					<h2 className='mt-24 text-center leading-snug text-4xl font-extrabold'>
						이웃과 더 가까워지는 따뜻한 동네를 만들어요.
					</h2>
					<div className='flex justify-center'>
						<button
							type='button'
							className='mt-10 w-full  rounded-full border border-slate-300	  px-4 py-2 text-xl	font-semibold	  text-gray shadow-sm hover:bg-slate-50 hover:text-slate-400		 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-base	'
						>
							프로젝트 보러가기
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default teamHome;
