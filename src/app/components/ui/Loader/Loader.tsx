import { FC } from 'react';
import Icon from '../Icon';
import './Loader.css';

interface ILoader {
	message?: string;
}

const Loader: FC<ILoader> = ({ message = '' }) => {
	return (
		<div className="wrapper">
			<div className="loader">
				<Icon name="loader" />
			</div>
			{message ? <span className="message">{message}</span> : null}
		</div>
	);
};

export default Loader;
