import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Accounts} from "../../model/Accounts";
import {EditAccountService} from "../../services/edit-account.service";

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  editAccountFormGroup?:FormGroup;
  idAccount:string;
  account!:Accounts;
  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder,private editAccountService:EditAccountService,private router:Router) {
    this.idAccount=this.activatedRoute.snapshot.params['id'];
  }


  ngOnInit(): void {
    /*
   this.editAccountService.getAccountById(this.idAccount).subscribe(account=>{
      this.editAccountFormGroup=this.fb.group({
        id:[account.id,Validators.required],
        name:[account.name,Validators.required],
        contactName:[account.contactName,Validators.required],
        numberOfPhone:[account.numberOfPhone,Validators.required],
        creationDate:[account.creationDate,Validators.required],
        lastConnection:[account.lastConnection,Validators.required],
        password:[account.password,Validators.required],
        active:[account.active,Validators.required],
      })

    });
     */

  }


  onUpdateEdit() {
    this.editAccountService.UpdateAccount(this.editAccountFormGroup?.value).subscribe(account=>{
      alert("Success Account Updated ")
      this.router.navigateByUrl("/dash/accounts/addDevice");
    })
  }
}
