/** @format */
import Main from './Main';
import Image from 'next/image';
import homeProject from '../../image/homeProject.png';
import homeTeam from '../../image/homeTeam.png';
import { useRouter } from 'next/router';
import Alert from '../../components/Alert';
import { useState } from 'react';

function Home() {
	const router = useRouter();
	const [onClose, setOnClose] = useState(false);

	return (
		<>
			<div className='my-container max-w-6xl relative'>
				<button onClick={() => setOnClose(true)}>dasda</button>
				{onClose && <Alert setOnClose={setOnClose} />}
				{/* Home */}
				<Main />
				<div className='flex justify-center'>
					<button
						onClick={() => router.push('/introduce')}
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
								노션으로 작성하지말고{' '}
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
								고생한 프로젝트{' '}
								<span className='main-color font-bold'>팀원 소개</span>,
								<br /> 리드미,노션에서 작성하지 말고{' '}
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
