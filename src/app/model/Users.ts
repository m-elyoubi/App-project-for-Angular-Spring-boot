import {Devices} from "./Devices";
import {Accounts} from "./Accounts";


export class Users{

  id !: number;
  username !: string;
  password !: string;
  numberOfPhone !: string;
  email !: string;
  contactName !: string;
  active !:boolean;
  accounts!:Accounts;
  devices   !:Devices[];
}
