import { Component, OnInit, ViewChild} from '@angular/core';

import { Entry } from '../entry';
import { EntryService } from '../entry.service';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

import { TokenStorageService } from '../token-storage.service';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexDataLabels,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
};

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  entries: Entry[] = [];
  getEntries(): void{
    this.eService.getEntries()
    .subscribe(entries => {
      this.entries = entries;
      //this.chartOptions.series = entries.map(e => e.weight )        // scatter chart 
      //this.chartOptions.series = entries.map();

    });
  }

  goals: Goal[] = [];
  getGoals(): void{
    this.gService.getGoals()
    .subscribe(goals =>{
      this.goals = goals;
    })
  }


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    private eService: EntryService,
    private gService: GoalService,
    public tokenService: TokenStorageService,
    ) {
    this.chartOptions = {

      series: [
        {
          name: "Weight",
          data: [
            {x: new Date("11 Feb 2018 GMT"), y: 2},
            {x: new Date ("15 Feb 2018 GMT"), y: 10},
            {x: new Date("11 Feb 2019 GMT"), y: 15},
            {x: new Date("12 June 2018 GMT"), y: 20},
            
          ]
          // data: this.generateDayWiseTimeSeries(
          //   new Date("11 Feb 2017 GMT").getTime(),
          //   20,       // this is count
          //   {         // this is yrange
          //     min: 20,
          //     max: 60
          //   }
          // )  
        }/*,
        {
          name: "TEAM 2",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "TEAM 3",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            30,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "TEAM 4",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            10,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "TEAM 5",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            30,
            {
              min: 10,
              max: 60
            }
          )
        }*/
      ],
      chart: {
        height: 350,
        type: "scatter",
        zoom: {
          type: "xy"
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        max: 70
      }
    };
  }

  public generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}