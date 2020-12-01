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
import { element } from 'protractor';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
};

declare global{
  interface Window{
    Apex: any;
  }
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
 
  @ViewChild("theChart") scatterChart: ApexChart;

  entries: Entry[] = [];
  getEntries(): any{
    this.eService.getEntries()
    .subscribe(entries => {
      // this is where we get the data
      this.entries = entries;
      this.chartOptions.series[0].data = entries.map( e => {return {
        x: new Date(e.date).getTime(),
        y: e.weight
      };});
    })
  }

  goalsArray = [];
  goals: Goal[] = [];
  getGoals(): void{
    this.gService.getGoals()
    .subscribe(goals =>{
      this.goals = goals;
      this.chartOptions.series[1].data = goals.map( g => { return {
        x: new Date(g.goalDate).getTime(),
        y: g.goalWeight
      };});
    })
  }


  setGraph(): void{
      
  }


  @ViewChild("chart") chart: ApexChart;
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
            data: []
            
          },
          {
            name: "Goal Weight",
            data: []
          }
        ],
        chart: {
          height: 350,
          type: "scatter",
          zoom: {
            type: "xy"
          }, 
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
          max: 350
        }
      };
     }

  ngOnInit(): void {
    
    //this.setGraph();
    this.getEntries();
    this.getGoals();

  }

}

