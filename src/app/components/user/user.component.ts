import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Users} from "../../model/Users";
import {NavBarComponent} from "../../components/nav-bar/nav-bar.component";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users?:Users[];
  constructor(private navBarComponent:NavBarComponent,private userService:UserService) { }

  ngOnInit(): void {
   this.users= this.navBarComponent.users;

  }
  ongetAllUsers() {
    this.userService.getUsers().subscribe(data=>{
        console.log(data);
        this.users=data;

      }
    )
  }

  onSearch(datavalue: any) {
    this.userService.searchByName(datavalue.keyword).subscribe(data=>{
      this.users=data;
    })
  }

  onDelete(u: Users) {
    let v=confirm("Are you sure ?");
    if (v==true)
   this.userService.delete(u).subscribe(data=>{
      this.ongetAllUsers();
   })
  }


  onActive(u: Users) {
    this.userService.active(u).subscribe(data=>{
      u.active=data.active;
    })

  }

  onAdd(u: Users) {

  }

  onWrite(u: Users) {

  }

  onSearchByNumber(datavalue: any) {
    this.userService.searchByPhone(datavalue.keyword).subscribe(data=>{
      this.users=data;
    })
  }

  onSearchByEmail(datavalue: any) {
    this.userService.searchByEmail(datavalue.keyword).subscribe(data=>{
      this.users=data;
    })
  }
}
