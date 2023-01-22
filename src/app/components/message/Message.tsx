import { FC } from 'react';
// import './Message.scss';
import { useAppDispatch } from '../../hooks/hooks';
import { IMessage, removeMessage } from '../../store/slice/messageSlice';

export const Message: FC<IMessage> = ({ message, id }) => {
	const dispatch = useAppDispatch();

	const closeHandler = () => {
		dispatch(removeMessage(id));
	};

	return (
		<>
			<div
				className="toast align-items-center rounded show bg-white"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div className="d-flex">
					<div className="toast-body">{message}</div>
					<button
						type="button"
						className="btn-close me-2 m-auto"
						data-bs-dismiss="toast"
						aria-label="Close"
						onClick={closeHandler}
					></button>
				</div>
			</div>
		</>
	);
};
