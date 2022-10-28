import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Users} from "../model/Users";
import {Accounts} from "../model/Accounts";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host=environment.host;
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<Users[]> {
    return  this.http.get<Users[]>(this.host+"/users");
  }

  searchByNameUser(keyword:string):Observable<Users[]> {
    return this.http.get<Users[]>(this.host+"/searchName?name="+keyword);
  }

  searchByPhoneUser(keyword:string):Observable<Users[]> {
    return this.http.get<Users[]>(this.host+"/searchPhone?phone="+keyword);
  }

  searchByEmailUser(keyword:string):Observable<Users[]> {
  return this.http.get<Users[]>(this.host+"/searchEmail?email="+keyword);
}

  deleteUser(user:Users):Observable<void> {
    return this.http.delete<void>(this.host+"/users/"+user.id);
  }

  activeUser(user:Users):Observable<Users> {
    user.active=!user.active;
    return this.http.put<Users>(this.host+"/users/"+user.id,user);
  }

  getUserJoinAcc(account:Accounts):Observable<Users[]> {
    return this.http.get<Users[]>(this.host+"/getUserByAccount?id_account="+account.id);
  }

  getUserById(id_user:number):Observable<Users> {
    return this.http.get<Users>(this.host+"/users/"+id_user);
  }

}
