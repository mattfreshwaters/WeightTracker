import { Injectable } from '@angular/core';
import { Goal } from './goal';
import { GOALS } from './mock-goals';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private messageService: MessageService) { }

  getGoals(): Observable<Goal[]>{
    this.messageService.add('Goal Service: fetched all goals');
    return of(GOALS);
  }

  getGoal(id: number): Observable<Goal>{
    this.messageService.add(`Goal Service: fetched goal id=${id}`);
    return of(GOALS.find(goal => goal.goalId === id));                 // this line not working
  }


}
