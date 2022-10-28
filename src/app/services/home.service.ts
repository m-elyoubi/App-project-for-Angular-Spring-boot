import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {OrderResponse} from "../model/OrderResponse";
import {SizeTables} from "../model/SizeTables";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private host=environment.host;
  constructor(private http:HttpClient) { }

  public countUsers():Observable<number>{
   return  this.http.get<number>(this.host+"/countUsers");
  }
  public countAccounts():Observable<number>{
    return  this.http.get<number>(this.host+"/countAccounts");
  }

  public countDevices():Observable<number>{
    return  this.http.get<number>(this.host+"/countDevices");
  }

  public countAccOfDevices():Observable<OrderResponse[]>{
    return  this.http.get<OrderResponse[]>(this.host+"/countAccDevices");
  }

  public deviceParkAndMarket():Observable<number[]>{
    return  this.http.get<number[]>(this.host+"/deviceParkAndMarket");
  }

  public countUsrAccDev():Observable<SizeTables[]>{
    return this.http.get<SizeTables[]>(this.host+"/userAccountDevice");
  }
}
