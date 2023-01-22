import { FC, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { changeMove } from '../store/slice/usersSlice';
import { subtractTime } from '../store/slice/timerSlice';
import Icon from './ui/Icon';
import Loader from './ui/Loader/Loader';

export const Timer: FC = () => {
	const min = useAppSelector((state) => state.timer.m);
	const sec = useAppSelector((state) => state.timer.s);
	const users = useAppSelector((state) => state.users.users);
	const loadTime = useAppSelector((state) => state.timer.loading);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// fetchTime();
		const timer = setInterval(() => {
			dispatch(subtractTime());
			if (min == 0 && sec == 0) {
				if (users) {
					dispatch(changeMove());
				}
			}
		}, 1000);
		return () => clearInterval(timer);
	});

	return (
		<div className="border border-danger border-opacity-50 bg-danger py-2  bg-opacity-10 text-danger rounded d-flex justify-content-center">
			{loadTime ? (
				<Loader />
			) : (
				<>
					<div className="pl-4 text-center  ">{`${
						(min && min < 10) || min == 0 ? `0${min}` : min
					} : ${(sec && sec < 10) || sec == 0 ? `0${sec}` : sec}`}</div>
					<div className="ms-3">
						<Icon name="hourglass" />
					</div>
				</>
			)}
		</div>
	);
};
