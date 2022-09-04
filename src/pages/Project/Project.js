/** @format */

import React from 'react';

function Project() {
	return (
		<>
			<div className='my-container'>
				{/* section1 */}
				<div className='section1'>
					<div>
						<h2 className='big-title '>
							이웃과 더 가까워지는 따뜻한 동네를 만들어요.
						</h2>
						<img
							className='mt-4  xl:mt-36  mb-8 '
							src='https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/160993788224213297.jpg'
						/>
					</div>
					<p className='xl:w-3/4 text-2xl font-bold'>
						월평균 1,800만 명의 사용자, 하루 평균 사용 시간 20분, 1억 2천만 번의
						연결. 중고 직거래로 시작한 당근마켓은 국내 최대의 지역 생활 커뮤니티
						서비스로 나아가고 있어요. 이웃이 알려주는 진짜 우리 동네 정보, 내
						근처에 숨어있는 좋은 가게를 발견하고, 이웃과 함께 소소한 일상을 나눌
						수 있는 따뜻하고 풍요로운 동네 생활을 꿈꿔요.
					</p>
				</div>
				{/* section2 */}
				<div className=' section2 mt-44 '>
					<div className=' xl:flex justify-between left'>
						<div className='w-full	'>
							<span className='small-title'>당근마켓 팀</span>
							<h3 className='middle-title'>
								이웃과 더 가까워지는
								<br /> 따뜻한 동네를 만들어요.
							</h3>
							<p className=' mt-3 mb-3 sm:pr-0  text-xl xl:pr-40 '>
								월평균 1,800만 명의 사용자, 하루 평균 사용 시간 20분, 1억 2천만
								번의 연결. 중고 직거래로 시작한 당근마켓은 국내 최대의 지역 생활
								커뮤니티 서비스로 나아가고 있어요.
							</p>
						</div>
						<img
							className='object-cover  w-full xl:w-3/5'
							src='https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/160993788224213297.jpg'
						/>
					</div>
				</div>
				{/* section3 */}
				<div className='section3 mt-44 '>
					<div className='flex flex-col-reverse xl:flex xl:flex-row	 xl:justify-between xl:rigth'>
						<img
							className='object-cover w-full xl:w-3/5'
							src='https://ca.slack-edge.com/TH0U6FBTN-U03EK9NRXNX-25f60beaa3ff-512'
						/>
						<div className='text-end'>
							<span className='small-title'>당근마켓 팀</span>
							<h3 className='middle-title'>
								이웃과 더 가까워지는
								<br /> 따뜻한 동네를 만들어요.
							</h3>
							<p className='mt-3 mb-3 sm:pl-0  text-xl xl:pl-40 '>
								월평균 1,800만 명의 사용자, 하루 평균 사용 시간 20분, 1억 2천만
								번의 연결. 중고 직거래로 시작한 당근마켓은 국내 최대의 지역 생활
								커뮤니티 서비스로 나아가고 있어요.
							</p>
						</div>
					</div>
				</div>

				{/* section4 */}
				<div className='section4 mt-44 mb-44 '>
					<img
						className='object-cover mt-14 mb-8 rounded-xl '
						src='https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/160993788224213297.jpg'
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

				{/* section4 */}
			</div>
		</>
	);
}

export default Project;
