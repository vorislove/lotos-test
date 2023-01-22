import { addMessage, removeMessage } from '../store/slice/messageSlice';
import { useAppDispatch } from './hooks';

export function useToast(delay: number = 5000) {
	const dispatch = useAppDispatch();

	function toast(message: string) {
		const id = Math.random().toString(36).substring(2, 9);
		dispatch(addMessage({ message, id }));

		setTimeout(() => {
			dispatch(removeMessage(id));
		}, delay);
	}

	return toast;
}
