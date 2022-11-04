import { checkInternetConnection } from "@dlvlup/core";
import "reflect-metadata";
import { DBContext } from "@dlvlup/data/src/DBContext";
import { QoDApi, Subscriber } from "@dlvlup/services";
import { MailerService } from "@dlvlup/services/mailer";
import {
  setupDB,
  setCli,
  configuration_Process,
} from "./functions/configFuncs";
import { Contacts } from "@dlvlup/data/src/entities/Contacts";
import { ContactsRepository } from "@dlvlup/data/src/repository/ContactsRepository";

const consola = require("consola");
const mailerConfig = require("./config/mailer.json");

configuration_Process(async () => {
  const DB = await setupDB();
  const CLI = setCli();
  const Mailer = new MailerService(mailerConfig, "D'LvlUp Official");
  const API = new QoDApi();

  await Program(DB, API, Mailer)
    .then(async () => {
      await DB.destroy();
    })
    .catch(console.error);

  console.log(`DB STATUS: ${DB.dbIsConnected()}`);
});

async function Program(DB: DBContext, API: QoDApi, Mailer: MailerService) {

  if (checkInternetConnection() && DB.dbIsConnected()) {

    const contactsRepository = new ContactsRepository(DB.DBSource, Contacts);

    const ContactsInfo: Contacts[] = await contactsRepository.GetRangeAsync((x) => x.Where((r) => r.Name.includes("Rafael")))

    const Subscribers: Subscriber[] = ContactsInfo.map((x) => ({
      address: x.phone_email,
      name: x.Name,
    }));

    Mailer.SubscriptionsList.addSubscription("QuotesOfDay").addSubscribers(
      Subscribers
    );

    await API.getRandomQuote().then(async (quote) => {
      const MailFeedback = await Mailer.sendMailToSubscribers(
        "QuotesOfDay",
        "Today's Quote is <3",
        `\n${quote.text}\n - ${quote.author}`
      );

      consola.success(`Message Send Executed: ${MailFeedback.response}`);
    });
  }
}
