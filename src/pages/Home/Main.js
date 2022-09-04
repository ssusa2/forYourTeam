/** @format */

function Main() {
	const features = [
		{
			name: ' 프로젝트 소개',
			description:
				'그 동안 포트폴리오와 이력서에만 담겨있던 내용을 내 사이트에! My Team으로 여러분의 프로젝트를 소개해보세요',
		},
		{
			name: '팀원 소개',
			description: '고생한 우리 팀원들의 정보를 이곳에!',
		},
	];

	return (
		<div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-7xl lg:grid-cols-2'>
			<div className='flex flex-col '>
				<div>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						<span className='text-green-700'>ForMyTeam</span>으로
						<br /> 프로젝트를 소개해보세요.
					</h2>
					<p className=' text-gray-500'>
						이제는 프로젝트에 팀 사이트를 간편하게 추가하세요. <br />
						여러분의 프로젝트 사이트에 링크만 걸면 바로 연동!
					</p>
				</div>

				<dl className=' xl:mt-52 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
					{features.map((feature) => (
						<div key={feature.name} className='border-t border-gray-200 pt-4 '>
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
					src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg'
					alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
					className='rounded-lg bg-gray-100'
				/>
				<img
					src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg'
					alt='Top down view of walnut card tray with embedded magnets and card groove.'
					className='rounded-lg bg-gray-100'
				/>
				<img
					src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg'
					alt='Side of walnut card tray with card groove and recessed card area.'
					className='rounded-lg bg-gray-100'
				/>
				<img
					src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'
					alt='Walnut card tray filled with cards and card angled in dedicated groove.'
					className='rounded-lg bg-gray-100'
				/>
			</div>
		</div>
	);
}

export default Main;
