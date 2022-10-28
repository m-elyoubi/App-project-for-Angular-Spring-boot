import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Users} from "../model/Users";


@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  private host=environment.host;
  constructor(private http:HttpClient) { }

  saveUser(user:Users):Observable<Users> {
    return this.http.post<Users>(this.host+"/saveUsers",user);
  }
}
