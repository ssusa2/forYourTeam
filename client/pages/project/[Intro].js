/** @format */
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import Slide from './slide';

function Project() {
	const router = useRouter();
	console.log(router);
	return (
		<>
			{/* <h1>Post: {id}</h1>
			<h1>Comment: {comment}</h1> */}
			<div className='my-container '>
				{/* section1 */}
				<div className='section1'>
					<div>
						<h2 className='big-title readW ' contentEditable>
							이웃과 더 가까워지는 따뜻한 동네를 만들어요.
						</h2>
						<img
							className='mt-4  xl:mt-36  mb-8 '
							src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
							<span className='small-title'>마이뷰 팀</span>
							<h3 className='middle-title'>
								영화의 모든 것을 My View에서.
								{/* <br /> 따뜻한 동네를 만들어요. */}
							</h3>
							<p className=' mt-3 mb-3 sm:pr-0  text-xl xl:pr-20'>
								영화에 진심인 사람들을 위해.
								<br />
								영화 기본 정보는 물론, 참여한 출연진에 대한 정보를 보여줘요. 그
								외에도 재밌고 집중할 수 있는 UI요소로 인해 영화에 더 집중할 수
								있을거에요. 마이뷰에서 즐겨보세요.
							</p>
						</div>
						<img
							className='object-cover  w-full xl:w-3/5'
							src='https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
						/>
					</div>
				</div>
				{/* section3 */}
				<div className='section3 mt-44 '>
					<div className='flex flex-col-reverse xl:flex xl:flex-row	 xl:justify-between xl:rigth'>
						<img
							className='object-cover w-full xl:w-3/5'
							src='https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
						/>
						<div className='text-end'>
							<span className='small-title'>마이뷰 팀</span>
							<h3 className='middle-title'>
								나의 솔직한 영화 리뷰를 기록해요.
								{/* <br /> 따뜻한 동네를 만들어요. */}
							</h3>
							<p className='mt-3 mb-3 sm:pl-0  text-xl xl:pl-20 '>
								나의 솔직한 시선으로 영화에 대한 생각을 남기는 My View를
								이용해보세요. <br />
								오직 나의 리뷰에만 집중할 수 있어요. 더 이상 봤던 영화를 머리 속
								기억으로만 더듬지 마세요. 마이뷰에서 확인하세요.
							</p>
						</div>
					</div>
				</div>

				{/* section4 */}
				<div className='section4 mt-44 mb-44 '>
					<img
						className='object-cover w-full mt-14 mb-8 rounded-xl '
						src='https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
					/>
					<h2 className='mt-24 text-center leading-snug text-4xl font-extrabold'>
						이웃과 더 가까워지는 따뜻한 동네를 만들어요.
					</h2>
					<div className='flex justify-center'>
						<button type='button' className='mt-10 main-button'>
							프로젝트 보러가기
						</button>
					</div>
				</div>

				{/* section4 */}
				{/* <Slide /> */}
			</div>
		</>
	);
}

export default Project;
