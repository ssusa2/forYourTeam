/** @format */

import Head from 'next/head';

const HeadMeta = ({ title, description, url, image, author, favicon }) => {
	return (
		<Head>
			<title>{title || 'ForMyTeam'}</title>
			<meta
				name='description'
				content={
					description ||
					'프로젝트와 팀을 소개하는 프로젝트 양식 플랫폼 서비스 ForMyTeam'
				}
			/>
			<meta property='og:site_name' content='ForMyTeam' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title || 'ForMyTeam'} />
			<meta property='og:url' content='https://formyteam.com' />
			<meta
				property='og:image'
				content={
					image ||
					'https://firebasestorage.googleapis.com/v0/b/formyteam-a5c8b.appspot.com/o/T24aDu3rveQrY1t7S7uN1aeLjy02%2Fundefined%2F8818c280-1825-4c2d-8860-9f740c9df16b?alt=media&token=bf862027-a32e-4124-8ca4-829dd42f58a4'
				}
			/>
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' />
			<meta property='og:article:author' content={author || 'ForMyTeam'} />
			<link
				rel='shortcut icon'
				href={favicon || '/favicon.ico'}
				type='image/x-icon'
			/>
		</Head>
	);
};

export default HeadMeta;
