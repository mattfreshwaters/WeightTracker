import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EntryService {

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

}
