/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = { Lock: false }; // 초기 상태 정의

const Lock = createSlice({
	name: 'Lock',
	initialState,
	reducers: {
		setLock: (state, actions) => {
			state.Lock = actions.payload;
		},
	},
});

export const { setLock } = Lock.actions; // 액션 생성함수
export default Lock.reducer; // 리듀서
