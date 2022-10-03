/** @format */

export const handleClick = () => {
	if (validName) {
		if (typeof window !== 'undefined') {
			alert('프로젝트 이름을 입력해주세요.');
		}
		// alert('프로젝트 이름을 입력해주세요.');
		inutRef.current?.[0]?.focus();
		setInfo((prev) => {
			return {
				...prev,
				project_info: {
					...info.project_info,
					name: '',
				},
			};
		});
	} else if (validLogo) {
		if (typeof window !== 'undefined') {
			alert('프로젝트 로고를 입력해주세요.');
		}
		inutRef.current?.[1]?.focus();
		setInfo((prev) => {
			return {
				...prev,
				project_info: {
					...info.project_info,
					logo: '',
				},
			};
		});
	} else if (validGenre) {
		if (typeof window !== 'undefined') {
			alert('프로젝트 장르를 입력해주세요.');
		}
		inutRef.current?.[2]?.focus();
		setInfo((prev) => {
			return {
				...prev,
				project_info: {
					...info.project_info,
					genre: '',
				},
			};
		});
	} else if (validColor) {
		if (typeof window !== 'undefined') {
			alert('프로젝트 색상을 선택해주세요.');
		}
		inutRef.current?.[3]?.focus();
		setInfo((prev) => {
			return {
				...prev,
				project_info: {
					...info.project_info,
					color: '',
				},
			};
		});
	} else if (!validEmail) {
		if (typeof window !== 'undefined') {
			alert('유효하지 않은 email 입니다.');
		}
		inutRef.current?.[4]?.focus();
		setInfo((prev) => {
			return {
				...prev,
				project_info: {
					...info.project_info,
					email: '',
				},
			};
		});
	}
};
