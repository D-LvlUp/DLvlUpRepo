import { IDBContext } from './interfaces/iDBContext';
import { DataSource } from 'typeorm';

export class DBContext implements IDBContext {
	constructor(Config, Entities: any[]) {
		Config.entities.push(...Entities);
		this._src = new DataSource(Config);
	}

	private _src: DataSource;

	private _db: DataSource;

	dbIsConnected(): boolean {
		return this.DBSource.isInitialized;
	}

	async start(): Promise<DBContext> {
		this._db = await this._src.initialize();
		return this;
	}

	async destroy(): Promise<void> {
		await this._db.destroy();
	}

	get DBSource(): DataSource {
		return this._db;
	}

	set DB(src) {
		this._db = src;
	}
}
