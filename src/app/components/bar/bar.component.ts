import { Component, OnInit } from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexTitleSubtitle} from "ng-apexcharts";


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  series!:ApexAxisChartSeries;
  chart: ApexChart = {
    type: 'bar',
    toolbar: {
      show: true
    }
  };
  plotOptions:ApexPlotOptions= {
    bar: {
      horizontal: true
    }
  }
  chartLabels = ["", ""];

  chartTitle: ApexTitleSubtitle = {
    text:'Size of Tables ',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };

  constructor() {

  }

  ngOnInit(): void {
   this.series= [
      {
        name: "basic",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }]
  }


}
