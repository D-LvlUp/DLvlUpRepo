const consola = require('consola');

export function checkInternetConnection(): boolean {
	return require('dns').resolve('www.google.com', (err) => {
		if (err) {
			throw new Error(err);
		}
		consola.success('Connected to the internet');
		return true;
	});
}
