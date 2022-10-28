import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {HomeService} from "../../services/home.service";

export class Element {
  entity!: string;
  number!: number;

}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
 @Output() sideBarOen=true;
  displayedColumns: string[] = ['accountName', 'numberOfVehicle'];
  displayedColumns1: string[] = ['nameTable', 'sizeTable'];
  dataSourceEntity!: MatTableDataSource<any>;
  dataSourceEntity1!:MatTableDataSource<any>;
   countUsers?:number;
   countAccounts?:number;
   countDevices?:number;

  @ViewChild('paginatorOrderRes') paginator!: MatPaginator;
  @ViewChild("MatPaginatorCount") paginator1!: MatPaginator;

  constructor(
         private homeService:HomeService,
      ) {
        }

  ngOnInit(): void {
      console.log("dataSourceEntity1");
      this.homeService.countUsrAccDev().subscribe(countEachTable=>{
      this.dataSourceEntity1=new MatTableDataSource(countEachTable);
      console.log("dataSourceEntity1");
      console.log(countEachTable)
      this.dataSourceEntity1.paginator = this.paginator1;
    })

    this.homeService.countAccOfDevices().subscribe(orderRes=>{
      this.dataSourceEntity = new MatTableDataSource(orderRes);
      console.log(orderRes)
      this.dataSourceEntity.paginator = this.paginator;
    })

    this.homeService.countUsers().subscribe(data => {
      this.countUsers = data;
      console.log(this.countUsers)
    });
    this.homeService.countAccounts().subscribe(data => {
      this.countAccounts = data;
      console.log(this.countAccounts)
    });
    this.homeService.countDevices().subscribe(data => {
      this.countDevices = data;
      console.log(data)
    });

    if (this.countDevices != null && this.countAccounts != null && this.countUsers != null) {
      console.log("inside the condition if")

/*
        {entity: "Size of DataBase"},
        {entity: "Users"},
        {entity: "Accounts"},
        {entity: "Devices"},
        {entity: "Notifications"}
        */

    // this.dataSourceEntity = new MatTableDataSource<any>();


    }


    console.log(this.countUsers)
  }

  eventAction($event: any) {
    this.sideBarOen=!this.sideBarOen;
  }


}



