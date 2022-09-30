import { APIService } from "./APIService";

export class newApi extends APIService {
  constructor() {
    super("https://random-data-api.com/api/v2");

    return this;
  }

  public getUsers = <T>(params: any) =>
    this.instance.get<T>("/users", this.getRequest(params));
}
