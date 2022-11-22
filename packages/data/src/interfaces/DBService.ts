import { BaseRepository } from '../repository/BaseRepository';
import { DBEntities } from '../entities/EntityHolder';
import DbConfig from "../../config/db.config";


export abstract class DBService<T> {
	protected constructor () {}

	public _entities = DBEntities;

	public _config = DbConfig.Mysql;

	public Repository: BaseRepository<T>;

	public async Setup() {}
}
