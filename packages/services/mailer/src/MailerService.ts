import SMTPTransport from "nodemailer/lib/smtp-transport";
import {Transporter} from "nodemailer";
import {ultraMap} from "@dlvlup/core";
import {MailOptions, Subscription, Subscriptions} from "./models";
import {Address} from "nodemailer/lib/mailer";

const nodemailer = require("nodemailer")


export class MailerService {
    constructor(config: SMTPTransport, name?: string) {
        this._mailer = nodemailer.createTransport(config);
        this._sender = (name) ? {name: name, address: config.auth.user} : config.auth.user
    }

    private readonly _sender: string | Address;

    private _mailer: Transporter;

    private _subscriptionsList: Subscriptions = new Subscriptions()

    get SubscriptionsList() {
        return this._subscriptionsList;
    }

    get sender(): string | Address {
        return this._sender
    }

    async sendMail(mailOptions: MailOptions): Promise<any> {
        mailOptions.from = this.sender;
        return await this._mailer.sendMail(ultraMap(MailOptions, mailOptions))
    }

    async sendMailToSubscribers(subscription: string, subject: string, text: string) {
        const sub: Subscription = this._subscriptionsList.allSubscriptions[subscription]
        if (sub != undefined) {
            return await this._mailer.sendMail({
                from: this.sender,
                to: sub.Subscribers,
                subject: subject,
                text: text
            })
        }
        throw Error(`Subscription "${subscription}" not found in List of Subscriptions.`)
    }



}


