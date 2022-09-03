/** @format */

function Members({ el }) {
	console.log(el.length);
	const OneMember = el.length == 1;
	return (
		<>
			<div className=''>
				<div className={OneMember ? 'flex relative' : ''}>
					<img
						className=''
						src='https://team.daangn.com/static/6b6f5c645b84541bd97f2ab51bf29df1/66698/58acfc5c-9d91-4c4d-86b9-60af8c94bc16_photo_11.avif'
					/>

					<div className={OneMember ? 'pl-10 pt-2' : 'base-m'}>
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
								OneMember ? 'absolute bottom-0 right-0' : 'mt-3 mb-10 team-role'
							}
						>
							<strong>{el}</strong>
							<span> 역할</span>
							<span>깃허브</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Members;
