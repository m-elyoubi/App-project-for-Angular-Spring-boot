import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NewUserService} from "../../services/new-user.service";
import {Accounts} from "../../model/Accounts";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userFormGroup!:FormGroup;
  allIdAccount?: Accounts[];
  constructor(private router:Router, private fb:FormBuilder,private newUserService:NewUserService,private accountService:AccountService) { }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      accounts:[,Validators.required],
      username:["",Validators.required],
      password:["",Validators.required],
      numberOfPhone:["",Validators.required],
      email:["",Validators.required],
      contactName:["",Validators.required],
      active:[true,Validators.required],
    });
  }
  getAllIdAccount()
  {
      this.accountService.getAllAccounts().subscribe(data=>{
        console.log(data)
        this.allIdAccount=data;


    })
  }


  onSaveUser() {
     this.newUserService.saveUser(this.userFormGroup.value).subscribe(data=>{
       alert("Success Saving user");
       this.router.navigateByUrl("/dash/users");
     })
  }
}
