import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goals-dashboard',
  templateUrl: './goals-dashboard.component.html',
  styleUrls: ['./goals-dashboard.component.css']
})
export class GoalsDashboardComponent implements OnInit {

  goals: Goal[] = [];

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.getGoals();
  }

  getGoals(): void{
    this.goalService.getGoals()
    .subscribe(goals=>this.goals = goals);
  }

}
