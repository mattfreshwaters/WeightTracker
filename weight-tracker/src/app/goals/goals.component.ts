import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goals: Goal[];
  
  constructor(
    private goalService: GoalService
    ) { }


  ngOnInit(): void {
    this.getGoals();
  }

  getGoals(): void{
    this.goalService.getGoals()
    .subscribe(goals=> this.goals =goals);
  }

}
