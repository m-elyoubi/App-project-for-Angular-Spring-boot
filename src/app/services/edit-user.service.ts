import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Users} from "../model/Users";

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  private host=environment.host;
  constructor(private http:HttpClient) { }

  getUserId(id:number):Observable<Users> {
    return this.http.get<Users>(this.host+"/users/"+id);
  }

  updateUser(user:Users):Observable<Users> {
    return this.http.put<Users>(this.host+"/users/"+user.id,user);
  }
}
