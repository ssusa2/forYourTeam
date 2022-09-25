/** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	color: '#15803D',
	email: '',
	favicon: '',
	logo: 'ForMyTeam',
	logo_image: '',
	team_github: '',
	url: '',
};

const projectInfo = createSlice({
	name: 'projectInfo',
	initialState,
	reducers: {
		setColor: (state, actions) => {
			console.log('setColor', actions);
			state.color = actions.payload;
		},
		setLogo: (state, actions) => {
			console.log('setLogo', actions);
			state.logo = actions.payload;
		},
		getState: (state) => {
			console.log('getState', state);
		},
	},
});

export const { setColor, setLogo, getState } = projectInfo.actions; // 액션 생성함수
export default projectInfo.reducer; // 리듀서
