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
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title || 'ForMyTeam'} />
			<meta property='og:url' content={url || 'https://formyteam.com'} />
			<meta property='og:image' content={image} />
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
