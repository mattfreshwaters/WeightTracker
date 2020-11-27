import { Injectable } from '@angular/core';
import { Goal } from './goal';
import { GOALS } from './mock-goals';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(
    private messageService: MessageService,
    private client : HttpClient
    ) { }

  getGoals(): Observable<Goal[]>{
    this.messageService.add('Goal Service: fetched all goals');
    return this.client.get<Goal[]>("http://localhost:8080/api/goalData/");
  }

  getGoal(id: number): Observable<Goal>{
    this.messageService.add(`Goal Service: fetched goal id=${id}`);
    return this.client.get<Goal>(`http://localhost:8080/api/goalData/${id}`);
  }


}
