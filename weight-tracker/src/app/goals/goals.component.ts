import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GOALS } from '../mock-goals';
import { GoalService } from '../goal.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goals: Goal[];
  
  constructor(private goalService: GoalService, private messageService: MessageService) { }

  getGoals(): void{
    this.goalService.getGoals().subscribe(goals=> this.goals =goals);
  }

  ngOnInit(): void {
    this.getGoals();
  }

  selectedGoal:  Goal;
  onSelect(goal: Goal){
    this.selectedGoal = goal;
    this.messageService.add(`Goals Component: Selected goalid=${goal.goalId} for userid=${goal.userId}`);
  }

}
