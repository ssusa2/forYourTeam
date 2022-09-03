/** @format */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import Members from './Members';
function Team() {
	let test = ['철1', '철2', '철3'];
	return (
		<>
			<div className='container px-14 pt-40 xl:pt-60 mx-auto '>
				<section>
					<h2 className='big-title'>오늘의집에서 일 한다는 것</h2>
					<img
						className='w-full mt-8 mb-8 '
						src='https://team.daangn.com/static/911446d21fd1fb29d6d0ee024c140f54/483a6/2b095359-f3be-4d05-a6a1-31b2db875765_photo_03_%252816.9%2529.avif'
					/>
					<p className='base-text w-4/5'>
						오늘의집 팀은 최소한의 규칙으로 최대한의 자유를 보장하는 것을
						원칙으로 하는 만큼 우리 모두가 스스로의 생각과 행동에 대한 막중한
						책임감을 가지고 임합니다. 다음의 일곱가지는 이러한 원칙을 기반으로
						만들어진 오늘의집의 일하는 방식이며 근본적인 가치입니다.
					</p>
				</section>
				<section className='mt-40'>
					<span className='small-title'>우리 팀을 소개합니다.</span>
					<div className='  flex justify-between '>
						{test.length == 1 ? (
							<Members el={test} />
						) : (
							<Swiper
								slidesPerView={2}
								spaceBetween={30}
								// centeredSlides={true}
								// autoplay={{
								// 	delay: 2500,
								// 	disableOnInteraction: false,
								// }}
								pagination={{
									clickable: true,
								}}
								// navigation={true}
								modules={[Autoplay, Pagination]}
								className='mySwiper'
							>
								{test.map((el) => (
									<SwiperSlide>
										<Members el={el} />
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

export default Team;
