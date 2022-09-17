/** @format */

import { useEffect } from 'react';
import fetcher from '../fetcher';
import { useRouter } from 'next/router';

const useSave = (project, team) => {
	console.log(project);

	const formData = new FormData();

	let memberArr = [];
	for (let i = 0; i < team.member?.length; i++) {
		let person = {
			name: team.member[i].name,
			role: team.member[i].role,
			description: team.member[i].description,
			github: team.member[i].github,
			image: team.member[i].image,
		};
		memberArr.push(person);
	}
	formData.append('member', JSON.stringify(memberArr));

	// const formData = new FormData();

	// project info
	formData.append('logo', project.project_info.logo);
	formData.append('logo_image', project.project_info.logo_image);
	formData.append('favicon', project.project_info.favicon);
	formData.append('url', project.project_info.url);
	formData.append('genre', project.project_info.genre);
	formData.append('email', project.project_info.email);
	formData.append('color', project.project_info.color);
	formData.append('team_github', project.project_info.team_github);
	// project page
	formData.append('slogun', project.project_page.slogun);
	formData.append('image', project.project_page.image);
	formData.append('description', project.project_page.description);
	// 안에 배열

	let CoreArr = [];
	for (let i = 0; i < project.project_page.core?.length; i++) {
		console.log('i');
		let service = {
			subheading: project.project_page.core[i].subheading,
			title: project.project_page.core[i].title,
			description: project.project_page.core[i].description,
			image: project.project_page.core[i].image,
		};
		CoreArr.push(service);
	}
	formData.append('core', JSON.stringify(CoreArr));

	// team page
	formData.append('sslogun', team.intro.slogun);
	formData.append('culture', team.intro.culture);
	formData.append('image', team.intro.image);
	// 안에 배열

	// for (let i = 0; i < team.team_member?.length; i++) {
	// 	formData.append('team_member', team.team_member[i]);
	// }

	// team.member?.map((team) => {
	// 	let mem = {
	// 		name: team.name,
	// 		role: team.role,
	// 		description: team.description,
	// 		github: team.github,
	// 		image: team.image,
	// 	};
	// 	console.log('mem', mem);

	// 	formData.append('member', mem);
	// });
	//congsong.tistory.com/41

	// for (let key of formData.keys()) {
	// 	console.log(key, ':', formData.get(key));
	// }

	fetcher('post', '/introduce', {
		formData,
	});
	console.log('발사');
};

export default useSave;
