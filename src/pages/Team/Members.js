/** @format */

import { Link } from 'react-router-dom';
import { ReactComponent as Github } from '../../images/github.svg';
import { ReactComponent as Blog } from '../../images/house-solid.svg';

function Members({ name }) {
	const OneMember = name?.length == 1;

	return (
		<>
			<div>
				<div className={OneMember ? 'xl:flex xl:relative' : ''}>
					<img
						className={OneMember ? 'w-full xl:w-full' : 'w-full'}
						src='https://team.daangn.com/static/6b6f5c645b84541bd97f2ab51bf29df1/66698/58acfc5c-9d91-4c4d-86b9-60af8c94bc16_photo_11.avif'
					/>

					<div className={OneMember ? 'xl:pl-10 pt-2' : 'base-m'}>
						<p className='w-full'>
							건설적인 비판과 피드백을 줄 수 있는 동료와 일하고 있어요. 모두가
							자기가 제일 잘하는 분야에서 권한과 책임을 가진 리더에요. 하나의
							서비스를 만들기 위해, 형식보단 일에 집중할 수 있는 환경 속에서
							빠르게 성장하고 있어요. 건설적인 비판과 피드백을 줄 수 있는 동료와
							일하고 있어요. 모두가 자기가 제일 잘하는 분야에서 권한과 책임을
							가진 리더에요. 하나의 서비스를 만들기 위해, 형식보단 일에 집중할
							수 있는 환경 속에서 빠르게 성장하고 있어요. 건설적인 비판과
							피드백을 줄 수 있는 동료와 일하고 있어요. 모두가 자기가 제일
							잘하는 분야에서 권한과 책임을 가진 리더에요. 하나의 서비스를
							만들기 위해, 형식보단 일에 집중할 수 있는 환경 속에서 빠르게
							성장하고 있어요.
						</p>
						<div
							className={
								OneMember
									? 'xl:absolute bottom-0 right-0 flex justify-between items-end'
									: 'mt-3 mb-10 team-role flex justify-between items-end'
							}
						>
							<div className={OneMember ? 'mr-4' : ''}>
								<strong>{name}</strong>
								<span> 프론트엔드 개발자</span>
							</div>
							<div className='flex items-center'>
								<Link to='#'>
									<Github className='hover-icon ' />
								</Link>
								<Link to='#' className='ml-2'>
									<Blog className='hover-icon ' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Members;
