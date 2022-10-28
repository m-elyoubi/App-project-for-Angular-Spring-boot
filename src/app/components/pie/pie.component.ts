import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home.service";
import {ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  chartSeries!: ApexNonAxisChartSeries;
  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };
  chartLabels = ["Park", "Market"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Percentage of Vehicles ',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.deviceParkAndMarket().subscribe(data => {
      console.log("data:")
      console.log(data)
      this.chartSeries=data;
    });


  }
}
