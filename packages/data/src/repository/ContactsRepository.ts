import { BaseRepository } from "./BaseRepository";
import { Contacts } from "../entities/Contacts";
import "reflect-metadata";

enum phoneCompany {
  att = "txt.att.net",
  boost_mobile = "sms.myboostmobile.com",
  t_mobile = "tmomail.net",
  verizon = "vtext.com",
  sprint = "messaging.sprintpcs.com",
}

export class ContactsRepository extends BaseRepository<ContactsRepository> {
  public async createAndSave(person: Contacts) {
    let Pers: any = new Contacts(person);
    await this._dataRepository.save(Pers);
    return Pers.id;
  }
}
