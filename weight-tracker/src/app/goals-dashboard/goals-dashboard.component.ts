import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-goals-dashboard',
  templateUrl: './goals-dashboard.component.html',
  styleUrls: ['./goals-dashboard.component.css']
})
export class GoalsDashboardComponent implements OnInit {

  goals: Goal[] = [];

  constructor(
    private goalService: GoalService,
    private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.getGoals();
  }

  getGoals(): void{
    this.goalService.getGoals()
    .subscribe(goals=>this.goals = goals);
  }

  add(goalWeight: number, goalDate: Date): void{
    let userId = this.tokenService.getUser().id;
    if(!goalWeight || !goalDate){return ;}
    this.goalService.addGoal({goalWeight, goalDate, userId} as Goal)
    .subscribe(goal =>{
      this.goals.push(goal);
    })
  }

  /*
add(weight: number, date: Date): void{
    let userId = this.tokenService.getUser().id;
    if(!weight || !date) {return;}
    
    this.entryService.addEntry({weight, date, userId} as Entry)
    .subscribe(entry => {
      this.entries.push(entry);
    })
  }
  */

  delete(goal: Goal): void{
    this.goals = this.goals.filter(g => g !== goal);
    this.goalService.deleteGoal(goal).subscribe();
  }

}
