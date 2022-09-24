/** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	color: '',
	email: '',
	favicon: '',
	logo: '',
	logo_image: '',
	team_github: '',
	url: '',
};

const projectInfo = createSlice({
	name: 'projectInfo',
	initialState,
	reducers: {
		setColor: (state, actions) => {
			console.log(actions);
			state.color = actions.payload;
		},
		// setUserId: (state, actions) => {
		// 	console.log(actions);
		// 	state.uid = actions.payload;
		// },
	},
});

export const { setColor } = projectInfo.actions; // 액션 생성함수
export default projectInfo.reducer; // 리듀서
