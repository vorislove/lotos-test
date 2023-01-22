import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITimer {
	m: number | null;
	s: number | null;
	loading: boolean;
}

const timer: ITimer = {
	m: 0,
	s: 0,
	loading: true
};

const timerSlice = createSlice({
	name: 'Timer',
	initialState: timer,
	reducers: {
		initTime(state, action) {
			state.m = Math.floor(action.payload / 1000 / 60) % 60;
			state.s = Math.floor(action.payload / 1000) % 60;
		},
		subtractTime(state) {
			if (state.m === 0 && state.s === 0) {
				state.m = 1;
				state.s = 59;
			} else if (state.m && state.s == 0) {
				state.m = state.m - 1;
				state.s = 59;
			} else if (state.s) {
				state.s = state.s - 1;
			}
		},
		loadingTime(state, action) {
			state.loading = action.payload;
		}
	}
});

export const { initTime, subtractTime, loadingTime } = timerSlice.actions;
export default timerSlice.reducer;
