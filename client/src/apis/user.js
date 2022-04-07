import axios from 'axios';

export const getUser = async () => {
	try {
		const res = await axios({
			method: 'get',
			url: '/api/self',
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};
