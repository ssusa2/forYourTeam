/** @format */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import {
	setColor,
	setLogo,
	getState,
} from '../../src/store/modules/projectInfo';
import styled from 'styled-components';
import { Github } from '../Icon/Icon';

function Footer() {
	const { route } = useRouter();
	const router = useRouter();
	const dispatch = useDispatch();
	const [projectObj, setProjectObj] = useState();
	const projectColor = useSelector(({ projectInfo }) => projectInfo);
	// const [color, setColor] = useState();
	// const [logo, setLogo] = useState();

	const { color, logo } = projectColor;

	console.log(logo);

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
					<div className='flex justify-between	'>
						{!projectMenu ? (
							<Logo>ForMyTeam</Logo>
						) : (
							<Logo color={color}>{logo}</Logo>
						)}
						<a href='#'>
							<Github />
						</a>
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
