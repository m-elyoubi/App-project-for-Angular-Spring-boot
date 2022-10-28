import { Injectable } from '@angular/core';
import {Accounts} from "../model/Accounts";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EditAccountService {
  private host=environment.host;


  constructor(private http:HttpClient) { }

  getAccountById(id:string):Observable<Accounts>{
    return this.http.get<Accounts>(this.host+"/accounts/"+id);
  }

  UpdateAccount(account:Accounts):Observable<Accounts>{
    return this.http.put<Accounts>(this.host+"/accountUpdate/"+account.id,account);
  }
}
