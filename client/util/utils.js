/** @format */

// \n을 <br/>로 바꿔주는
export const replaceBrTag = (str) => {
	if (str === undefined || str === null) return { __html: '' };
	str = str.replace(/\r\n/gi, '<br>');
	str = str.replace(/\\n/gi, '<br>');
	str = str.replace(/\n/gi, '<br>');
	return { __html: str };
};

// 라인 수 제한
export const checkLines = (e, line) => {
	let str = e.target.value;
	let str_arr = str.split('\n');
	let row = str_arr.length;
	if (row > line) {
		alert(`${line}줄 이상 입력할 수 없습니다.`);

		let lastChar = str.slice(0, -1);
		console.log('lastChar', lastChar);
		e.target.value = lastChar;
	}
};

// 폼 입력
export const handleFormChange = async (
	index,
	event,
	state,
	setState,
	folder
) => {
	let data = [...state];
	try {
		let fileUrl = '';
		if (event.target.type == 'file') {
			if (event.target.value != '') {
				const fileRef = ref(
					storage,
					`${userID.uid}/${projectName}/${folder}/${index}`
				);
				const uploadTask = await uploadBytes(
					fileRef,
					event.target.files[0]
				).then((snapshot) => {});

				fileUrl = await getDownloadURL(fileRef);
			}
			data[index][event.target.name] = fileUrl;
		} else {
			data[index][event.target.name] = event.target.value;
		}
		setState(data);
	} catch (err) {
		console.error(err);
	}
};
