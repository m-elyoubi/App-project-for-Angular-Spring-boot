import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Users} from "../../model/Users";
import {Router} from "@angular/router";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppDataState, DataStateEnum, userActionEvent, UserActionTypes} from "../../State/state.user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Accounts} from "../../model/Accounts";
import {AccountService} from "../../services/account.service";
import {NewUserService} from "../../services/new-user.service";
import {EditUserService} from "../../services/edit-user.service";
import {EventDriverService} from "../../State/event.driver.service";


@Component({selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {
   users$:Observable<AppDataState<Users[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;
  userFormGroup!:FormGroup;
  allIdAccount?: Accounts[];
  editUserFormGroup?:FormGroup;
  userId!:number;
  constructor(
    private userService:UserService,
    private router:Router,
    private fb:FormBuilder,
    private accountService:AccountService,
    private newUserService:NewUserService,
    private editUserService:EditUserService,
    private eventDriverService:EventDriverService
  ) { }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubjectObservable.subscribe((actionEvent:userActionEvent)=>{
      if (UserActionTypes.EDIT_USER==actionEvent.type){
        this.onEdit(actionEvent.payload)
      }
    })
    this.accountService.getAllAccounts().subscribe(data=>{
      this.allIdAccount=data;
    })
    if (this.userId!=null) {
      this.editUserService.getUserId(this.userId).subscribe(user => {
        this.editUserFormGroup = this.fb.group({
          id: [user.id, Validators.required],
          accounts: [user.accounts, Validators.required],
          username: [user.username, Validators.required],
          password: [user.password, Validators.required],
          numberOfPhone: [user.numberOfPhone, Validators.required],
          email: [user.email, Validators.required],
          contactName: [user.contactName, Validators.required],
          active: [user.active, Validators.required],
        })
      });
    }
    this.userFormGroup=this.fb.group({
      accounts:[,Validators.required],
      username:["",Validators.required],
      password:["",Validators.required],
      numberOfPhone:["",Validators.required],
      email:["",Validators.required],
      contactName:["",Validators.required],
      active:[true,Validators.required],
    });
 this.users$=this.userService.getAllUsers().pipe(
   map(data=>{
     console.log(data);
     return ({dataState:DataStateEnum.LOADED,data:data})
   }),
   startWith({dataState: DataStateEnum.LOADING}),
   catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
 );
 }

  onSaveUser() {
    this.newUserService.saveUser(this.userFormGroup.value).subscribe(data=>{
      alert("Success Saving user");
     this.ngOnInit();
    })
  }

  onSearchByUsername(username:any) {

    if (username == "") {
      this.ngOnInit();
    }
    this.users$ = this.userService.getAllUsers().pipe(
      map(data => {
        data = data.filter(res => {
          return res.contactName.toLocaleLowerCase().match(username.toLocaleLowerCase());
        })
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

    onDelete(u: Users) {
    let v=confirm("Are you sure ?");
    if (v==true)
      this.userService.deleteUser(u).subscribe(data=>{
      })
      this.ngOnInit();
  }

  onActive(u: Users) {
    this.userService.activeUser(u).subscribe(data=>{
      u.active=data.active;
    })

  }

  onAdd(user: Users) {
    this.router.navigateByUrl("/dash/addDeviceUser/" + user.id + "/" + user.username);
    this.ngOnInit()
  }

  onSearchByNumber(datavalue: any) {
    this.userService.searchByPhoneUser(datavalue.keyword).pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  onSearchByEmail(dataValue: any) {
    this.userService.searchByEmailUser(dataValue.keyword).subscribe(data=>{

    })
  }

  onEdit(u:Users) {
    this.userId =u.id ;
    this.ngOnInit();
  }

  onUpdateEdit(editUserFormGroup: FormGroup) {
    confirm("hello world")
    this.editUserService.updateUser(editUserFormGroup?.value).subscribe(data=>{
      alert("Success user Updated  ")
     this.ngOnInit();
    })
  }
  onActionEvent($event: userActionEvent) {
    switch ($event.type) {
      case UserActionTypes.NEW_USER:
        this.onSaveUser();
        break;
      case UserActionTypes.SEARCH_BY_EMAIL_USER:
        this.onSearchByEmail($event.payload);
        break;
      case UserActionTypes.SEARCH_BY_PHONE_USER:
        this.onSearchByNumber($event.payload);
        break;
      case UserActionTypes.ACTIVE_USER:
        this.onActive($event.payload);
        break;
      case UserActionTypes.ADD_USER:
        this.onAdd($event.payload);
        break;
       case UserActionTypes.DELETE_USER:
        this.onDelete($event.payload);
        break;
       /*case UserActionTypes.EDIT_USER:
        this.onEdit($event.payload);
        break;
        */
      case UserActionTypes.UPDATE_USER:
        this.onUpdateEdit($event.payload);
        break;
      case UserActionTypes.SEARCH_BY_USERNAME: {
        this.onSearchByUsername($event.payload);
        break;
      }

    }

  }
}

