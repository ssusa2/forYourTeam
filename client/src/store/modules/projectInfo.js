/** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {};

const projectInfo = createSlice({
	name: 'projectInfo',
	initialState,
	reducers: {
		setColor: (state, actions) => {
			// console.log('setColor', actions);
			state.color = actions.payload;
		},
		setLogo: (state, actions) => {
			// console.log('setLogo', actions);
			state.logo = actions.payload;
		},

		setAll: (state, actions) => {
			return actions.payload;
			// state = { ...state, ...actions.payload };
		},
	},
});

export const { setColor, setLogo, setAll } = projectInfo.actions; // 액션 생성함수
export default projectInfo.reducer; // 리듀서
