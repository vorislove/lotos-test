import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { userAPI } from '../services/users.service';
import messageSlice from './slice/messageSlice';
import timerSlice from './slice/timerSlice';
import usersSlice from './slice/usersSlice';

const rootReducer = combineReducers({
	[userAPI.reducerPath]: userAPI.reducer,
	timer: timerSlice,
	users: usersSlice,
	message: messageSlice
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (gDM) => gDM().concat(userAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
