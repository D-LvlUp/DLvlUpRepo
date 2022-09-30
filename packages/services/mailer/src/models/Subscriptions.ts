import {Address} from "nodemailer/lib/mailer";

export class Subscriptions {

    private _allSubs: {[key: string]: Subscription} = {};

    get allSubscriptions() {
        return this._allSubs;
    }

    getSubscription(name: string): Subscription {
        return this._allSubs[name]
    }

    add(name: string, subscribers?: subscriber[]) : Subscriptions {
        this._allSubs[name] = new Subscription(subscribers)
        return this
    }

    getSubscriptionsTaggedAs(tags: string[]) {
        throw new Error('Function not implemented')
    }
}

export class Subscription {
    constructor(user: subscriber[]) {
        if(user) {
            this._subs.push(...user)
        }
    }

    private _subs: subscriber[] = []

    tags: string[]

    get Subscribers() {
        return this._subs
    }

    add(subscribers: subscriber[]): boolean {
        this._subs.push(...subscribers)
        return true
    }

    remove(email: string): boolean {
        this._subs.filter(subs => subs.address = email).pop()
        return true
    }
}

export interface subscriber extends Address {
    name: string,
    address: string,
    tags?: string[]
}
