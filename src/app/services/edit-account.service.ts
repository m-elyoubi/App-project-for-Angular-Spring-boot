import { Injectable } from '@angular/core';
import {Accounts} from "../model/Accounts";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EditAccountService {

  constructor(private http:HttpClient) { }

  getAccountById(id:string):Observable<Accounts>{
    let host=environment.host;
    return this.http.get<Accounts>(host+"/accounts/"+id);
  }
  UpdateAccount(account:Accounts):Observable<Accounts>{
    let host=environment.host;
    return this.http.put<Accounts>(host+"/accountUpdate/"+account.id,account);
  }
}
