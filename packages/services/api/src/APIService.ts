import { HttpClient } from './HttpClient';
import { ApiMethod, Header, KeyValue, Params } from './types';

export class APIService extends HttpClient {
	public constructor(
		baseUrl: string,
    private _authToken: string = '',
    private _apiKey: string = ''
	) {
		super(baseUrl);

		this.setService(_authToken, _apiKey);
	}

	private _headers: Header = {};

	private _method: ApiMethod = 'GET';

	private _params: Params = {};

	private setService(authToken?: string, apiKey?: string): APIService {
		if (authToken != '') {
			this._headers.authToken = authToken;
		}
		if (apiKey != '') {
			this._params.code = apiKey;
		}
		return this;
	}

	get authToken(): string {
		return this._authToken;
	}

	set authToken(newAuthToken: string) {
		this._authToken = newAuthToken;
	}

	get headers(): Header {
		return this._headers;
	}

	public setHeaders(headers: KeyValue<string, string>[]): APIService {
		for (const i in headers) {
			if (
				headers[i].hasOwnProperty('key') &&
        headers[i].hasOwnProperty('value')
			) {
				this._headers[headers[i].key] = headers[i].value;
			}
		}
		return this;
	}

	public resetHeaders(): void {
		this._headers = {};
	}

	public setMethod(newMethod: ApiMethod): APIService {
		this._method = newMethod;
		return this;
	}

	protected getRequest<T>(params: T): any {
		this.setMethod('GET');
		return {
			headers: this._headers,
			method: this._method,
			params: { ...this._params, ...params },
		};
	}

	protected postRequest<T>(body: T): any {
		this.setMethod('POST');
		return {
			headers: this._headers,
			method: this._method,
			params: this._params,
			body: body,
		};
	}

	public get = <T>(endpoint: string, params?: any) =>
		this.instance.get<T>(endpoint, this.getRequest<T>(params));

	public post = <T>(endpoint: string, body: any) =>
		this.instance.post<T>(endpoint, this.postRequest<T>(body));
}
