import { BaseRepository } from './BaseRepository';
import { Contacts } from '../entities/Contacts';
import 'reflect-metadata';

export class ContactsRepository extends BaseRepository<Contacts> {
	public async createAndSave(person: Contacts) {
		let Pers: any = new Contacts(person);
		await super._dataRepository.save(Pers);
		return Pers.id;
	}
}
