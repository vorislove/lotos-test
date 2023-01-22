import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IIS {
	toast: IMessage[];
}

export interface IMessage {
	message: string;
	id: string;
}

const initialState: IIS = {
	toast: []
};

const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		addMessage(state, action: PayloadAction<IMessage>) {
			state.toast.push(action.payload);
		},
		removeMessage(state, action) {
			state.toast.filter((e) => e.id != action.payload);
		}
	}
});

export const { addMessage, removeMessage } = messageSlice.actions;
export default messageSlice.reducer;
