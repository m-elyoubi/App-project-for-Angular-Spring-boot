import {Devices} from "./Devices";
import {Users} from "./Users";


export class Accounts{

  id !: string;
  name !: string;
  contactName !: string;
  numberOfPhone !: string;
  creationDate !: Date;
  lastConnection !: Date;
  password !: string;
  active !:boolean;
   users !:Users[];
  devices   !:Devices[];
}
