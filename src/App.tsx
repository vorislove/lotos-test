import { FC, useEffect } from 'react';
import { Header } from './app/components/Header';
import { Timer } from './app/components/Timer';
import { ApiService } from './app/services/api.service';
import { Table } from './app/components/Table';
import { useAppDispatch, useAppSelector } from './app/hooks/hooks';
import { initTime, loadingTime } from './app/store/slice/timerSlice';
import { initUsers, loadingUsers } from './app/store/slice/usersSlice';
import MessageContainer from './app/components/message/MessageContainer';
import { useToast } from './app/hooks/useToast';

const App: FC = () => {
	const http = new ApiService();
	const dispatch = useAppDispatch();
	const users = useAppSelector((state) => state.users.users);
	const loadUsers = useAppSelector((state) => state.users.loading);
	const toast = useToast();

	const fetchLeftTime = async () => {
		await http
			.getTimer()
			.then((res) => {
				dispatch(initTime(res.timeLeft));
				dispatch(loadingTime(false));
			})
			.catch((e) => {
				dispatch(loadingTime(false));
				toast('Ошибка загрузки таймера, поробуйте обновить страницу');
			});
	};

	const fethcAllUsers = async () => {
		await http
			.getUsers()
			.then((res) => {
				dispatch(initUsers(res));
				dispatch(loadingUsers(false));
			})
			.catch((e) => {
				dispatch(loadingUsers(false));
				toast('Ошибка загрузки участников, поробуйте обновить страницу');
			});
	};

	useEffect(() => {
		fetchLeftTime();
		fethcAllUsers();
	}, []);
	return (
		<div className="App">
			<MessageContainer />
			<Header titel="Ход торгов Тестовые торги на аппарате ЛОТОС №12334" />
			<Table users={users} load={loadUsers} />
		</div>
	);
};

export default App;
