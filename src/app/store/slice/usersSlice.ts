import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/types';

interface IIS {
	users: IUser[];
	loading: boolean;
}

const initialState: IIS = {
	users: [],
	loading: true
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		initUsers(state, action: PayloadAction<IUser[]>) {
			action.payload.forEach((user) => {
				state.users.push(user);
			});
		},
		changeMove(state) {
			const foundIndex = state.users.findIndex((user) => user.move === true);
			state.users[foundIndex].move = false;
			if (state.users.length - 1 === foundIndex) {
				state.users[0].move = true;
			} else {
				state.users[foundIndex + 1].move = true;
			}
		},
		loadingUsers(state, action) {
			state.loading = action.payload;
		}
	}
});

export const { initUsers, changeMove, loadingUsers } = usersSlice.actions;
export default usersSlice.reducer;
