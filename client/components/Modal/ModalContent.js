/** @format */
import slogun from '../../image/slogun.png';
import coreOne from '../../image/coreOne.png';
import TeamMember from '../../image/teamMem.png';
import Team from '../../image/ModalTeam.png';
import Info from '../../image/Info.png';
import Image from 'next/image';

export const First = () => {
	return (
		<>
			{' '}
			<div className='relative'>
				<div className='flex items-end'>
					<h2 className='middle-title leading-none'>
						프로젝트 등록이 처음이신가요? 🤚
					</h2>
					<strong className=' ml-3 text-green-700 underline'></strong>
				</div>
				<p className='text-base font-medium	'>
					ForMyTeam의 주요 기능에 대해 소개해드려요.
				</p>
				<div className='b-divide mt-3 mb-3 p-0'></div>
				<p className='font-medium text-lg text-center'>
					ForMyTeam은
					<br />
					<strong className=' ml-3 text-green-700 font-semibold'>
						프로젝트 소개 페이지
					</strong>
					,
					<strong className='text-green-700 font-semibold'>
						팀 소개 페이지
					</strong>
					<br /> 총 2 개의 양식을 지원합니다.
				</p>
				<div className='rounded-full w-full mt-10'>
					<Image className='object-fit' src={Info} />
				</div>
				{/* <span className='absolute top-0 right-0'>X</span> */}
			</div>
		</>
	);
};

export const Project = () => {
	return (
		<>
			{' '}
			<div className='flex items-end'>
				<h2 className='middle-title leading-none'>프로젝트 소개</h2>
				<strong className=' ml-3 text-green-700 underline'>
					슬로건, 이미지
				</strong>
			</div>
			<p className='text-base font-medium	'>
				에 대한 설명을 할 수 있는 페이지 양식을 지원합니다.
			</p>
			<div className='b-divide mt-3 mb-3 p-0'></div>
			<div className=''>
				<div className='rounded-full w-full'>
					<Image className='object-fit' src={slogun} />
				</div>
			</div>
		</>
	);
};

export const Core = () => {
	return (
		<>
			{' '}
			<div className='flex items-end'>
				<h2 className='middle-title leading-none'>주요기능 소개</h2>
				<strong className=' ml-3 text-green-700 underline'>주요기능</strong>
			</div>
			<p className='text-base font-medium	'>
				에 대한 설명을 할 수 있는 페이지 양식을 지원합니다.
			</p>
			<div className='b-divide mt-3 mb-3 p-0'></div>
			<div className=''>
				<div className='rounded-full w-full'>
					<Image className='object-fit' src={coreOne} />
				</div>
			</div>
		</>
	);
};

export const Member = () => {
	return (
		<>
			<div className='flex items-end'>
				<h2 className='middle-title leading-none'>팀원 소개</h2>
				<strong className=' ml-3 text-green-700 underline'>
					팀원, 깃허브{' '}
				</strong>
			</div>
			<p className='font-medium text-base'>
				에 대한 소개를 할 수 있는 양식을 지원합니다.
			</p>

			<div className='b-divide mt-3 mb-3 p-0'></div>
			<div className=''>
				<div className='rounded-full w-full'>
					<Image className='object-fit' src={TeamMember} />
				</div>
			</div>
		</>
	);
};
export const Teams = () => {
	return (
		<>
			<div className='flex items-end'>
				<h2 className='middle-title leading-none'>팀 소개</h2>
				<strong className=' ml-3 text-green-700 underline'>
					슬로건, 문화, Github
				</strong>
			</div>
			<p className='font-medium text-base'>
				에 대한 소개를 할 수 있는 양식을 지원합니다.
			</p>

			<div className='b-divide mt-3 mb-3 p-0'></div>
			<div className='pt-16'>
				<div className='rounded-full w-full my-auto'>
					<Image className='object-fit' src={Team} />
				</div>
			</div>
		</>
	);
};
