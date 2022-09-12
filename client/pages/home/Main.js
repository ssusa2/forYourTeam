/** @format */

function Main() {
	const features = [
		{
			name: ' 프로젝트 소개',
			description: `그 동안 포트폴리오와 이력서에만 담겨있던 내용을 내 사이트에! 
			My Team으로 여러분의 프로젝트를 소개해보세요`,
		},
		{
			name: '팀원 소개',
			description:
				'고생한 우리 팀원들의 정보를 이곳에! 팀원의 Github 주소와 역할을 소개해보세요.',
		},
	];

	return (
		<div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-7xl lg:grid-cols-2'>
			<div className='flex flex-col '>
				<div>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						<span className='main-color'>ForMyTeam</span>으로
						<br /> 프로젝트를 소개해보세요.
					</h2>
					<p className=' text-gray-500'>
						이제는 프로젝트에 팀 사이트를 간편하게 추가하세요. <br />
						여러분의 프로젝트 사이트에 링크만 걸면 바로 연동!
					</p>
				</div>

				<dl className=' xl:mt-52 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
					{features.map((feature) => (
						<div key={feature.name} className=' pt-4 '>
							<dt className=' text-gray-900 font-bold	'>{feature.name}</dt>
							<dd className='mt-2 text-sm text-gray-500'>
								{feature.description}
							</dd>
						</div>
					))}
				</dl>
			</div>
			<div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
				<img
					src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
					alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
					className='h-full object-cover rounded-lg bg-gray-100'
				/>
				<img
					src='https://images.unsplash.com/photo-1577100078279-b3445eae827c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
					alt='Top down view of walnut card tray with embedded magnets and card groove.'
					className='h-full object-cover rounded-lg bg-gray-100'
				/>
				<img
					src='https://images.unsplash.com/photo-1617264862542-dce0f0933f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
					alt='Side of walnut card tray with card groove and recessed card area.'
					className='h-full object-cover rounded-lg bg-gray-100'
				/>
				<img
					src='https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
					alt='Walnut card tray filled with cards and card angled in dedicated groove.'
					className='h-full object-cover rounded-lg bg-gray-100'
				/>
			</div>
		</div>
	);
}

export default Main;
