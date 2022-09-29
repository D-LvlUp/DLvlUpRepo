import { DBContext } from "@dlvlup/data/src/DBContext";
import { Contacts } from "@dlvlup/data/src/entities/Contacts";
import { MySqlOptions } from "@dlvlup/data";

const config: MySqlOptions = require("../config.json");
const prompts = require("prompts");

export async function setupDB(): Promise<DBContext> {
  return await new DBContext(config, [Contacts]).start();
}

export function setCli() {
  return prompts;
}

export async function configuration_Process(main) {
  main();
}
