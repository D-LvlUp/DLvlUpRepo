import { DataSource, EntityTarget, InsertResult, Repository } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import "reflect-metadata";

export abstract class BaseRepository<T> {
  public readonly _dataRepository: Repository<T>;

  constructor(db: DataSource, Context: EntityTarget<T>) {
    this._dataRepository = db.getRepository(Context);
  }

  async insert(item: QueryDeepPartialEntity<T>) {
    const result: InsertResult = await this._dataRepository.insert(item);
  }
}
