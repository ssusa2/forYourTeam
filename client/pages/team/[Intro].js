/** @format */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDoc, doc } from 'firebase/firestore';
import Members from './Members';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function teamHome() {
	const router = useRouter();
	const { Intro } = router.query;

	const [teams, setTeams] = useState({});
	console.log(Intro);

	useEffect(() => {
		const fetchUsers = async (Intro) => {
			const projectRef = doc(db, 'project', `${Intro}`);
			const projectSnap = await getDoc(projectRef);
			console.log(Intro);
			// const data = projectSnap.data();
			if (projectSnap.exists()) {
				// console.log('Document data:', projectSnap.data());
				setTeams(projectSnap.data());
			} else {
				console.log('No such document!');
			}
			// };
		};
		fetchUsers(Intro);
	}, [Intro]);

	const { info, teamInfo } = teams;
	console.log(teamInfo);

	const OneMember = teamInfo?.member.length;
	// console.log(OneMember);
	return (
		<>
			<div className='my-container'>
				<section>
					<h2 className='big-title'>{teamInfo?.intro.slogun}</h2>
					<p className='base-text w-full sm:w-4/5 '>
						{teamInfo?.intro.culture}
					</p>
					<img className='w-full mt-8 mb-8 ' src={teamInfo?.intro.image} />
				</section>
				<section className='mt-40'>
					<span className='small-title mb-1'>우리 팀을 소개합니다.</span>
					<div className='  flex justify-between '>
						{teamInfo?.member.length == 1 ? (
							// 한 명일때
							<Members OneMember={OneMember} members={teamInfo?.member[0]} />
						) : (
							// 여러 명일때
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
								{teamInfo?.member.map((el) => (
									<SwiperSlide className='mb-32'>
										<Members members={el} OneMember={OneMember} />
									</SwiperSlide>
								))}
							</Swiper>
						)}
					</div>
				</section>
				<div className='section4 mt-44 mb-44 '>
					<img
						className='mt-14 mb-8 rounded-xl '
						src={info?.project_page.image}
					/>
					<h2 className='mt-24 text-center leading-snug text-4xl font-extrabold'>
						{info?.project_page.slogun}
					</h2>
					<div className='flex justify-center'>
						<button type='button' className='mt-10 main-button'>
							프로젝트 보러가기
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default teamHome;
