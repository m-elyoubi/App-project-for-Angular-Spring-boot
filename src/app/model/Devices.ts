
import {Users} from "./Users";
import {Accounts} from "./Accounts";

export class Devices{

  id !: number;
  module !: string;
  typeOfEquipment !: string;
  position !: string;
  speed !: number;
  active!:boolean;
  accounts !:Accounts;
  users !:Users;
}
