import React, { FC, ReactNode } from 'react';
import { IUser } from '../types/types';
import Loader from './ui/Loader/Loader';
import { Timer } from './Timer';

interface ITable {
	users: IUser[] | undefined;
	load: boolean;
}

export const Table: FC<ITable> = ({ users, load }) => {
	const userName: ReactNode =
		users &&
		users.map((user) => {
			return (
				<td key={`name+${user.id}`} className="text-center py-2" style={{ width: '80px' }}>
					{user.name}
				</td>
			);
		});

	const userRowItem: ReactNode =
		users &&
		users.map((user) => {
			return (
				<td key={`row+${user.id}`} className="text-center py-2">
					-
				</td>
			);
		});

	return (
		<div className="table-responsive">
			<table className="mx-4 mt-5 table table-striped table-responsive">
				<thead className="text-info">
					<tr>
						<th className="text-center py-2" style={{ width: '35%' }}>
							Ход
						</th>
						{users &&
							users.map((user) => {
								return (
									<td key={`move+${user.id}`} className="p-0">
										{user.move ? <Timer /> : ' '}
									</td>
								);
							})}
					</tr>
					<tr>
						<td className="text-center py-2">Параметры и требования</td>
						{load ? <Loader /> : userName}
					</tr>
				</thead>
				<tbody className="fw-light" style={{ fontSize: '14px' }}>
					<tr>
						<td>Наличие комплекса мероприятий, повышающий стандарты качества изготовления</td>
						{userRowItem}
					</tr>
					<tr>
						<td>Срок изготовления лота, дней</td>
						{userRowItem}
					</tr>
					<tr>
						<td>Гарантийные обязательства, мес</td>
						{userRowItem}
					</tr>
					<tr>
						<td>Условия оплаты</td>
						{userRowItem}
					</tr>
					<tr>
						<td> Стоимость изготвления лота, руб (без НДС)</td>
						{userRowItem}
					</tr>
					<tr>
						<td>Действия</td>
						{userRowItem}
					</tr>
				</tbody>
			</table>
		</div>
	);
};
