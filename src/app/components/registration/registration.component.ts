import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Users} from "../../model/Users";
import {RegistrationService} from "../../services/registration.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  msg='';
  user:Users=new Users();

  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.user);
    this._service.registerFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this._router.navigateByUrl('/login');

      },
      error =>{console.log("exception occurred");
        this.msg=error.error;
      }

    );
  }

}
