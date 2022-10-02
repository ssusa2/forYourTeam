/** @format */
import Image from 'next/image';
import project1 from '../../image/project1.png';
import project2 from '../../image/project2.png';
import project3 from '../../image/project3.png';

function Core({ core }) {
	console.log(core);
	let coreLayout = {};
	// 오른쪽 레이아웃
	function evenCore(i) {
		return (
			<>
				{core?.[i] && (
					<div className=' section2 mt-44 '>
						<div className=' xl:flex justify-between left'>
							<div className='w-full	'>
								<span className='small-title'>{core?.[i].title}</span>
								<h3 className='middle-title'>{core?.[i].subheading}</h3>
								<p className=' mt-3 mb-3 sm:pr-0  text-xl xl:pr-20'>
									{core?.[i].description}
								</p>
							</div>
							{core?.[i].title !== '' && (
								<Image
									placeholder='blur'
									className='object-cover  w-full xl:w-3/5'
									src={core?.[i].image || project2}
								/>
							)}
						</div>
					</div>
				)}
			</>
		);
	}
	// 왼쪽 몰림
	function oddCore(i) {
		return (
			<>
				{core?.[i] && (
					<div className='section3 mt-44 '>
						<div className='flex flex-col-reverse xl:flex xl:flex-row	 xl:justify-between xl:rigth'>
							<Image
								placeholder='blur'
								className='object-cover w-full xl:w-3/5'
								src={core?.[i].image || project3}
							/>
							<div className='text-end'>
								<span className='small-title'>{core?.[i].title}</span>
								<h3 className='middle-title'>{core?.[i].subheading}</h3>
								<p className='mt-3 mb-3 sm:pl-0  text-xl xl:pl-20 '>
									{core?.[i].description}
								</p>
							</div>
						</div>
					</div>
				)}
			</>
		);
	}
	for (let i = 0; i < core?.length; i++) {
		if (i == 0) {
			coreLayout = evenCore(i);
		}
	}
	console.log('coreLayout', evenCore(0));
	return <div dangerouslySetInnerHTML={{ __html: evenCore(0) }}></div>;
}

export default Core;
