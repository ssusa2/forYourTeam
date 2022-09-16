/** @format */

import { useEffect } from 'react';
import fetcher from '../fetcher';

const useSave = (project, team) => {
	// const { pathname } = useLocation();
	// const token = localStorage.getItem('access_token');
	// const [button, setButton] = useRecoilState(buttonState);
	// const movie = useRecoilValue(movieState);
	// const resetMovie = useResetRecoilState(movieState);

	// if (!button.isSaving) return;
	// if (review.rating === 0) {
	// 	alert('평점을 매겨주세요');
	// 	setButton({ ...button, isSaving: false });

	// 	return;
	// }

	const formData = new FormData();

	// for (let key in project) {
	// 	// data 객체 안에 있는 모든 요소를 data 객체의 key value 형태로 적재
	// 	formData.append(key, project[key]);
	// }
	// for (let key in team) {
	// 	// data 객체 안에 있는 모든 요소를 data 객체의 key value 형태로 적재
	// 	formData.append(key, team[key]);
	// }
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
	for (let i = 0; i < project.project_page.core?.length; i++) {
		formData.append('core', project.project_page.core[i]);
	}

	// team page
	formData.append('sslogun', team.intro.slogun);
	formData.append('culture', team.intro.culture);
	formData.append('image', team.intro.image);
	// 안에 배열

	// for (let i = 0; i < team.team_member?.length; i++) {
	// 	formData.append('team_member', team.team_member[i]);
	// }

	team.member?.map((team) => {
		let mem = {
			name: team.name,
			role: team.role,
			description: team.description,
			github: team.github,
			image: team.image,
		};
		console.log('mem', mem);

		formData.append('member', mem.name);
	});
	//congsong.tistory.com/41

	for (let key of formData.keys()) {
		console.log(key, ':', formData.get(key));
	}

	// 지금 안나오는거가 프로젝트 페이지에 코어랑 팀 페이지 멤버

	// 	if (review.review_id) {
	// 		// 리뷰 아이디가 있으므로 이미 작성된 리뷰를 수정하는 중
	// 		formData.append('review_id', review.review_id);

	// 		fetcher
	// 			.put(API.review, formData, {
	// 				headers: { 'Content-Type': 'multipart/form-data' },
	// 			})
	// 			.then((res) => res.data)
	// 			.then((result) => {
	// 				if (result.message === 'SUCCESS') {
	// 					setButton({ ...button, isSaving: false });
	// 					if (!pathname.includes('movie')) resetMovie();
	// 					window.location.replace(pathname);
	// 				}
	// 			});
	// 	} else {
	// 		// 리뷰 아이디가 없으므로 새로운 리뷰 저장하는 중

	// 		fetcher
	// 			.post(API.review, formData, {
	// 				method: 'POST',
	// 				headers: {
	// 					Authorization: token,
	// 				},
	// 			})
	// 			.then((res) => res.data)
	// 			.then((result) => {
	// 				if (result.message === 'SUCCESS') {
	// 					setButton({ ...button, isSaving: false });
	// 					if (!pathname.includes('movie')) resetMovie();
	// 					window.location.replace(pathname);
	// 				}
	// 			});
	// 	}
};

export default useSave;
