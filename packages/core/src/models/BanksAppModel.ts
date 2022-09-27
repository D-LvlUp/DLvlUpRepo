import { BanksResponseModel } from "./banksResponseModel";
import { Exclude, Expose } from "class-transformer";

export class BanksAppModel implements BanksResponseModel {
  @Expose()
  account_number: string;

  @Expose()
  bank_name: string;

  @Expose()
  iban: string;

  @Expose()
  id: number;

  @Expose()
  routing_number: string;

  @Expose()
  uid: string;

  @Expose()
  getName(): string {
    return `This bank name ${this.bank_name}`;
  }

  @Exclude()
  swift_bic: string;
}
