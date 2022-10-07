/** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {};

const PreviewTest = createSlice({
	name: 'PreviewTest',
	initialState,
	reducers: {
		setColor: (state, actions) => {
			state.color = actions.payload;
		},
	},
});

export const { setColor } = PreviewTest.actions; // 액션 생성함수
export default PreviewTest.reducer; // 리듀서
