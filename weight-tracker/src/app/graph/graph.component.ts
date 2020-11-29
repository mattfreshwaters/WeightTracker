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

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  @ViewChild("theChart") scatterChart: ApexChart;

  graphWidth;
  ngOnInit(): void {
    this.getEntries();
    this.getGoals();
    this.graphWidth = '100%';

  }

  entries: Entry[] = [];
  getEntries(): void{
    this.eService.getEntries()
    .subscribe(entries => {
      this.entries = entries;
      this.chartOptions.series[0].data = entries.map( e => {return {
        x: new Date(e.date).getTime(),
        y: e.weight
      };});
      
    })
  }

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

  width;
  setWidth(): void{
    this.width = '100%';
    document.getElementById("chart").style.width = "100%";
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
        max: 200
      }
    };

    
  }

}

