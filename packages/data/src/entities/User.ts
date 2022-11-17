import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';
import { IUser } from 'auth/src/interfaces/user.interface';

@Entity()
export class Users {
	constructor (_user: IUser) {
		Object.assign(this, _user);
	}

	@PrimaryGeneratedColumn('increment')
		id: number;

	@Column({ length: 100, nullable: false })
		email: string;

	@Column({ nullable: false })
		password: string;

	@Column({ length: 100, nullable: false })
		username: string;
}
