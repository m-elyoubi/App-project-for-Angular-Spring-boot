import {Devices} from "./Devices";
import {Users} from "./Users";


export class Accounts{

  id !: number;
  name !: string;
  creationDate !: Date;
  lastConnection !: Date;
   users !:Users[];
  devices   !:Devices[];
}
