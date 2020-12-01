import { Injectable } from '@angular/core';
import { Goal } from './goal';
import { GOALS } from './mock-goals';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private goalURL = "http://localhost:8080/api/goalData/";

  httpOptions = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
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

  editGoal(goal: Goal): Observable<any> {
    return this.client.put<Goal>(this.goalURL, goal, this.httpOptions).pipe(
      tap(_ => this.log(`updated goal with id =${goal.goalId}`)),
      catchError(this.handleError<any>('updateGoal')),
    );
  }


  addGoal(goal: Goal): Observable<Goal>{
    return this.client.post<Goal>(this.goalURL, goal, this.httpOptions).pipe(
      tap( (newGoal: Goal)=> this.log(`added goal with id =${newGoal.goalId}`)),
      catchError(this.handleError<any>('deleteEntry')),
    );
  }

  deleteGoal(goal: Goal | number): Observable<Goal>{
    const id = typeof goal === 'number' ? goal : goal.goalId;
    const url = `http://localhost:8080/api/goalData/${id}/`;
    return this.client.delete(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted entry id=${id}`)),
      catchError(this.handleError<any>('updatEntry'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };

  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
