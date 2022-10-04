/** @format */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Github } from '../Icon/Icon';

function Footer({ Preview }) {
	const { route } = useRouter();
	const projectColor = useSelector(({ projectInfo }) => projectInfo);

	const { color, logo } = projectColor;

	let projectMenu = '';
	if (route == '/project/[Intro]') {
		projectMenu = true;
	} else if (route == '/team/[Intro]') {
		projectMenu = true;
	} else {
		projectMenu = false;
	}

	return (
		<>
			<div className='relative '>
				<div className='mt-52 px-14 pt-10  footer-border  w-full'>
					<div className='flex justify-between	max-w-6xl mx-auto'>
						{!projectMenu ? (
							Preview?.info?.project_info.color ? (
								<Logo color={Preview?.info?.project_info.color}>
									{Preview?.info?.project_info.logo}
								</Logo>
							) : (
								<Logo>ForMyTeam</Logo>
							)
						) : (
							<Logo color={color}>{logo}</Logo>
						)}
						{!projectColor?.team_github ? (
							<a
								target={`${projectColor?.team_github}`}
								href={`${projectColor?.team_github}`}
							>
								<Github />
							</a>
						) : (
							<a
								target='https://github.com/ssusa2'
								href='https://github.com/ssusa2'
							>
								<Github />
							</a>
						)}
					</div>
				</div>
				<div className='flex justify-center pb-8'>
					<span className='text-gray-400 '>
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
