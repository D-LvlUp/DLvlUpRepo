import { DBContext } from '@dlvlup/data/src/DBContext';
import { UsersRepository } from '../repository/UsersRepository';
import { DBService } from '@dlvlup/data/src/interfaces/DBService';
import { Users } from '@dlvlup/data/src/entities/User';
import consola from 'consola';


class UserService extends DBService<Users>{
	constructor () {
		super();
	}

	public Repository: UsersRepository;

	public async Setup() {
		const DB = await new DBContext(this._config, this._entities).start();
		if (DB.dbIsConnected()) {consola.success('Connected to DB Succesfully');}
		this.Repository = new UsersRepository(DB.DBSource, Users);
	}
}

export default new UserService();


