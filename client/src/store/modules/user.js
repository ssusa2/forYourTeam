/** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	displayName: '',
	uid: '',
};

const userInfo = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		setUserName: (state, actions) => {
			// console.log(actions);
			state.displayName = actions.payload;
		},
		setUserId: (state, actions) => {
			// console.log(actions);
			state.uid = actions.payload;
		},
	},
});

export const { setUserName, setUserId } = userInfo.actions; // 액션 생성함수
export default userInfo.reducer; // 리듀서
