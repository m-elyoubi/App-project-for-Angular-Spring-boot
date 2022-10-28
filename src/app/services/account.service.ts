import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Accounts} from "../model/Accounts";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private host=environment.host;
  constructor(private http:HttpClient) { }

  getAllAccounts():Observable<Accounts[]> {
    return this.http.get<Accounts[]>(this.host+"/accounts");
  }

  searchByName(keyword:string):Observable<Accounts[]> {
    return this.http.get<Accounts[]>(this.host+"/searchByNameAcc?name="+keyword);
  }

  searchByPhone(keyword:string):Observable<Accounts[]> {
    return this.http.get<Accounts[]>(this.host+"/searchByPhoneAcc?phone="+keyword);
  }

  saveAccount(account:Accounts):Observable<Accounts>{
    return this.http.post<Accounts>(this.host+"/saveAccount",account);
  }

  active(account:Accounts):Observable<Accounts> {
    account.active=!account.active;
    return this.http.put<Accounts>(this.host+"/activeAccount/"+account.id,account);
  }

  delete(account:Accounts):Observable<void> {
    return this.http.delete<void>(this.host+"/accounts/"+account.id);
  }

  getAccountById(id_account:string):Observable<Accounts> {
    return this.http.get<Accounts>(this.host+"/accounts/"+id_account);

  }
}
