/** @format */
import Main from './Main';
import Image from 'next/image';
import homeProject from '../../image/homeProject.png';
import homeTeam from '../../image/homeTeam.png';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function Home() {
	const router = useRouter();
	const userInfo = useSelector(({ user }) => user);
	console.log('userInfo', userInfo);

	return (
		<>
			<div className='my-container max-w-6xl relative'>
				{/* Home */}
				<Main />
				<div className='flex justify-center'>
					<button
						onClick={() => {
							if (userInfo?.uid) {
								router.push('/introduce');
							} else {
								if (
									confirm('로그인이 필요한 서비스 입니다. 로그인 하시겠습니까?')
								) {
									router.push('/login');
								}
								{
									('');
								}
							}
						}}
						type='button'
						className='w-full  mt-14 rounded-full border border-slate-300 px-4 py-2 text-xl	font-semibold	  text-gray shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 sm:ml-3 sm:w-auto sm:text-base	'
					>
						+ 내 프로젝트 등록하기
					</button>
				</div>

				<div className='my-16 sm:my-32 h-px bg-slate-300	'></div>

				<section className='section'>
					<h2 className='small-title'>
						<span className='main-color'>Project</span> Page
					</h2>
					<div>
						<div>
							<p>
								프로젝트 기능 구현하느라 뒷 순위였던{' '}
								<span className='main-color font-bold'>프로젝트 소개</span>,
								<br />
								Notion으로 작성하지말고
								<span className='main-color font-bold'>
									내 웹사이트에서 바로 소개해보세요 .
								</span>
							</p>
						</div>
						<Image placeholder='blur' src={homeProject} />
					</div>
				</section>
				<section className='section'>
					<h2 className='small-title'>
						<span className='main-color'>Team</span> Page
					</h2>
					<div>
						<div>
							<p>
								프로젝트 <span className='main-color font-bold'>팀원 소개</span>
								,
								<br /> README, Notion에서 작성하지 말고,
								<span className='main-color font-bold'>
									내 웹사이트에서 바로 소개해보세요 .
								</span>
							</p>
						</div>
						<Image src={homeTeam} />
					</div>
				</section>
				<div className='flex justify-center'>
					<button
						onClick={() => router.push('/project')}
						type='button'
						className='w-full  mt-14 rounded-full border border-slate-300 px-4 py-2 text-xl	font-semibold	  text-gray shadow-sm hover:bg-green-700 transition duration-300 ease-in-out hover:text-white hover:border hover:border-green-700 sm:ml-3 sm:w-auto sm:text-base	'
					>
						다른 프로젝트 보러가기
					</button>
				</div>
			</div>
		</>
	);
}

export default Home;
