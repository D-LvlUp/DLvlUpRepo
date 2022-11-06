import { APIService } from '../APIService';

export class QoDApi extends APIService {
	constructor() {
		super('https://type.fit/api/quotes');
		return this;
	}

	public getRandomQuote = async (params?: any) =>
		this.get('/').then(async (result) => {
			if (result.status == 200) {
				const data: any = result.data;

				const { text, author } = data[Math.round(Math.random() * data.length)];

				return { text, author };
			}
		});
}
