import { IDBContext } from './interfaces/iDBContext';
import { DataSource } from 'typeorm';
import { MySqlOptions } from './types';
import fs from 'fs';
import path from 'path';

export class DBContext implements IDBContext {
	constructor(Config: MySqlOptions, Entities: any[]) {
		Config.ssl = {
			ca: fs.readFileSync(path.join(__dirname, 'DigiCertGlobalRootCA.crt.pem')),
		};
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
