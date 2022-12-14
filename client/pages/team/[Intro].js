/** @format */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import homeTeam from '../../image/homeTeam.png';
import project1 from '../../image/project1.png';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { replaceBrTag } from '../../util/utils';
import { collection, getDoc, doc } from 'firebase/firestore';
import Members from './Members';
import { useDispatch } from 'react-redux';
import { setColor, setLogo, setAll } from '../../src/store/modules/projectInfo';
import HeadMeta from '../../components/Head/HeadMeta';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function teamHome({ PreviewTeamInfo }) {
	const dispatch = useDispatch();
	const router = useRouter();
	const { Intro } = router.query;

	const [teams, setTeams] = useState({});
	const [projectInfo, setProjectInfo] = useState();

	useEffect(() => {
		const fetchProject = async (Intro) => {
			const projectRef = doc(db, 'project', `${Intro}`);
			const projectSnap = await getDoc(projectRef);
			// const data = projectSnap.data();
			if (projectSnap.exists()) {
				// console.log('Document data:', projectSnap.data());
				setTeams(projectSnap.data());
				setProjectInfo(projectSnap.data().info);
			} else {
				console.log('No such document!');
			}
		};
		fetchProject(Intro);
	}, [Intro]);

	useEffect(() => {
		dispatch(setAll(teams));
	}, [teams]);

	let { info, teamInfo } = teams;

	if (PreviewTeamInfo) {
		teamInfo = PreviewTeamInfo;
	}
	const OneMember = teamInfo?.member.length;

	return (
		<>
			<HeadMeta
				title={projectInfo?.name}
				description={projectInfo?.project_page.description}
				// url={projectInfo?.url}
				image={projectInfo?.logo_image}
				favicon={projectInfo?.favicon}
				author={teams?.intro?.name}
			/>
			<div
				className={
					router.route == '/introduce'
						? 'mt-16 px-14 pt-40 xl:pt-60 mx-auto'
						: 'my-container max-w-6xl'
				}
			>
				<section>
					<h2 className='big-title'>{teamInfo?.intro.name}</h2>
					{teamInfo?.intro.image ? (
						<img
							className='w-full mt-8 mb-8 h-96 object-cover '
							src={teamInfo?.intro.image}
						/>
					) : (
						teamInfo?.intro.name && (
							<div className='w-full h-96 relative	'>
								<Image
									src={homeTeam}
									layout='fill'
									objectFit='cover'
									className='h-full drop-shadow-lg'
								/>
							</div>
						)
					)}

					<h2
						className='big-title'
						dangerouslySetInnerHTML={replaceBrTag(teamInfo?.intro.slogun)}
					/>
					<p
						className='base-text w-full sm:w-4/5 '
						dangerouslySetInnerHTML={replaceBrTag(teamInfo?.intro.culture)}
					/>
				</section>
				{teamInfo?.member[0].name && (
					<section className='mt-40'>
						<span className='small-title mb-1'>?????? ?????? ???????????????.</span>
						<div className='  flex justify-between '>
							{teamInfo?.member.length == 1 ? (
								// ??? ?????????
								<Members OneMember={OneMember} members={teamInfo?.member[0]} />
							) : (
								// ?????? ?????????
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
				)}
				<div className='section4 mt-44 mb-44 '>
					{info?.project_page.image ? (
						<img
							className='mt-14 mb-8 rounded-xl w-full h-96 object-cover'
							src={info?.project_page.image}
						/>
					) : (
						info?.project_page.slogun && (
							<Image
								className='mt-4  xl:mt-36  mb-8 w-full object-fill'
								src={project1}
							/>
						)
					)}
					<h2 className='mt-24 text-center leading-snug text-4xl font-extrabold'>
						{info?.project_page.slogun}
					</h2>
					<div className='flex justify-center'>
						<a
							href={`${info?.project_info.url}`}
							target={`${info?.project_info.url}`}
						>
							<button type='button' className='mt-10 main-button'>
								???????????? ????????????
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default teamHome;
