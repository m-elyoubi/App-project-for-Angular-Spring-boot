import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Users} from "../../model/Users";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  users?:Users[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  getAllUsers()
  {
    this.userService.getUsers().subscribe(data=>{
      console.log(data);
      this.users=data;

      }
    )
  }
}

