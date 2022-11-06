import { Address } from 'nodemailer/lib/mailer';

export class Subscriptions {
	private _allSubs: { [key: string]: Subscription } = {};

	get allSubscriptions() {
		return this._allSubs;
	}

	addSubscription(name: string): Subscription {
		return (this._allSubs[name] = new Subscription());
	}

	getSubscription(name: string): Subscription {
		return this._allSubs[name];
	}

	removeSubscription(name: string): boolean {
		return this._allSubs[name] ? delete this._allSubs[name] : false;
	}

	// getSubscriptionsTaggedAs(tags: string[]) {
	// 	throw new Error('Function not implemented');
	// }
}

export class Subscription {
	private _subs: Subscriber[] = [];

	private _tags: string[] = [];

	get Subscribers() {
		return this._subs;
	}

	get tags() {
		return this._tags;
	}

	addSubscribers(subscribers: Subscriber[]): boolean {
		subscribers.forEach(x => this._subs.push(new Subscriber(x)));
		return true;
	}

	unsubscribe(email: string): boolean {
		this._subs.splice(this._subs.findIndex(x => x.address == email));
		return true;
	}

	addTag(tag: string): void {
		this._tags.push(tag);
	}

	removeTag(tag: string): boolean {
		this._tags.splice(this._tags.indexOf(tag));
		return true;
	}
}

export class Subscriber implements ISubscriber {
	constructor (info: Subscriber) {
		Object.assign(this, info);
	}

	address: string;

	name: string;

	changeEmail?(newEmail: string): Subscriber {
		this.address = newEmail;
		return this;
	}
}

interface ISubscriber extends Address {
  address: string;

  name: string;

  changeEmail?(newEmail: string): Subscriber;
}
