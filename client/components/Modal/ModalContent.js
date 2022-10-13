/** @format */
import slogun from '../../image/slogun.png';
import coreOne from '../../image/coreOne.png';
import TeamMember from '../../image/teamMem.png';

import Image from 'next/image';

export const First = () => {
	return (
		<>
			{' '}
			<h2 className='middle-title'>프로젝트 등록이 처음이신가요? 🤚</h2>
			<div className='b-divide'></div>
			<p className='font-medium text-xl'>
				ForMyTeam은
				<br />{' '}
				<strong className='text-green-700 underline'>
					프로젝트 소개{' '}
				</strong>, <strong className='text-green-700 underline'>팀 소개</strong>{' '}
				를
				<br />할 수 있는 페이지 양식을 지원합니다.
			</p>
		</>
	);
};

export const Second = () => {
	return (
		<>
			{' '}
			<h2 className='middle-title'>프로젝트 소개 페이지</h2>
			<p className='font-medium text-xl'>
				<strong className='text-green-700 underline'>주요 기능 소개 </strong>,{' '}
				<strong className='text-green-700 underline'>
					프로젝트 슬로건, 이미지, 설명
				</strong>{' '}
				에
				<br />
				대한 설명을 할 수 있는 페이지 양식을 지원합니다.
			</p>
			<div className='b-divide mt-3 p-0'></div>
			<div className='flex'>
				<div className='rounded-full w-2/3 h-1/2'>
					<Image className='object-fit' src={slogun} />
				</div>
				<p className='ml-3'>프로젝트 슬로건 및 이미지</p>
			</div>
			<div className='flex mt-3'>
				<div className='rounded-full w-2/3 h-1/2'>
					<Image className='w-[200px] h-[200px]' src={coreOne} />
				</div>
				<p className='ml-3'>주요 기능</p>
			</div>
		</>
	);
};

export const Thrid = () => {
	return (
		<>
			{' '}
			<h2 className='middle-title'>팀 소개 페이지</h2>
			<p className='font-medium text-xl'>
				<strong className='text-green-700 underline'>팀 문화 </strong>,{' '}
				<strong className='text-green-700 underline'>팀원</strong>에
				<br />
				대한 소개를 할 수 있는 페이지 양식을 지원합니다.
			</p>
			<div className='b-divide mt-3 p-0'></div>
			<div className='flex'>
				<div className='rounded-full w-2/3'>
					<Image className='object-fit' src={TeamMember} />
				</div>
				<p className='ml-3'>팀원 소개</p>
			</div>
			<div className='flex mt-3'>
				<div className='rounded-full w-2/3'>
					<Image className='w-fit' src={coreOne} />
				</div>
				<p className='ml-3'>주요 기능</p>
			</div>
		</>
	);
};
