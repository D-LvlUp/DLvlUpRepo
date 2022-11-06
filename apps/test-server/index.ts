import { BanksResponseModel, BanksAppModel, ultraMap } from '@dlvlup/core';
import axios, { AxiosResponse } from 'axios';

axios
	.get<BanksResponseModel[]>(
		'https://random-data-api.com/api/v2/banks?size=3',
		{
			responseType: 'json',
		}
	)
	.then((response) => {
		// const array: BanksAppModel[] = []
		// response.data.forEach(data => {
		//     array.push(data)
		// })
		console.log(response.data[0]);
	});
