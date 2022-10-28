import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppDataState, DataStateEnum,} from "../../State/state.user";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
import {Accounts} from "../../model/Accounts";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditAccountService} from "../../services/edit-account.service";
import {accountActionEvent, AccountActionTypes} from "../../State/state.account";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accounts$?: Observable<AppDataState<Accounts[]>>;
  readonly DataStateEnum = DataStateEnum
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;
  accountFormGroup!: FormGroup;
  editAccountFormGroup!: FormGroup;
  idAccount?: string;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private fb: FormBuilder,
    private editAccountService: EditAccountService
  ){}

  ngOnInit(): void {
    if (this.idAccount != null) {
      this.editAccountService.getAccountById(this.idAccount).subscribe(account => {
        this.editAccountFormGroup = this.fb.group({
          id: [account.id, Validators.required],
          name: [account.name, Validators.required],
          contactName: [account.contactName, Validators.required],
          numberOfPhone: [account.numberOfPhone, Validators.required],
          creationDate: [account.creationDate, Validators.required],
          lastConnection: [account.lastConnection, Validators.required],
          password: [account.password, Validators.required],
          active: [account.active, Validators.required],

        })
      });
    }

    this.accountFormGroup = this.fb.group({
      name: ["", Validators.required],
      contactName: ["", Validators.required],
      numberOfPhone: ["", Validators.required],
      creationDate: [, Validators.required],
      lastConnection: [, Validators.required],
      password: ["", Validators.required],
      active: [true, Validators.required],

    })

    this.accounts$ = this.accountService.getAllAccounts().pipe(
      map(data => {
        console.log("value the accounts");
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );

  }

  onDeleteAccount(account: Accounts) {
    let v = confirm("Are you sure?");
    if (v == true)
      this.accountService.delete(account).subscribe(data => {
      })
    this.ngOnInit();
  }

  onAddAccount(account: Accounts) {

    this.router.navigateByUrl("/dash/addDevice/" + account.id + "/" + account.name);
  }

  onEditAccount(account: Accounts) {
    this.idAccount = account.id;
    this.ngOnInit();
  }

  onActiveAccount(account: Accounts) {
    this.accountService.active(account).subscribe(data => {
      account.active = data.active;
    })
  }

  onSearchByNameAccount(contactName:any) {
    if (contactName == "") {
      this.ngOnInit();
    }
    this.accounts$ = this.accountService.getAllAccounts().pipe(
      map(data => {
        data = data.filter(res => {
          return res.contactName.toLocaleLowerCase().match(contactName.toLocaleLowerCase());
        })
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );


  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  onSaveAccount() {

    this.accountService.saveAccount(this.accountFormGroup?.value).subscribe(data => {
      alert("Success Saving Account")
      this.ngOnInit();

    })
  }

  onUpdateAccount(edit:FormGroup) {
    this.editAccountService.UpdateAccount(edit?.value).subscribe(account => {
      alert("Success Account Updated ")
      this.ngOnInit();
    })
  }

  onActionEvent($event: accountActionEvent) {
    switch ($event.type) {
      case AccountActionTypes.NEW_ACCOUNT: {
        this.onSaveAccount();
        break;
      }
      case AccountActionTypes.ACTIVE_ACCOUNT:
        this.onActiveAccount($event.payload);
        break;

      case AccountActionTypes.EDIT_ACCOUNT:
        this.onEditAccount($event.payload);
        break;
      case AccountActionTypes.UPDATE_EDIT_ACCOUNT:
        this.onUpdateAccount($event.payload);
        break;

      case AccountActionTypes.DELETE_ACCOUNT:
        this.onDeleteAccount($event.payload);
        break;
      case AccountActionTypes.SEARCH_ACCOUNT:
        this.onSearchByNameAccount($event.payload);
        break;
      case AccountActionTypes.ADD_DEVICE_ACCOUNT:
        this.onAddAccount($event.payload);
        break;
      case AccountActionTypes.SORT_ACCOUNT:
        this.sort($event.payload);
        break;

    }
  }

}
