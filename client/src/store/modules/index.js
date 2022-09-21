/** @format */

import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import counter from './counter';
import user from './user';

const reducer = (state, action) => {
	if (action.type === HYDRATE) {
		return {
			...state,
			...action.payload,
		};
	}
	return combineReducers({
		counter,
		user,
		// 여기에 추가
	})(state, action);
};

export default reducer;
