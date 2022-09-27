import {APIService} from "./APIService";
import {HttpClient} from "./HttpClient";


export class newApi extends APIService {

    constructor(Baseuri: string) {
        super(Baseuri)
    }

    public getUsers = <T>(params: any) => this.instance.get<T>('/users', this.getRequest(params))
}
