import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {EditUserService} from "../../services/edit-user.service";
import {NewUserService} from "../../services/new-user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editUserFormGroup?:FormGroup;
  userId!:number;
  allIdAccount: any;
  constructor(private fb:FormBuilder,private newUserService:NewUserService,private activatedRoute:ActivatedRoute,private editUserService:EditUserService) {

      this.userId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.editUserService.getUserId(this.userId).subscribe(user=>{
      this.editUserFormGroup=this.fb.group({
        id:[user.id,Validators.required],
        accounts:[user.accounts,Validators.required],
        username:[user.username,Validators.required],
        password:[user.password,Validators.required],
        numberOfPhone:[user.numberOfPhone,Validators.required],
        email:[user.email,Validators.required],
        contactName:[user.contactName,Validators.required],
        active:[user.active,Validators.required],
      })
    });
  }





  onUpdateEdit() {
     this.editUserService.updateUser(this.editUserFormGroup?.value).subscribe(data=>{
       alert("Success user Updated  ")
     })
  }

  getAllIdAccount() {
    this.newUserService.getAllId().subscribe(data=>{
      this.allIdAccount=data;
    })
  }
}
