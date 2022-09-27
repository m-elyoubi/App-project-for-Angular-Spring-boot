import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Accounts} from "../model/Accounts";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  getAllAccounts():Observable<Accounts[]>
  {
    let host=environment.host;
    return this.http.get<Accounts[]>(host+"/accounts");
  }
  searchByName(keyword:string):Observable<Accounts[]>
  {
    let host=environment.host;
    return this.http.get<Accounts[]>(host+"/searchByNameAcc?name="+keyword);
  }
  searchByPhone(keyword:string):Observable<Accounts[]>
  {
    let host=environment.host;
    return this.http.get<Accounts[]>(host+"/searchByPhoneAcc?phone="+keyword);
  }

  saveAccount(account:Accounts):Observable<Accounts>{
    let host=environment.host;
    return this.http.post<Accounts>(host+"/saveAccount",account);
  }
  active(account:Accounts):Observable<Accounts>
  {
    let host=environment.host;
    account.active=!account.active;
    return this.http.put<Accounts>(host+"/activeAccount/"+account.id,account);
  }
  delete(account:Accounts):Observable<void>
  {
    let host=environment.host;
    return this.http.delete<void>(host+"/accounts/"+account.id);
  }
  getAccountById(id_account:string):Observable<Accounts>
  {
    let host=environment.host;
    return this.http.get<Accounts>(host+"/accounts/"+id_account);

  }
}
