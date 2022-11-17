import { BaseRepository } from '../repository/BaseRepository';
import { DBEntities } from '../entities/EntityHolder';
const config = require('../../config/db.json');


export abstract class DBService<T> {
	protected constructor () {}

	public _entities = DBEntities;

	public _config = config;

	public Repository: BaseRepository<T>;

	public async Setup() {}
}
