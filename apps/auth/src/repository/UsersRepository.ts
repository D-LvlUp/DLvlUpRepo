import { BaseRepository } from '@dlvlup/data/src/repository/BaseRepository';
import { IUser } from '../interfaces/user.interface';
import { Users } from '@dlvlup/data';


export class UsersRepository extends BaseRepository<Users> {

	async getUserByEmail(email: string): Promise<Users> {
		return await this.GetAsync(x => x.Where(r => r.email == email));
	}

	async createUser (data: IUser) {
		try {
			await this.AddAsync(data);
		} catch (e) {
			throw new Error(e);
		}
	}
}
