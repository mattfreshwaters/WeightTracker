import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private entryURl = "http://localhost:8080/api/entryData/";

  httpOptions = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private client : HttpClient
    ) { }

  getEntries(): Observable<Entry[]> {
    this.messageService.add('WeightTracker: fetched entries');
    return this.client.get<Entry[]>("http://localhost:8080/api/entryData/");
  }

  getEntry(id: number): Observable<Entry>{
    this.messageService.add(`Entry Service: fetched goal id =${id}`);
    return this.client.get<Entry>(`http://localhost:8080/api/entryData/${id}`);
  }

  editEntry(entry: Entry): Observable<any> {
    return this.client.put<Entry>(this.entryURl, entry, this.httpOptions).pipe(
      tap(_ => this.log(`updated entry with id =${entry.entryId}`)),
      catchError(this.handleError<any>('updateEntry')),
    );
  }
  
  addEntry(entry: Entry): Observable<Entry>{
    return this.client.post<Entry>(this.entryURl, entry, this.httpOptions).pipe(
      tap( (newEntry: Entry)=> this.log(`added entry with id =${newEntry.entryId}`)),
      catchError(this.handleError<any>('deleteEntry')),
    );
  }

  deleteEntry(entry: Entry | number): Observable<Entry>{
    const id = typeof entry === 'number' ? entry : entry.entryId;
    const url = `http://localhost:8080/api/entryData/${id}/`;
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
