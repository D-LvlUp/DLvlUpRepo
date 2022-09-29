import { DataSource } from "typeorm";
import { DBContext } from "../DBContext";

export interface IDBContext {
  dbIsConnected(): boolean;

  start(): Promise<DBContext>;

  get DB(): DataSource;

  set DB(src: DataSource);
}
