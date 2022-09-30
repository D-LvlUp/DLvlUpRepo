import { checkInternetConnection } from "@dlvlup/core";
import "reflect-metadata";
import { DBContext } from "@dlvlup/data/src/DBContext";
import { MailerService } from "@dlvlup/services/mailer"
import {
  setupDB,
  setCli,
  configuration_Process,
} from "./functions/configFuncs";

const consola = require("consola");

configuration_Process(async () => {
  const DB = await setupDB();
  const CLI = setCli();
  await Program(DB, CLI)
    .then(async () => {
      await DB.destroy();
    })
    .catch(console.error);

  console.log(DB.dbIsConnected());
});

async function Program(DB: DBContext, CLI) {
  if (checkInternetConnection() && DB.dbIsConnected()) {


    const mailerConfig = require("./config/mailer.json")

    const Mailer = new MailerService(mailerConfig, " D'LvlUp Official")

    consola.info(Mailer.SubscriptionsList.add("Test"))
    console.log(Mailer.SubscriptionsList.getSubscription("Test").add([{
      address: "7874386216@txt.att.net",
      name: 'RAFAEL',
    },
      {
        address: "7876313373@messaging.sprintpcs.com",
        name: 'RAFAEL',
      }]))




    const info = await Mailer.sendMailToSubscribers(
        "Test",
        "Un mensajito de Amor",
        "Hola, ya que esto funcionó aprovecho para decirte que te Amo mucho!"
    )
    // const info = await Mailer.sendMail({
    //   to: "7874386216@txt.att.net",
    //   subject: "Message from Node",
    //   text: "Te imaginas que esto funcione?",
    // });



    consola.success(`Message Sent: ${info.response}`);
  }
}
