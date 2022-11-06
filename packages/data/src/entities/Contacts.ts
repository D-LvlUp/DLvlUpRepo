import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';

enum phoneCompany {
  att = 'txt.att.net',
  boost_mobile = 'sms.myboostmobile.com',
  t_mobile = 'tmomail.net',
  verizon = 'vtext.com',
  sprint = 'messaging.sprintpcs.com',
  claro = 'vtexto.com',
}

type company =
  | 'att'
  | 'boost_mobile'
  | 't_mobile'
  | 'verizon'
  | 'sprint'
  | 'claro';

@Entity()
export class Contacts {
	constructor(_contact: Contacts) {
		Object.assign(this, _contact);
		if (this.phone_number && this.company != undefined) {
			this.phone_email = `${this.phone_number}@${phoneCompany[this.company]}`;
		}
	}

	@PrimaryGeneratedColumn('increment')
		id?: number;
	@Column({ length: 100, nullable: false })
		Name: string;

	@Column({ length: 10, nullable: false })
		phone_number: string;

	@Column({ length: 50, nullable: false })
		company: company;

	@Column({ length: 100 })
		phone_email?: string;
}
