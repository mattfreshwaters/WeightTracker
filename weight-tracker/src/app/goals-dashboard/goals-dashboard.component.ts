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
    this.goalService.getGoals().subscribe(goals=>this.goals = goals);
  }

}



/*
import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entries-dashboard',
  templateUrl: './entries-dashboard.component.html',
  styleUrls: ['./entries-dashboard.component.css']
})
export class EntriesDashboardComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(): void{
    this.entryService.getEntries()
    .subscribe(entries => this.entries = entries);
  }

}

*/