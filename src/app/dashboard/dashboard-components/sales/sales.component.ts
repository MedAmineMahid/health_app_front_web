import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexFill,
  ApexXAxis,
  ApexGrid
} from 'ng-apexcharts';

export interface activeusercardChartOptions {
  series: ApexAxisChartSeries;
  dataLabels: ApexDataLabels;
  chart: ApexChart;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent {
  @ViewChild("activeusercardchart") chart1: ChartComponent = Object.create(null);
  public activeusercardChartOptions !: Partial<activeusercardChartOptions> | any;

  constructor() {
    // consumed calories
    this.activeusercardChartOptions = {
      series: [
        {
          name: 'Breakfast',
          data: [200, 220, 180, 210, 250, 190, 230],
          color: "#fb9678",
        },
        {
          name: 'Lunch',
          data: [400, 420, 450, 440, 410, 480, 470],
          color: "#03c9d7",
        },
        {
          name: 'Dinner',
          data: [300, 320, 310, 330, 350, 340, 360],
          color: "#00a65a",
        },
        {
          name: 'Snacks',
          data: [100, 150, 130, 120, 140, 110, 160],
          color: "#f39c12",
        },
      ],
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: 'bar',
        height: 300,
      },
      legend: {
        show: true,
      },
      tooltip: {
        theme: "dark"
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 5,
        colors: ['none']
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 6,
        },
      },
    }
  }
}
