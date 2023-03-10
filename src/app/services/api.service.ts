import axios from 'axios';
import { API_URL } from '../../config';
import { IUser, Time } from '../types/types';

export class ApiService {
	static instance: ApiService;
	private http = axios.create({
		responseType: 'json',
		baseURL: API_URL
	});

	constructor() {
		if (!ApiService.instance) {
			ApiService.instance = this;
		}

		return ApiService.instance;
	}

	getTimer = async () => {
		const res = await this.http.get<Time>('/timer');
		return res.data;
	};

	getUsers = async () => {
		const res = await this.http.get<IUser[]>('/users');
		return res.data;
	};
}
