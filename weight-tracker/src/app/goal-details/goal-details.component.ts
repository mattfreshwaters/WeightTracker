import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GoalService } from '../goal.service';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  goal: Goal;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: GoalService
  ) { }

  ngOnInit(): void {
    this.getGoal();
  }

  getGoal(): void{
    const goalId = +this.route.snapshot.paramMap.get('id');
    this.service.getGoal(goalId).subscribe(goal => this.goal = goal);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.service.editGoal(this.goal)
    .subscribe(goal => {
      this.goBack();
    });
  }
  
  /*
  save(): void{
    this.service.editEntry(this.entry)
    .subscribe(entry => {
      this.goBack();
    });
  }
  */

}
