/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = { Saving: false, ShallowSaving: false }; // 초기 상태 정의

const Saving = createSlice({
	name: 'Saving',
	initialState,
	reducers: {
		setSaving: (state, actions) => {
			state.Saving = actions.payload;
		},
		setShallowSaving: (state, actions) => {
			state.ShallowSaving = actions.payload;
		},
	},
});

export const { setSaving, setShallowSaving } = Saving.actions; // 액션 생성함수
export default Saving.reducer; // 리듀서
