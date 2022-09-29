import { checkInternetConnection } from "@dlvlup/core";
import "reflect-metadata";
import { DBContext } from "@dlvlup/data/src/DBContext";
import { Contacts } from "@dlvlup/data/src/entities/Contacts";
import {
  setupDB,
  setCli,
  configuration_Process,
} from "./functions/configFuncs";

const nodemailer = require('nodemailer')
const consola = require("consola");

configuration_Process(async () => {
  const DB = await setupDB();
  const CLI = setCli();
  await Program(DB, CLI).then(async () => {

    await DB.destroy();
  }).catch(console.error);

  console.log(DB.dbIsConnected());
});

async function Program(DB: DBContext, CLI) {
  if (checkInternetConnection() && DB.dbIsConnected()) {
    const test: Contacts = {
      Name: "Rafael Cedeno",
      phone_number: "7874386216",
      company: "att",
    };

    // const ans = await CLI({
    //   type: "text",
    //   name: "value",
    //   message: "Quit Process?",
    //   hint: "this",
    // });
    // if (ans.value == "q") {
    //   return;
    // }

    let hostname = "smtp.office365.com";
    let username = "thelevelupofficial@dlvlup.com";
    let password = "";

    let transporter = nodemailer.createTransport({
      host: hostname,
      port: 587, // port for secure SMTP
      auth: {
        user: username,
        pass: password,
      },
      tls: {
        ciphers: 'SSLv3'
      },
      logger: true
    });

    let info = await transporter.sendMail({
      from: username,
      to: "7874386216@txt.att.net",
      subject: "Message from Node",
      text: "Te imaginas que esto funcione?",
      html: "<h1>Hola otro Mundo!?</h1>",
      headers: { 'x-cloudmta-class': 'standard' }
    });

    consola.success(`Message Sent: ${info.response}`)



    // const repoPerson = new ContactsRepository(DB.DB, Contacts);
    //
    // await repoPerson.createAndSave(test).then((res) => {
    //   console.log(res);
    // });
  }
}
