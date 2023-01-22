import { useAppSelector } from '../../hooks/hooks';
import { Message } from './Message';

const MessageContainer = () => {
	const toasts = useAppSelector((state) => state.message.toast);

	return (
		<div className="toast-container position-fixed top-0 start-50 p-3 translate-middle-x">
			{toasts.map((toast) => (
				<Message message={toast.message} key={toast.id} id={toast.id} />
			))}
		</div>
	);
};

export default MessageContainer;
