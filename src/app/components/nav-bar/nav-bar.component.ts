import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

@Injectable()
export class NavBarComponent implements OnInit {

 @Output() toggleSideBarEventEmitter :EventEmitter<any>=new EventEmitter();
  constructor(
    public authenticationService:AuthenticationService,
     private router:Router
  ) {

  }

  ngOnInit(): void {
  }

  toggleSideBar(){
 this.toggleSideBarEventEmitter.emit();
  }

  handleSign(){
    this.router.navigateByUrl("/registration");
  }

  handleLout(){
    this.authenticationService.logout().subscribe({
      next:(data)=>{
this.router.navigateByUrl("/login");
      }
    })
  }
}

