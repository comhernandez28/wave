// const axios = require('axios');
import axios from 'axios';

export class UserService {
	getAll = async () => {
		try {
			const res = await axios({
				method: 'get',
				url: '/api/users/',
			});
			return res;
		} catch (err) {
			console.log(err);
		}
	};

	getUserById = async () => {
		try {
			const res = await axios({
				method: 'get',
				url: '/api/users/self',
			});

			return res;
		} catch (error) {
			console.log(error);
		}
	};
}
