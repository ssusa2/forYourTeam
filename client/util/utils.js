/** @format */

// \n을 <br/>로 바꿔주는
export const replaceBrTag = (str) => {
	if (str === undefined || str === null) return { __html: '' };
	str = str.replace(/\r\n/gi, '<br>');
	str = str.replace(/\\n/gi, '<br>');
	str = str.replace(/\n/gi, '<br>');
	return { __html: str };
};

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
