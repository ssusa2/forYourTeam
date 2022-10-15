/** @format */
import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Github } from '../Icon/Icon';

function Footer({ PreviewInfo }) {
	const { route } = useRouter();
	const projectColor = useSelector(({ projectInfo }) => projectInfo);
	const { pathname } = useRouter();
	const { info, teamInfo } = projectColor;

	let projectMenu = '';
	if (route == '/project/[Intro]') {
		projectMenu = true;
	} else if (route == '/team/[Intro]') {
		projectMenu = true;
	} else {
		projectMenu = false;
	}

	let isProjectPage = pathname == '/project/[Intro]';
	let isTeamPage = pathname == '/team/[Intro]';

	return (
		<>
			<div
				className={
					pathname == '/introduce' || pathname == '/introduce/[Intro]'
						? 'relative mb-20'
						: ' relative '
				}
			>
				<div className='mt-52 px-14 pt-10  footer-border  w-full'>
					<div className='flex justify-between	max-w-6xl mx-auto'>
						{!projectMenu ? (
							PreviewInfo?.project_info.color ? (
								<Logo color={PreviewInfo?.project_info.color}>
									{PreviewInfo?.project_info.logo}
								</Logo>
							) : (
								<Logo>ForMyTeam</Logo>
							)
						) : (
							<Logo color={info?.project_info?.color}>
								{info?.project_info?.logo}
							</Logo>
						)}
						{!info?.project_info?.team_github ? (
							isProjectPage == isTeamPage && (
								<a
									target='https://github.com/ssusa2'
									href='https://github.com/ssusa2'
								>
									<Github />
								</a>
							)
						) : (
							<a
								target={`${info?.project_info?.team_github}`}
								href={`${info?.project_info?.team_github}`}
							>
								<Github />
							</a>
						)}
					</div>
				</div>
				<div className='flex justify-center pb-8'>
					<span className='text-gray-400 font-medium '>
						@ Made by{' '}
						<a className='font-bold hover:text-green-700' href='/home'>
							ForMyTeam
						</a>
					</span>
				</div>
			</div>
		</>
	);
}

// Link 만 쓰면 에러가 남
export default Footer;

const Logo = styled.h1`
	font-weight: 800;
	color: ${({ color }) => color || '#15803D'};
	cursor: pointer;
`;
