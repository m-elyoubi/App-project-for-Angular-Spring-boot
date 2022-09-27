import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  accountFormGroup?:FormGroup;

  constructor(private fb:FormBuilder,private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
    this.accountFormGroup=this.fb.group({
      name:["",Validators.required],
      contactName:["",Validators.required],
      numberOfPhone:["",Validators.required],
      password:["",Validators.required],
      active:[true,Validators.required],

    })

  }

  onSaveAccount() {
   this.accountService.saveAccount(this.accountFormGroup?.value).subscribe(data=>{
     alert("Success Saving Account")
     this.router.navigateByUrl("/dash/accounts");
   })
  }
}
