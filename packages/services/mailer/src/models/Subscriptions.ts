import {Address} from "nodemailer/lib/mailer";

export class Subscriptions {

    private _allSubs: {[key: string]: Subscription} = {};

    get allSubscriptions() {
        return this._allSubs;
    }

    addSubscription(name: string) : Subscription {
        return this._allSubs[name] = new Subscription()
    }

    getSubscription(name: string): Subscription {
        return this._allSubs[name]
    }

    removeSubscription(name: string): boolean {
        return (this._allSubs[name]) ? delete this._allSubs[name] : false
    }

    getSubscriptionsTaggedAs(tags: string[]) {
        throw new Error('Function not implemented')
    }
}

export class Subscription {

    private _subs: Subscriber[] = []

    tags: string[]

    get Subscribers() {
        return this._subs
    }

    addSubscribers(subscribers: Subscriber[]): boolean {
        this._subs.push(...subscribers)
        return true
    }

    unsubscribe(email: string): boolean {
        this._subs.filter(subs => subs.address = email).pop()
        return true
    }
}

export class Subscriber implements ISubscriber {

    address: string;

    name: string;

    changeEmail(newEmail: string): Subscriber {
        this.address = newEmail;
        return this
    }

}

interface ISubscriber extends Address {

    address: string;

    name: string;

    changeEmail(newEmail: string): Subscriber

}
